import { HostContext, SettingsPathOp } from './types.js';
export declare const SETTINGS_NAMESPACE = "llm-pi-ai";
export declare const DEFAULT_LEVELS: {
    readonly off: null;
    readonly high: "high";
    readonly max: "max";
};
/** The minimal path edits one fill performs, and how many models they cover. */
export interface ProviderDefaultsResult {
    readonly ops: readonly SettingsPathOp[];
    readonly filled: number;
}
/**
 * Work a fill found but could not perform. The resolved section is where a
 * model supplied by a lower layer is visible, and the user's own layer is the
 * only place its `reasoningEfforts` may be written: a path write merges into
 * that layer, so restating a resolved entry would pin every schema default the
 * entry took on. Both counters are accumulated in place by the scan.
 */
interface SkippedDefaults {
    /** Resolved models or overrides that still lack `reasoningEfforts`. */
    missing: number;
    /** Of those, the ones no user-layer entry covers, so no write can reach them. */
    unmatched: number;
}
/**
 * The path edits that give every model a default thinking-level set.
 *
 * `providers` is the resolved section, which decides *where* a level is
 * missing; `user` is the user's own layer, which supplies *what* is written.
 * No payload may quote `providers`, or the write pins the schema defaults the
 * entry took on (`input`, `compat`, `headers`, `thinkingBudgets`,
 * `defaultContextWindow`, …) into the user's document, and a later release
 * changing one of those defaults would never reach the user.
 *
 * A model array is addressed as a whole because the older settings service
 * walks paths through plain objects only: a numeric index would replace the
 * array with an object.
 *
 * That is also why a resolved entry the user's layer does not carry is reported
 * in `skipped` rather than materialized. The reason is not that the service
 * refuses the write: 0.1.7 accepts a `set` at `models[<userArrayLength>]` (its
 * bounds check allows an index equal to the length when the op is a `set` and
 * the path ends there), and a minimal `{ id, reasoningEfforts }` entry pins no
 * resolved field. The reason is the container. An array has no per-element
 * layer: `mergeLayers` replaces it wholesale (`if (!isPlainObject(under) ||
 * !isPlainObject(over)) return over`), so materializing a base-only entry in
 * the user's layer replaces the lower layer's copy of that entry. Its `name`,
 * `contextWindow`, `input`, `compat` and the rest are then lost from the
 * resolved section unless this fill restates them — the inflation this function
 * exists to avoid.
 *
 * A model override is a dict keyed by model id, so its partial entry does merge
 * over whatever a lower layer already describes. That asymmetry is the shape of
 * the two containers, not a preference: a lower-layer override is filled and
 * left minimal.
 */
export declare function fillProviderDefaults(providers: unknown, user: unknown): ProviderDefaultsResult & {
    readonly skipped: SkippedDefaults;
};
export declare function installSettingsWatcher(ctx: HostContext): void;
export {};
