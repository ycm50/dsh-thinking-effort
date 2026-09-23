import type { HostContext } from './host/types.js';
export declare const name = "@hytime/dsh-thinking-effort";
export declare const inject: readonly ["settings", "timer", "llm"];
/**
 * The Loader entry's config schema. DSH 0.1.7 derives the settings form from
 * it, so it must stay exported from the package entry.
 */
export { Config } from './host/plugin-settings.js';
export declare function apply(ctx: HostContext): void;
