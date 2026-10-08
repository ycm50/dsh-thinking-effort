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
export declare const OPENCODE_EFFORT_PROVIDERS: readonly ["opencode", "opencode-go"];
/**
 * models.dev publishes the whole catalog (every provider, every model) as one
 * document, which is also where OpenCode's own model directory is generated
 * from.
 */
export declare const OPENCODE_EFFORT_CATALOG_URL = "https://models.dev/api.json";
/**
 * The DSH thinking levels an OpenCode effort list may name, in ascending
 * order. `off` and `none` are handled separately because they are the
 * spellings of "no thinking", not rungs on the ladder.
 */
export declare const OPENCODE_EFFORT_LEVELS: readonly ["minimal", "low", "medium", "high", "xhigh", "max"];
/** The wire value DSH sends for one level, or `null` for "send nothing". */
export type ReasoningEffortWire = string | null;
/**
 * One model's DSH level map, in the exact shape `llm-pi-ai` stores under
 * `reasoningEfforts`: level key to wire value. A declared `off` with `null`
 * means "the off rung exists and sends nothing"; a missing `off` means the
 * model cannot be turned off.
 */
export type ReasoningEffortMap = Readonly<Record<string, ReasoningEffortWire>>;
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
    readonly type?: string | null;
    readonly values?: string[] | null;
    readonly min?: number | null;
    readonly max?: number | null;
}
/** One model's declared controls, in declaration order. */
export type OpenCodeReasoningOptions = OpenCodeReasoningOption[];
/** The compact per-model declarations the plugin stores under its own section. */
export interface OpenCodeEffortCatalogSnapshot {
    /** ISO timestamp of the fetch that produced this snapshot. */
    readonly savedAt?: string;
    /** The URL the snapshot was read from. */
    readonly source?: string;
    /**
     * Watched route to model id to declared controls. Mutable, because the
     * settings schema stores a plain dict and a readonly type does not round-trip
     * through that inference.
     */
    readonly providers?: Record<string, Record<string, OpenCodeReasoningOptions>>;
}
/** The plugin's own `opencodeEffort` section. */
export interface OpenCodeEffortSettings {
    readonly opencodeEffort?: {
        /** Master switch: fetch the catalog and align watched routes. */
        readonly enabled?: boolean;
        /** Whether the Host writes the declared levels into `llm-pi-ai`. */
        readonly align?: boolean;
        /** Catalog document URL; defaults to {@link OPENCODE_EFFORT_CATALOG_URL}. */
        readonly catalogUrl?: string;
        /** How long a fetched snapshot stays usable. */
        readonly refreshHours?: number;
        /** Watched routes; a route mapped to `false` is left alone. */
        readonly providers?: Readonly<Record<string, boolean>>;
        /** The snapshot the last successful refresh stored. */
        readonly catalog?: OpenCodeEffortCatalogSnapshot;
    };
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
export declare function parseReasoningOptions(value: unknown): OpenCodeReasoningOptions | undefined;
/** The effort option of a declaration, when it has one. */
export declare function effortValuesOf(options: OpenCodeReasoningOptions): readonly string[] | undefined;
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
export declare function effortsForReasoningOptions(options: OpenCodeReasoningOptions): ReasoningEffortMap | undefined;
/** Whether a route participates in the alignment, given the configured routes. */
export declare function isWatchedProvider(providers: Readonly<Record<string, boolean>> | undefined, route: string): boolean;
/** The routes an alignment pass reads from the catalog. */
export declare function watchedProviders(providers: Readonly<Record<string, boolean>> | undefined): readonly string[];
/**
 * Compact a models.dev document into the per-model declarations this plugin
 * keeps.
 *
 * Only watched routes and only models that actually declare a reasoning
 * control are retained: the document describes every provider's pricing,
 * limits, and modalities as well, and none of that belongs in this plugin's
 * settings section.
 */
export declare function catalogFromModelsDev(document: unknown, providers: Readonly<Record<string, boolean>> | undefined): OpenCodeEffortCatalogSnapshot['providers'];
/** One model's declared controls from a stored snapshot. */
export declare function catalogOptionsFor(snapshot: OpenCodeEffortCatalogSnapshot | undefined, route: string, model: string): OpenCodeReasoningOptions | undefined;
/** What an alignment pass should do with one model. */
export type OpenCodeEffortPlan = 
/** The model declares no usable effort ladder; leave its levels alone. */
{
    readonly kind: 'undeclared';
}
/** The model already carries exactly the declared levels. */
 | {
    readonly kind: 'match';
    readonly levels: ReasoningEffortMap;
}
/** The model carries nothing yet; write the declared levels. */
 | {
    readonly kind: 'fill';
    readonly levels: ReasoningEffortMap;
}
/** The model carries a different level map; the declared one wins when aligning. */
 | {
    readonly kind: 'replace';
    readonly levels: ReasoningEffortMap;
    readonly current: ReasoningEffortMap;
};
/**
 * Decide what one model's stored levels should become.
 *
 * `current` is read from the settings section the same way `llm-pi-ai` reads
 * it: `undefined` when the field is absent, an object when it was declared.
 */
export declare function planOpenCodeEffort(options: OpenCodeReasoningOptions | undefined, current: unknown): OpenCodeEffortPlan;
/** Structural equality over two level maps. */
export declare function sameLevelMap(left: ReasoningEffortMap, right: ReasoningEffortMap): boolean;
/** The declared level names in ladder order, without wire values. */
export declare function levelNamesOf(levels: ReasoningEffortMap | undefined): string;
/** Short human-readable rendering of a level map, for logs and the settings card. */
export declare function describeLevels(levels: ReasoningEffortMap | undefined): string;
