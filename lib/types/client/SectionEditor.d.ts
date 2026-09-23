import React from 'react';
import type { ClientLocale, ClientResult, InventoryItem, OpenCodeSessionState, SettingsApi, SettingsNamespace, Translation } from './types.js';
import type { Palette } from './theme.js';
import type { TakeoverRuntimeStore } from './takeover-runtime.js';
export interface SectionEditorProps {
    readonly settings: SettingsApi;
    readonly locale: ClientLocale;
    readonly t: Translation;
    readonly palette?: Palette;
    readonly takeoverRuntime?: TakeoverRuntimeStore;
}
export type { OpenCodeSessionState } from './types.js';
export declare function createOpenCodeSessionState(namespace: SettingsNamespace | undefined, inventory: readonly InventoryItem[], previous?: OpenCodeSessionState): OpenCodeSessionState;
export declare function applyOpenCodeSessionMutation(state: OpenCodeSessionState, response: ClientResult<SettingsNamespace>, inventory: readonly InventoryItem[], savedKey?: string): OpenCodeSessionState;
export declare function saveOpenCodeSession(settings: Pick<SettingsApi, 'mutate'>, namespace: SettingsNamespace, item: InventoryItem, enabled: boolean): Promise<ClientResult<SettingsNamespace>>;
export declare function SectionEditor({ settings, locale, t, palette, takeoverRuntime }: SectionEditorProps): React.ReactElement;
