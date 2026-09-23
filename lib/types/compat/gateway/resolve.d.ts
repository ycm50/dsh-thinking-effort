import type { GatewayCompatFieldKey } from './fields.js';
import type { PiAiSection, TakeoverSection } from './takeover.js';
import type { GatewayCompatEditability, GatewayCompatResolveInput, GatewayCompatResolution, MaxTokensField, ModelGatewayCompatView, ProviderGatewayCompatView } from './types.js';
export { declaresThinking, identifyTakeoverProviders, isCustomOpenAiGateway, isProviderTakenOver, resolveTakeoverProviders, takeoverGatewayCompatInputs, takeoverProvidersOf, } from './takeover.js';
export type { PiAiModelRow, PiAiProviderProfile, PiAiSection, TakeoverGatewayCompatInputs, TakeoverProvidersInput, TakeoverSection, } from './takeover.js';
export declare function resolveGatewayCompat(input: GatewayCompatResolveInput): GatewayCompatResolution;
export declare function resolveTakeoverGatewayCompat(input: {
    readonly version?: unknown;
    readonly runtimeProfile?: 'legacy' | 'modern' | 'unknown';
    readonly descriptorSchema?: unknown;
    readonly piAi?: PiAiSection;
    readonly takeover?: TakeoverSection;
    readonly provider: string;
    readonly model?: string;
}): GatewayCompatResolution | undefined;
export declare function resolveModelGatewayCompat(input: GatewayCompatResolveInput & {
    readonly model: string;
}, editability?: GatewayCompatEditability | Record<string, unknown>): ModelGatewayCompatView;
export declare function resolveProviderGatewayCompat(input: GatewayCompatResolveInput, editability?: GatewayCompatEditability | Record<string, unknown>): ProviderGatewayCompatView;
export declare const resolveProviderCompat: typeof resolveProviderGatewayCompat;
export declare const resolveGatewayCompatibility: typeof resolveGatewayCompat;
export declare function gatewayCompatFieldNames(): readonly GatewayCompatFieldKey[];
export type { MaxTokensField };
