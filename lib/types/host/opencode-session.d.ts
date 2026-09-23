import type { HostContext } from './types.js';
export { PLUGIN_SETTINGS_SCHEMA as OPENCODE_SESSION_SETTINGS_SCHEMA } from './plugin-settings.js';
/**
 * Resolve the `user-agent` override for one `provider/model` request. The
 * master `value` under `opencodeSession.userAgent` is the enable switch:
 * when it is empty the override is fully off. A route matches when its
 * `enabled` flag is true (all models) or the exact model is toggled on; the
 * route's own `value` wins over the master value when both exist.
 */
export declare function resolveUserAgentValue(settings: unknown, provider: string, model: string): string | undefined;
/** Install the optional OpenCode session namespace and request Header bridge. */
export declare function installOpenCodeSession(ctx: HostContext): void;
