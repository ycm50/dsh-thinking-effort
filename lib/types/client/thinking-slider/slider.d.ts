import type { ReactNode } from 'react';
import type { Translation } from '../types.js';
/**
 * Local minimal mirror of the official catalog shapes
 * (deepseek-harness packages/api/session-controller/src/types.ts:104-123).
 * The official type package is intentionally not a dependency; runtime values
 * reach this component only through the single seam assertion in `index.ts`.
 */
export interface ModelReasoningEffort {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
}
export interface ModelReasoning {
    readonly efforts: readonly ModelReasoningEffort[];
    readonly defaultEffort?: string;
}
export interface ModelCatalogModel {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
    readonly reasoning?: ModelReasoning;
}
export interface ModelProviderGroup {
    readonly id: string;
    readonly name: string;
    readonly models: readonly ModelCatalogModel[];
}
export interface ModelSelection {
    readonly provider: string;
    readonly model: string;
    readonly reasoningEffort?: string;
}
export type ModelDirectoryStatus = 'idle' | 'loading' | 'ready' | 'selecting' | 'error';
export interface ModelCatalogFailure {
    readonly id: string;
    readonly name: string;
    readonly message: string;
}
export interface ModelDirectoryState {
    readonly current: ModelSelection | null;
    readonly routable: boolean | null;
    readonly groups: readonly ModelProviderGroup[];
    readonly failures: readonly ModelCatalogFailure[];
    readonly status: ModelDirectoryStatus;
    readonly error: string | null;
}
/** Read face of the shared per-session directory store (uSES-compatible). */
export interface SliderDirectory {
    getSnapshot(): ModelDirectoryState;
    subscribe(fn: () => void): () => void;
}
/** Seat component props provided by the optional model-directory service. */
export interface SliderProps {
    readonly directory: SliderDirectory;
    readonly load?: () => void;
    readonly select?: (selection: ModelSelection) => Promise<boolean>;
    readonly locked?: boolean;
    readonly t: Translation;
}
/**
 * Render the composer model seat. The expanded panel presents reasoning before
 * the model row; the compact trigger preserves both model and effort labels.
 */
export declare function Slider({ directory, load, select, locked, t }: SliderProps): ReactNode;
