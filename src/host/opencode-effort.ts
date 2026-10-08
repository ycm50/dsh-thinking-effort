/**
 * OpenCode thinking-strength alignment.
 *
 * OpenCode publishes one declaration per model — the thinking controls that
 * model actually accepts — and the plugin mirrors it onto the `llm-pi-ai` models
 * a deployment lists on a watched route. Three rules keep the mirror honest:
 *
 * 1. Only models the user already listed are touched (a `models` row or an
 *    existing `modelOverrides` entry). The plugin never invents route entries,
 *    so a catalog whose model set differs from the installed one cannot grow
 *    the settings document on its own.
 * 2. Only `reasoningEfforts` is written, and only in place of the declared
 *    ladder. A model whose stored ladder already matches is left byte-for-byte
 *    alone, which keeps the write — and the settings change it raises — bounded:
 *    a settled document produces no further write.
 * 3. A model OpenCode declares no effort ladder for (a toggle-only or
 *    budget-only model) is reported and skipped. This plugin must not guess wire
 *    values OpenCode never published.
 *
 * Writes run inside an execution context created while the plugin is applied,
 * for the reason the provider-defaults fill documents: a change event is raised
 * from inside the host's own write transaction, and its `AsyncLocalStorage`
 * context travels into anything the listener defers, where a nested write is
 * refused.
 */
import { AsyncResource } from 'node:async_hooks'
import {
  catalogFromModelsDev,
  catalogOptionsFor,
  isWatchedProvider,
  OPENCODE_EFFORT_CATALOG_URL,
  planOpenCodeEffort,
  watchedProviders,
} from '../compat/opencode-effort.js'
import type { OpenCodeEffortCatalogSnapshot, ReasoningEffortMap } from '../compat/opencode-effort.js'
import { OPENCODE_SESSION_NAMESPACE } from '../compat/opencode-session.js'
import { readSettingsSection, settingsChangeEvents, settingsEntryId } from '../compat/settings-model.js'
import { settingsModelForRuntime } from '../compat/version-map.js'
import type { HostContext, SettingsPathOp } from './types.js'

const LOG_PREFIX = '[@hytime/dsh-thinking-effort]'
/** The route section the aligned levels land in. */
const ROUTES_NAMESPACE = 'llm-pi-ai'
/** How often the timer re-checks whether the stored snapshot has aged out. */
const RECHECK_MS = 30 * 60 * 1000

type FetchLike = (input: string) => Promise<{
  readonly ok: boolean
  readonly status: number
  text(): Promise<string>
}>

export interface OpenCodeEffortHostOptions {
  /** Fetch seam; defaults to the runtime's global `fetch`. */
  readonly fetchImpl?: FetchLike
  /** Clock seam, in milliseconds. */
  readonly now?: () => number
}

function record(value: unknown): Record<string, unknown> | undefined {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined
}

function nonEmptyString(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined
}

function positiveNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : fallback
}

function log(...args: unknown[]): void {
  console.log(LOG_PREFIX, ...args)
}

/** The plugin's own section: the Loader entry id, or the registered namespace. */
export function pluginSectionId(ctx: HostContext): string {
  return settingsEntryId(ctx, OPENCODE_SESSION_NAMESPACE)
}

/**
 * The entry's own configured layer, when the host exposes it.
 *
 * Under the 0.1.7 entry-config model a Loader entry carries the raw options it
 * was configured with, and the loader's config-update path keeps
 * `entry.options.config` raw — the same fact the provider-defaults fill relies
 * on. Reading the master switch from here costs no settings-service call, so a
 * deployment that never enables the section never even reads it at startup.
 *
 * `undefined` means the host does not expose an entry config (the registered
 * namespace model, or a harness without one), and the caller then waits for a
 * settings change instead of querying the service.
 */
export function entryEffortEnabled(ctx: HostContext): boolean | undefined {
  const options = record(record(record(ctx.fiber)?.entry)?.options)
  const effort = record(record(options?.config)?.opencodeEffort)
  return typeof effort?.enabled === 'boolean' ? effort.enabled : undefined
}

/** Whether the stored snapshot is missing or older than the configured window. */
export function snapshotIsStale(
  snapshot: OpenCodeEffortCatalogSnapshot | undefined,
  nowMs: number,
  refreshHours: number,
): boolean {
  const savedAt = nonEmptyString(snapshot?.savedAt)
  if (savedAt === undefined) return true
  const savedMs = Date.parse(savedAt)
  if (!Number.isFinite(savedMs)) return true
  return nowMs - savedMs >= refreshHours * 60 * 60 * 1000
}

/**
 * Apply the declared ladders to a `models` array.
 *
 * Rows are matched by `id`; a row whose id no declaration covers, or whose
 * ladder already matches, comes back exactly as it was. The whole array is
 * returned so the caller compares what changed by count rather than by index.
 */
export function alignModelRows(
  rows: readonly unknown[],
  route: string,
  snapshot: OpenCodeEffortCatalogSnapshot | undefined,
): {
  readonly rows: readonly unknown[]
  readonly aligned: readonly { readonly model: string; readonly levels: ReasoningEffortMap }[]
  readonly skipped: readonly string[]
} {
  const aligned: { model: string; levels: ReasoningEffortMap }[] = []
  const skipped: string[] = []
  const next = rows.map((value) => {
    const row = record(value)
    const id = nonEmptyString(row?.id)
    if (row === undefined || id === undefined) return value
    const options = catalogOptionsFor(snapshot, route, id)
    const plan = planOpenCodeEffort(options, row.reasoningEfforts)
    if (plan.kind === 'fill' || plan.kind === 'replace') {
      aligned.push({ model: id, levels: plan.levels })
      return { ...row, reasoningEfforts: { ...plan.levels } }
    }
    // Only a model the catalog knows but declares no ladder for is worth
    // reporting: a model outside the catalog is simply not OpenCode's to
    // describe, and saying so for every hand-written row would bury the signal.
    if (plan.kind === 'undeclared' && options !== undefined) skipped.push(id)
    return value
  })
  return { rows: next, aligned, skipped }
}

/** Apply the declared ladders to a `modelOverrides` dict. */
export function alignModelOverrides(
  overrides: Record<string, unknown>,
  route: string,
  snapshot: OpenCodeEffortCatalogSnapshot | undefined,
): {
  readonly overrides: Record<string, unknown>
  readonly aligned: readonly { readonly model: string; readonly levels: ReasoningEffortMap }[]
  readonly skipped: readonly string[]
} {
  const aligned: { model: string; levels: ReasoningEffortMap }[] = []
  const skipped: string[] = []
  const next: Record<string, unknown> = { ...overrides }
  for (const [model, value] of Object.entries(overrides)) {
    const options = catalogOptionsFor(snapshot, route, model)
    const plan = planOpenCodeEffort(options, record(value)?.reasoningEfforts)
    if (plan.kind === 'fill' || plan.kind === 'replace') {
      aligned.push({ model, levels: plan.levels })
      next[model] = { ...record(value), reasoningEfforts: { ...plan.levels } }
    } else if (plan.kind === 'undeclared' && options !== undefined) {
      skipped.push(model)
    }
  }
  return { overrides: next, aligned, skipped }
}

/**
 * The path ops one alignment pass issues for one route.
 *
 * Both writable shapes are covered: the `models` array and the
 * `modelOverrides` dict. A route with neither, or with nothing to align,
 * yields no ops, which is what keeps a matching deployment write-free.
 */
export function alignmentOpsForRoute(
  route: string,
  profile: Record<string, unknown>,
  snapshot: OpenCodeEffortCatalogSnapshot | undefined,
): { readonly ops: readonly SettingsPathOp[]; readonly aligned: number; readonly skipped: readonly string[] } {
  const ops: SettingsPathOp[] = []
  const skipped: string[] = []
  let aligned = 0

  const rows = profile.models
  if (Array.isArray(rows)) {
    const result = alignModelRows(rows, route, snapshot)
    aligned += result.aligned.length
    skipped.push(...result.skipped)
    if (result.aligned.length > 0) {
      ops.push({ op: 'set', path: ['providers', route, 'models'], value: result.rows })
    }
  }

  const overlays = record(profile.modelOverrides)
  if (overlays !== undefined) {
    const result = alignModelOverrides(overlays, route, snapshot)
    aligned += result.aligned.length
    skipped.push(...result.skipped)
    if (result.aligned.length > 0) {
      ops.push({ op: 'set', path: ['providers', route, 'modelOverrides'], value: result.overrides })
    }
  }

  return { ops, aligned, skipped }
}

/**
 * Align every watched route in the user's own `llm-pi-ai` layer.
 *
 * The user layer is the only layer a path write merges into, and it is also the
 * layer that can express "this model declares no levels yet": a value read from
 * the resolved section would restate schema defaults the user never wrote.
 */
export function alignmentPlan(
  userSection: unknown,
  settings: { readonly providers?: Readonly<Record<string, boolean>> } | undefined,
  snapshot: OpenCodeEffortCatalogSnapshot | undefined,
): { readonly ops: readonly SettingsPathOp[]; readonly aligned: number; readonly skipped: readonly string[] } {
  const ops: SettingsPathOp[] = []
  const skipped: string[] = []
  let aligned = 0
  const providers = record(record(userSection)?.providers)
  if (providers === undefined) return { ops, aligned, skipped }

  const watched = watchedProviders(settings?.providers)
  for (const route of watched) {
    if (!isWatchedProvider(settings?.providers, route)) continue
    const profile = record(providers[route])
    if (profile === undefined) continue
    const result = alignmentOpsForRoute(route, profile, snapshot)
    ops.push(...result.ops)
    aligned += result.aligned
    skipped.push(...result.skipped)
  }
  return { ops, aligned, skipped }
}

interface SectionRead {
  readonly effort: {
    readonly enabled?: boolean
    readonly align?: boolean
    readonly catalogUrl?: string
    readonly refreshHours?: number
    readonly providers?: Readonly<Record<string, boolean>>
    readonly catalog?: OpenCodeEffortCatalogSnapshot
  } | undefined
  readonly catalog: OpenCodeEffortCatalogSnapshot | undefined
}

/** Read this plugin's own `opencodeEffort` section out of the settings snapshot. */
export function readOpenCodeEffort(opts: unknown): SectionRead {
  const effort = record(record(opts)?.opencodeEffort)
  const catalog = record(effort?.catalog)
  return {
    effort: effort === undefined ? undefined : effort as SectionRead['effort'],
    catalog: catalog === undefined ? undefined : catalog as OpenCodeEffortCatalogSnapshot,
  }
}

/**
 * Install the OpenCode thinking-strength alignment.
 *
 * Refreshes run off the injected timer, never off a request path, and the write
 * they perform lands in this plugin's own section — so a slow or failing
 * catalog cannot delay a model request or block a settings write.
 */
export function installOpenCodeEffort(ctx: HostContext, options: OpenCodeEffortHostOptions = {}): void {
  const settings = ctx.settings
  const sectionId = pluginSectionId(ctx)
  const now = options.now ?? (() => Date.now())
  const fetchImpl = options.fetchImpl ?? (globalThis.fetch as unknown as FetchLike | undefined)
  const writeScope = new AsyncResource('dsh-thinking-effort:opencode-effort')
  let alive = true
  let refreshing = false

  /**
   * Read this plugin's own section. The enable state is cached because a change
   * event for another section must be able to answer "is this on?" without
   * asking the settings service: on a deployment that never enables the
   * section, those events then cost nothing at all.
   */
  let enabledCache = false
  const read = (): SectionRead => {
    const result = readOpenCodeEffort(readSettingsSection(settings, sectionId))
    enabledCache = result.effort?.enabled === true
    return result
  }

  const writeOps = (namespace: string, ops: readonly SettingsPathOp[]): void => {
    const mutate = settings?.mutate
    if (typeof mutate !== 'function') {
      log('OpenCode 思考强度：当前 DSH 版本的设置服务不支持路径写入，已跳过')
      return
    }
    try {
      mutate.call(settings, namespace, ops)
    } catch (error) {
      log('OpenCode 思考强度：写入失败', error instanceof Error ? error.message : String(error))
    }
  }

  /**
   * Align the watched routes against one catalog snapshot.
   */
  const align = (snapshot: OpenCodeEffortCatalogSnapshot | undefined): void => {
    const { effort } = read()
    if (effort?.enabled !== true || effort.align === false) return
    const userSection = readSettingsSection(settings, ROUTES_NAMESPACE)
    const result = alignmentPlan(userSection, effort, snapshot)
    if (result.skipped.length > 0) {
      const shown = result.skipped.slice(0, 8).join(', ')
      log(`OpenCode 思考强度：${result.skipped.length} 个模型 OpenCode 未声明 effort 档位，保持原样（${shown}${result.skipped.length > 8 ? ' …' : ''}）`)
    }
    if (result.ops.length === 0) {
      if (result.aligned === 0 && result.skipped.length === 0) log('OpenCode 思考强度：没有需要对齐的模型')
      return
    }
    writeOps(ROUTES_NAMESPACE, result.ops)
    log(`OpenCode 思考强度：已按 OpenCode 目录对齐 ${result.aligned} 个模型的档位`)
  }

  /** Started the first time an enabled section is seen; see the effect below. */
  let startLoop: () => void = () => {}

  /** Fetch a fresh catalog when the stored one has aged out, then align. */
  const refresh = (): void => {
    if (!alive || refreshing) return
    const { effort, catalog } = read()
    if (effort?.enabled !== true) return
    // An enabled section keeps one periodic check alive so the stored snapshot
    // can age out and be refetched without a settings write.
    startLoop()
    if (!snapshotIsStale(catalog, now(), positiveNumber(effort.refreshHours, 24))) {
      align(catalog)
      return
    }
    if (fetchImpl === undefined) {
      log('OpenCode 思考强度：运行时没有 fetch，无法刷新目录')
      return
    }
    const url = nonEmptyString(effort.catalogUrl) ?? OPENCODE_EFFORT_CATALOG_URL
    refreshing = true
    void writeScope.runInAsyncScope(async () => {
      try {
        const response = await fetchImpl(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const document: unknown = JSON.parse(await response.text())
        const providers = catalogFromModelsDev(document, effort.providers)
        const count = Object.values(providers ?? {}).reduce((total, models) => total + Object.keys(models).length, 0)
        if (count === 0) throw new Error('目录里没有所监视路由的思考档位声明')
        const snapshot: OpenCodeEffortCatalogSnapshot = {
          savedAt: new Date(now()).toISOString(),
          source: url,
          providers,
        }
        writeOps(sectionId, [{ op: 'set', path: ['opencodeEffort', 'catalog'], value: snapshot }])
        log(`OpenCode 思考强度：目录已刷新（${count} 个模型声明）`)
        if (alive) align(snapshot)
      } catch (error) {
        if (alive) log('OpenCode 思考强度：目录刷新失败', error instanceof Error ? error.message : String(error))
      } finally {
        refreshing = false
      }
    })
  }

  ctx.effect(() => {
    const timerDisposers: Array<() => void> = []
    const listenerDisposers: Array<() => void> = []
    let loopStarted = false

    const runRefresh = (): void => {
      if (!alive) return
      try {
        refresh()
      } catch (error) {
        log('OpenCode 思考强度：刷新异常', error instanceof Error ? error.message : String(error))
      }
    }

    /** One deferred check, shared by the first pass and every settings change. */
    const scheduleOnce = (delay: number): void => {
      if (!alive) return
      const disposer = ctx.timeout(() => { runRefresh() }, delay)
      if (typeof disposer === 'function') timerDisposers.push(() => { disposer() })
    }

    /**
     * The periodic re-check. The timer service takes one-shot delays only, so
     * each pass schedules the next one.
     */
    const step = (): void => {
      if (!alive) return
      runRefresh()
      if (!alive) return
      const disposer = ctx.timeout(step, RECHECK_MS)
      if (typeof disposer === 'function') timerDisposers.push(() => { disposer() })
    }
    startLoop = () => {
      if (loopStarted || !alive) return
      loopStarted = true
      const disposer = ctx.timeout(step, 0)
      if (typeof disposer === 'function') timerDisposers.push(() => { disposer() })
    }

    // An enabled deployment refreshes as soon as the plugin is applied, read
    // from the entry config rather than from the settings service: a deployment
    // that never turns this on then registers no timer, no fetch, and no read.
    // A host that exposes no entry config (the registered-namespace model)
    // starts on the first settings change to this section instead.
    const configured = entryEffortEnabled(ctx)
    if (configured !== undefined) enabledCache = configured
    if (configured === true) startLoop()

    // A settings change can enable the section or add a model to a watched
    // route. The event is raised inside the host's own write transaction, so the
    // write it may trigger runs from the scope created at apply time.
    const model = settingsModelForRuntime({ settings })
    if (model !== undefined) {
      for (const event of settingsChangeEvents(model)) {
        const disposer = ctx.on(event, (...args: unknown[]) => {
          if (!alive) return
          const namespace = args[0]
          if (typeof namespace === 'string' && namespace !== sectionId && namespace !== ROUTES_NAMESPACE) return
          // A change to this plugin's own section re-reads the switch; a change
          // to the routes section is only worth answering when the switch is
          // already known to be on (a model was added to a watched route).
          if (namespace === sectionId) {
            if (read().effort?.enabled !== true) return
          } else if (!enabledCache) {
            return
          }
          scheduleOnce(0)
        }, { global: true })
        if (typeof disposer === 'function') listenerDisposers.push(() => { disposer() })
      }
    }

    return () => {
      alive = false
      for (const dispose of timerDisposers.splice(0)) dispose()
      for (const dispose of listenerDisposers.splice(0)) dispose()
    }
  }, 'dsh-thinking-effort: OpenCode 思考强度')
}
