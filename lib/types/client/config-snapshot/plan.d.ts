import type { ConfigSnapshot, ImportMode, ImportPlan } from './types.js';
import type { SettingsNamespace } from '../types.js';
export { deepEqualJson } from './snapshot.js';
export interface PlanOptions {
    /** Apply the file's endpoint / credential / script wiring too. Defaults to false. */
    readonly importWiring?: boolean;
    /**
     * The id the running host addresses the plugin section by, when the caller
     * already resolved it. Absent, it is resolved from `namespaces` — the same
     * `describe()` result the diff runs against — so a caller cannot silently
     * plan against the legacy id on an entry-config host.
     */
    readonly pluginNamespace?: string;
}
/**
 * Compute the path ops that turn `current` into `snapshot`.
 *
 * Both modes merge at exactly one level: the first level of a dict-valued
 * entry is compared per key and each key is replaced wholesale, while
 * everything below it is written as one value. Whole-provider replacement is
 * deliberate — a field-level merge could never restore a field the snapshot
 * deliberately omits, which is what rollback needs.
 *
 * `merge` keeps top-level entries the snapshot omits; `replace` unsets them.
 * Deletions are emitted before writes so the op list reads the same way it is
 * summarized, and the summary counts only entries that actually differ — an
 * import whose file already matches reports zero across the board.
 *
 * The plugin namespace's own library keys are never planned, in either mode and
 * on either side: `isSnapshotLibraryKey` drops them from the key set entirely,
 * so no import can replace the profile library or the rollback copy, and a
 * `replace` cannot unset them either. The summary counts ops, and no op exists
 * for a key that never enters the loop.
 *
 * Provider wiring is withheld before the diff: `adjustIncoming` drops the
 * endpoint and credential fields the file supplies and writes this machine's
 * values back, so a snapshot cannot redirect traffic by default and `replace`
 * cannot delete the user's own endpoint either. The withholding happens here,
 * inside the planner, so the preview and the write share one rule —
 * `applySnapshot` re-runs this same function against a fresh read.
 *
 * A file exported before 0.1.7 also carries `subagentEffort` inside
 * `llm-pi-ai`, which the entry-config model does not declare there and refuses
 * wholesale. That key is migrated into the plugin's own section before the diff
 * (see `LEGACY_LLM_SECTION_KEYS`), so the providers beside it still import and
 * the user's choice survives the model change.
 */
export declare function planImport(snapshot: ConfigSnapshot, namespaces: readonly SettingsNamespace[], mode: ImportMode, options?: PlanOptions): ImportPlan;
