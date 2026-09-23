import type { GatewayCompatFieldKey } from './fields.js';
import type { DshVersionCapabilities } from '../version-map.js';
import type { GatewayCompatEditability, GatewayCompatValidationResult } from './types.js';
type RuntimeProfile = 'modern' | 'legacy' | 'unknown';
type EditabilityCapabilities = DshVersionCapabilities | RuntimeProfile;
/**
 * The schema node one field path addresses.
 *
 * `schema` is whatever a `settings/describe` row publishes — under the
 * `entry-config` model that is `Schema.prototype.toJSON()`, a `{ uid, refs }`
 * envelope whose root sits at `refs[String(uid)]` and whose children are
 * numeric references into the same table. An envelope carries no top-level
 * `dict`, so `schema.dict` reads nothing there: reading a form's fields means
 * resolving the root through here first. Paths name `dict`/`properties` keys,
 * with `*` for the `additionalProperties`/inner node of a dict or array. A
 * plain (non-envelope) schema is walked in place, which is what the
 * hand-written fixtures use.
 */
export declare function schemaNodeAtPath(schema: unknown, path: readonly string[]): Record<string, unknown> | undefined;
/**
 * Compute which gateway compat fields are editable for a provider route.
 *
 * A field must pass (a) the runtime version capabilities, (b) the descriptor
 * schema offering it, and — when `api` is provided — (c) the route protocol's
 * offer (`fieldsForApi`). When `api` is absent the protocol gate is skipped, so
 * routes without a declared protocol keep full-field compatibility. The
 * resulting availability map only marks fields the filtered set offers, so the
 * UI never presents (and never attempts to write) a field DSH's
 * `assertOfferedCompatFields` would reject for that protocol.
 */
export declare function editableProviderCompatFields(capabilities: EditabilityCapabilities | undefined, descriptorSchema: unknown, api?: unknown): GatewayCompatEditability;
export declare function validateProviderCompat(capabilities: EditabilityCapabilities | undefined, descriptorSchema: unknown, api?: unknown): GatewayCompatValidationResult;
export declare function canEditProviderCompatField(capabilities: EditabilityCapabilities | undefined, descriptorSchema: unknown, field: GatewayCompatFieldKey, api?: unknown): boolean;
export declare const providerCompatEditability: typeof editableProviderCompatFields;
export {};
