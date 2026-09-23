import type { ClientContext } from '../client/types.js';
import type { ModelDirectoryState, ModelSelection } from '../client/thinking-slider/slider.js';
/** Runtime generation selected by the DSH remote surface. */
export type ModelDirectoryGeneration = 'connection' | 'session';
/** Minimal runtime face shared by the official model-directory generations. */
export interface ModelDirectoriesSeam {
    directoryFor(sessionId: string): {
        readonly store: Readonly<{
            getSnapshot(): ModelDirectoryState;
            subscribe(fn: () => void): () => void;
        }>;
        load(): Promise<unknown>;
        select(selection: ModelSelection): Promise<unknown>;
    };
}
/** Read and narrow the optional host model-directory service. */
export declare function asModelDirectories(value: unknown): ModelDirectoriesSeam | undefined;
/**
 * Detect the modern session Remote namespace by method shape. DSH rc.7/rc.8
 * use `connection.api.sessions` and do not provide `remote.session`.
 * @param context - Client context with inject-free service reads.
 * @returns Whether the session Remote generation is installed.
 */
export declare function hasSessionRemote(context: ClientContext): boolean;
/**
 * Build the exact Cordis dependencies for the official model-directory
 * generation. Older DSH builds must not inject the missing `remote.session`
 * service: Cordis parks such a fiber until the service exists.
 * @param context - Client context used for the generation probe.
 * @returns The generation and its required injected services.
 */
export declare function modelDirectoryCompatibility(context: ClientContext): {
    readonly generation: ModelDirectoryGeneration;
    readonly inject: readonly string[];
};
