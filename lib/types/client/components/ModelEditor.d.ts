import React from 'react';
import type { ReasoningEffortMap } from '../../compat/opencode-effort.js';
import { ALL_LEVELS } from '../constants.js';
import type { ContextDraft, DraftCell, InputDraft, InventoryItem, ModelCompatDirtyFields, ModelGatewayCompatUpdate, ModelGatewayCompatView, ReasoningDraft, Translation } from '../types.js';
import type { Palette } from '../theme.js';
export interface ModelEditorProps {
    readonly item: InventoryItem;
    readonly draft: ReasoningDraft;
    readonly contextDraft: ContextDraft;
    readonly inputDraft: InputDraft;
    readonly dirty: boolean;
    readonly busy: boolean;
    readonly palette: Palette;
    readonly t: Translation;
    readonly onLevelChange: (level: typeof ALL_LEVELS[number], patch: Partial<DraftCell>) => void;
    readonly onContextChange: (value: string) => void;
    readonly onOneMillionChange: (enabled: boolean) => void;
    readonly onInputChange: (modality: 'text' | 'image', enabled: boolean) => void;
    readonly onSave: () => void;
    readonly onRestoreReasoning: () => void;
    readonly onRestoreCapability: () => void;
    readonly compatView?: ModelGatewayCompatView;
    readonly onCompatChange?: (next: Partial<ModelGatewayCompatUpdate>) => void;
    readonly onSaveCompat?: () => void;
    readonly compatDirty?: ModelCompatDirtyFields;
    readonly compatExpanded?: boolean;
    readonly onToggleCompatExpanded?: () => void;
    readonly openCodeSession?: boolean;
    readonly openCodeSessionAvailable?: boolean;
    readonly onOpenCodeSessionChange?: (enabled: boolean) => void;
    /**
     * The levels OpenCode's catalog declares for this model, when the plugin has
     * a snapshot for its route. Rendering them turns the editor's seven rungs
     * into "these, plus the ones OpenCode never declared" — the undeclared rows
     * stay editable but are marked, because a hand-written model may legitimately
     * need a level the catalog does not know about.
     */
    readonly openCodeLevels?: ReasoningEffortMap;
}
export declare function ModelEditor({ item, draft, contextDraft, inputDraft, dirty, busy, palette, t, onLevelChange, onContextChange, onOneMillionChange, onInputChange, onSave, onRestoreReasoning, onRestoreCapability, compatView, onCompatChange, onSaveCompat, compatDirty, compatExpanded, onToggleCompatExpanded, openCodeSession, openCodeSessionAvailable, onOpenCodeSessionChange, openCodeLevels }: ModelEditorProps): React.ReactElement;
