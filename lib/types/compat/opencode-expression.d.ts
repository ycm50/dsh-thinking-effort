export type Token = {
    readonly type: 'string';
    readonly value: string;
} | {
    readonly type: 'number';
    readonly value: string;
} | {
    readonly type: 'ident';
    readonly value: string;
} | {
    readonly type: 'op';
    readonly value: string;
} | {
    readonly type: 'lparen' | 'rparen' | 'comma' | 'eof';
    readonly value: string;
};
export declare function tokenize(source: string): Token[];
export type Node = {
    readonly kind: 'literal';
    readonly value: string | number;
} | {
    readonly kind: 'ref';
    readonly name: string;
} | {
    readonly kind: 'call';
    readonly name: string;
    readonly args: readonly Node[];
} | {
    readonly kind: 'binary';
    readonly op: '+';
    readonly left: Node;
    readonly right: Node;
};
export declare class ExpressionParser {
    private readonly tokens;
    private index;
    constructor(tokens: readonly Token[]);
    parse(): Node;
    private parseAdditive;
    private parsePrimary;
}
export declare function evaluateNode(node: Node, scope: object, funcs: Record<string, (...args: unknown[]) => unknown>): unknown;
/**
 * Parse an expression without evaluating it.
 *
 * The Host uses this path indirectly (through {@link evaluateNode}) and the
 * Client uses it directly: a configuration that cannot be parsed makes the
 * Host fall back to `ses-derive`, so the card must refuse to save one.
 * @param source - expression text from the settings document.
 * @returns the parsed node.
 * @throws when the source is not a valid expression.
 */
export declare function parseExpression(source: string): Node;
/**
 * Every identifier the evaluation scope provides — the data keys of the Host's
 * `SessionFormatContext`. The Host asserts these two sets are exactly equal at
 * compile time, so this list cannot drift away from what evaluation sees.
 */
export declare const SESSION_CONTEXT_KEYS: readonly ["provider", "model", "rawSessionId", "sessionId", "now", "hex12", "tail62", "sha256"];
/** Every helper function `expression` mode may call. Also type-checked against the Host's table. */
export declare const EXPRESSION_HELPER_NAMES: readonly ["sha256", "slice", "lower", "upper"];
/**
 * Collect the names a parsed expression references or calls.
 *
 * The Host evaluates a name it does not know by throwing (`unknown identifier` /
 * `unknown function`), which the caller catches and turns into a silent fall
 * back to `ses-derive`. A validator therefore cannot stop at syntax: it has to
 * know which names exist.
 * @param node - a parsed expression.
 * @returns the referenced identifiers and the called function names.
 */
export declare function collectExpressionNames(node: Node): {
    readonly refs: readonly string[];
    readonly calls: readonly string[];
};
