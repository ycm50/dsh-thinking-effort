import type { OpenCodeEffortCatalogSnapshot, ReasoningEffortMap } from '../compat/opencode-effort.js';
import type { HostContext, SettingsPathOp } from './types.js';
type FetchLike = (input: string) => Promise<{
    readonly ok: boolean;
    readonly status: number;
    text(): Promise<string>;
}>;
export interface OpenCodeEffortHostOptions {
    /** Fetch seam; defaults to the runtime's global `fetch`. */
    readonly fetchImpl?: FetchLike;
    /** Clock seam, in milliseconds. */
    readonly now?: () => number;
}
/** The plugin's own section: the Loader entry id, or the registered namespace. */
export declare function pluginSectionId(ctx: HostContext): string;
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
export declare function entryEffortEnabled(ctx: HostContext): boolean | undefined;
/** Whether the stored snapshot is missing or older than the configured window. */
export declare function snapshotIsStale(snapshot: OpenCodeEffortCatalogSnapshot | undefined, nowMs: number, refreshHours: number): boolean;
/**
 * Apply the declared ladders to a `models` array.
 *
 * Rows are matched by `id`; a row whose id no declaration covers, or whose
 * ladder already matches, comes back exactly as it was. The whole array is
 * returned so the caller compares what changed by count rather than by index.
 */
export declare function alignModelRows(rows: readonly unknown[], route: string, snapshot: OpenCodeEffortCatalogSnapshot | undefined): {
    readonly rows: readonly unknown[];
    readonly aligned: readonly {
        readonly model: string;
        readonly levels: ReasoningEffortMap;
    }[];
    readonly skipped: readonly string[];
};
/** Apply the declared ladders to a `modelOverrides` dict. */
export declare function alignModelOverrides(overrides: Record<string, unknown>, route: string, snapshot: OpenCodeEffortCatalogSnapshot | undefined): {
    readonly overrides: Record<string, unknown>;
    readonly aligned: readonly {
        readonly model: string;
        readonly levels: ReasoningEffortMap;
    }[];
    readonly skipped: readonly string[];
};
/**
 * The path ops one alignment pass issues for one route.
 *
 * Both writable shapes are covered: the `models` array and the
 * `modelOverrides` dict. A route with neither, or with nothing to align,
 * yields no ops, which is what keeps a matching deployment write-free.
 */
export declare function alignmentOpsForRoute(route: string, profile: Record<string, unknown>, snapshot: OpenCodeEffortCatalogSnapshot | undefined): {
    readonly ops: readonly SettingsPathOp[];
    readonly aligned: number;
    readonly skipped: readonly string[];
};
/**
 * Align every watched route in the user's own `llm-pi-ai` layer.
 *
 * The user layer is the only layer a path write merges into, and it is also the
 * layer that can express "this model declares no levels yet": a value read from
 * the resolved section would restate schema defaults the user never wrote.
 */
export declare function alignmentPlan(userSection: unknown, settings: {
    readonly providers?: Readonly<Record<string, boolean>>;
} | undefined, snapshot: OpenCodeEffortCatalogSnapshot | undefined): {
    readonly ops: readonly SettingsPathOp[];
    readonly aligned: number;
    readonly skipped: readonly string[];
};
interface SectionRead {
    readonly effort: {
        readonly enabled?: boolean;
        readonly align?: boolean;
        readonly catalogUrl?: string;
        readonly refreshHours?: number;
        readonly providers?: Readonly<Record<string, boolean>>;
        readonly catalog?: OpenCodeEffortCatalogSnapshot;
    } | undefined;
    readonly catalog: OpenCodeEffortCatalogSnapshot | undefined;
}
/** Read this plugin's own `opencodeEffort` section out of the settings snapshot. */
export declare function readOpenCodeEffort(opts: unknown): SectionRead;
/**
 * Install the OpenCode thinking-strength alignment.
 *
 * Refreshes run off the injected timer, never off a request path, and the write
 * they perform lands in this plugin's own section — so a slow or failing
 * catalog cannot delay a model request or block a settings write.
 */
export declare function installOpenCodeEffort(ctx: HostContext, options?: OpenCodeEffortHostOptions): void;
export {};
