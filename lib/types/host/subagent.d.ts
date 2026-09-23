import { HostContext, HostSettings } from './types.js';
export declare const STANDARD_LEVELS: readonly ["off", "minimal", "low", "medium", "high", "xhigh", "max"];
export type StandardLevel = (typeof STANDARD_LEVELS)[number];
type Logger = (...args: unknown[]) => void;
/**
 * Read the configured subagent effort from the section that stores it.
 *
 * The plugin's own section comes first, because that is where the 0.1.7
 * entry-config model lets the plugin own the field. A miss there is not an
 * error: the releases up to 0.1.6 wrote the value into the `llm-pi-ai` section,
 * so that location stays readable and existing settings keep working. A value
 * present in both places resolves to the plugin's own section.
 *
 * `ownSectionId` is the id the plugin's section carries on the running host:
 * the Loader entry id under `entry-config`, the registered namespace under
 * `namespace`. Callers holding a live context resolve it with
 * `settingsEntryId`; the compile-time default answers for the rest.
 *
 * The logger sits in the signature because callers pass it positionally beside
 * that id; this read has nothing to log, since a missing or unreadable section
 * is `undefined` rather than an error.
 */
export declare function readSubagentEffort(settings: HostSettings | undefined, _logger?: Logger, ownSectionId?: string): string | undefined;
export declare function resolveSubagentEffort(settings: HostSettings | undefined, config: unknown, logger?: Logger, ownSectionId?: string): StandardLevel | string | undefined;
export declare function handleAgentRequest(ctx: Pick<HostContext, 'settings' | 'fiber'>, payload: unknown, next: () => Promise<unknown>): Promise<unknown>;
export {};
