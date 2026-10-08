import React from 'react';
import type { OpenCodeEffortCatalogSnapshot, ReasoningEffortMap } from '../compat/opencode-effort.js';
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
/**
 * The compact OpenCode catalog out of this plugin's own section. The Host
 * writes it on every successful refresh; the Client only reads it.
 */
export declare function openCodeCatalogOf(section: SettingsNamespace | null): OpenCodeEffortCatalogSnapshot | undefined;
/** How many model declarations a snapshot carries. */
export declare function openCodeCatalogModelCount(catalog: OpenCodeEffortCatalogSnapshot | undefined): number;
/** The levels OpenCode declares for one model, when the snapshot covers it. */
export declare function openCodeLevelsOf(catalog: OpenCodeEffortCatalogSnapshot | undefined, route: string, model: string): ReasoningEffortMap | undefined;
/**
 * The inventory rows whose stored levels differ from what OpenCode declares.
 * A row the snapshot does not cover, or one that already matches, is not a
 * target — aligning it would rewrite the document for nothing.
 */
export declare function openCodeAlignments(inventory: readonly InventoryItem[], catalog: OpenCodeEffortCatalogSnapshot | undefined): Array<{
    readonly item: InventoryItem;
    readonly levels: ReasoningEffortMap;
}>;
export type { OpenCodeSessionState } from './types.js';
export declare function createOpenCodeSessionState(namespace: SettingsNamespace | undefined, inventory: readonly InventoryItem[], previous?: OpenCodeSessionState): OpenCodeSessionState;
export declare function applyOpenCodeSessionMutation(state: OpenCodeSessionState, response: ClientResult<SettingsNamespace>, inventory: readonly InventoryItem[], savedKey?: string): OpenCodeSessionState;
export declare function saveOpenCodeSession(settings: Pick<SettingsApi, 'mutate'>, namespace: SettingsNamespace, item: InventoryItem, enabled: boolean): Promise<ClientResult<SettingsNamespace>>;
export declare function SectionEditor({ settings, locale, t, palette, takeoverRuntime }: SectionEditorProps): React.ReactElement;
