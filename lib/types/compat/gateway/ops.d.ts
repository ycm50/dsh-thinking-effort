import type { InventoryItem, SettingsOp } from '../../client/types.js';
import { type GatewayCompatFieldKey } from './fields.js';
import type { GatewayCompatEditability, ModelGatewayCompatUpdate, ProviderGatewayCompatUpdate } from './types.js';
type CompatEditability = Partial<Pick<GatewayCompatEditability, GatewayCompatFieldKey>>;
export declare function opsForProviderCompat(provider: string, update: Partial<ProviderGatewayCompatUpdate>, editability?: CompatEditability): SettingsOp[];
export declare function opsForModelCompat(item: InventoryItem, update: Partial<ModelGatewayCompatUpdate>, editability?: CompatEditability): SettingsOp[];
export declare function opsForModelArrayCompat(inventory: readonly InventoryItem[], item: InventoryItem, update: Partial<ModelGatewayCompatUpdate>, editability?: CompatEditability): SettingsOp[];
export {};
