import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { AsyncLocalStorage, AsyncResource } from "node:async_hooks";
import { createHash } from "node:crypto";
import { stat } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import z from "@deepseek-ai/schemastery";
//#region lib/types/host/marker.js
const MARKER = join(process.env.DSH_HOME || process.cwd(), "thinking-effort-loaded.json");
function mark(event) {
	try {
		writeFileSync(MARKER, JSON.stringify({
			event,
			name: "@hytime/dsh-thinking-effort",
			at: (/* @__PURE__ */ new Date()).toISOString(),
			pid: process.pid
		}, null, 2));
	} catch {}
}
//#endregion
//#region lib/types/compat/gateway/fields.js
const COMPLETIONS = ["openai-completions"];
const RESPONSES = [
	"openai-responses",
	"azure-openai-responses",
	"openai-codex-responses"
];
const COMPLETIONS_AND_RESPONSES = [...COMPLETIONS, ...RESPONSES];
const STRICT_MODE_PROTOCOLS = [...COMPLETIONS_AND_RESPONSES, "bedrock-converse-stream"];
const LONG_CACHE_PROTOCOLS = [...COMPLETIONS_AND_RESPONSES, "anthropic-messages"];
const SUPPORTED_THINKING_FORMATS = [
	"openai",
	"openrouter",
	"deepseek",
	"together",
	"baseten",
	"zai",
	"qwen",
	"chat-template",
	"qwen-chat-template",
	"string-thinking",
	"ant-ling"
];
const MAX_TOKENS_FIELDS = ["max_tokens", "max_completion_tokens"];
function booleanField(key, group, protocols) {
	return {
		key,
		kind: "boolean",
		group,
		labelKey: key,
		protocols
	};
}
function enumField(key, group, protocols, enumValues, enumOptions) {
	return {
		key,
		kind: "enum",
		group,
		labelKey: key,
		protocols,
		enumValues,
		enumOptions
	};
}
const GATEWAY_COMPAT_FIELDS = {
	supportsDeveloperRole: booleanField("supportsDeveloperRole", "role", COMPLETIONS_AND_RESPONSES),
	supportsReasoningEffort: booleanField("supportsReasoningEffort", "role", COMPLETIONS),
	supportsThinkingTokenBudget: booleanField("supportsThinkingTokenBudget", "role", COMPLETIONS),
	thinkingFormat: enumField("thinkingFormat", "format", COMPLETIONS, SUPPORTED_THINKING_FORMATS),
	maxTokensField: enumField("maxTokensField", "format", COMPLETIONS, MAX_TOKENS_FIELDS, [{
		value: "max_tokens",
		labelKey: "maxTokensFieldStandard"
	}, {
		value: "max_completion_tokens",
		labelKey: "maxTokensFieldCompletion"
	}]),
	requiresThinkingAsText: booleanField("requiresThinkingAsText", "format", COMPLETIONS),
	requiresReasoningContentOnAssistantMessages: booleanField("requiresReasoningContentOnAssistantMessages", "format", COMPLETIONS),
	supportsUsageInStreaming: booleanField("supportsUsageInStreaming", "stream", COMPLETIONS),
	supportsFinishReason: booleanField("supportsFinishReason", "stream", COMPLETIONS),
	requiresToolResultName: booleanField("requiresToolResultName", "stream", COMPLETIONS),
	requiresAssistantAfterToolResult: booleanField("requiresAssistantAfterToolResult", "stream", COMPLETIONS),
	supportsStrictMode: booleanField("supportsStrictMode", "stream", STRICT_MODE_PROTOCOLS),
	supportsStore: booleanField("supportsStore", "cache", COMPLETIONS),
	supportsLongCacheRetention: booleanField("supportsLongCacheRetention", "cache", LONG_CACHE_PROTOCOLS),
	cacheControlFormat: enumField("cacheControlFormat", "cache", COMPLETIONS, ["anthropic"], [{
		value: "anthropic",
		labelKey: "cacheControlFormatAnthropic"
	}])
};
Object.keys(GATEWAY_COMPAT_FIELDS);
/**
* Per-DSH-version field sets. `gatewayCompatFields` in the version map must be
* one of these arrays, NOT the flat `GATEWAY_COMPAT_FIELD_KEYS`, because DSH's
* `llm-pi-ai` `compatProfile` grows across releases: `supportsFinishReason`
* and `supportsThinkingTokenBudget` only exist from 0.1.2-alpha.1 onward.
* Configuring a field the running DSH does not declare makes that DSH's
* `assertOfferedCompatFields` reject the entire settings mutate.
*/
const RC8_COMPAT_FIELDS = [
	"supportsStore",
	"supportsDeveloperRole",
	"supportsReasoningEffort",
	"supportsUsageInStreaming",
	"maxTokensField",
	"requiresToolResultName",
	"requiresAssistantAfterToolResult",
	"requiresThinkingAsText",
	"requiresReasoningContentOnAssistantMessages",
	"supportsStrictMode",
	"thinkingFormat",
	"cacheControlFormat",
	"supportsLongCacheRetention"
];
const ALPHA1_PLUS_COMPAT_FIELDS = [
	...RC8_COMPAT_FIELDS,
	"supportsFinishReason",
	"supportsThinkingTokenBudget"
];
//#endregion
//#region lib/types/compat/settings-model.js
/**
* The Loader entry id this plugin declares in `cordis.patch.yml`. Under the
* `entry-config` model it is also the id of the plugin's own settings section,
* which is how a caller with no fiber to read a live id from addresses that
* section. Under the `namespace` model no section carries it — the plugin
* registers `dsh-thinking-effort` instead — so a miss means "not this model"
* rather than an error.
*/
const PLUGIN_ENTRY_ID = "thinking-effort";
function method(value, name) {
	if (typeof value !== "object" && typeof value !== "function" || value === null) return void 0;
	const candidate = Reflect.get(value, name);
	return typeof candidate === "function" ? candidate : void 0;
}
function record$3(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
/**
* Detect the settings model from the live service rather than from a version
* string, because the same version can be reached through a compatibility
* provider. `undefined` means the service exposes neither shape.
*/
function settingsModelOf(settings) {
	if (settings === void 0 || settings === null) return void 0;
	if (method(settings, "register") !== void 0 || method(settings, "installSection") !== void 0) return "namespace";
	return method(settings, "describe") === void 0 ? void 0 : "entry-config";
}
/**
* The events that report a change to a settings section. Only the
* `namespace` model emits `settings/updated`; `settings/document-updated`
* exists under both, but it is the only one the `entry-config` model emits.
*/
function settingsChangeEvents(model) {
	return model === "entry-config" ? ["settings/document-updated"] : ["settings/updated"];
}
/** The `describe()` descriptor of one section, or `undefined` when it is absent or unreadable. */
function descriptorOf(settings, namespace) {
	const describe = method(settings, "describe");
	if (describe === void 0) return void 0;
	try {
		const descriptors = describe.call(settings);
		if (!Array.isArray(descriptors)) return void 0;
		return record$3(descriptors.find((candidate) => String(record$3(candidate)?.ns) === namespace));
	} catch {
		return;
	}
}
/**
* Read one section's value under either model. The `entry-config` model has no
* `get`, so the value is projected out of `describe()` — the same resolved
* shape the configuration UI reads. A missing section and a throwing service
* both read as `undefined`.
*/
function readSettingsSection(settings, namespace) {
	const get = method(settings, "get");
	if (get !== void 0) try {
		const value = get.call(settings, namespace);
		if (value !== void 0) return value;
	} catch {}
	return descriptorOf(settings, namespace)?.value;
}
/**
* Read one section's user-override layer under either model. A descriptor's
* `user` layer holds only what the user explicitly wrote, which is the layer
* that can express "unset" for a field a schema supplies a default for; the
* resolved `value` cannot. A missing section, a section without a user layer,
* and a throwing service all read as `undefined`.
*/
function readSettingsSectionUser(settings, namespace) {
	return descriptorOf(settings, namespace)?.user;
}
/**
* The id a plugin's own configuration section carries. Under the
* `entry-config` model a section is addressed by its Loader entry id rather
* than by a registered namespace name.
*/
function settingsEntryId(ctx, fallback) {
	const id = record$3(ctx)?.fiber;
	const entryId = record$3(record$3(id)?.entry)?.options;
	const value = record$3(entryId)?.id;
	return typeof value === "string" && value.length > 0 ? value : fallback;
}
//#endregion
//#region lib/types/compat/version-map.js
const semverPattern = /^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:(?:0|[1-9]\d*|[0-9A-Za-z-]*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|[0-9A-Za-z-]*[A-Za-z-][0-9A-Za-z-]*))*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;
const legacyBaseModelFields = ["reasoningEfforts"];
const completeBaseModelFields = [
	"reasoningEfforts",
	"input",
	"contextWindow"
];
/**
* Half-open capability windows. Each `maximumExclusive` bound marks the first
* DSH version whose capabilities are not yet known, so a release newer than the
* newest window maps to nothing. An unmapped version is not an error: callers
* fall back to the runtime capability the host actually exposes, and
* `resolveCompatibility` reports the detected profile without a mismatch
* diagnostic. Extend the newest bound when a release is verified to stay inside
* the window it would otherwise fall out of.
*
* The newest window is bounded per minor line, matching how `0.1.6-0` was
* chosen for the `0.1.5` line: `0.1.6-alpha.1` was verified directly (modern
* Settings transport, `user`-layer reads, the same 15 editable compat fields,
* external language packs, optional takeover) and the bound moved to `0.1.7-0`
* so the whole `0.1.6` line resolves instead of falling out of the map.
*
* The `0.1.7` window records the settings rewrite: `0.1.7-alpha.1` was verified
* directly and keeps the modern transport, the `user` layer, the same 15
* editable compat fields, external language packs and optional takeover, but
* replaces namespace registration with per-entry `Config` forms. Its bound is
* `0.1.8-0` so the whole line resolves.
*/
const versionRanges = [
	{
		minimum: "0.1.0-rc.7",
		maximumExclusive: "0.1.0-rc.8",
		capabilities: {
			settingsTransport: "legacy",
			settingsApi: "connection.api.settings",
			settingsModel: "namespace",
			baseModelFields: legacyBaseModelFields,
			gatewayCompatFields: [],
			externalLanguages: false,
			takeoverTransport: "unsupported"
		}
	},
	{
		minimum: "0.1.0-rc.8",
		maximumExclusive: "0.1.2-alpha.1",
		capabilities: {
			settingsTransport: "legacy",
			settingsApi: "connection.api.settings",
			settingsModel: "namespace",
			baseModelFields: completeBaseModelFields,
			gatewayCompatFields: RC8_COMPAT_FIELDS,
			externalLanguages: false,
			takeoverTransport: "optional"
		}
	},
	{
		minimum: "0.1.2-alpha.1",
		maximumExclusive: "0.1.7-0",
		capabilities: {
			settingsTransport: "modern",
			settingsApi: "remote.settings",
			settingsModel: "namespace",
			baseModelFields: completeBaseModelFields,
			gatewayCompatFields: ALPHA1_PLUS_COMPAT_FIELDS,
			externalLanguages: true,
			takeoverTransport: "optional"
		}
	},
	{
		minimum: "0.1.7-0",
		maximumExclusive: "0.1.8-0",
		capabilities: {
			settingsTransport: "modern",
			settingsApi: "remote.settings",
			settingsModel: "entry-config",
			baseModelFields: completeBaseModelFields,
			gatewayCompatFields: ALPHA1_PLUS_COMPAT_FIELDS,
			externalLanguages: true,
			takeoverTransport: "optional"
		}
	}
];
function comparableVersion(value) {
	const [withoutBuild] = value.split("+", 2);
	const separator = withoutBuild.indexOf("-");
	const core = separator === -1 ? withoutBuild : withoutBuild.slice(0, separator);
	const prerelease = separator === -1 ? void 0 : withoutBuild.slice(separator + 1);
	const [major, minor, patch] = core.split(".").map(Number);
	return {
		major,
		minor,
		patch,
		prerelease: prerelease === void 0 ? [] : prerelease.split(".").map((part) => /^\d+$/.test(part) ? Number(part) : part)
	};
}
function compareVersions(left, right) {
	for (const key of [
		"major",
		"minor",
		"patch"
	]) if (left[key] !== right[key]) return left[key] < right[key] ? -1 : 1;
	if (left.prerelease.length === 0 || right.prerelease.length === 0) {
		if (left.prerelease.length === right.prerelease.length) return 0;
		return left.prerelease.length === 0 ? 1 : -1;
	}
	const length = Math.max(left.prerelease.length, right.prerelease.length);
	for (let index = 0; index < length; index += 1) {
		const leftPart = left.prerelease[index];
		const rightPart = right.prerelease[index];
		if (leftPart === void 0 || rightPart === void 0) return leftPart === void 0 ? -1 : 1;
		if (leftPart === rightPart) continue;
		if (typeof leftPart === "number" && typeof rightPart === "string") return -1;
		if (typeof leftPart === "string" && typeof rightPart === "number") return 1;
		return leftPart < rightPart ? -1 : 1;
	}
	return 0;
}
function isValidSemver(value) {
	return typeof value === "string" && semverPattern.test(value);
}
function capabilitiesForVersion(version) {
	if (!isValidSemver(version)) return void 0;
	const comparable = comparableVersion(version);
	return versionRanges.find((range) => compareVersions(comparable, comparableVersion(range.minimum)) >= 0 && compareVersions(comparable, comparableVersion(range.maximumExclusive)) < 0)?.capabilities;
}
function settingsModelForVersion(version) {
	return capabilitiesForVersion(version)?.settingsModel;
}
/**
* The settings model the plugin must code against. The live service decides,
* because the same version can be reached through a compatibility provider;
* the version map only answers when the service exposes neither shape. An
* unknown version with an unknown service yields `undefined`, and callers keep
* their most conservative behaviour.
*/
function settingsModelForRuntime(input) {
	const detected = settingsModelOf(input.settings);
	if (detected !== void 0) return detected;
	return typeof input.version === "string" ? settingsModelForVersion(input.version) : void 0;
}
//#endregion
//#region lib/types/compat/capabilities.js
function hasMethods(value, methods) {
	if (typeof value !== "object" && typeof value !== "function" || value === null) return false;
	return methods.every((method) => {
		let current = value;
		while (current !== null) {
			const descriptor = Object.getOwnPropertyDescriptor(current, method);
			if (descriptor === void 0) {
				current = Object.getPrototypeOf(current);
				continue;
			}
			return "value" in descriptor ? typeof descriptor.value === "function" : typeof Reflect.get(value, method) === "function";
		}
		return false;
	});
}
function capabilities(settings, externalLanguages) {
	return {
		settings,
		externalLanguages
	};
}
function hostCapabilities(input) {
	return capabilities(hasMethods(input.settings, ["update", "describe"]) ? "legacy" : "none", false);
}
//#endregion
//#region lib/types/host/types.js
function isUnknownRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isProviderProfile(value) {
	return isUnknownRecord(value);
}
function isAgentRequestConfig(value) {
	return isUnknownRecord(value);
}
//#endregion
//#region lib/types/host/settings.js
const SETTINGS_NAMESPACE = "llm-pi-ai";
const DEFAULT_LEVELS = {
	off: null,
	high: "high",
	max: "max"
};
const LOG_PREFIX$3 = "[@hytime/dsh-thinking-effort]";
/**
* Most fill passes one trigger may run before it stops re-running itself.
*
* A healthy host needs two: the write raises `settings/document-updated` at the
* end of `write()`, and the queued pass re-reads the filled section and finds
* nothing to do. A host whose write is accepted but never becomes observable
* raises that event after every pass, so the count is bounded here rather than
* left to spin. The budget belongs to the running chain, not to the trigger
* that started it: an event that arrives mid-fill is queued into that chain and
* spends the same budget rather than beginning a fresh one.
*/
const MAX_FILL_PASSES = 5;
function log$1(...args) {
	console.log(LOG_PREFIX$3, ...args);
}
function record$2(value) {
	return isUnknownRecord(value) ? value : void 0;
}
/**
* One read of the user's own layer.
*
* `providers` is the `providers` object of that layer — the only value any fill
* payload may quote.
*
* `readable` says whether the service returned a layer at all. It is not the
* same as `providers` being empty: under the namespace model the resolved read
* (`get`) and this layer read (`describe`) are separate service calls, so a
* resolved section can be available while the layer has not landed yet. An
* absent layer makes every resolved entry look unreachable, which must not be
* mistaken for a verdict (see {@link fillDefaults}).
*
* Deliberately not {@link readSettingsSection}, which returns the *resolved*
* section (schema defaults under composition base under the user's own keys).
* A path write merges into the user layer, so quoting a resolved entry is what
* pins `input`, `compat`, `headers`, `thinkingBudgets`, `defaultContextWindow`
* and friends into the user's document, where a later release can no longer
* reach them. `tests/settings-fill-write.test.ts` asserts the written payload
* against this layer alone, with the resolved layer carrying fields the user
* never wrote.
*
* Two host behaviours keep this the raw layer rather than a resolved snapshot,
* and a later DSH release changing either one re-introduces the inflation
* silently — the fill would keep writing what it reads here:
*
* - Under the `entry-config` model the descriptor's `user` value is
*   `projectForm(form, override)`, where `override` is the profile patch's own
*   row (`dsh-settings` `describe`). It carries only what that row states.
* - A path write's `current` is `projectForm(form, raw)` with
*   `raw = entry.options.config` (`dsh-settings` `write` → `dsh-config-editor`
*   `edit`), and `entry.options.config` stays raw because the loader's
*   config-update path passes `noSave = true`; `update` and `mutate` both go
*   through it. A write therefore merges into the user's layer, not into a
*   resolved value.
*
* No in-process test can observe either behaviour, because both live in the
* host. `tests/loader-composition.test.ts` asserts both against the pinned
* `0.1.7-alpha.1` root when the opt-in loader integration suite runs
* (`DSH_LOADER_INTEGRATION=1`): it writes one minimal path into this section
* and requires the user layer to hold exactly that path while the resolved
* value still carries the fields the user never wrote. A later host release is
* covered once that root moves; until then a change there reaches this fill
* unobserved.
*/
function readUserLayer(settings, namespace) {
	const user = readSettingsSectionUser(settings, namespace);
	if (!isUnknownRecord(user)) return {
		providers: void 0,
		readable: false
	};
	return {
		providers: user.providers,
		readable: true
	};
}
/**
* One model array with the default level set added where the resolved entry
* lacks it.
*
* Only entries the user's own layer carries can be written: the array is
* written whole, so an entry the user never declared has no user-layer fields
* to contribute, and adding it would replace the lower layer's copy of that
* entry (see {@link fillProviderDefaults}). Those entries, and every resolved
* entry past the user's own list, are counted as missing but unreachable.
*/
function withDefaultLevels(userModels, resolvedModels, skipped) {
	const reachable = userModels.flatMap((userEntry, index) => {
		const resolved = resolvedModels[index];
		if (record$2(resolved)?.reasoningEfforts !== void 0) return [];
		skipped.missing += 1;
		if (!isUnknownRecord(userEntry)) {
			skipped.unmatched += 1;
			return [];
		}
		return [{
			index,
			userEntry
		}];
	});
	for (const resolved of resolvedModels.slice(userModels.length)) {
		if (record$2(resolved)?.reasoningEfforts !== void 0) continue;
		skipped.missing += 1;
		skipped.unmatched += 1;
	}
	const models = [...userModels];
	for (const { index, userEntry } of reachable) models[index] = {
		...userEntry,
		reasoningEfforts: DEFAULT_LEVELS
	};
	return {
		models,
		changed: reachable.length
	};
}
/** Every resolved entry that still lacks a level set, none of them writable. */
function countUnreachable(resolvedModels, skipped) {
	for (const resolved of resolvedModels) {
		if (record$2(resolved)?.reasoningEfforts !== void 0) continue;
		skipped.missing += 1;
		skipped.unmatched += 1;
	}
	return {
		models: [],
		changed: 0
	};
}
/**
* The path edits that give every model a default thinking-level set.
*
* `providers` is the resolved section, which decides *where* a level is
* missing; `user` is the user's own layer, which supplies *what* is written.
* No payload may quote `providers`, or the write pins the schema defaults the
* entry took on (`input`, `compat`, `headers`, `thinkingBudgets`,
* `defaultContextWindow`, …) into the user's document, and a later release
* changing one of those defaults would never reach the user.
*
* A model array is addressed as a whole because the older settings service
* walks paths through plain objects only: a numeric index would replace the
* array with an object.
*
* That is also why a resolved entry the user's layer does not carry is reported
* in `skipped` rather than materialized. The reason is not that the service
* refuses the write: 0.1.7 accepts a `set` at `models[<userArrayLength>]` (its
* bounds check allows an index equal to the length when the op is a `set` and
* the path ends there), and a minimal `{ id, reasoningEfforts }` entry pins no
* resolved field. The reason is the container. An array has no per-element
* layer: `mergeLayers` replaces it wholesale (`if (!isPlainObject(under) ||
* !isPlainObject(over)) return over`), so materializing a base-only entry in
* the user's layer replaces the lower layer's copy of that entry. Its `name`,
* `contextWindow`, `input`, `compat` and the rest are then lost from the
* resolved section unless this fill restates them — the inflation this function
* exists to avoid.
*
* A model override is a dict keyed by model id, so its partial entry does merge
* over whatever a lower layer already describes. That asymmetry is the shape of
* the two containers, not a preference: a lower-layer override is filled and
* left minimal.
*/
function fillProviderDefaults(providers, user) {
	const skipped = {
		missing: 0,
		unmatched: 0
	};
	if (!isUnknownRecord(providers)) return {
		ops: [],
		filled: 0,
		skipped
	};
	const userProviders = record$2(user);
	const ops = [];
	let filled = 0;
	for (const [route, rawProfile] of Object.entries(providers)) {
		if (!isProviderProfile(rawProfile)) continue;
		const userProfile = userProviders?.[route];
		const ownProfile = record$2(userProfile);
		const models = rawProfile.models;
		const userModels = ownProfile?.models;
		if (Array.isArray(models)) {
			const merged = Array.isArray(userModels) ? withDefaultLevels(userModels, models, skipped) : countUnreachable(models, skipped);
			if (merged.changed > 0) {
				ops.push({
					op: "set",
					path: [
						"providers",
						route,
						"models"
					],
					value: merged.models
				});
				filled += merged.changed;
			}
		}
		const overrides = rawProfile.modelOverrides;
		if (isUnknownRecord(overrides)) for (const [id, rawEntry] of Object.entries(overrides)) {
			if (!isUnknownRecord(rawEntry) || rawEntry.reasoningEfforts !== void 0) continue;
			skipped.missing += 1;
			filled += 1;
			ops.push({
				op: "set",
				path: [
					"providers",
					route,
					"modelOverrides",
					id,
					"reasoningEfforts"
				],
				value: DEFAULT_LEVELS
			});
		}
	}
	return {
		ops,
		filled,
		skipped
	};
}
/**
* Report work the fill could see but could not reach, once per attempt. A
* section whose levels are all set stays silent, and so does a user who has
* written nothing yet: the line exists for the case an operator cannot
* otherwise distinguish from "nothing to do" — models supplied by a lower
* settings layer, whose entries cannot be materialized into the user's own
* layer without pinning the defaults resolution gave them. Without it, the only
* symptom is a reasoning-effort selector that never appears in Composer.
*/
function reportSkipped(skipped) {
	if (skipped.unmatched === 0) return;
	log$1("left", skipped.unmatched, "model(s) unfilled: declared by a lower settings layer,", "which an array path write cannot address without pinning that layer’s resolved fields");
}
/**
* Read the pi-ai section under either settings model. The `entry-config` model
* has no `get`, so the value comes from `describe()`; `readSettingsSection`
* covers both and never throws.
*
* This read only has a `providers` to fill because `llm-pi-ai` declares its
* `Config` as `z.object({ providers: z.dict(profile).default({}).volatile() })`:
* `describe()` lists an entry only when a volatile field makes its form live
* (`volatileForm`), so dropping that `.volatile()` removes the entry from the
* service reads entirely and this fill goes dead rather than inflating.
* `tests/loader-composition.test.ts` asserts all three halves against the pinned
* `0.1.7-alpha.1` root when the opt-in integration suite runs
* (`DSH_LOADER_INTEGRATION=1`): the entry is listed, a write under `providers`
* is accepted, and the fill's own write lands.
*/
function readSection(settings) {
	return readSettingsSection(settings, SETTINGS_NAMESPACE);
}
async function fillDefaults(settings) {
	if (settings.writable !== true) return { filled: 0 };
	const notYet = { filled: 0 };
	const section = readSection(settings);
	if (!isUnknownRecord(section)) return notYet;
	const user = readUserLayer(settings, SETTINGS_NAMESPACE);
	if (!user.readable) return notYet;
	const result = fillProviderDefaults(section.providers, user.providers);
	reportSkipped(result.skipped);
	const reachable = result.skipped.missing - result.skipped.unmatched;
	if (result.filled === 0) return {
		filled: 0,
		remaining: reachable
	};
	const mutate = settings.mutate;
	if (typeof mutate !== "function") {
		log$1("settings service cannot address paths; left", result.filled, "model(s) unfilled");
		return {
			filled: 0,
			remaining: reachable
		};
	}
	await mutate.call(settings, SETTINGS_NAMESPACE, result.ops);
	mark(`filled-${result.filled}`);
	log$1("filled default thinking levels for", result.filled, "model(s)");
	return {
		filled: result.filled,
		remaining: reachable
	};
}
function installSettingsWatcher(ctx) {
	const settings = ctx.settings;
	if (hostCapabilities({ settings }).settings === "none" || settings === void 0) {
		log$1("settings capability unavailable");
		return;
	}
	ctx.effect(() => {
		let alive = true;
		let retries = 0;
		let inFlight = false;
		let queued = false;
		let current = Promise.resolve({ filled: 0 });
		const timerDisposers = [];
		/**
		* Run fills one at a time, and run one more when a trigger arrives while a
		* fill is in progress.
		*
		* Running the second trigger alongside the first would make both read the
		* section before either write lands, so it would write the same fill and
		* bump the document revision twice. Dropping it instead is worse: a settings
		* change that lands mid-fill is never re-evaluated, so a fill derived from a
		* section the user was still writing stands. The queued run re-reads the
		* section after the write it was racing, which is what makes a
		* freshly-written section — the state a fill most needs to see — win.
		*
		* The caller's promise settles from inside the loop rather than through a
		* `finally` chain, so a trigger's continuation — including the retry a failed
		* fill schedules — runs in the same turn the last fill settles, and one
		* awaited trigger still performs exactly one scheduling decision.
		*
		* The pass count is bounded by {@link MAX_FILL_PASSES}, because the fill's
		* own write is one of the triggers this loop consumes.
		*/
		/**
		* The context the fill's write runs in.
		*
		* Under 0.1.7 the change event is raised from inside the write that caused
		* it: `dsh-settings` `write` → `describe` → emit, while
		* `dsh-config-editor.edit` still holds its `hmr.runExclusive` transaction
		* open. That transaction is tracked with `AsyncLocalStorage`, so a listener
		* that writes back is refused with "HMR transactions cannot be nested" —
		* and so is anything it defers, because a timer or promise created inside
		* the transaction inherits its context. The fill would then never write on
		* this model, which is exactly the case this resource exists for: it is
		* created while the plugin is applied, outside that transaction, so
		* entering it gives the write a context the host accepts.
		*/
		const fillScope = new AsyncResource("dsh-thinking-effort:settings-fill");
		const runFill = () => {
			if (inFlight) {
				queued = true;
				return current;
			}
			inFlight = true;
			let finish = () => {};
			let fail = () => {};
			const run = new Promise((resolve, reject) => {
				finish = resolve;
				fail = reject;
			});
			current = run;
			(async () => {
				try {
					let outcome = { filled: 0 };
					let passes = 0;
					do {
						queued = false;
						outcome = await fillDefaults(settings);
						passes += 1;
					} while (alive && queued && passes < MAX_FILL_PASSES);
					if (alive && queued) {
						queued = false;
						log$1("stopped the fill after", passes, "passes: the settings change never settled");
					}
					finish(outcome);
				} catch (error) {
					fail(error);
				} finally {
					inFlight = false;
				}
			})();
			return run;
		};
		const schedule = (delay) => {
			if (!alive) return;
			const disposer = ctx.timeout(() => {
				if (!alive) return;
				tryOnce();
			}, delay);
			if (typeof disposer === "function") timerDisposers.push(() => {
				disposer();
			});
		};
		const tryOnce = async () => {
			if (!alive) return;
			let settled = false;
			let outcome = {
				filled: 0,
				remaining: 0
			};
			try {
				outcome = await runFill();
				settled = true;
				if (outcome.filled > 0) return;
			} catch (error) {
				if (!alive) return;
				log$1("fill error:", error instanceof Error ? error.message : String(error));
			}
			if (!alive) return;
			if (settled && outcome.remaining === 0) return;
			retries += 1;
			if (retries <= 5) schedule(2e3);
		};
		schedule(500);
		const model = settingsModelForRuntime({ settings });
		const listenerDisposers = [];
		if (model !== void 0) for (const event of settingsChangeEvents(model)) {
			const disposer = ctx.on(event, (...args) => {
				if (!alive || args[0] !== "llm-pi-ai") return;
				fillScope.runInAsyncScope(() => runFill()).catch((error) => {
					if (alive) log$1("watch fill error:", error instanceof Error ? error.message : String(error));
				});
			});
			if (typeof disposer === "function") listenerDisposers.push(() => {
				disposer();
			});
		}
		return () => {
			alive = false;
			for (const dispose of timerDisposers.splice(0)) dispose();
			for (const dispose of listenerDisposers.splice(0)) dispose();
		};
	}, "dsh-thinking-effort: settings watcher");
}
//#endregion
//#region lib/types/compat/opencode-session.js
/**
* The section id under the registered-namespace settings model (rc.7 … 0.1.6).
* The 0.1.7 entry-config model addresses the section by Loader entry id
* instead, which `settingsEntryId` reads from the live fiber.
*/
const OPENCODE_SESSION_NAMESPACE = "dsh-thinking-effort";
const OPENCODE_SESSION_HEADER = "x-opencode-session";
/**
* The generator mode list: the Host resolves stored values against it and the
* Client renders the mode select in this order, so both sides read one copy.
* Kept in this module because the Client bundle imports it and must not pull a
* `node:` built-in in.
*/
const FORMAT_MODES = [
	"ses-derive",
	"passthrough",
	"template",
	"expression",
	"script"
];
/** The timestamp-source list; same single-copy rule as `FORMAT_MODES`. */
const FORMAT_TIMES = ["firstUse", "hash"];
/** The on-invalid policy list; same single-copy rule as `FORMAT_MODES`. */
const FORMAT_INVALID_POLICIES = [
	"warn",
	"drop",
	"send"
];
function record$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function ownRecord$2(value, key) {
	const object = record$1(value);
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	return record$1(object[key]);
}
function isOpenCodeSessionEnabled(settings, provider, model) {
	if (provider.length === 0 || model.length === 0) return false;
	const models = ownRecord$2(ownRecord$2(ownRecord$2(ownRecord$2(settings, "opencodeSession"), "providers"), provider), "models");
	return Object.prototype.hasOwnProperty.call(models ?? {}, model) && models?.[model] === true;
}
//#endregion
//#region lib/types/compat/opencode-expression.js
function tokenize(source) {
	const tokens = [];
	let index = 0;
	while (index < source.length) {
		const char = source[index];
		if (char === " " || char === "	" || char === "\n" || char === "\r") {
			index += 1;
			continue;
		}
		if (char === "\"" || char === "'") {
			const quote = char;
			index += 1;
			let value = "";
			let closed = false;
			while (index < source.length) {
				const current = source[index];
				if (current === "\\") {
					value += source[index + 1] ?? "";
					index += 2;
					continue;
				}
				if (current === quote) {
					index += 1;
					closed = true;
					break;
				}
				value += current;
				index += 1;
			}
			if (!closed) throw new Error("unterminated string literal");
			tokens.push({
				type: "string",
				value
			});
			continue;
		}
		if (/[0-9]/.test(char)) {
			let value = "";
			while (index < source.length && /[0-9.]/.test(source[index])) {
				value += source[index];
				index += 1;
			}
			tokens.push({
				type: "number",
				value
			});
			continue;
		}
		if (/[A-Za-z_]/.test(char)) {
			let value = "";
			while (index < source.length && /[A-Za-z0-9_]/.test(source[index])) {
				value += source[index];
				index += 1;
			}
			tokens.push({
				type: "ident",
				value
			});
			continue;
		}
		if (char === "(") {
			tokens.push({
				type: "lparen",
				value: "("
			});
			index += 1;
			continue;
		}
		if (char === ")") {
			tokens.push({
				type: "rparen",
				value: ")"
			});
			index += 1;
			continue;
		}
		if (char === ",") {
			tokens.push({
				type: "comma",
				value: ","
			});
			index += 1;
			continue;
		}
		if (char === "+") {
			tokens.push({
				type: "op",
				value: "+"
			});
			index += 1;
			continue;
		}
		throw new Error(`unexpected character '${char}'`);
	}
	tokens.push({
		type: "eof",
		value: ""
	});
	return tokens;
}
var ExpressionParser = class {
	tokens;
	index = 0;
	constructor(tokens) {
		this.tokens = tokens;
	}
	parse() {
		const node = this.parseAdditive();
		const tail = this.tokens[this.index];
		if (tail?.type !== "eof") throw new Error(`unexpected token '${tail?.value ?? ""}'`);
		return node;
	}
	parseAdditive() {
		let left = this.parsePrimary();
		while (this.tokens[this.index]?.type === "op" && this.tokens[this.index]?.value === "+") {
			this.index += 1;
			const right = this.parsePrimary();
			left = {
				kind: "binary",
				op: "+",
				left,
				right
			};
		}
		return left;
	}
	parsePrimary() {
		const token = this.tokens[this.index];
		if (token === void 0) throw new Error("unexpected end of expression");
		if (token.type === "string") {
			this.index += 1;
			return {
				kind: "literal",
				value: token.value
			};
		}
		if (token.type === "number") {
			this.index += 1;
			return {
				kind: "literal",
				value: Number(token.value)
			};
		}
		if (token.type === "lparen") {
			this.index += 1;
			const node = this.parseAdditive();
			if (this.tokens[this.index]?.type !== "rparen") throw new Error("expected ')'");
			this.index += 1;
			return node;
		}
		if (token.type === "ident") {
			const name = token.value;
			this.index += 1;
			if (this.tokens[this.index]?.type === "lparen") {
				this.index += 1;
				const args = [];
				if (this.tokens[this.index]?.type !== "rparen") {
					args.push(this.parseAdditive());
					while (this.tokens[this.index]?.type === "comma") {
						this.index += 1;
						args.push(this.parseAdditive());
					}
				}
				if (this.tokens[this.index]?.type !== "rparen") throw new Error("expected ')' after arguments");
				this.index += 1;
				return {
					kind: "call",
					name,
					args
				};
			}
			return {
				kind: "ref",
				name
			};
		}
		throw new Error(`unexpected token '${token.value}'`);
	}
};
function evaluateNode(node, scope, funcs) {
	switch (node.kind) {
		case "literal": return node.value;
		case "ref": {
			const lookup = scope;
			if (!Object.prototype.hasOwnProperty.call(lookup, node.name)) throw new Error(`unknown identifier '${node.name}'`);
			return lookup[node.name];
		}
		case "call": {
			if (!Object.prototype.hasOwnProperty.call(funcs, node.name)) throw new Error(`unknown function '${node.name}'`);
			const fn = funcs[node.name];
			return fn(...node.args.map((arg) => evaluateNode(arg, scope, funcs)));
		}
		case "binary": {
			const left = evaluateNode(node.left, scope, funcs);
			const right = evaluateNode(node.right, scope, funcs);
			if (typeof left === "number" && typeof right === "number") return left + right;
			return String(left) + String(right);
		}
	}
}
//#endregion
//#region lib/types/host/opencode-session-format.js
const LOG_PREFIX$2 = "[@hytime/dsh-thinking-effort]";
const SHA256_SEED = "dsh-thinking-effort/opencode-session";
const BASE62_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const DSH_SESSION_PREFIX = "session-";
const CACHE_MAX_ENTRIES = 4096;
const SCRIPT_STAT_MIN_INTERVAL_MS = 1e3;
function record(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function ownRecord$1(value, key) {
	const object = record(value);
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	return record(object[key]);
}
function stringValue(value, key) {
	const object = record(value);
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	const entry = object[key];
	return typeof entry === "string" ? entry : void 0;
}
/**
* Resolve the `opencodeSession.format` config from a raw settings value
* (the whole `dsh-thinking-effort` namespace). Unknown or malformed fields
* fall back to the mode defaults documented for each field, so a hand-written
* settings document never breaks header injection.
*/
function resolveFormatConfig(settings) {
	const raw = ownRecord$1(ownRecord$1(settings, "opencodeSession"), "format");
	const mode = FORMAT_MODES.includes(stringValue(raw, "mode")) ? stringValue(raw, "mode") : "ses-derive";
	const time = FORMAT_TIMES.includes(stringValue(raw, "time")) ? stringValue(raw, "time") : "firstUse";
	const onInvalid = FORMAT_INVALID_POLICIES.includes(stringValue(raw, "onInvalid")) ? stringValue(raw, "onInvalid") : "warn";
	const template = stringValue(raw, "template") ?? "";
	const expression = stringValue(raw, "expression") ?? "";
	const script = stringValue(raw, "script") ?? "";
	const validateSource = stringValue(raw, "validate") ?? "";
	let validate;
	if (validateSource.length > 0) try {
		validate = new RegExp(validateSource);
	} catch {
		validate = void 0;
	}
	return {
		mode,
		time,
		template,
		expression,
		script,
		validateSource,
		validate,
		onInvalid
	};
}
function configFingerprint(config) {
	return JSON.stringify([
		config.mode,
		config.time,
		config.template,
		config.expression,
		config.script,
		config.validateSource,
		config.onInvalid
	]);
}
/**
* Strip the `session-` prefix, hyphens and case so the same DSH session always
* derives the same id. Note this intentionally also folds ids that only differ
* in internal hyphen placement (`session-ab-cd` vs `session-a-bcd`); harmless
* for the UUID-shaped ids DSH actually produces.
*/
function normalizeSessionId(raw) {
	let value = raw.trim();
	if (value.startsWith(DSH_SESSION_PREFIX)) value = value.slice(8);
	value = value.replaceAll("-", "").toLowerCase();
	return value.length > 0 ? value : raw.trim();
}
function sha256Hex(input) {
	return createHash("sha256").update(input).digest("hex");
}
/** 48-bit millisecond timestamp as exactly 12 lowercase hex characters. */
function hexTime12(ms) {
	return (BigInt(Math.max(0, Math.floor(ms))) & 281474976710655n).toString(16).padStart(12, "0");
}
/** Deterministic 12-hex block derived from the session digest (`time: hash`). */
function hexTime12FromDigest(session) {
	return sha256Hex(`${SHA256_SEED}/${session}`).slice(0, 12);
}
/** Deterministic 14-character Base62 block: 80 bits of the session digest. */
function digestTail62(session) {
	const hex = sha256Hex(`${SHA256_SEED}/${session}`);
	return encodeBase62(BigInt(`0x${hex.slice(0, 20)}`), 14);
}
function encodeBase62(value, length) {
	let remaining = value;
	const chars = new Array(length);
	for (let index = length - 1; index >= 0; index -= 1) {
		chars[index] = BASE62_ALPHABET[Number(remaining % 62n)];
		remaining /= 62n;
	}
	return chars.join("");
}
/**
* Built on a null-prototype object so the inherited Object.prototype members
* are not even present, and the evaluator additionally checks own-property
* ownership.
*/
const EXPRESSION_FUNCS = Object.assign(Object.create(null), {
	sha256(value) {
		return sha256Hex(String(value));
	},
	slice(value, start, end) {
		return String(value).slice(Number(start), end === void 0 ? void 0 : Number(end));
	},
	lower(value) {
		return String(value).toLowerCase();
	},
	upper(value) {
		return String(value).toUpperCase();
	}
});
function evaluateExpression(source, scope, funcs) {
	return evaluateNode(new ExpressionParser(tokenize(source)).parse(), scope, funcs);
}
function renderTemplate(template, context) {
	const entries = [
		["{rawSessionId}", context.rawSessionId],
		["{sessionId}", context.sessionId],
		["{hex12}", context.hex12],
		["{tail62}", context.tail62],
		["{sha256}", context.sha256],
		["{now}", String(context.now)],
		["{provider}", context.provider],
		["{model}", context.model]
	];
	let value = template;
	for (const [placeholder, replacement] of entries) value = value.replaceAll(placeholder, replacement);
	return value;
}
/**
* Per-session generator; one instance per Host effect. The value cache is
* bounded (LRU), while `minted` timestamps are intentionally retained for the
* process lifetime so a session's value never changes once published.
*/
var OpenCodeSessionFormatter = class {
	cache = /* @__PURE__ */ new Map();
	/**
	* First-use minted hex blocks. Eviction removes only the value-cache entry,
	* never the mint: dropping it would re-mint on the next request and change
	* the header value for the same DSH session, breaking per-session stability.
	* Entries are a dozen bytes per distinct session, so retention is bounded in
	* practice and preferred over a second eviction policy.
	*/
	minted = /* @__PURE__ */ new Map();
	warned = /* @__PURE__ */ new Set();
	scripts = /* @__PURE__ */ new Map();
	now;
	log;
	constructor(deps = {}) {
		this.now = deps.now ?? (() => Date.now());
		this.log = deps.log ?? ((...args) => console.log(LOG_PREFIX$2, ...args));
	}
	/**
	* Produce the header value for one session. The result is cached per
	* normalized session id and config fingerprint, so the same DSH session
	* always yields the same value while the config is unchanged. The `script`
	* mode resolves asynchronously; all other modes are synchronous.
	*/
	format(request, config) {
		const session = normalizeSessionId(request.sessionId);
		const fingerprint = configFingerprint(config);
		const cached = this.cache.get(session);
		if (cached !== void 0 && cached.fingerprint === fingerprint) {
			this.cache.delete(session);
			this.cache.set(session, cached);
			return cached.value;
		}
		if (config.mode === "script") return this.computeScriptValue(request, session, config, fingerprint);
		return this.storeAndReturn(session, fingerprint, this.computeValue(request, session, config));
	}
	/** Forget cached values and minted timestamps. Mainly for tests. */
	reset() {
		this.cache.clear();
		this.minted.clear();
		this.scripts.clear();
	}
	computeValue(request, session, config) {
		switch (config.mode) {
			case "passthrough": return this.applyValidation(request.sessionId, config);
			case "ses-derive": return this.applyValidation(this.derive(session, config.time), config);
			case "template":
				if (config.template.length === 0) {
					this.warnOnce("template mode requires a non-empty template; using ses-derive for this session");
					return this.applyValidation(this.derive(session, config.time), config);
				}
				return this.applyValidation(renderTemplate(config.template, this.context(request, session, config.time)), config);
			case "expression": {
				if (config.expression.length === 0) {
					this.warnOnce("expression mode requires a non-empty expression; using ses-derive for this session");
					return this.applyValidation(this.derive(session, config.time), config);
				}
				let value;
				try {
					value = String(evaluateExpression(config.expression, this.context(request, session, config.time), EXPRESSION_FUNCS));
				} catch (error) {
					this.warnOnce(`expression error (${config.expression}); using ses-derive for this session: ${error instanceof Error ? error.message : String(error)}`);
					value = this.derive(session, config.time);
				}
				return this.applyValidation(value, config);
			}
			case "script": return;
		}
	}
	async computeScriptValue(request, session, config, fingerprint) {
		let value;
		if (config.script.length === 0) {
			this.warnOnce("script mode requires a non-empty script path; using ses-derive for this session");
			value = this.derive(session, config.time);
		} else {
			const module = await this.loadScript(config.script);
			if (module === void 0) {
				this.warnOnce(`script failed to load (${config.script}); using ses-derive for this session`);
				value = this.derive(session, config.time);
			} else try {
				const result = module.format(this.context(request, session, config.time));
				value = typeof result === "string" ? result : String(result);
			} catch (error) {
				this.warnOnce(`script format error (${config.script}); using ses-derive: ${error instanceof Error ? error.message : String(error)}`);
				value = this.derive(session, config.time);
			}
		}
		return this.storeAndReturn(session, fingerprint, this.applyValidation(value, config));
	}
	derive(session, time) {
		return `ses_${this.contextHex12(session, time)}${digestTail62(session)}`;
	}
	context(request, session, time) {
		return {
			provider: request.provider,
			model: request.model,
			rawSessionId: request.sessionId,
			sessionId: session,
			now: this.now(),
			hex12: this.contextHex12(session, time),
			tail62: digestTail62(session),
			sha256: sha256Hex(`${SHA256_SEED}/${session}`)
		};
	}
	contextHex12(session, time) {
		return time === "hash" ? hexTime12FromDigest(session) : this.mintHex12(session);
	}
	mintHex12(session) {
		let hex = this.minted.get(session);
		if (hex === void 0) {
			hex = hexTime12(this.now());
			this.minted.set(session, hex);
		}
		return hex;
	}
	applyValidation(value, config) {
		if (config.validate === void 0 || config.validate.test(value)) return value;
		if (config.onInvalid === "drop") {
			this.warnOnce(`x-opencode-session value failed validation and was dropped: ${value}`);
			return;
		}
		if (config.onInvalid === "send") return value;
		this.warnOnce(`x-opencode-session value failed validation but is still sent: ${value}`);
		return value;
	}
	storeAndReturn(session, fingerprint, value) {
		this.cache.delete(session);
		if (this.cache.size >= CACHE_MAX_ENTRIES) {
			const oldest = this.cache.keys().next().value;
			if (oldest !== void 0) this.cache.delete(oldest);
		}
		this.cache.set(session, {
			fingerprint,
			value
		});
		return value;
	}
	warnOnce(message) {
		if (this.warned.has(message)) return;
		this.warned.add(message);
		this.log(message);
	}
	async loadScript(path) {
		const now = this.now();
		let slot = this.scripts.get(path);
		if (slot !== void 0 && now - slot.stamp < SCRIPT_STAT_MIN_INTERVAL_MS) return slot.module;
		if (slot === void 0) {
			slot = {
				mtimeMs: -1,
				stamp: now,
				module: void 0,
				loading: void 0
			};
			this.scripts.set(path, slot);
		}
		if (slot.loading !== void 0) {
			const result = await slot.loading;
			slot.stamp = now;
			return result;
		}
		const info = await stat(path).catch((error) => {
			this.warnOnce(`script stat failed (${path}): ${error instanceof Error ? error.message : String(error)}`);
		});
		if (info === void 0) return slot.module;
		if (slot.module !== void 0 && info.mtimeMs === slot.mtimeMs) {
			slot.stamp = now;
			return slot.module;
		}
		const loading = this.importScript(path, info.mtimeMs).then((module) => {
			slot.mtimeMs = info.mtimeMs;
			slot.module = module;
			slot.loading = void 0;
			slot.stamp = now;
			return module;
		}, (error) => {
			this.warnOnce(`script load failed (${path}): ${error instanceof Error ? error.message : String(error)}`);
			slot.loading = void 0;
			return slot.module;
		});
		slot.loading = loading;
		return loading;
	}
	async importScript(path, mtimeMs) {
		const module = await import(`${pathToFileURL(path).href}?mtime=${mtimeMs}`);
		const format = module.format ?? module.default;
		if (typeof format !== "function") throw new Error("script must export a function named format (or a default function)");
		return { format: (context) => format(context) };
	}
};
//#endregion
//#region lib/types/host/plugin-settings.js
/**
* One stored configuration snapshot. Fields carry defaults so a section
* hand-written without them still resolves; `createdAt` is the sentinel for
* "never written", because the defaults materialize this object either way.
*/
const configSnapshot = z.object({
	kind: z.string().default("dsh-thinking-effort/config-snapshot"),
	version: z.number().default(1),
	createdAt: z.string().default(""),
	pluginVersion: z.string().default(""),
	sourceProfile: z.string().default("unknown"),
	sections: z.dict(z.any()).default({})
});
const openCodeSessionModels = z.dict(z.boolean()).default({});
const openCodeSessionProvider = z.object({ models: openCodeSessionModels }).default({ models: {} });
const openCodeSessionProviders = z.dict(openCodeSessionProvider).default({});
/**
* Defaults shared by the `format` section schema and the stored namespace
* shape, so the three literal copies stay in sync by construction.
*/
const OPENCODE_SESSION_FORMAT_DEFAULTS = {
	mode: "ses-derive",
	time: "firstUse",
	template: "",
	expression: "",
	script: "",
	validate: "",
	onInvalid: "warn"
};
const openCodeSessionFormat = z.object({
	mode: z.string().default("ses-derive"),
	time: z.string().default("firstUse"),
	template: z.string().default(""),
	expression: z.string().default(""),
	script: z.string().default(""),
	validate: z.string().default(""),
	onInvalid: z.string().default("warn")
}).default({ ...OPENCODE_SESSION_FORMAT_DEFAULTS });
/**
* Defaults shared by the `userAgent` section schema and the stored namespace
* shape (mirrors the `format` section above).
*/
const OPENCODE_SESSION_USER_AGENT_DEFAULTS = {
	value: "",
	providers: {}
};
const openCodeSessionUserAgent = z.object({
	value: z.string().default(""),
	providers: z.dict(z.object({
		enabled: z.boolean().default(false),
		value: z.string().default(""),
		models: openCodeSessionModels
	}).default({
		enabled: false,
		value: "",
		models: {}
	})).default({})
}).default({ ...OPENCODE_SESSION_USER_AGENT_DEFAULTS });
/**
* The resolved `opencodeSession` section, described once for both the section
* default and the namespace default below.
*/
const OPENCODE_SESSION_DEFAULTS = {
	providers: {},
	format: { ...OPENCODE_SESSION_FORMAT_DEFAULTS },
	userAgent: { ...OPENCODE_SESSION_USER_AGENT_DEFAULTS }
};
/**
* The fields both schema roots expose: the namespace the older releases
* register, and the Loader entry schema `Config` below. They are declared once
* so a field can never reach one root without the other.
*
* `subagentEffort` belongs here rather than in a section of its own because
* the 0.1.7 entry-config model derives one form per Loader entry, so the
* plugin owns exactly one section and every plugin setting lives in it.
*/
const PLUGIN_SETTINGS_FIELDS = {
	opencodeSession: z.object({
		providers: openCodeSessionProviders,
		format: openCodeSessionFormat,
		userAgent: openCodeSessionUserAgent
	}).default({ ...OPENCODE_SESSION_DEFAULTS }),
	subagentEffort: z.string().default(""),
	profiles: z.dict(configSnapshot).default({}),
	autoBackup: configSnapshot
};
/**
* The value an absent namespace resolves to. Both roots share it because
* schemastery deep-clones a fallback before normalizing it, so a resolution
* through one root is invisible to the other.
*
* It only supplies an empty `autoBackup`; a section that was written but never
* had a backup taken still resolves one from `configSnapshot`'s own defaults.
*/
const PLUGIN_SETTINGS_DEFAULTS = {
	opencodeSession: { ...OPENCODE_SESSION_DEFAULTS },
	subagentEffort: "",
	profiles: {},
	autoBackup: {
		kind: "dsh-thinking-effort/config-snapshot",
		version: 1,
		createdAt: "",
		pluginVersion: "",
		sourceProfile: "unknown",
		sections: {}
	}
};
/**
* The `dsh-thinking-effort` namespace schema. Keeping it in one module makes
* the stored shape knowable without reading the settings UI.
*
* The explicit `z<PluginSettings>` annotation is load-bearing, not decoration:
* without it the inferred type names a transitive dependency by its installed
* path, so `tsc` refuses to emit a portable declaration (`TS2742`) under a
* pnpm-style layout.
*/
const PLUGIN_SETTINGS_SCHEMA = z.object(PLUGIN_SETTINGS_FIELDS).default({ ...PLUGIN_SETTINGS_DEFAULTS });
/**
* The Loader entry's own config schema, from which DSH 0.1.7 derives this
* plugin's settings form; a plugin that exports no `Config` gets no form at
* all. It sits beside the namespace schema rather than replacing it, because
* `register`/`installSection` still serve the releases that predate entry
* configs.
*
* The root is volatile because the configuration snapshot writes `profiles`
* and `autoBackup` as whole sections, and entry-config rejects a write to a
* path that is not volatile.
*/
const Config = z.object(PLUGIN_SETTINGS_FIELDS).default({ ...PLUGIN_SETTINGS_DEFAULTS }).volatile();
//#endregion
//#region lib/types/host/opencode-session.js
const LOG_PREFIX$1 = "[@hytime/dsh-thinking-effort]";
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function ownRecord(value, key) {
	const object = isRecord(value) ? value : void 0;
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	return isRecord(object[key]) ? object[key] : void 0;
}
function nonEmptyString(value) {
	return typeof value === "string" && value.length > 0 ? value : void 0;
}
/**
* Resolve the `user-agent` override for one `provider/model` request. The
* master `value` under `opencodeSession.userAgent` is the enable switch:
* when it is empty the override is fully off. A route matches when its
* `enabled` flag is true (all models) or the exact model is toggled on; the
* route's own `value` wins over the master value when both exist.
*/
function resolveUserAgentValue(settings, provider, model) {
	if (provider.length === 0 || model.length === 0) return void 0;
	const userAgent = ownRecord(ownRecord(settings, "opencodeSession"), "userAgent");
	const masterValue = nonEmptyString(userAgent?.value);
	if (masterValue === void 0) return void 0;
	const providerEntry = ownRecord(ownRecord(userAgent, "providers"), provider);
	if (providerEntry === void 0) return void 0;
	const routeEnabled = providerEntry.enabled === true;
	const models = ownRecord(providerEntry, "models");
	const modelEnabled = models !== void 0 && models[model] === true;
	if (!routeEnabled && !modelEnabled) return void 0;
	return nonEmptyString(providerEntry.value) ?? masterValue;
}
function requestContext(options, settings) {
	if (!isRecord(options)) return void 0;
	const provider = nonEmptyString(options.provider);
	const model = nonEmptyString(options.model);
	const sessionId = nonEmptyString(options.sessionId);
	if (provider === void 0 || model === void 0) return void 0;
	const sessionEnabled = isOpenCodeSessionEnabled(settings, provider, model);
	const userAgentValue = resolveUserAgentValue(settings, provider, model);
	if (!sessionEnabled && userAgentValue === void 0) return void 0;
	return {
		provider,
		model,
		sessionId,
		sessionEnabled,
		userAgentValue,
		active: true
	};
}
function wrapStream(source, storage, request) {
	return { [Symbol.asyncIterator]() {
		const iterator = source[Symbol.asyncIterator]();
		const iteratorRequest = {
			...request,
			active: true
		};
		const deactivate = () => {
			iteratorRequest.active = false;
		};
		const run = (operation) => storage.run(iteratorRequest, operation);
		return {
			next(value) {
				return run(async () => {
					try {
						const result = await iterator.next(value);
						if (result.done) deactivate();
						return result;
					} catch (error) {
						deactivate();
						throw error;
					}
				});
			},
			return(value) {
				if (iterator.return === void 0) {
					deactivate();
					return Promise.resolve({
						done: true,
						value
					});
				}
				return run(async () => {
					try {
						const result = await iterator.return(value);
						deactivate();
						return result;
					} catch (error) {
						deactivate();
						throw error;
					}
				});
			},
			throw(error) {
				if (iterator.throw === void 0) {
					deactivate();
					return Promise.reject(error);
				}
				return run(async () => {
					try {
						const result = await iterator.throw(error);
						if (result.done) deactivate();
						return result;
					} catch (caught) {
						deactivate();
						throw caught;
					}
				});
			},
			[Symbol.asyncIterator]() {
				return this;
			}
		};
	} };
}
function headersForFetch(input, init) {
	const inputHeaders = typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0;
	const headers = new Headers(inputHeaders);
	if (init?.headers !== void 0) new Headers(init.headers).forEach((value, name) => headers.set(name, value));
	return headers;
}
async function fetchWithSession(formatter, storage, settingsSnapshot, originalFetch, input, init) {
	const request = storage.getStore();
	if (request === void 0 || request.active !== true) return originalFetch(input, init);
	const headers = headersForFetch(input, init);
	if (request.userAgentValue !== void 0) headers.set("user-agent", request.userAgentValue);
	const sessionId = request.sessionId;
	if (sessionId !== void 0 && request.sessionEnabled && !headers.has("x-opencode-session")) {
		let value;
		try {
			value = await formatter.format({
				provider: request.provider,
				model: request.model,
				sessionId
			}, resolveFormatConfig(settingsSnapshot));
		} catch (error) {
			console.warn(LOG_PREFIX$1, "session format error:", error instanceof Error ? error.message : String(error));
			value = request.sessionId;
		}
		if (value !== void 0) headers.set(OPENCODE_SESSION_HEADER, value);
	}
	return originalFetch(input, {
		...init,
		headers: new Headers(headers)
	});
}
/**
* Install the section under the `entry-config` model, where the plugin owns no
* registered namespace: its value is the `Config` of its own Loader entry, read
* back through `describe()` and addressed by the entry id.
*/
function installEntryConfigSettingsSection(ctx, fallbackNamespace, hooks) {
	const settings = ctx.settings;
	const entryId = settingsEntryId(ctx, fallbackNamespace);
	hooks.setSource(() => readSettingsSection(settings, entryId) ?? {});
	hooks.onChange();
	ctx.effect(() => () => {
		hooks.setSource(() => ({}));
		hooks.onChange();
	}, `${LOG_PREFIX$1}: OpenCode session settings`);
	for (const event of settingsChangeEvents("entry-config")) {
		const disposer = ctx.on(event, (...args) => {
			if (args[0] === entryId) hooks.onChange();
		});
		if (typeof disposer === "function") ctx.effect(() => () => {
			disposer();
		}, `${LOG_PREFIX$1}: OpenCode session watcher`);
	}
}
function installLegacySettingsSection(ctx, namespace, hooks) {
	if (typeof ctx.inject !== "function") {
		installEntryConfigSettingsSection(ctx, namespace, hooks);
		return;
	}
	ctx.inject(["settings"], (settingsContext) => {
		const register = settingsContext.settings.register;
		if (typeof register !== "function") return;
		const scope = register.call(settingsContext.settings, namespace, PLUGIN_SETTINGS_SCHEMA, { base: {} });
		hooks.setSource(() => scope.get());
		settingsContext.effect(() => () => {
			hooks.setSource(() => ({}));
			hooks.onChange();
		}, `${LOG_PREFIX$1}: legacy OpenCode session settings`);
		hooks.onChange();
		const unwatch = scope.watch(() => {
			hooks.onChange();
		});
		ctx.effect(() => () => {
			unwatch();
		}, `${LOG_PREFIX$1}: legacy OpenCode session watcher`);
	});
}
/**
* Install the session settings section on whichever settings architecture the
* runtime exposes. The 0.1.7 line took `register`/`installSection` away, so a
* missing registration API selects the entry-config path instead of failing
* the plugin entry.
*/
function installSettingsSectionCompat(ctx, hooks) {
	const settings = ctx.settings;
	const installSection = settings?.installSection;
	if (typeof installSection === "function") {
		installSection.call(settings, ctx, OPENCODE_SESSION_NAMESPACE, PLUGIN_SETTINGS_SCHEMA, {}, hooks);
		return;
	}
	if (typeof settings?.register === "function") {
		installLegacySettingsSection(ctx, OPENCODE_SESSION_NAMESPACE, hooks);
		return;
	}
	installEntryConfigSettingsSection(ctx, OPENCODE_SESSION_NAMESPACE, hooks);
}
/** Install the optional OpenCode session namespace and request Header bridge. */
function installOpenCodeSession(ctx) {
	let settingsSource = () => ({});
	let settingsSnapshot = {};
	installSettingsSectionCompat(ctx, {
		setSource(source) {
			settingsSource = source;
		},
		onChange() {
			settingsSnapshot = settingsSource();
		}
	});
	ctx.effect(() => {
		const storage = new AsyncLocalStorage();
		const formatter = new OpenCodeSessionFormatter();
		const listenerDisposer = ctx.on("llm/stream", (...args) => {
			const next = args[1];
			if (typeof next !== "function") return void 0;
			const source = next;
			const request = requestContext(args[0], settingsSnapshot);
			const stream = source();
			return request === void 0 ? stream : wrapStream(stream, storage, request);
		});
		const originalFetch = globalThis.fetch;
		if (typeof originalFetch !== "function") {
			console.warn(LOG_PREFIX$1, "global fetch unavailable; OpenCode session Header disabled");
			return () => {
				if (typeof listenerDisposer === "function") listenerDisposer();
				storage.disable();
			};
		}
		const patchedFetch = (input, init) => fetchWithSession(formatter, storage, settingsSnapshot, originalFetch, input, init);
		globalThis.fetch = patchedFetch;
		return () => {
			if (typeof listenerDisposer === "function") listenerDisposer();
			storage.disable();
			if (globalThis.fetch === patchedFetch) globalThis.fetch = originalFetch;
		};
	}, "dsh-thinking-effort: OpenCode session Header");
}
//#endregion
//#region lib/types/compat/model-source.js
function isPlainObject(value) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
	const prototype = Object.getPrototypeOf(value);
	return prototype === Object.prototype || prototype === null;
}
function hasModelSourceConflict(profile) {
	if (!isPlainObject(profile) || !Array.isArray(profile.models) || profile.models.length === 0) return false;
	const overrides = profile.modelOverrides;
	return isPlainObject(overrides) && Object.getOwnPropertyNames(overrides).length > 0;
}
//#endregion
//#region lib/types/host/subagent.js
const STANDARD_LEVELS = [
	"off",
	"minimal",
	"low",
	"medium",
	"high",
	"xhigh",
	"max"
];
const LOG_PREFIX = "[@hytime/dsh-thinking-effort]";
function log(...args) {
	console.log(LOG_PREFIX, ...args);
}
/**
* The effort one section's user layer declares, or `undefined` when that
* section does not override it. Only the user layer can express "unset": the
* resolved value always carries the schema's empty-string default.
*/
function effortFromUserLayer(settings, namespace) {
	const user = readSettingsSectionUser(settings, namespace);
	if (!isUnknownRecord(user)) return void 0;
	return typeof user.subagentEffort === "string" && user.subagentEffort.length > 0 ? user.subagentEffort : void 0;
}
/**
* Read the configured subagent effort from the section that stores it.
*
* The plugin's own section comes first, because that is where the 0.1.7
* entry-config model lets the plugin own the field. A miss there is not an
* error: the releases up to 0.1.6 wrote the value into the `llm-pi-ai` section,
* so that location stays readable and existing settings keep working. A value
* present in both places resolves to the plugin's own section.
*
* `ownSectionId` is the id the plugin's section carries on the running host:
* the Loader entry id under `entry-config`, the registered namespace under
* `namespace`. Callers holding a live context resolve it with
* `settingsEntryId`; the compile-time default answers for the rest.
*
* The logger sits in the signature because callers pass it positionally beside
* that id; this read has nothing to log, since a missing or unreadable section
* is `undefined` rather than an error.
*/
function readSubagentEffort(settings, _logger = log, ownSectionId = PLUGIN_ENTRY_ID) {
	if (settings === void 0) return void 0;
	const own = effortFromUserLayer(settings, ownSectionId);
	if (own !== void 0) return own;
	return effortFromUserLayer(settings, SETTINGS_NAMESPACE);
}
function findModel(settings, config) {
	const section = readSettingsSection(settings, SETTINGS_NAMESPACE);
	if (!isUnknownRecord(section) || !isUnknownRecord(section.providers)) return void 0;
	if (typeof config.provider !== "string" || typeof config.model !== "string") return void 0;
	if (!Object.prototype.hasOwnProperty.call(section.providers, config.provider)) return void 0;
	const profile = section.providers[config.provider];
	if (!isUnknownRecord(profile)) return void 0;
	if (hasModelSourceConflict(profile)) return void 0;
	if (Array.isArray(profile.models)) {
		const model = profile.models.find((entry) => isUnknownRecord(entry) && entry.id === config.model);
		if (model !== void 0) return model;
	}
	if (isUnknownRecord(profile.modelOverrides) && Object.prototype.hasOwnProperty.call(profile.modelOverrides, config.model)) return profile.modelOverrides[config.model];
}
function resolveSubagentEffort(settings, config, logger = log, ownSectionId = PLUGIN_ENTRY_ID) {
	const subagentEffort = readSubagentEffort(settings, logger, ownSectionId);
	if (subagentEffort === void 0) return void 0;
	if (STANDARD_LEVELS.includes(subagentEffort)) return subagentEffort;
	if (settings === void 0 || !isAgentRequestConfig(config)) return void 0;
	try {
		const model = findModel(settings, config);
		if (!isUnknownRecord(model) || !isUnknownRecord(model.reasoningEfforts)) return void 0;
		for (const [level, wire] of Object.entries(model.reasoningEfforts)) if (typeof wire === "string" && wire === subagentEffort) return level;
		logger("subagent custom effort is not mapped for", `${String(config.provider)}/${String(config.model)}`);
	} catch (error) {
		logger("resolve subagent effort error:", error instanceof Error ? error.message : String(error));
	}
}
function isSubagentPayload(payload) {
	if (!isUnknownRecord(payload) || !isUnknownRecord(payload.agent)) return false;
	const session = payload.agent.session;
	if (!isUnknownRecord(session) || !isUnknownRecord(session.header)) return false;
	return session.header.origin === "subagent";
}
async function handleAgentRequest(ctx, payload, next) {
	const config = await next();
	try {
		if (!isSubagentPayload(payload) || !isAgentRequestConfig(config)) return config;
		if (config.reasoningEffort !== void 0) return config;
		const effort = resolveSubagentEffort(ctx.settings, config, log, settingsEntryId(ctx, OPENCODE_SESSION_NAMESPACE));
		return effort === void 0 ? config : {
			...config,
			reasoningEffort: effort
		};
	} catch (error) {
		log("agent/request override error:", error instanceof Error ? error.message : String(error));
		return config;
	}
}
//#endregion
//#region lib/types/index.js
const name = "@hytime/dsh-thinking-effort";
const inject = [
	"settings",
	"timer",
	"llm"
];
function apply(ctx) {
	mark("apply");
	installSettingsWatcher(ctx);
	installOpenCodeSession(ctx);
	ctx.on("agent/request", (...args) => {
		const payload = args[0];
		const next = args[1];
		return handleAgentRequest(ctx, payload, next);
	}, { global: true });
}
//#endregion
export { Config, apply, inject, name };
