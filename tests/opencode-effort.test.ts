import { describe, expect, it, vi } from 'vitest'
import {
  catalogFromModelsDev,
  catalogOptionsFor,
  effortsForReasoningOptions,
  effortValuesOf,
  isWatchedProvider,
  levelNamesOf,
  OPENCODE_EFFORT_CATALOG_URL,
  parseReasoningOptions,
  planOpenCodeEffort,
  watchedProviders,
} from '../src/compat/opencode-effort.ts'
import {
  alignModelOverrides,
  alignModelRows,
  alignmentOpsForRoute,
  alignmentPlan,
  installOpenCodeEffort,
  pluginSectionId,
  readOpenCodeEffort,
  snapshotIsStale,
} from '../src/host/opencode-effort.ts'

// The declaration OpenCode Go publishes for deepseek-v4.1-flash: an effort
// ladder with no bottom rung, which is why the derived map has no `off`.
const DEEPSEEK_OPTIONS = [{ type: 'effort', values: ['low', 'high', 'max'] }]

describe('OpenCode reasoning options', () => {
  it('parses the three declared shapes and drops unusable entries', () => {
    expect(parseReasoningOptions([{ type: 'effort', values: ['low', 'high'] }]))
      .toEqual([{ type: 'effort', values: ['low', 'high'] }])
    expect(parseReasoningOptions([{ type: 'toggle' }])).toEqual([{ type: 'toggle' }])
    expect(parseReasoningOptions([{ type: 'budget_tokens', min: 1024, max: 262144 }]))
      .toEqual([{ type: 'budget_tokens', min: 1024, max: 262144 }])
    expect(parseReasoningOptions([{ type: 'budget_tokens' }])).toEqual([{ type: 'budget_tokens' }])
    // Unknown types and unusable fields are dropped, not refused: models.dev
    // grows new option kinds and a new kind must not hide a known ladder.
    expect(parseReasoningOptions([
      { type: 'unknown-kind' },
      { type: 'effort', values: ['low', 7, ''] },
      'not-an-object',
    ])).toEqual([{ type: 'effort', values: ['low'] }])
    expect(parseReasoningOptions('nope')).toBeUndefined()
    expect(parseReasoningOptions([])).toBeUndefined()
  })

  it('maps declared effort values onto DSH levels', () => {
    expect(effortsForReasoningOptions(DEEPSEEK_OPTIONS)).toEqual({ low: 'low', high: 'high', max: 'max' })
    // `none` is a bottom rung the model actually sends, so it becomes `off`
    // carrying that literal.
    expect(effortsForReasoningOptions([{ type: 'effort', values: ['none', 'high'] }]))
      .toEqual({ off: 'none', high: 'high' })
    // A wider ladder keeps only the level names DSH knows.
    expect(effortsForReasoningOptions([{ type: 'effort', values: ['minimal', 'low', 'medium', 'high', 'xhigh', 'max', 'weird'] }]))
      .toEqual({ minimal: 'minimal', low: 'low', medium: 'medium', high: 'high', xhigh: 'xhigh', max: 'max' })
    // Toggle-only and budget-only declarations state no ladder at all.
    expect(effortsForReasoningOptions([{ type: 'toggle' }])).toBeUndefined()
    expect(effortsForReasoningOptions([{ type: 'budget_tokens', min: 1024 }])).toBeUndefined()
    expect(effortValuesOf([{ type: 'toggle' }])).toBeUndefined()
  })

  it('compacts a models.dev document to the watched routes only', () => {
    const document = {
      'opencode-go': {
        models: {
          'deepseek-v4.1-flash': { reasoning_options: DEEPSEEK_OPTIONS, cost: { input: 1 } },
          'kimi-k3': { reasoning_options: [{ type: 'effort', values: ['max'] }] },
          'mimo-v2.5': { reasoning_options: [] },
          'no-reasoning': {},
        },
      },
      anthropic: { models: { 'claude-sonnet-4': { reasoning_options: [{ type: 'toggle' }] } } },
    }
    expect(catalogFromModelsDev(document, {})).toEqual({
      'opencode-go': {
        'deepseek-v4.1-flash': DEEPSEEK_OPTIONS,
        'kimi-k3': [{ type: 'effort', values: ['max'] }],
      },
    })
    // A watched route switched off is dropped, and an unwatched route stays
    // dropped even when it is switched on explicitly.
    expect(catalogFromModelsDev(document, { 'opencode-go': false, anthropic: true }))
      .toEqual({ anthropic: { 'claude-sonnet-4': [{ type: 'toggle' }] } })
    // The cache envelope models.dev is served through is unwrapped.
    expect(catalogFromModelsDev({ body: document, etag: 'x' }, {})).toEqual(catalogFromModelsDev(document, {}))
    expect(catalogFromModelsDev(undefined, {})).toEqual({})
  })

  it('resolves the default and configured watched routes', () => {
    expect(isWatchedProvider(undefined, 'opencode-go')).toBe(true)
    expect(isWatchedProvider(undefined, 'opencode')).toBe(true)
    expect(isWatchedProvider(undefined, 'deepseek')).toBe(false)
    expect(isWatchedProvider({ 'opencode-go': false }, 'opencode-go')).toBe(false)
    expect(isWatchedProvider({ custom: true }, 'custom')).toBe(true)
    expect(watchedProviders({ 'opencode-go': false })).toEqual(['opencode'])
    expect(watchedProviders(undefined)).toContain('opencode-go')
  })

  it('plans the three outcomes and ignores a model with no ladder', () => {
    expect(planOpenCodeEffort(undefined, undefined)).toEqual({ kind: 'undeclared' })
    expect(planOpenCodeEffort([{ type: 'toggle' }], undefined)).toEqual({ kind: 'undeclared' })
    expect(planOpenCodeEffort(DEEPSEEK_OPTIONS, undefined))
      .toEqual({ kind: 'fill', levels: { low: 'low', high: 'high', max: 'max' } })
    expect(planOpenCodeEffort(DEEPSEEK_OPTIONS, { low: 'low', high: 'high', max: 'max' }))
      .toEqual({ kind: 'match', levels: { low: 'low', high: 'high', max: 'max' } })
    expect(planOpenCodeEffort(DEEPSEEK_OPTIONS, { off: null, high: 'high', max: 'max' }))
      .toEqual({ kind: 'replace', levels: { low: 'low', high: 'high', max: 'max' }, current: { off: null, high: 'high', max: 'max' } })
  })

  it('reads a catalog entry and renders names', () => {
    const catalog = { providers: { 'opencode-go': { 'deepseek-v4.1-flash': DEEPSEEK_OPTIONS } } }
    expect(catalogOptionsFor(catalog, 'opencode-go', 'deepseek-v4.1-flash')).toEqual(DEEPSEEK_OPTIONS)
    expect(catalogOptionsFor(catalog, 'opencode-go', 'other')).toBeUndefined()
    expect(catalogOptionsFor(undefined, 'opencode-go', 'deepseek-v4.1-flash')).toBeUndefined()
    expect(levelNamesOf({ off: null, low: 'low', high: 'high' })).toBe('off / low / high')
    expect(levelNamesOf(undefined)).toBe('')
    expect(OPENCODE_EFFORT_CATALOG_URL).toBe('https://models.dev/api.json')
  })

  it('treats a snapshot as stale on a missing or unparsable timestamp', () => {
    const now = Date.parse('2026-10-08T12:00:00.000Z')
    expect(snapshotIsStale(undefined, now, 24)).toBe(true)
    expect(snapshotIsStale({ savedAt: 'not-a-date' }, now, 24)).toBe(true)
    expect(snapshotIsStale({ savedAt: '2026-10-08T11:00:00.000Z' }, now, 24)).toBe(false)
    expect(snapshotIsStale({ savedAt: '2026-10-06T11:00:00.000Z' }, now, 24)).toBe(true)
  })
})

describe('OpenCode alignment pass', () => {
  const catalog = {
    providers: {
      'opencode-go': {
        'deepseek-v4.1-flash': DEEPSEEK_OPTIONS,
        'kimi-k3': [{ type: 'effort', values: ['max'] }],
        'longcat-2.0': [{ type: 'toggle' }],
      },
    },
  }

  it('aligns model rows in place and reports what it skipped', () => {
    const rows = [
      { id: 'deepseek-v4.1-flash' },
      { id: 'kimi-k3', reasoningEfforts: { max: 'max' } },
      { id: 'longcat-2.0' },
      { id: 'manual-model', reasoningEfforts: { high: 'high' } },
      'junk',
    ]
    const result = alignModelRows(rows, 'opencode-go', catalog)
    expect(result.rows).toEqual([
      { id: 'deepseek-v4.1-flash', reasoningEfforts: { low: 'low', high: 'high', max: 'max' } },
      { id: 'kimi-k3', reasoningEfforts: { max: 'max' } },
      { id: 'longcat-2.0' },
      { id: 'manual-model', reasoningEfforts: { high: 'high' } },
      'junk',
    ])
    expect(result.aligned).toEqual([{ model: 'deepseek-v4.1-flash', levels: { low: 'low', high: 'high', max: 'max' } }])
    expect(result.skipped).toEqual(['longcat-2.0'])
  })

  it('aligns overrides and keeps unrelated keys', () => {
    const result = alignModelOverrides({
      'deepseek-v4.1-flash': { reasoningEfforts: { off: null, high: 'high' }, contextWindow: 1000 },
      'kimi-k3': { reasoningEfforts: { max: 'max' } },
    }, 'opencode-go', catalog)
    expect(result.overrides).toEqual({
      'deepseek-v4.1-flash': { reasoningEfforts: { low: 'low', high: 'high', max: 'max' }, contextWindow: 1000 },
      'kimi-k3': { reasoningEfforts: { max: 'max' } },
    })
    expect(result.aligned).toEqual([{ model: 'deepseek-v4.1-flash', levels: { low: 'low', high: 'high', max: 'max' } }])
  })

  it('emits one op per changed shape and nothing when aligned', () => {
    const profile = {
      models: [{ id: 'deepseek-v4.1-flash' }],
      modelOverrides: { 'kimi-k3': { reasoningEfforts: { max: 'wrong' } } },
    }
    const result = alignmentOpsForRoute('opencode-go', profile, catalog)
    expect(result.aligned).toBe(2)
    expect(result.ops.map((op) => op.path)).toEqual([
      ['providers', 'opencode-go', 'models'],
      ['providers', 'opencode-go', 'modelOverrides'],
    ])
    expect(result.ops[1].value).toEqual({ 'kimi-k3': { reasoningEfforts: { max: 'max' } } })
    expect(alignmentOpsForRoute('opencode-go', profile, catalog).aligned).toBe(2)

    const settled = { models: [{ id: 'deepseek-v4.1-flash', reasoningEfforts: { low: 'low', high: 'high', max: 'max' } }] }
    expect(alignmentOpsForRoute('opencode-go', settled, catalog)).toMatchObject({ ops: [], aligned: 0 })
  })

  it('walks only the watched routes of the user layer', () => {
    const user = {
      providers: {
        'opencode-go': { models: [{ id: 'deepseek-v4.1-flash' }] },
        deepseek: { models: [{ id: 'deepseek-chat' }] },
      },
    }
    const result = alignmentPlan(user, undefined, catalog)
    expect(result.aligned).toBe(1)
    expect(result.ops).toHaveLength(1)
    expect(result.ops[0].path).toEqual(['providers', 'opencode-go', 'models'])
    // An unwatched route is not written even when the catalog knows its models.
    expect(alignmentPlan({ providers: { deepseek: { models: [{ id: 'deepseek-v4.1-flash' }] } } }, undefined, catalog).ops).toEqual([])
    expect(alignmentPlan(undefined, undefined, catalog).ops).toEqual([])
  })

  it('reads the plugin section and resolves its id the way the loader does', () => {
    const section = { opencodeEffort: { enabled: true, catalog: { savedAt: 'x', providers: {} } } }
    expect(readOpenCodeEffort(section).effort?.enabled).toBe(true)
    expect(readOpenCodeEffort(section).catalog?.savedAt).toBe('x')
    expect(readOpenCodeEffort(undefined).effort).toBeUndefined()
    // No fiber: the registered namespace is the fallback id.
    expect(pluginSectionId({} as never)).toBe('dsh-thinking-effort')
    expect(pluginSectionId({ fiber: { entry: { options: { id: 'thinking-effort' } } } } as never)).toBe('thinking-effort')
  })
})

describe('OpenCode alignment host install', () => {
  type Timer = () => void

  function harness(options: { document?: unknown; fail?: boolean; pluginSection: unknown; routesSection?: unknown }) {
    const timers: Timer[] = []
    const writes: Array<{ namespace: string; ops: readonly { op: string; path: readonly string[]; value?: unknown }[] }> = []
    const listeners: Array<{ name: string; callback: (...args: unknown[]) => unknown }> = []
    const disposers: Array<() => void> = []
    const fetchCalls: string[] = []
    const settings = {
      get: (namespace: string) => namespace === 'llm-pi-ai' ? options.routesSection : options.pluginSection,
      update: () => undefined,
      mutate: (namespace: string, ops: readonly { op: string; path: readonly string[]; value?: unknown }[]) => { writes.push({ namespace, ops }) },
      describe: () => [],
    }
    const ctx = {
      settings,
      // The 0.1.7 entry-config model: the entry carries its own configured
      // layer, which is what the module reads at apply without a service call.
      fiber: { entry: { options: { id: 'thinking-effort', config: options.pluginSection } } },
      timeout(callback: Timer) {
        timers.push(callback)
        return () => undefined
      },
      on(name: string, callback: (...args: unknown[]) => unknown) {
        listeners.push({ name, callback })
        return () => undefined
      },
      effect(callback: () => void | (() => void)) {
        const disposer = callback()
        if (typeof disposer === 'function') disposers.push(disposer)
      },
    }
    const fetchImpl = async (input: string) => {
      fetchCalls.push(input)
      if (options.fail) return { ok: false, status: 500, text: async () => '' }
      return { ok: true, status: 200, text: async () => JSON.stringify(options.document ?? {}) }
    }
    return { ctx, timers, writes, listeners, fetchCalls, fetchImpl }
  }

  const document = {
    'opencode-go': {
      models: {
        'deepseek-v4.1-flash': { reasoning_options: DEEPSEEK_OPTIONS },
        'kimi-k3': { reasoning_options: [{ type: 'effort', values: ['max'] }] },
      },
    },
  }

  const pluginSection = () => ({
    opencodeEffort: {
      enabled: true,
      align: true,
      providers: {},
      catalog: { savedAt: '', source: '', providers: {} },
    },
  })

  it('stores the compact snapshot and aligns the watched route', async () => {
    const h = harness({
      document,
      pluginSection: pluginSection(),
      routesSection: { providers: { 'opencode-go': { models: [{ id: 'deepseek-v4.1-flash' }] } } },
    })
    installOpenCodeEffort(h.ctx as never, { fetchImpl: h.fetchImpl, now: () => Date.parse('2026-10-08T12:00:00.000Z') })
    expect(h.timers).toHaveLength(1)
    h.timers[0]()
    await new Promise((resolve) => setTimeout(resolve, 0))
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(h.fetchCalls).toEqual(['https://models.dev/api.json'])
    const snapshotWrite = h.writes.find((write) => write.ops[0].path.join('.') === 'opencodeEffort.catalog')
    expect(snapshotWrite?.namespace).toBe('thinking-effort')
    expect(snapshotWrite?.ops[0].value).toEqual({
      savedAt: '2026-10-08T12:00:00.000Z',
      source: 'https://models.dev/api.json',
      providers: {
        'opencode-go': {
          'deepseek-v4.1-flash': DEEPSEEK_OPTIONS,
          'kimi-k3': [{ type: 'effort', values: ['max'] }],
        },
      },
    })
    const alignWrite = h.writes.find((write) => write.namespace === 'llm-pi-ai')
    expect(alignWrite?.ops).toHaveLength(1)
    expect(alignWrite?.ops[0].value).toEqual([
      { id: 'deepseek-v4.1-flash', reasoningEfforts: { low: 'low', high: 'high', max: 'max' } },
    ])
  })

  it('stays quiet when the section is disabled or the fetch fails', async () => {
    const warn = vi.spyOn(console, 'log').mockImplementation(() => undefined)
    try {
      const disabled = harness({ document, pluginSection: { opencodeEffort: { enabled: false } } })
      installOpenCodeEffort(disabled.ctx as never, { fetchImpl: disabled.fetchImpl })
      // A disabled section registers no timer at all: even a settings change
      // only re-reads and stays quiet.
      expect(disabled.timers).toEqual([])
      for (const listener of disabled.listeners) listener.callback('thinking-effort')
      await new Promise((resolve) => setTimeout(resolve, 0))
      expect(disabled.timers).toEqual([])
      expect(disabled.fetchCalls).toEqual([])
      expect(disabled.writes).toEqual([])

      const failing = harness({ fail: true, pluginSection: pluginSection() })
      installOpenCodeEffort(failing.ctx as never, { fetchImpl: failing.fetchImpl })
      failing.timers[0]()
      await new Promise((resolve) => setTimeout(resolve, 0))
      await new Promise((resolve) => setTimeout(resolve, 0))
      expect(failing.writes).toEqual([])
      expect(warn).toHaveBeenCalled()
    } finally {
      warn.mockRestore()
    }
  })

  it('aligns from a fresh snapshot without refetching', async () => {
    const h = harness({
      document,
      pluginSection: {
        opencodeEffort: {
          enabled: true,
          catalog: { savedAt: '2026-10-08T11:00:00.000Z', source: 'x', providers: { 'opencode-go': { 'deepseek-v4.1-flash': DEEPSEEK_OPTIONS } } },
        },
      },
      routesSection: { providers: { 'opencode-go': { models: [{ id: 'deepseek-v4.1-flash' }] } } },
    })
    installOpenCodeEffort(h.ctx as never, { fetchImpl: h.fetchImpl, now: () => Date.parse('2026-10-08T12:00:00.000Z') })
    h.timers[0]()
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(h.fetchCalls).toEqual([])
    expect(h.writes.map((write) => write.namespace)).toEqual(['llm-pi-ai'])
  })
})
