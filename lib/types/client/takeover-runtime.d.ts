import type { GatewayCompatResolution } from '../compat/gateway/types.js';
import type { ClientResult, SettingsApi, SettingsDescribeValue } from './types.js';
export interface TakeoverRuntimeResolution {
    readonly providers: readonly string[];
    readonly compat: readonly GatewayCompatResolution[];
}
export interface TakeoverRuntimeStore {
    readonly getSnapshot: () => TakeoverRuntimeResolution;
    readonly subscribe: (listener: () => void) => () => void;
    update(resolution: TakeoverRuntimeResolution): void;
    dispose(): void;
}
export declare function createTakeoverRuntimeStore(): TakeoverRuntimeStore;
export declare function resolveTakeoverDescription(settings: Pick<SettingsApi, 'compatibilityProfile'>, response: ClientResult<SettingsDescribeValue>): TakeoverRuntimeResolution;
export declare function resolveTakeoverSettings(settings: SettingsApi): Promise<TakeoverRuntimeResolution>;
export interface ObservedSettingsApi extends SettingsApi {
    dispose(): void;
}
export declare function observeTakeoverSettings(settings: SettingsApi, onResolution: (resolution: TakeoverRuntimeResolution) => void): ObservedSettingsApi;
export declare const emptyTakeoverRuntimeResolution: TakeoverRuntimeResolution;
