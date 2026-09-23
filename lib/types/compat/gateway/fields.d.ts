import type { GatewayCompatSource } from './types.js';
export type GatewayCompatFieldKind = 'boolean' | 'enum';
export type GatewayCompatGroupId = 'role' | 'format' | 'stream' | 'cache';
/**
 * Route protocols understood by DSH's `llm-pi-ai` compat gates. Each protocol
 * offers only a subset of the scalar gateway compat fields; configuring a field
 * the route's protocol does not offer makes DSH's `assertOfferedCompatFields`
 * reject the whole settings mutate.
 */
export type GatewayProtocol = 'openai-completions' | 'openai-responses' | 'azure-openai-responses' | 'openai-codex-responses' | 'anthropic-messages' | 'bedrock-converse-stream';
export interface GatewayCompatGroup {
    readonly id: GatewayCompatGroupId;
    readonly titleKey: string;
}
export declare const GATEWAY_COMPAT_GROUPS: readonly GatewayCompatGroup[];
export interface GatewayCompatFieldOption {
    readonly value: string;
    readonly labelKey?: string;
}
interface GatewayCompatFieldBase {
    readonly key: string;
    readonly group: GatewayCompatGroupId;
    readonly labelKey: string;
    /** Route protocols that offer this field; a field outside the route's offer must not be written. */
    readonly protocols: readonly GatewayProtocol[];
    readonly descriptionKey?: string;
}
export type GatewayCompatFieldSpec = (GatewayCompatFieldBase & {
    readonly kind: 'boolean';
}) | (GatewayCompatFieldBase & {
    readonly kind: 'enum';
    readonly enumValues: readonly string[];
    readonly enumOptions?: readonly GatewayCompatFieldOption[];
});
export declare const SUPPORTED_THINKING_FORMATS: readonly ["openai", "openrouter", "deepseek", "together", "baseten", "zai", "qwen", "chat-template", "qwen-chat-template", "string-thinking", "ant-ling"];
export declare const MAX_TOKENS_FIELDS: readonly ["max_tokens", "max_completion_tokens"];
export declare const GATEWAY_COMPAT_FIELDS: {
    readonly supportsDeveloperRole: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly supportsReasoningEffort: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly supportsThinkingTokenBudget: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly thinkingFormat: {
        key: string;
        kind: "enum";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
        enumValues: readonly ["openai", "openrouter", "deepseek", "together", "baseten", "zai", "qwen", "chat-template", "qwen-chat-template", "string-thinking", "ant-ling"];
        enumOptions: readonly GatewayCompatFieldOption[] | undefined;
    };
    readonly maxTokensField: {
        key: string;
        kind: "enum";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
        enumValues: readonly ["max_tokens", "max_completion_tokens"];
        enumOptions: readonly GatewayCompatFieldOption[] | undefined;
    };
    readonly requiresThinkingAsText: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly requiresReasoningContentOnAssistantMessages: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly supportsUsageInStreaming: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly supportsFinishReason: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly requiresToolResultName: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly requiresAssistantAfterToolResult: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly supportsStrictMode: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly supportsStore: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly supportsLongCacheRetention: {
        key: string;
        kind: "boolean";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
    };
    readonly cacheControlFormat: {
        key: string;
        kind: "enum";
        group: GatewayCompatGroupId;
        labelKey: string;
        protocols: readonly GatewayProtocol[];
        enumValues: readonly ["anthropic"];
        enumOptions: readonly GatewayCompatFieldOption[] | undefined;
    };
};
export type GatewayCompatFieldKey = keyof typeof GATEWAY_COMPAT_FIELDS;
export declare const GATEWAY_COMPAT_FIELD_KEYS: GatewayCompatFieldKey[];
/**
 * Return the gateway compat fields offered by a route's `api` protocol. An
 * unknown or missing api offers every registered field, so routes that do not
 * declare a protocol keep the previous full-field compatibility behavior.
 * Handles api values that are a string, an object (e.g. the provider profile),
 * or undefined.
 */
export declare function fieldsForApi(api: unknown): readonly GatewayCompatFieldKey[];
/**
 * Per-DSH-version field sets. `gatewayCompatFields` in the version map must be
 * one of these arrays, NOT the flat `GATEWAY_COMPAT_FIELD_KEYS`, because DSH's
 * `llm-pi-ai` `compatProfile` grows across releases: `supportsFinishReason`
 * and `supportsThinkingTokenBudget` only exist from 0.1.2-alpha.1 onward.
 * Configuring a field the running DSH does not declare makes that DSH's
 * `assertOfferedCompatFields` reject the entire settings mutate.
 */
export declare const RC8_COMPAT_FIELDS: readonly ["supportsStore", "supportsDeveloperRole", "supportsReasoningEffort", "supportsUsageInStreaming", "maxTokensField", "requiresToolResultName", "requiresAssistantAfterToolResult", "requiresThinkingAsText", "requiresReasoningContentOnAssistantMessages", "supportsStrictMode", "thinkingFormat", "cacheControlFormat", "supportsLongCacheRetention"];
export declare const ALPHA1_PLUS_COMPAT_FIELDS: readonly ["supportsStore", "supportsDeveloperRole", "supportsReasoningEffort", "supportsUsageInStreaming", "maxTokensField", "requiresToolResultName", "requiresAssistantAfterToolResult", "requiresThinkingAsText", "requiresReasoningContentOnAssistantMessages", "supportsStrictMode", "thinkingFormat", "cacheControlFormat", "supportsLongCacheRetention", "supportsFinishReason", "supportsThinkingTokenBudget"];
export type GatewayCompatSelection = 'auto' | string;
type FieldSpecOf<K extends GatewayCompatFieldKey> = (typeof GATEWAY_COMPAT_FIELDS)[K];
type BooleanFieldKey = {
    [K in GatewayCompatFieldKey]: FieldSpecOf<K> extends {
        kind: 'boolean';
    } ? K : never;
}[GatewayCompatFieldKey];
type EnumFieldKey = {
    [K in GatewayCompatFieldKey]: FieldSpecOf<K> extends {
        kind: 'enum';
        enumValues: readonly string[];
    } ? K : never;
}[GatewayCompatFieldKey];
type EnumValuesOf<K extends EnumFieldKey> = FieldSpecOf<K> extends {
    readonly enumValues: infer V extends readonly string[];
} ? V[number] : never;
export type GatewayCompatValue<K extends GatewayCompatFieldKey> = K extends BooleanFieldKey ? boolean : K extends EnumFieldKey ? EnumValuesOf<K> : unknown;
export type GatewayCompatSelectionFor<K extends GatewayCompatFieldKey> = K extends BooleanFieldKey ? 'auto' | 'supported' | 'unsupported' : K extends EnumFieldKey ? 'auto' | EnumValuesOf<K> : 'auto';
export type SelectionNamed = {
    [K in GatewayCompatFieldKey]: GatewayCompatSelectionFor<K>;
};
export type SourceNamed = {
    [K in GatewayCompatFieldKey as `${K & string}Source`]: GatewayCompatSource;
};
export type AvailableNamed = {
    [K in GatewayCompatFieldKey as `${K & string}Available`]: boolean;
};
export type ResolvedNamed = {
    [K in GatewayCompatFieldKey as `${K & string}Resolved`]: unknown;
};
export declare function fieldSpec(key: GatewayCompatFieldKey): GatewayCompatFieldSpec;
export declare function fieldsInGroup(group: GatewayCompatGroupId): readonly GatewayCompatFieldSpec[];
export {};
