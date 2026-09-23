import type { ConfigSnapshot, ParseResult, ParsedSnapshot } from './types.js';
/**
 * Validate an untrusted snapshot document. Every failure refuses the whole
 * file: a partial import would persist half a configuration while reporting
 * success. Unknown namespaces are the one tolerated deviation, because a
 * snapshot written by a newer plugin is otherwise still usable.
 */
export declare function parseSnapshot(input: string): ParseResult<ParsedSnapshot>;
/** Pretty-printed with a trailing newline so the file diffs cleanly in version control. */
export declare function serializeSnapshot(snapshot: ConfigSnapshot): string;
