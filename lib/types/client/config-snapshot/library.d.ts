import type { ConfigSnapshot, ProfileNameResult } from './types.js';
import type { SettingsNamespace, SettingsOp } from '../types.js';
export declare const PROFILES_PATH: readonly ["profiles"];
export declare const AUTO_BACKUP_PATH: readonly ["autoBackup"];
/**
 * Read the profile library defensively: the user layer is hand-editable (in
 * `settings.yaml` before 0.1.7 and in the active profile's config after it), so
 * a hand-written entry must be dropped rather than crash the settings page.
 *
 * `pluginNamespace` is the id the running host addresses the plugin section by
 * — the Loader entry under the 0.1.7 entry-config model, and the legacy
 * registered namespace on older releases. It is resolved from `namespaces`,
 * the very read being keyed, so no caller can omit it and read the library as
 * absent on 0.1.7; the parameter is only an override for a caller that already
 * resolved the id.
 */
export declare function profilesFromNamespaces(namespaces: readonly SettingsNamespace[], pluginNamespace?: string): Record<string, ConfigSnapshot>;
/** The auto backup written before a destructive apply; absent until one is written. */
export declare function autoBackupFromNamespaces(namespaces: readonly SettingsNamespace[], pluginNamespace?: string): ConfigSnapshot | undefined;
export declare function validateProfileName(name: string, existing: readonly string[]): ProfileNameResult;
export declare function saveProfileOps(name: string, snapshot: ConfigSnapshot): SettingsOp[];
export declare function deleteProfileOps(name: string): SettingsOp[];
export declare function autoBackupOps(snapshot: ConfigSnapshot): SettingsOp[];
