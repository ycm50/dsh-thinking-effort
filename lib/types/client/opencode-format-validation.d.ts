import { FORMAT_INVALID_POLICIES, FORMAT_MODES, FORMAT_TIMES } from '../compat/opencode-session.js';
import type { SettingsOp } from './types.js';
/**
 * The section the generator settings live in — the legacy registered namespace.
 * Under the 0.1.7 entry-config model they live in the plugin's own entry
 * section instead, so the card that reads and writes them is handed the id
 * `pluginSectionId` resolved from its own `describe()`.
 */
export declare const FORMAT_NAMESPACE = "dsh-thinking-effort";
/** The path prefix every generated op addresses. */
export declare const FORMAT_PATH: readonly ["opencodeSession", "format"];
export { FORMAT_INVALID_POLICIES, FORMAT_MODES, FORMAT_TIMES };
/** The seven editable fields, in the order the card renders them. */
export declare const FORMAT_KEYS: readonly ["mode", "time", "template", "expression", "script", "validate", "onInvalid"];
export type FormatField = typeof FORMAT_KEYS[number];
export interface FormatDraft {
    readonly mode: string;
    readonly time: string;
    readonly template: string;
    readonly expression: string;
    readonly script: string;
    readonly validate: string;
    readonly onInvalid: string;
}
export type FormatFieldError = 'validateRegex' | 'templateRequired' | 'expressionRequired' | 'expressionSyntax' | 'expressionUnknownName' | 'scriptRequired' | 'scriptNotAbsolute';
export interface FormatProblem {
    readonly field: FormatField;
    readonly error: FormatFieldError;
}
/**
 * Must equal the schema defaults in `src/host/plugin-settings.ts`. Kept as a
 * literal rather than derived from the schema because the client bundle does
 * not import the host schema.
 */
export declare const DEFAULT_FORMAT_DRAFT: FormatDraft;
/**
 * Read a draft from a namespace's raw user layer.
 *
 * Unsupported enum values fall back exactly the way the Host resolves them, so
 * the card never shows a mode the Host would not honour. The string fields are
 * taken verbatim, including values the Host would reject at runtime: showing
 * the stored text is what lets the user see and repair a bad entry.
 */
export declare function draftFromSettings(stored: unknown): FormatDraft;
/**
 * Every reason this draft would not do what it appears to say.
 *
 * The rules mirror `resolveFormatConfig` in the Host: a source it cannot parse
 * silently becomes "no validation at all", and an empty `template` /
 * `expression` / `script` silently falls back to `ses-derive`. Both cases look
 * configured to the user while behaving differently, which is exactly what the
 * card has to refuse.
 *
 * An `expression` is therefore checked past its syntax: the evaluator throws on
 * a name it does not know, the Host catches that together with every other
 * evaluation failure, and the same silent fallback follows. A misspelled
 * identifier or helper would read as configured while behaving as if the card
 * had never been filled in.
 */
export declare function formatFieldErrors(draft: FormatDraft): readonly FormatProblem[];
/**
 * One `set` op per changed field, so saving the generator never rewrites the
 * other keys this namespace holds — the profile library, the rollback copy,
 * and the per-model session switches the model editor owns.
 *
 * A whitespace-only `validate` is written as the empty string. The Host treats
 * any non-empty source as a filter, and whitespace compiles to a regex nothing
 * matches, so an accidental space would otherwise be stored as "drop every
 * value" — the opposite of what the field looks like it says.
 */
export declare function formatOps(draft: FormatDraft, saved: FormatDraft): readonly SettingsOp[];
