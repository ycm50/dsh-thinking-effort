import type { ClientContext } from '../types.js';
import type { ModelDirectoryState, ModelSelection } from './slider.js';
export { Slider } from './slider.js';
export type { ModelCatalogFailure, ModelCatalogModel, ModelDirectoryState, ModelProviderGroup, ModelReasoning, ModelReasoningEffort, ModelSelection, SliderDirectory, SliderProps, } from './slider.js';
/** Target slot key of the composer model seat. */
export declare const SEAT_NAME = "conversation.input.model";
/** Shadowing priority: the placeholder yields to any real occupant. */
export declare const SEAT_PRIORITY = -10;
/** The seat's injected business face ({@link SliderProps} minus `t`). */
export interface ComposerSeatInjected {
    readonly directory: Readonly<{
        getSnapshot(): ModelDirectoryState;
        subscribe(fn: () => void): () => void;
    }>;
    readonly load: () => void;
    readonly select: (selection: ModelSelection) => Promise<boolean>;
}
/**
 * Whether the runtime session remote face is the modern `remote.session`
 * service (DSH 0.1.2-alpha.1+/npm alpha.2+). Detected by shape probe through
 * the inject-free `context.get` read face; older versions (`0.1.0-rc.7` /
 * `0.1.0-rc.8`) carry no such service and must NOT list it in `inject`.
 * @param context - client root context.
 */
export declare function hasSessionRemote(context: ClientContext): boolean;
/**
 * Register the composer model seat over a Cordis-style client context. The
 * optional `modelDirectories` service is a declared `inject` dependency, so the
 * seat registers only when the official ui-model-selection service is live; it
 * is skipped when that service is absent. The `inject` list includes
 * `remote.session` only on runtimes that expose it (modern DSH); older
 * runtimes register with the base list, which is enough because the directory
 * controller owns its own `connection` face there.
 * @param context - client root context (slots + locale + optional model service).
 */
export declare function apply(context: ClientContext): void;
