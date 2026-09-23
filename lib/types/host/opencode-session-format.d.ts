import type { OpenCodeSessionFormatMode, OpenCodeSessionInvalidPolicy, OpenCodeSessionTimeSource } from '../compat/opencode-session.js';
/**
 * The upstream format enforced by OpenCode Zen free tier, kept as the
 * documented default shape the `ses-derive` mode produces. Validation is only
 * applied when a user explicitly configures `validate`, so this constant is
 * informational rather than an enforced default check.
 */
export declare const OPENCODE_SESSION_DEFAULT_REGEX = "^ses_[0-9a-f]{12}[0-9A-Za-z]{14}$";
/** Context passed to template / expression / script modes and to the script export. */
export interface SessionFormatContext {
    readonly provider: string;
    readonly model: string;
    /** The raw session id exactly as the Host received it from `llm/stream`. */
    readonly rawSessionId: string;
    /** The session id normalized for derivation (prefix stripped, lowercased, no hyphens). */
    readonly sessionId: string;
    /** Current wall-clock milliseconds at evaluation time. */
    readonly now: number;
    /** 12 hex characters: minted once per session (`firstUse`) or derived from the session digest (`hash`). */
    readonly hex12: string;
    /** 14 Base62 characters derived deterministically from the session id. */
    readonly tail62: string;
    /** Full lowercase SHA-256 hex of the normalized session id. */
    readonly sha256: string;
}
export interface SessionFormatRequest {
    readonly provider: string;
    readonly model: string;
    readonly sessionId: string;
}
/** The fully resolved generator configuration after defaults materialize. */
export interface ResolvedFormatConfig {
    readonly mode: OpenCodeSessionFormatMode;
    readonly time: OpenCodeSessionTimeSource;
    readonly template: string;
    readonly expression: string;
    readonly script: string;
    readonly validateSource: string;
    readonly validate: RegExp | undefined;
    readonly onInvalid: OpenCodeSessionInvalidPolicy;
}
export interface FormatterDeps {
    readonly now?: () => number;
    readonly log?: (...args: unknown[]) => void;
}
/**
 * Resolve the `opencodeSession.format` config from a raw settings value
 * (the whole `dsh-thinking-effort` namespace). Unknown or malformed fields
 * fall back to the mode defaults documented for each field, so a hand-written
 * settings document never breaks header injection.
 */
export declare function resolveFormatConfig(settings: unknown): ResolvedFormatConfig;
/**
 * Strip the `session-` prefix, hyphens and case so the same DSH session always
 * derives the same id. Note this intentionally also folds ids that only differ
 * in internal hyphen placement (`session-ab-cd` vs `session-a-bcd`); harmless
 * for the UUID-shaped ids DSH actually produces.
 */
export declare function normalizeSessionId(raw: string): string;
/** 48-bit millisecond timestamp as exactly 12 lowercase hex characters. */
export declare function hexTime12(ms: number): string;
/** Deterministic 14-character Base62 block: 80 bits of the session digest. */
export declare function digestTail62(session: string): string;
/**
 * Per-session generator; one instance per Host effect. The value cache is
 * bounded (LRU), while `minted` timestamps are intentionally retained for the
 * process lifetime so a session's value never changes once published.
 */
export declare class OpenCodeSessionFormatter {
    private readonly cache;
    /**
     * First-use minted hex blocks. Eviction removes only the value-cache entry,
     * never the mint: dropping it would re-mint on the next request and change
     * the header value for the same DSH session, breaking per-session stability.
     * Entries are a dozen bytes per distinct session, so retention is bounded in
     * practice and preferred over a second eviction policy.
     */
    private readonly minted;
    private readonly warned;
    private readonly scripts;
    private readonly now;
    private readonly log;
    constructor(deps?: FormatterDeps);
    /**
     * Produce the header value for one session. The result is cached per
     * normalized session id and config fingerprint, so the same DSH session
     * always yields the same value while the config is unchanged. The `script`
     * mode resolves asynchronously; all other modes are synchronous.
     */
    format(request: SessionFormatRequest, config: ResolvedFormatConfig): string | undefined | Promise<string | undefined>;
    /** Forget cached values and minted timestamps. Mainly for tests. */
    reset(): void;
    private computeValue;
    private computeScriptValue;
    private derive;
    private context;
    private contextHex12;
    private mintHex12;
    private applyValidation;
    private storeAndReturn;
    private warnOnce;
    private loadScript;
    private importScript;
}
