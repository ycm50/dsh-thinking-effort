import type { DshCompatibilityCapabilities } from '../client/types.js';
export type { CompatibilitySettings, DshCompatibilityCapabilities } from '../client/types.js';
export type { DshVersionCapabilities, GatewayCompatEditableField, SettingsApi, TakeoverTransport } from './version-map.js';
export type { SettingsModel } from './settings-model.js';
export { settingsModelForRuntime, settingsModelForVersion, takeoverSupportedForVersion, takeoverTransportForVersion, } from './version-map.js';
export { PLUGIN_ENTRY_ID, readSettingsSection, readSettingsSectionUser, settingsChangeEvents, settingsEntryId, settingsModelOf } from './settings-model.js';
type MethodName = 'describe' | 'mutate' | 'get' | 'update' | 'modelCatalog';
export declare function hasMethods(value: unknown, methods: readonly MethodName[]): boolean;
export declare function clientCapabilities(input: {
    readonly remoteSettings?: unknown;
    readonly legacySettings?: unknown;
    readonly addLanguage?: unknown;
}): DshCompatibilityCapabilities;
export declare function hostCapabilities(input: {
    readonly settings?: unknown;
}): DshCompatibilityCapabilities;
