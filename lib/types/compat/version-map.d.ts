import { GATEWAY_COMPAT_FIELDS } from './gateway/fields.js';
import type { SettingsModel } from './settings-model.js';
export type TakeoverTransport = 'unsupported' | 'optional';
export type SettingsApi = 'connection.api.settings' | 'remote.settings';
export type GatewayCompatEditableField = keyof typeof GATEWAY_COMPAT_FIELDS;
export interface DshVersionCapabilities {
    settingsTransport: 'legacy' | 'modern';
    settingsApi: SettingsApi;
    /**
     * Which settings architecture the release exposes. `namespace` covers the
     * rc.7 through 0.1.6 lines; `entry-config` starts at the 0.1.7 line, where a
     * plugin owns its section as a Loader entry instead of registering a
     * namespace, so `register`/`installSection`/`get` no longer exist.
     */
    settingsModel: SettingsModel;
    baseModelFields: readonly ('reasoningEfforts' | 'input' | 'contextWindow')[];
    gatewayCompatFields: readonly GatewayCompatEditableField[];
    externalLanguages: boolean;
    takeoverTransport: TakeoverTransport;
}
export declare function isValidSemver(value: unknown): value is string;
export declare function capabilitiesForVersion(version: string): DshVersionCapabilities | undefined;
export declare function takeoverTransportForVersion(version: string): TakeoverTransport | undefined;
export declare function takeoverSupportedForVersion(version: string): boolean;
export declare function settingsModelForVersion(version: string): SettingsModel | undefined;
/**
 * The settings model the plugin must code against. The live service decides,
 * because the same version can be reached through a compatibility provider;
 * the version map only answers when the service exposes neither shape. An
 * unknown version with an unknown service yields `undefined`, and callers keep
 * their most conservative behaviour.
 */
export declare function settingsModelForRuntime(input: {
    readonly settings?: unknown;
    readonly version?: unknown;
}): SettingsModel | undefined;
