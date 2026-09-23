import type { ConfigSnapshot, SnapshotSection, WiringReport } from './types.js';
import type { SettingsNamespace } from '../types.js';
/**
 * Provider fields that decide WHERE a request goes and WHICH credential it
 * carries, rather than what the model can do. A snapshot carries capability
 * configuration across machines; these fields are deployment wiring and are
 * withheld unless the user explicitly opts in.
 *
 * MAINTENANCE RULE: any future field that names an endpoint, names a
 * credential, injects a raw request header, or points configuration at
 * executable local code MUST be added here, with a test. Fields that only
 * shape a request the current endpoint already receives (api, transport,
 * timeouts, compat, reasoningEfforts, models, modelOverrides) are deliberately
 * absent — they neither redirect traffic nor carry credentials.
 */
export declare const PROVIDER_WIRING_KEYS: readonly ["baseURL", "apiKeyEnv", "headers"];
/** The `opencodeSession.format` field that names an executable local module. */
export declare const PLUGIN_WIRING_SCRIPT_KEY = "script";
export declare const EMPTY_WIRING_REPORT: WiringReport;
/**
 * Exported because `planImport` merges one report per namespace. The report
 * types live in `types.ts` so this module depends on it one way only.
 */
export declare function mergeWiringReports(reports: readonly WiringReport[]): WiringReport;
/**
 * Compute one namespace's effective incoming section plus what was withheld.
 *
 * The rule is uniform: a wiring value the FILE supplies is always discarded and
 * this machine's value is always kept. Dropping the file's value alone is not
 * enough — `planImport` in `replace` mode treats a key the file omits as a
 * deletion, so this machine's value has to be written back or stripping the
 * wiring would silently delete the user's own endpoint.
 *
 * The report is narrower than the rule on purpose: it counts only wiring the
 * file ACTIVELY supplies that differs from this machine. An omission needs no
 * warning (nothing is being redirected) and would otherwise make every
 * self-exported snapshot look suspicious.
 *
 * `ns` is the id the *host* addresses this section by, so the plugin branch
 * also matches the 0.1.7 entry id; the script rule is the plugin section's own
 * rule, not a property of the legacy namespace name.
 */
export declare function adjustIncoming(ns: string, incoming: SnapshotSection, current: SnapshotSection, importWiring: boolean): {
    readonly value: SnapshotSection;
    readonly report: WiringReport;
};
/** What a snapshot would change about this machine's wiring, without applying it. */
export declare function wiringReport(snapshot: ConfigSnapshot, namespaces: readonly SettingsNamespace[]): WiringReport;
