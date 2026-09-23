import type { InventoryItem, OpenCodeSessionState, SettingsNamespace, SettingsOp } from './types.js';
export declare function isOpenCodeSessionNamespace(value: unknown): value is SettingsNamespace;
export declare function openCodeSessionKey(item: Pick<InventoryItem, 'route' | 'model'>): string;
export declare function openCodeSessionView(namespace: SettingsNamespace | null | undefined, item: InventoryItem): boolean;
export declare function openCodeSessionOp(provider: string, model: string, enabled: boolean): SettingsOp | undefined;
export declare function openCodeSessionStateFor(namespace: SettingsNamespace | undefined, inventory: readonly InventoryItem[], previous?: OpenCodeSessionState): OpenCodeSessionState;
