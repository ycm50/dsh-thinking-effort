import z from '@deepseek-ai/schemastery';
import type { OpenCodeSessionSettings } from '../compat/opencode-session.js';
/**
 * One stored configuration snapshot, as it appears in the settings document.
 * Every field is optional because a hand-written section may omit any of them
 * and the schema supplies the defaults on resolution.
 */
export interface PluginStoredSnapshot {
    readonly kind?: string;
    readonly version?: number;
    readonly createdAt?: string;
    readonly pluginVersion?: string;
    readonly sourceProfile?: string;
    readonly sections?: Readonly<Record<string, unknown>>;
}
/** The namespace's resolved shape: an OpenCode session section plus the snapshot fields. */
export interface PluginSettings extends OpenCodeSessionSettings {
    /**
     * The subagent thinking effort the plugin applies when a request carries no
     * explicit `reasoningEffort`. Empty means "unset, follow the provider
     * default", which is why its default is an empty string rather than a level:
     * the stored value is a wire spelling, not necessarily a level key.
     */
    readonly subagentEffort?: string;
    readonly profiles?: Readonly<Record<string, PluginStoredSnapshot>>;
    readonly autoBackup?: PluginStoredSnapshot;
}
/**
 * The `dsh-thinking-effort` namespace schema. Keeping it in one module makes
 * the stored shape knowable without reading the settings UI.
 *
 * The explicit `z<PluginSettings>` annotation is load-bearing, not decoration:
 * without it the inferred type names a transitive dependency by its installed
 * path, so `tsc` refuses to emit a portable declaration (`TS2742`) under a
 * pnpm-style layout.
 */
export declare const PLUGIN_SETTINGS_SCHEMA: z<PluginSettings>;
/**
 * The Loader entry's own config schema, from which DSH 0.1.7 derives this
 * plugin's settings form; a plugin that exports no `Config` gets no form at
 * all. It sits beside the namespace schema rather than replacing it, because
 * `register`/`installSection` still serve the releases that predate entry
 * configs.
 *
 * The root is volatile because the configuration snapshot writes `profiles`
 * and `autoBackup` as whole sections, and entry-config rejects a write to a
 * path that is not volatile.
 */
export declare const Config: z<PluginSettings, PluginSettings, 'volatile-defined'>;
