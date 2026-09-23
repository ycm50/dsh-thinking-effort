import type { SettingsNamespace, SettingsOp } from '../types.js';
export declare const SNAPSHOT_KIND = "dsh-thinking-effort/config-snapshot";
export declare const SNAPSHOT_VERSION = 1;
export declare const SNAPSHOT_MAX_BYTES: number;
export declare const MAX_PROFILES = 20;
export declare const MAX_PROFILE_NAME = 40;
export declare const LLM_NAMESPACE = "llm-pi-ai";
/**
 * The plugin section's legacy id: what rc.7 … 0.1.6 register, and the snapshot
 * key this build falls back to when the host publishes no entry section. Under
 * the 0.1.7 entry-config model the section is the Loader entry
 * (`PLUGIN_ENTRY_ID`); the snapshot pipeline resolves that live id from the
 * `describe()` result it already holds — `pluginSectionId` — and only falls
 * back to this constant when neither id is published.
 */
export declare const PLUGIN_NAMESPACE = "dsh-thinking-effort";
/**
 * Namespaces a snapshot carries, in write order. `dsh-thinking-effort` is
 * small and structurally simple while `llm-pi-ai` carries provider topology
 * the host schema can reject, so the riskier write lands last and a failure
 * there leaves the user's model configuration untouched.
 */
export declare const CONFIG_NAMESPACES: readonly ["dsh-thinking-effort", "llm-pi-ai"];
/** Path segments a settings path op may never address. */
export declare const RESERVED_PATH_KEYS: readonly ["__proto__", "constructor", "prototype"];
/** Plugin-owned keys that must never ride inside their own snapshot. */
export declare const PLUGIN_SNAPSHOT_EXCLUDED_KEYS: readonly ["profiles", "autoBackup"];
export interface SnapshotSection {
    readonly [key: string]: unknown;
}
export interface ConfigSnapshot {
    readonly kind: string;
    readonly version: number;
    readonly createdAt: string;
    readonly pluginVersion: string;
    readonly sourceProfile: string;
    readonly sections: Readonly<Record<string, SnapshotSection>>;
}
export interface SnapshotMeta {
    readonly createdAt: string;
    readonly pluginVersion: string;
    readonly sourceProfile: string;
}
export type ParseFailureCode = 'tooLarge' | 'invalidJson' | 'notObject' | 'kindMismatch' | 'unsupportedVersion' | 'missingSections' | 'invalidSection' | 'reservedKey';
export interface ParseFailure {
    readonly code: ParseFailureCode;
    readonly params?: Readonly<Record<string, unknown>>;
}
export interface ParsedSnapshot {
    readonly snapshot: ConfigSnapshot;
    readonly ignoredNamespaces: readonly string[];
}
export type ParseResult<T> = {
    readonly ok: true;
    readonly value: T;
} | {
    readonly ok: false;
    readonly error: ParseFailure;
};
export type ImportMode = 'merge' | 'replace';
export interface PlanSummary {
    readonly added: number;
    readonly overwritten: number;
    readonly removed: number;
}
export interface NamespacePlan {
    readonly ns: string;
    readonly ops: readonly SettingsOp[];
}
export interface WiringEndpoint {
    readonly provider: string;
    readonly baseURL: string;
}
/** What a snapshot would change about this machine's deployment wiring. */
export interface WiringReport {
    /**
     * Wiring entries the file ACTIVELY provides and that differ from this machine.
     * A difference is counted whether or not its value can be displayed, so
     * `count` is the field import risk is decided from, never `script`.
     */
    readonly count: number;
    /** Routes whose wiring would change. Values are never included. */
    readonly providers: readonly string[];
    /** Only ever `baseURL` values — never a credential name or a header value. */
    readonly endpoints: readonly WiringEndpoint[];
    /**
     * The script path the file would load, when it has a non-empty string one to
     * show. Display only, and absent when the value cannot be shown: the file may
     * provide an empty string or a non-string, which `count` still counts.
     */
    readonly script?: string;
}
export interface ImportPlan {
    readonly mode: ImportMode;
    readonly summary: PlanSummary;
    readonly namespaces: readonly NamespacePlan[];
    /** Wiring the file actively provides that differs from this machine. */
    readonly wiring: WiringReport;
    /** True when every namespace plan is empty; callers must not write. */
    readonly empty: boolean;
}
export type ProfileNameError = 'required' | 'tooLong' | 'reserved' | 'taken' | 'invalid';
export type ProfileNameResult = {
    readonly ok: true;
    readonly value: string;
} | {
    readonly ok: false;
    readonly error: ProfileNameError;
};
export interface ApplySettings {
    readonly describe: () => Promise<{
        ok: true;
        value: {
            readonly namespaces: readonly SettingsNamespace[];
            readonly writable?: boolean;
        };
    } | {
        ok: false;
        error: {
            readonly message: string;
            readonly [key: string]: unknown;
        };
    }>;
    readonly mutate: (ns: string, ops: readonly SettingsOp[], expectedRevision: number) => Promise<{
        ok: true;
        value: SettingsNamespace;
    } | {
        ok: false;
        error: {
            readonly message: string;
            readonly [key: string]: unknown;
        };
    }>;
}
export interface NamespaceOutcome {
    readonly ns: string;
    readonly ok: boolean;
    readonly error?: string;
    readonly conflict?: boolean;
    readonly revision?: number;
}
export interface ApplyOutcome {
    readonly ok: boolean;
    readonly skipped: boolean;
    readonly outcomes: readonly NamespaceOutcome[];
    readonly autoBackupError?: string;
    readonly restartRequired: readonly string[];
}
