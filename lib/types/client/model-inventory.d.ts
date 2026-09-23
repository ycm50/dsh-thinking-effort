import type { InventoryItem, ModelGatewayCompatView, ProviderGatewayCompatView, SettingsNamespace, CompatibilityProfile } from './types.js';
import type { TakeoverRuntimeResolution } from './takeover-runtime.js';
/**
 * Resolve the `api` protocol string a route declares across the descriptor
 * value, user, and base layers. `undefined` means the route declares no
 * protocol; the UI then keeps full-field compatibility.
 */
export declare function routeApi(namespace: unknown, route: string): string | undefined;
export declare function modelGatewayCompatViewFrom(namespace: SettingsNamespace | unknown, item: InventoryItem, compatibilityProfile?: CompatibilityProfile, takeoverRuntime?: TakeoverRuntimeResolution): ModelGatewayCompatView;
export declare const modelCompatViewFrom: typeof modelGatewayCompatViewFrom;
export declare function modelCompatKey(route: string, model: string): string;
export declare function modelGatewayCompatViewsFrom(namespace: SettingsNamespace | unknown, inventory: readonly InventoryItem[], compatibilityProfile?: CompatibilityProfile, takeoverRuntime?: TakeoverRuntimeResolution): Record<string, ModelGatewayCompatView>;
export declare const modelCompatViewsFrom: typeof modelGatewayCompatViewsFrom;
export declare function providerGatewayCompatViewFrom(namespace: SettingsNamespace | unknown, provider: string, compatibilityProfile?: CompatibilityProfile, takeoverRuntime?: TakeoverRuntimeResolution): ProviderGatewayCompatView;
export declare const providerCompatViewFrom: typeof providerGatewayCompatViewFrom;
export declare function providerGatewayCompatViewsFrom(namespace: SettingsNamespace | unknown, compatibilityProfile?: CompatibilityProfile, takeoverRuntime?: TakeoverRuntimeResolution): Record<string, ProviderGatewayCompatView>;
export declare const providerCompatViewsFrom: typeof providerGatewayCompatViewsFrom;
export declare function inventoryFrom(namespace: unknown): InventoryItem[];
