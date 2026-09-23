import type { ApplyOutcome, ApplySettings, ConfigSnapshot, ImportMode } from './types.js';
export interface ApplyRequest {
    readonly snapshot: ConfigSnapshot;
    readonly mode: ImportMode;
    readonly settings: ApplySettings;
    readonly autoBackup: boolean;
    /** Apply the snapshot's endpoint / credential / script wiring too. Defaults to false. */
    readonly importWiring?: boolean;
    /**
     * The id the running host addresses the plugin section by, when the caller
     * already resolved it. Absent, it is resolved from the fresh `describe()` the
     * apply takes below, so the production path cannot fall back to the legacy id
     * on an entry-config host. The auto backup is written to the resolved id and
     * the plugin half of the plan targets it.
     */
    readonly pluginNamespace?: string;
    /** Injected for tests; defaults to the real clock. */
    readonly now?: () => Date;
    readonly pluginVersion?: string;
}
/** The Remote classifies a stale revision as `settings/conflict`; older transports only carry the message. */
export declare function isConflictError(error: {
    readonly message: string;
    readonly [key: string]: unknown;
}): boolean;
/**
 * Apply a snapshot to the live configuration.
 *
 * The caller's snapshot is the *source*, so it is read once up front, and every
 * write is fenced with the revision that read reported — or, when an earlier
 * write of this same apply moved that namespace, with the revision that write
 * returned. That is what keeps a concurrent edit in another window from being
 * silently overwritten. A namespace that fails does not roll back its siblings:
 * a rollback is another write and can fail the same way, so the outcome names
 * exactly which half applied instead.
 */
export declare function applySnapshot(request: ApplyRequest): Promise<ApplyOutcome>;
