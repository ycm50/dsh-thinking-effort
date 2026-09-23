import React from 'react';
import { type DownloadJson } from '../browser-download.js';
import type { Palette } from '../theme.js';
import type { SettingsApi, Translation } from '../types.js';
export interface ConfigBackupCardProps {
    readonly settings: SettingsApi;
    readonly palette: Palette;
    readonly t: Translation;
    readonly onApplied: () => void;
    readonly download?: DownloadJson;
    readonly now?: () => Date;
}
export declare function ConfigBackupCard({ settings, palette, t, onApplied, download, now }: ConfigBackupCardProps): React.ReactElement;
