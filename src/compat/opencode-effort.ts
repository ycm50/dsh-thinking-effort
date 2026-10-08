/**
 * OpenCode's own thinking-strength declarations, shared by the Host and the
 * Client.
 *
 * OpenCode publishes, per model, the thinking controls a model accepts
 * (`reasoning_options`: an effort list, a toggle, or a token budget). The
 * plugin treats that declaration as the authority for which DSH levels a
 * watched route's model may offer, so a level OpenCode never declared is never
 * written into `llm-pi-ai` and never shown as available.
 *
 * The module is pure (no `node:` import, no DOM) because the Client bundle
 * imports it too: parsing, mapping, and the compact catalog snapshot all live
 * here so both sides cannot drift.
 */

/**
 * The provider routes this plugin watches by default. Both are OpenCode's own
 * catalog provider ids: `opencode` is OpenCode Zen, `opencode-go` is OpenCode
 * Go. A deployment that names its route differently lists that route in its own
 * settings.
 */
export const OPENCODE_EFFORT_PROVIDERS = ['opencode', 'opencode-go'] as const

/**
 * models.dev publishes the whole catalog (every provider, every model) as one
 * document, which is also where OpenCode's own model directory is generated
 * from.
 */
export const OPENCODE_EFFORT_CATALOG_URL = 'https://models.dev/api.json'

/**
 * The DSH thinking levels an OpenCode effort list may name, in ascending
 * order. `off` and `none` are handled separately because they are the
 * spellings of "no thinking", not rungs on the ladder.
 */
export const OPENCODE_EFFORT_LEVELS = ['minimal', 'low', 'medium', 'high', 'xhigh', 'max'] as const

/** The wire value DSH sends for one level, or `null` for "send nothing". */
export type ReasoningEffortWire = string | null

/**
 * One model's DSH level map, in the exact shape `llm-pi-ai` stores under
 * `reasoningEfforts`: level key to wire value. A declared `off` with `null`
 * means "the off rung exists and sends nothing"; a missing `off` means the
 * model cannot be turned off.
 */
export type ReasoningEffortMap = Readonly<Record<string, ReasoningEffortWire>>

/**
 * One reasoning control as OpenCode declares it.
 *
 * The fields are optional and nullable because the settings schema stores the
 * shapes flattened — `values` is absent for a toggle, `min`/`max` are absent
 * unless declared — and a schemastery round-trip renders every absent field as
 * optional. `type` stays a plain string rather than a literal union for the
 * same reason: the schema cannot preserve a literal union, and a future option
 * kind must not make an existing snapshot unreadable.
 */
export interface OpenCodeReasoningOption {
  readonly type?: string | null
  readonly values?: string[] | null
  readonly min?: number | null
  readonly max?: number | null
}

/** One model's declared controls, in declaration order. */
export type OpenCodeReasoningOptions = OpenCodeReasoningOption[]

/** The compact per-model declarations the plugin stores under its own section. */
export interface OpenCodeEffortCatalogSnapshot {
  /** ISO timestamp of the fetch that produced this snapshot. */
  readonly savedAt?: string
  /** The URL the snapshot was read from. */
  readonly source?: string
  /**
   * Watched route to model id to declared controls. Mutable, because the
   * settings schema stores a plain dict and a readonly type does not round-trip
   * through that inference.
   */
  readonly providers?: Record<string, Record<string, OpenCodeReasoningOptions>>
}

/** The plugin's own `opencodeEffort` section. */
export interface OpenCodeEffortSettings {
  readonly opencodeEffort?: {
    /** Master switch: fetch the catalog and align watched routes. */
    readonly enabled?: boolean
    /** Whether the Host writes the declared levels into `llm-pi-ai`. */
    readonly align?: boolean
    /** Catalog document URL; defaults to {@link OPENCODE_EFFORT_CATALOG_URL}. */
    readonly catalogUrl?: string
    /** How long a fetched snapshot stays usable. */
    readonly refreshHours?: number
    /** Watched routes; a route mapped to `false` is left alone. */
    readonly providers?: Readonly<Record<string, boolean>>
    /** The snapshot the last successful refresh stored. */
    readonly catalog?: OpenCodeEffortCatalogSnapshot
  }
}

function record(value: unknown): Record<string, unknown> | undefined {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined
}

function finiteInteger(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value) ? value : undefined
}

/**
 * Parse one `reasoning_options` array.
 *
 * Unknown option types are dropped rather than refused: models.dev adds option
 * kinds over time, and a control this plugin does not understand must not turn
 * a model's known effort list into a failure. An option whose own fields are
 * unusable (a non-array effort list, a non-string effort value) is dropped for
 * the same reason.
 */
export function parseReasoningOptions(value: unknown): OpenCodeReasoningOptions | undefined {
  if (!Array.isArray(value)) return undefined
  const options: OpenCodeReasoningOption[] = []
  for (const entry of value) {
    const option = record(entry)
    if (option === undefined) continue
    const type = option.type
    if (type === 'effort') {
      const values = Array.isArray(option.values)
        ? option.values.filter((candidate): candidate is string => typeof candidate === 'string' && candidate.length > 0)
        : []
      if (values.length > 0) options.push({ type: 'effort', values })
      continue
    }
    if (type === 'toggle') {
      options.push({ type: 'toggle' })
      continue
    }
    if (type === 'budget_tokens') {
      const min = finiteInteger(option.min)
      const max = finiteInteger(option.max)
      options.push({
        type: 'budget_tokens',
        ...min === undefined ? {} : { min },
        ...max === undefined ? {} : { max },
      })
    }
  }
  return options.length > 0 ? options : undefined
}

/** The effort option of a declaration, when it has one. */
export function effortValuesOf(options: OpenCodeReasoningOptions): readonly string[] | undefined {
  for (const option of options) {
    if (option.type !== 'effort') continue
    const values = option.values
    return Array.isArray(values) && values.length > 0 ? values : undefined
  }
  return undefined
}

/**
 * Translate OpenCode's declared effort values into the DSH level map
 * `llm-pi-ai` stores.
 *
 * - `none` becomes DSH's `off` rung carrying the literal `none` value, which
 *   is what the model sends when thinking is off.
 * - `off` (should OpenCode ever spell it that way) becomes the off rung that
 *   sends nothing.
 * - Every other value is a DSH level name already, so it maps to itself.
 *
 * Values outside both sets are ignored instead of guessed at, and a declaration
 * with no usable effort value at all yields `undefined`: a toggle-only or
 * budget-only model states no effort ladder, and this plugin must not invent
 * one.
 *
 * `off` is only offered when OpenCode declares `none` or `off`. A model whose
 * declared ladder has no bottom rung is one OpenCode does not offer "no
 * thinking" for, so the plugin leaves that rung out rather than promising a
 * control the catalog does not declare.
 */
export function effortsForReasoningOptions(options: OpenCodeReasoningOptions): ReasoningEffortMap | undefined {
  const values = effortValuesOf(options)
  if (values === undefined) return undefined
  const map: Record<string, ReasoningEffortWire> = {}
  for (const value of values) {
    if (value === 'none') map.off = 'none'
    else if (value === 'off') map.off = null
    else if ((OPENCODE_EFFORT_LEVELS as readonly string[]).includes(value)) map[value] = value
  }
  return Object.keys(map).length > 0 ? map : undefined
}

/** Whether a route participates in the alignment, given the configured routes. */
export function isWatchedProvider(providers: Readonly<Record<string, boolean>> | undefined, route: string): boolean {
  const configured = providers?.[route]
  if (configured !== undefined) return configured
  return (OPENCODE_EFFORT_PROVIDERS as readonly string[]).includes(route)
}

/** The routes an alignment pass reads from the catalog. */
export function watchedProviders(providers: Readonly<Record<string, boolean>> | undefined): readonly string[] {
  const routes = new Set<string>(OPENCODE_EFFORT_PROVIDERS)
  for (const route of Object.keys(providers ?? {})) routes.add(route)
  return [...routes].filter((route) => isWatchedProvider(providers, route))
}

/**
 * Compact a models.dev document into the per-model declarations this plugin
 * keeps.
 *
 * Only watched routes and only models that actually declare a reasoning
 * control are retained: the document describes every provider's pricing,
 * limits, and modalities as well, and none of that belongs in this plugin's
 * settings section.
 */
export function catalogFromModelsDev(
  document: unknown,
  providers: Readonly<Record<string, boolean>> | undefined,
): OpenCodeEffortCatalogSnapshot['providers'] {
  const body = record(document) ?? {}
  // models.dev wraps the catalog in a cache envelope; accept both shapes.
  const root = record(body.body) ?? body
  const out: Record<string, Record<string, OpenCodeReasoningOptions>> = {}
  for (const route of watchedProviders(providers)) {
    const provider = record(root[route])
    const models = record(provider?.models)
    if (models === undefined) continue
    const entries: Record<string, OpenCodeReasoningOptions> = {}
    for (const [modelId, entry] of Object.entries(models)) {
      const options = parseReasoningOptions(record(entry)?.reasoning_options)
      if (options !== undefined) entries[modelId] = options
    }
    if (Object.keys(entries).length > 0) out[route] = entries
  }
  return out
}

/** One model's declared controls from a stored snapshot. */
export function catalogOptionsFor(
  snapshot: OpenCodeEffortCatalogSnapshot | undefined,
  route: string,
  model: string,
): OpenCodeReasoningOptions | undefined {
  const declared = snapshot?.providers?.[route]?.[model]
  return declared === undefined || declared.length === 0 ? undefined : declared
}

/** What an alignment pass should do with one model. */
export type OpenCodeEffortPlan =
  /** The model declares no usable effort ladder; leave its levels alone. */
  | { readonly kind: 'undeclared' }
  /** The model already carries exactly the declared levels. */
  | { readonly kind: 'match'; readonly levels: ReasoningEffortMap }
  /** The model carries nothing yet; write the declared levels. */
  | { readonly kind: 'fill'; readonly levels: ReasoningEffortMap }
  /** The model carries a different level map; the declared one wins when aligning. */
  | { readonly kind: 'replace'; readonly levels: ReasoningEffortMap; readonly current: ReasoningEffortMap }

function levelMapOf(value: unknown): ReasoningEffortMap | undefined {
  const map = record(value)
  if (map === undefined) return undefined
  const out: Record<string, ReasoningEffortWire> = {}
  for (const [level, wire] of Object.entries(map)) {
    if (wire !== null && typeof wire !== 'string') continue
    out[level] = wire
  }
  return out
}

/**
 * Decide what one model's stored levels should become.
 *
 * `current` is read from the settings section the same way `llm-pi-ai` reads
 * it: `undefined` when the field is absent, an object when it was declared.
 */
export function planOpenCodeEffort(
  options: OpenCodeReasoningOptions | undefined,
  current: unknown,
): OpenCodeEffortPlan {
  const levels = options === undefined ? undefined : effortsForReasoningOptions(options)
  if (levels === undefined) return { kind: 'undeclared' }
  const existing = levelMapOf(current)
  if (existing === undefined) return { kind: 'fill', levels }
  if (sameLevelMap(existing, levels)) return { kind: 'match', levels }
  return { kind: 'replace', levels, current: existing }
}

/** Structural equality over two level maps. */
export function sameLevelMap(left: ReasoningEffortMap, right: ReasoningEffortMap): boolean {
  const leftKeys = Object.keys(left)
  const rightKeys = Object.keys(right)
  if (leftKeys.length !== rightKeys.length) return false
  return leftKeys.every((key) => Object.prototype.hasOwnProperty.call(right, key) && left[key] === right[key])
}

/** The declared level names in ladder order, without wire values. */
export function levelNamesOf(levels: ReasoningEffortMap | undefined): string {
  if (levels === undefined) return ''
  const order = ['off', ...OPENCODE_EFFORT_LEVELS]
  return order.filter((level) => Object.prototype.hasOwnProperty.call(levels, level)).join(' / ')
}

/** Short human-readable rendering of a level map, for logs and the settings card. */
export function describeLevels(levels: ReasoningEffortMap | undefined): string {
  if (levels === undefined) return ''
  const order = ['off', ...OPENCODE_EFFORT_LEVELS]
  return order
    .filter((level) => Object.prototype.hasOwnProperty.call(levels, level))
    .map((level) => (levels[level] === null ? level : `${level}=${levels[level]}`))
    .join(', ')
}
