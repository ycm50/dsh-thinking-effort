/** Read-only interoperability helpers for the optional OpenAI-completions takeover. */
import type { DshVersionCapabilities } from '../version-map.js';
export declare const TAKEOVER_NAMESPACE = "llm-openai-completions";
export declare const PI_AI_NAMESPACE = "llm-pi-ai";
export interface PiAiModelRow {
    readonly id?: unknown;
    readonly reasoningEfforts?: unknown;
    readonly compat?: unknown;
}
export interface PiAiProviderProfile {
    readonly api?: unknown;
    readonly baseURL?: unknown;
    readonly models?: unknown;
    readonly modelOverrides?: unknown;
    readonly compat?: unknown;
    readonly [key: string]: unknown;
}
export interface PiAiSection {
    readonly providers?: Record<string, PiAiProviderProfile>;
}
export interface TakeoverSection {
    readonly enabled?: unknown;
    readonly providers?: unknown;
}
export interface TakeoverProvidersInput {
    readonly version?: unknown;
    readonly runtimeProfile?: 'legacy' | 'modern' | 'unknown';
    readonly descriptorSchema?: unknown;
    readonly piAi?: PiAiSection;
    readonly takeover?: TakeoverSection;
}
export interface TakeoverGatewayCompatInputs {
    readonly providerCompat?: unknown;
    readonly modelCompat?: unknown;
}
/** Whether this profile points to a custom OpenAI-compatible endpoint. */
export declare function isCustomOpenAiGateway(profile: PiAiProviderProfile | undefined): boolean;
/** Whether any shared llm-pi-ai model declares thinking capability. */
export declare function declaresThinking(profile: PiAiProviderProfile | undefined): boolean;
/** Identify custom thinking routes only when the mapped runtime allows takeover. */
export declare function identifyTakeoverProviders(section: PiAiSection | undefined, capabilities?: DshVersionCapabilities): string[];
/**
 * Read the optional transport-layer takeover list. `null` means the transport
 * plugin is not installed; an empty array means installed but inactive.
 */
export declare function takeoverProvidersOf(section: TakeoverSection | undefined): string[] | null;
/**
 * Resolve the providers eligible for the current runtime. Unknown versions and
 * unsupported mapped versions intentionally produce no takeover candidates.
 */
export declare function resolveTakeoverProviders(input: TakeoverProvidersInput): string[];
/** Project the shared provider/model config without retaining live settings objects. */
export declare function takeoverGatewayCompatInputs(section: PiAiSection | undefined, provider: string, model?: string): TakeoverGatewayCompatInputs;
/** The unique provider predicate defined by the takeover settings contract. */
export declare function isProviderTakenOver(section: TakeoverSection | undefined, provider: string): boolean;
