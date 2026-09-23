window.__ModuleLoader__.load({ id: '@hytime/dsh-thinking-effort', factory: (require) => { var module = { exports: {} }; var exports = module.exports;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let react = require("react");
react = __toESM(react, 1);
let react_jsx_runtime = require("react/jsx-runtime");
//#region lib/types/locales/en.json
var en_default = {
	title: "Third-party model reasoning effort",
	description: "Select an effort and enter the exact value sent to the gateway. For example, set high to ultra to send ultra when High is selected in Composer. Models without a declaration use the default options (Off / High / Max).",
	subagentTitle: "Subagent reasoning effort",
	currentDefault: "Current default: {effort}",
	unconfiguredSubagent: "Not configured (subagents inherit the provider default)",
	providerDefault: "Provider default",
	apply: "Apply",
	presetOfficial: "Apply to all: Off / High / Max (official DeepSeek style)",
	presetGeneric: "Apply to all: Off / Low / Medium / High (generic)",
	searchPlaceholder: "Search models by name or ID…",
	loading: "Loading…",
	noModels: "No hand-declared pi-ai models",
	noMatches: "No matching models",
	noDeclared: "Not declared",
	route: "Route: {route}",
	customize: "Customize effort",
	collapse: "Collapse",
	editorTitle: "Edit effort (select a level, enter its wire value, then apply)",
	applyLevel: "Apply effort",
	restoreDefault: "Restore defaults",
	expandedCount: "{count} models expanded",
	versionLabel: "Plugin version",
	languageLabel: "Page language",
	languageChinese: "中文",
	languageEnglish: "English",
	languageJapanese: "日本語",
	languageKorean: "한국어",
	customPlaceholder: "Custom effort, e.g. ultra",
	offPlaceholder: "Empty = do not send",
	wirePlaceholder: "Custom wire value, e.g. ultra",
	noNamespace: "llm-pi-ai settings were not found (no third-party model configuration).",
	customEffortRequired: "Enter a custom reasoning effort",
	levelNeedsValue: "Effort {level} needs a wire value",
	atLeastThinking: "Select at least one reasoning effort",
	readSettingsFailed: "Failed to read settings: {message}",
	writeFailed: "Write failed. Please try again.",
	writeError: "Write failed: {message}",
	levelOff: "off",
	levelMinimal: "minimal",
	levelLow: "low",
	levelMedium: "medium",
	levelHigh: "high",
	levelXhigh: "xhigh",
	levelMax: "max",
	levelSuffix: " effort",
	pageTitle: "Model capabilities and effort",
	subagentCardTitle: "Subagent default effort",
	inputCapabilityMinimum: "Enable at least one input capability",
	contextInteger: "Context length must be an integer (2000-1000000)",
	contextRange: "Context length must be between 2000 and 1000000",
	saveMissingNamespace: "Saved, but the latest settings were not returned",
	settingsUpdated: "Settings updated",
	modelSettingsSaved: "Model settings saved",
	restoreReasoning: "Default reasoning effort restored",
	restoreCapability: "Default capabilities restored",
	officialPreset: "official preset",
	genericPreset: "generic preset",
	subagentSaved: "Subagent default effort saved",
	quickSettings: "Quick settings",
	vendor: "Provider",
	modelCount: "{count} models",
	searchResults: "Search results",
	model: "Model",
	unsaved: "Unsaved",
	textEnabled: "Text input: enabled",
	textDisabled: "Text input: disabled",
	imageEnabled: "Image input: enabled",
	imageDisabled: "Image input: disabled",
	openModelSettings: "Open model settings",
	closeModelSettings: "Collapse model settings",
	contextLength: "Context length",
	oneMillionMode: "1M mode",
	inputCapabilities: "Input capabilities",
	textInput: "Text input",
	imageInput: "Image input",
	reasoningLevels: "Reasoning effort",
	saveChanges: "Save changes",
	saved: "Saved",
	saveModelChanges: "Save model changes",
	noPendingChanges: "No pending changes",
	expandedSettings: "{count} models expanded",
	collapseProvider: "Collapse provider",
	expandProvider: "Expand provider",
	providerDefaultShort: "Provider default",
	contextTitle: "Context {value}",
	contextLabel: "Context {label}",
	gatewayMoreFields: "More fields ({count})",
	gatewayExpandedLess: "Fewer fields",
	gatewayGroupRole: "Role",
	gatewayGroupFormat: "Format",
	gatewayGroupStream: "Streaming",
	gatewayGroupCache: "Cache",
	gatewayCompatTitle: "Gateway compatibility",
	supportsDeveloperRole: "Developer role",
	maxTokensField: "Max tokens field",
	supportsStore: "Store",
	supportsReasoningEffort: "Reasoning effort",
	supportsUsageInStreaming: "Usage in streaming",
	supportsFinishReason: "Finish reason",
	requiresToolResultName: "Tool result name",
	requiresAssistantAfterToolResult: "Assistant after tool result",
	requiresThinkingAsText: "Thinking as text",
	requiresReasoningContentOnAssistantMessages: "Reasoning content on assistant messages",
	supportsThinkingTokenBudget: "Thinking token budget",
	supportsStrictMode: "Strict mode",
	supportsLongCacheRetention: "Long cache retention",
	thinkingFormat: "Thinking format",
	cacheControlFormat: "Cache control format",
	cacheControlFormatAnthropic: "anthropic",
	gatewayCompatAuto: "Auto",
	gatewayCompatSupported: "Supported",
	gatewayCompatUnsupported: "Unsupported",
	maxTokensFieldStandard: "max_tokens",
	maxTokensFieldCompletion: "max_completion_tokens",
	gatewayCompatUnavailable: "Unavailable",
	saveGatewayCompat: "Save gateway compatibility",
	gatewayCompatSaved: "Gateway compatibility saved",
	gatewayCompatSaveFailed: "Failed to save gateway compatibility",
	modelGatewayCompatTitle: "Model gateway compatibility",
	compatSourceModel: "Model override",
	compatSourceBase: "Base configuration",
	compatSourceProvider: "Provider",
	compatSourceCatalog: "Model catalog",
	compatSourceProtocol: "Protocol default",
	compatSourceUnknown: "Unknown source",
	inheritProviderCompat: "Auto inherits provider compatibility",
	saveModelGatewayCompat: "Save model compatibility",
	modelGatewayCompatSaved: "Model gateway compatibility saved",
	seatModelLoading: "Loading model…",
	seatNoModel: "No model selected",
	seatNoEfforts: "This model provides no reasoning effort levels",
	seatError: "Model directory failed to load: {message}",
	seatFollowDefault: "Follow model default",
	seatSliderLabel: "Reasoning effort",
	seatReasoningLabel: "Reasoning level",
	seatModelLabel: "Model",
	seatSearchModels: "Search models",
	seatNoModelResults: "No matching models",
	seatErrorAction: "Model operation failed: {message}",
	modelsArrayCompatSaveNote: "Saving changes updates only this model; other models are not affected.",
	opencodeSessionHeader: "OpenCode session Header",
	opencodeSessionHeaderTitle: "OpenCode session Header",
	opencodeSessionHeaderDescription: "For OpenCode, OpenCode Go, or a forwarding proxy, send a session value derived from the current DSH session as x-opencode-session for this model; the default generator matches the upstream format and is configurable under opencodeSession.format.",
	opencodeSessionSaved: "OpenCode session Header saved",
	opencodeSessionSaveFailed: "Failed to save OpenCode session Header: {message}",
	backupCardTitle: "Backup and profiles",
	backupCollapsedHint: "{count} profiles",
	backupCollapsedHintEmpty: "No profiles",
	backupProfilesTitle: "Profile library",
	backupProfilesEmpty: "No saved profiles yet",
	backupProfileNamePlaceholder: "Profile name, e.g. \"work\"",
	backupSaveCurrent: "Save current config",
	backupApply: "Apply",
	backupExportProfile: "Export",
	backupDeleteProfile: "Delete",
	backupDeleteConfirm: "Confirm delete",
	backupCancel: "Cancel",
	backupExportCurrent: "Export current config",
	backupExportHint: "The export can contain plaintext such as provider headers. Keep the file safe.",
	backupImportTitle: "Import config",
	backupImportChoose: "Choose file…",
	backupPreviewTitle: "Import preview",
	backupModeMerge: "Merge (keep what the file omits)",
	backupModeReplace: "Replace (the file wins)",
	backupSummary: "{added} added · {overwritten} overwritten · {removed} removed",
	backupSummaryEmpty: "Already matches this configuration; nothing to write",
	backupSummaryLibraryOnly: "The file carries only the profile library and the pre-import backup; neither is imported, so there is nothing to write",
	backupIgnored: "Ignored {count} unsupported entries",
	backupWiringSkipped: "Skipped {count} endpoint/credential setting(s); a snapshot only carries capability configuration",
	backupWiringInclude: "Also import endpoints and credentials (advanced)",
	formatCardTitle: "Session value generator",
	formatCardHint: "Current: {mode}",
	formatModeLabel: "Generator mode",
	formatModeSesDerive: "Derived ses_ value (default)",
	formatModePassthrough: "Send the DSH session id as-is",
	formatModeTemplate: "Template",
	formatModeExpression: "Expression",
	formatModeScript: "External script",
	formatTimeLabel: "Timestamp source",
	formatTimeFirstUse: "Minted on first use (fixed per session)",
	formatTimeHash: "Derived from the session digest (identical across machines)",
	formatApply: "Apply",
	formatSaved: "Generator settings saved",
	formatSaveFailed: "Saving generator settings failed: {message}",
	formatConflict: "Settings changed elsewhere; apply again.",
	formatOnInvalidLabel: "When validation fails",
	formatUnsupportedStored: "The stored value is not supported; resolved to: {detail}",
	formatTemplateLabel: "Template string",
	formatTemplateHint: "Placeholders: {hex12} {tail62} {sessionId} {rawSessionId} {sha256} {now} {provider} {model}",
	formatExpressionLabel: "Expression",
	formatExpressionHint: "Same identifiers as the template, plus sha256 / slice / lower / upper",
	formatScriptLabel: "Absolute script path",
	formatScriptHint: "Exports a format(context) function; reloaded within a second of changing",
	formatValidateLabel: "Validation regex",
	formatValidateHint: "Empty means no validation; the built-in shape is ^ses_[0-9a-f]{12}[0-9A-Za-z]{14}$",
	formatOnInvalidWarn: "Log it and still send",
	formatOnInvalidDrop: "Omit the Header",
	formatOnInvalidSend: "Send silently",
	formatErrValidateRegex: "Not a valid regular expression; the Host would fall back to no validation at all",
	formatErrTemplateRequired: "Template mode needs a template, or the Host falls back to the derived value",
	formatErrExpressionRequired: "Expression mode needs an expression, or the Host falls back to the derived value",
	formatErrExpressionSyntax: "The expression cannot be parsed; the Host would fall back to the derived value",
	formatErrExpressionUnknownName: "The expression references a name that does not exist; the Host would silently fall back to the derived value",
	formatErrScriptRequired: "Script mode needs a path, or the Host falls back to the derived value",
	formatErrScriptNotAbsolute: "Must be an absolute path (the Host resolves relative paths against its own working directory)",
	backupWiringWarning: "This import rewrites endpoint and credential settings",
	backupSourceFile: "From file",
	backupSourceProfile: "From profile \"{name}\"",
	backupSourceAutoBackup: "From the pre-import backup",
	backupConfirmImport: "Confirm import",
	backupApplied: "Configuration applied",
	backupAppliedPartial: "Partially applied: {detail}",
	backupSkipped: "No changes; nothing was written",
	backupRestartRequired: "Restart DSH to take effect: {namespaces}",
	backupAutoBackupFailed: "Could not write the pre-import backup: {message}",
	backupSavedProfile: "Saved profile \"{name}\"",
	backupSaveProfileFailed: "Could not save the profile: {message}",
	backupDeleteProfileFailed: "Could not delete the profile: {message}",
	backupImportFailed: "Import failed: {message}",
	backupReadFailed: "Could not read the file: {message}",
	backupProfileLimit: "At most {max} profiles; delete one first",
	backupNameRequired: "Enter a profile name",
	backupNameTooLong: "Profile names are limited to {max} characters",
	backupNameReserved: "That profile name is reserved",
	backupNameInvalid: "Profile names cannot contain control characters",
	backupNameTaken: "A profile with that name already exists",
	backupReadOnly: "The active settings source is read-only",
	backupAutoBackupTitle: "Pre-import backup",
	backupAutoBackupNone: "No automatic backup yet",
	backupAutoBackupRestore: "Restore the pre-import config",
	backupConflict: "The configuration changed in another window; review and retry",
	backupParseInvalidJson: "The file is not valid JSON",
	backupParseNotObject: "The file does not contain a configuration object",
	backupParseKindMismatch: "This file was not exported by this plugin",
	backupParseVersion: "Snapshot version {version} is not supported (supported: {supported})",
	backupParseSections: "The file is missing its sections",
	backupParseSection: "The {ns} section of the file is malformed",
	backupParseReserved: "The file contains an unsafe field name \"{key}\"",
	backupParseTooLarge: "The file is too large; the limit is {maxBytes} bytes"
};
//#endregion
//#region lib/types/client/locales.js
const LOCALE_DATA = {
	zh: {
		title: "第三方模型思考强度档位",
		description: "勾选档位后，右侧输入框可自由定义发送给网关的线上值。例如给 high 填 ultra，Composer 选中 High 时网关会收到 ultra。未设置档位的模型自动采用默认档位（Off / High / Max）。",
		subagentTitle: "子 agent 思考强度（Subagent 默认档位）",
		currentDefault: "当前默认：{effort}",
		unconfiguredSubagent: "未配置（子 agent 继承主 agent / 提供方默认）",
		providerDefault: "提供方默认",
		apply: "应用",
		presetOfficial: "应用到全部：Off / High / Max（官方 DeepSeek 风格）",
		presetGeneric: "应用到全部：Off / Low / Medium / High（通用）",
		searchPlaceholder: "搜索模型（名称或 ID）…",
		loading: "加载中…",
		noModels: "没有手工声明的 pi-ai 模型",
		noMatches: "没有匹配的模型",
		noDeclared: "未声明",
		route: "路由：{route}",
		customize: "自定义档位",
		collapse: "收起",
		editorTitle: "编辑档位（勾选后填写线上值，点击“应用此档位”保存）",
		applyLevel: "应用此档位",
		restoreDefault: "恢复默认档位",
		expandedCount: "已展开 {count} 个模型，可编辑档位",
		versionLabel: "插件版本",
		languageLabel: "页面语言",
		languageChinese: "中文",
		languageEnglish: "English",
		languageJapanese: "日本語",
		languageKorean: "한국어",
		customPlaceholder: "自定义档位，如 ultra",
		offPlaceholder: "留空 = 不发送",
		wirePlaceholder: "自定义线上值，如 ultra",
		noNamespace: "未找到 llm-pi-ai 设置命名空间（无第三方模型配置）。",
		customEffortRequired: "请输入自定义思考档位",
		levelNeedsValue: "档位 {level} 需要填写线上值",
		atLeastThinking: "至少需要一个思考档位",
		readSettingsFailed: "读取设置失败：{message}",
		writeFailed: "写入失败，请重试",
		writeError: "写入失败：{message}",
		levelOff: "off",
		levelMinimal: "minimal",
		levelLow: "low",
		levelMedium: "medium",
		levelHigh: "high",
		levelXhigh: "xhigh",
		levelMax: "max",
		levelSuffix: " 档位",
		pageTitle: "模型能力与档位",
		subagentCardTitle: "子 agent 默认档位",
		inputCapabilityMinimum: "至少启用一种输入能力",
		contextInteger: "上下文长度必须是整数（2000-1000000）",
		contextRange: "上下文长度必须在 2000 到 1000000 之间",
		saveMissingNamespace: "保存成功但未返回最新设置",
		settingsUpdated: "设置已更新",
		modelSettingsSaved: "模型设置已保存",
		restoreReasoning: "已恢复默认思考档位",
		restoreCapability: "已恢复默认能力",
		officialPreset: "官方预设",
		genericPreset: "通用预设",
		subagentSaved: "子 agent 默认档位已保存",
		quickSettings: "一键设置",
		vendor: "供应商",
		modelCount: "{count} 个模型",
		searchResults: "搜索结果",
		model: "模型",
		unsaved: "未保存",
		textEnabled: "文字输入：已启用",
		textDisabled: "文字输入：未启用",
		imageEnabled: "图像输入：已启用",
		imageDisabled: "图像输入：未启用",
		openModelSettings: "打开模型设置",
		closeModelSettings: "收起模型设置",
		contextLength: "上下文长度",
		oneMillionMode: "1M 模式",
		inputCapabilities: "输入能力",
		textInput: "文字输入",
		imageInput: "图像输入",
		reasoningLevels: "思考档位",
		saveChanges: "保存更改",
		saved: "已保存",
		saveModelChanges: "保存模型更改",
		noPendingChanges: "没有待保存的更改",
		expandedSettings: "已展开 {count} 个模型，可编辑设置",
		collapseProvider: "收起供应商",
		expandProvider: "展开供应商",
		providerDefaultShort: "提供方默认",
		contextTitle: "上下文 {value}",
		contextLabel: "上下文 {label}",
		gatewayMoreFields: "还有 {count} 个字段",
		gatewayExpandedLess: "收起字段",
		gatewayGroupRole: "角色",
		gatewayGroupFormat: "格式",
		gatewayGroupStream: "流式传输",
		gatewayGroupCache: "缓存",
		gatewayCompatTitle: "网关兼容性",
		supportsDeveloperRole: "Developer 角色",
		maxTokensField: "最大令牌字段",
		supportsStore: "存储支持",
		supportsReasoningEffort: "推理强度支持",
		supportsUsageInStreaming: "流式用量上报",
		supportsFinishReason: "结束原因",
		requiresToolResultName: "工具结果需含名称",
		requiresAssistantAfterToolResult: "工具结果后需 assistant 消息",
		requiresThinkingAsText: "思考以文本传递",
		requiresReasoningContentOnAssistantMessages: "assistant 消息需 reasoning 内容",
		supportsThinkingTokenBudget: "思考预算支持",
		supportsStrictMode: "严格模式",
		supportsLongCacheRetention: "长缓存保留",
		thinkingFormat: "思考格式",
		cacheControlFormat: "缓存控制格式",
		cacheControlFormatAnthropic: "anthropic",
		gatewayCompatAuto: "自动",
		gatewayCompatSupported: "支持",
		gatewayCompatUnsupported: "不支持",
		maxTokensFieldStandard: "max_tokens",
		maxTokensFieldCompletion: "max_completion_tokens",
		gatewayCompatUnavailable: "不可用",
		saveGatewayCompat: "保存网关兼容性",
		gatewayCompatSaved: "网关兼容性已保存",
		gatewayCompatSaveFailed: "保存网关兼容性失败",
		modelGatewayCompatTitle: "模型网关兼容性",
		compatSourceModel: "模型覆盖",
		compatSourceBase: "基础配置",
		compatSourceProvider: "提供方",
		compatSourceCatalog: "模型目录",
		compatSourceProtocol: "协议默认值",
		compatSourceUnknown: "来源未知",
		inheritProviderCompat: "自动继承提供方兼容性",
		saveModelGatewayCompat: "保存模型兼容性",
		modelGatewayCompatSaved: "模型网关兼容性已保存",
		seatModelLoading: "加载模型…",
		seatNoModel: "未选择模型",
		seatNoEfforts: "当前模型未提供推理档位",
		seatError: "模型目录加载失败：{message}",
		seatFollowDefault: "跟随模型默认",
		seatSliderLabel: "推理档位",
		seatReasoningLabel: "推理等级",
		seatModelLabel: "模型",
		seatSearchModels: "搜索模型",
		seatNoModelResults: "没有匹配的模型",
		seatErrorAction: "模型操作失败：{message}",
		modelsArrayCompatSaveNote: "保存后只会修改当前模型的设置，不会影响其他模型。",
		opencodeSessionHeader: "OpenCode 会话 Header",
		opencodeSessionHeaderTitle: "OpenCode 会话 Header",
		opencodeSessionHeaderDescription: "为 OpenCode、OpenCode Go 或会继续转发该 Header 的中转服务，为当前模型生成与 DSH 会话绑定的派生会话值（x-opencode-session）；默认生成器符合上游格式，可在设置文档的 opencodeSession.format 中调整。",
		opencodeSessionSaved: "OpenCode 会话 Header 已保存",
		opencodeSessionSaveFailed: "OpenCode 会话 Header 保存失败：{message}",
		backupCardTitle: "配置备份与方案",
		backupCollapsedHint: "{count} 份方案",
		backupCollapsedHintEmpty: "未保存方案",
		backupProfilesTitle: "方案库",
		backupProfilesEmpty: "还没有保存的方案",
		backupProfileNamePlaceholder: "方案名称，例如「工作」",
		backupSaveCurrent: "保存当前配置",
		backupApply: "应用",
		backupExportProfile: "导出",
		backupDeleteProfile: "删除",
		backupDeleteConfirm: "确认删除",
		backupCancel: "取消",
		backupExportCurrent: "导出当前配置",
		backupExportHint: "导出内容可能包含 provider 的 headers 等明文信息，请妥善保管文件。",
		backupImportTitle: "导入配置",
		backupImportChoose: "选择文件…",
		backupPreviewTitle: "导入预览",
		backupModeMerge: "合并（保留文件里没有的配置）",
		backupModeReplace: "替换（完全以文件为准）",
		backupSummary: "新增 {added} · 覆盖 {overwritten} · 删除 {removed}",
		backupSummaryEmpty: "与当前配置一致，无需写入",
		backupSummaryLibraryOnly: "文件中只有方案库和导入前的自动备份，这两项不会被导入，因此没有可写入的内容",
		backupIgnored: "已忽略 {count} 项不支持的配置",
		backupWiringSkipped: "已跳过 {count} 项端点/凭据设置（快照只迁移能力配置）",
		backupWiringInclude: "同时导入端点与凭据（高级）",
		formatCardTitle: "会话值生成器",
		formatCardHint: "当前：{mode}",
		formatModeLabel: "生成模式",
		formatModeSesDerive: "派生 ses_ 值（默认）",
		formatModePassthrough: "原样发送 DSH 会话 ID",
		formatModeTemplate: "模板",
		formatModeExpression: "表达式",
		formatModeScript: "外部脚本",
		formatTimeLabel: "时间戳来源",
		formatTimeFirstUse: "首次使用时铸造（会话内固定）",
		formatTimeHash: "由会话摘要派生（跨机器一致）",
		formatApply: "应用",
		formatSaved: "生成器设置已保存",
		formatSaveFailed: "生成器设置保存失败：{message}",
		formatConflict: "设置已被其他改动更新，请重新应用。",
		formatOnInvalidLabel: "校验失败时",
		formatUnsupportedStored: "已存值不受支持，已回退为：{detail}",
		formatTemplateLabel: "模板字符串",
		formatTemplateHint: "可用占位符：{hex12} {tail62} {sessionId} {rawSessionId} {sha256} {now} {provider} {model}",
		formatExpressionLabel: "表达式",
		formatExpressionHint: "可用标识符同模板占位符，另有函数 sha256 / slice / lower / upper",
		formatScriptLabel: "脚本绝对路径",
		formatScriptHint: "导出一个 format(context) 函数；文件变化后最多 1 秒内重新加载",
		formatValidateLabel: "校验正则",
		formatValidateHint: "留空表示不校验；内建默认形态为 ^ses_[0-9a-f]{12}[0-9A-Za-z]{14}$",
		formatOnInvalidWarn: "记录日志并仍然发送",
		formatOnInvalidDrop: "不发送该 Header",
		formatOnInvalidSend: "静默发送",
		formatErrValidateRegex: "不是合法的正则表达式，宿主会退化为「不校验」",
		formatErrTemplateRequired: "模板模式下模板不能为空，否则宿主会回退为派生值",
		formatErrExpressionRequired: "表达式模式下表达式不能为空，否则宿主会回退为派生值",
		formatErrExpressionSyntax: "表达式无法解析，宿主会回退为派生值",
		formatErrExpressionUnknownName: "表达式引用了不存在的标识符或函数，宿主会静默回退为派生值",
		formatErrScriptRequired: "脚本模式下路径不能为空，否则宿主会回退为派生值",
		formatErrScriptNotAbsolute: "必须是绝对路径（宿主按自己的运行目录解析相对路径）",
		backupWiringWarning: "本次导入会改写端点/凭据设置",
		backupSourceFile: "来自文件",
		backupSourceProfile: "来自方案「{name}」",
		backupSourceAutoBackup: "来自导入前的自动备份",
		backupConfirmImport: "确认导入",
		backupApplied: "配置已应用",
		backupAppliedPartial: "部分应用：{detail}",
		backupSkipped: "配置无变化，未写入",
		backupRestartRequired: "需要重启 DSH 后生效：{namespaces}",
		backupAutoBackupFailed: "写入导入前的自动备份失败：{message}",
		backupSavedProfile: "方案「{name}」已保存",
		backupSaveProfileFailed: "保存方案失败：{message}",
		backupDeleteProfileFailed: "删除方案失败：{message}",
		backupImportFailed: "导入失败：{message}",
		backupReadFailed: "读取文件失败：{message}",
		backupProfileLimit: "最多保存 {max} 份方案，请先删除一份",
		backupNameRequired: "请填写方案名称",
		backupNameTooLong: "方案名称不能超过 {max} 个字符",
		backupNameReserved: "方案名称不能使用保留字",
		backupNameInvalid: "方案名称不能包含控制字符",
		backupNameTaken: "已存在同名方案",
		backupReadOnly: "当前配置源只读，无法写入",
		backupAutoBackupTitle: "导入前的自动备份",
		backupAutoBackupNone: "暂无自动备份",
		backupAutoBackupRestore: "恢复导入前的配置",
		backupConflict: "配置已被其他窗口修改，请确认后重试",
		backupParseInvalidJson: "文件不是合法的 JSON",
		backupParseNotObject: "文件内容不是一个配置对象",
		backupParseKindMismatch: "这不是本插件导出的配置文件",
		backupParseVersion: "配置文件版本 {version} 不受支持（当前支持 {supported}）",
		backupParseSections: "配置文件缺少 sections",
		backupParseSection: "配置文件中的 {ns} 段格式不正确",
		backupParseReserved: "配置包含不安全的字段名「{key}」",
		backupParseTooLarge: "文件过大，上限 {maxBytes} 字节"
	},
	en: en_default,
	ja: {
		title: "サードパーティモデルの推論強度",
		description: "推論強度を選択し、ゲートウェイに送信する値を入力します。たとえば high に ultra を設定すると、Composer で High を選択したときに ultra が送信されます。未設定のモデルには既定の選択肢（Off / High / Max）が使用されます。",
		subagentTitle: "Subagent の推論強度",
		currentDefault: "現在の既定値：{effort}",
		unconfiguredSubagent: "未設定（Subagent はプロバイダーの既定値を継承）",
		providerDefault: "プロバイダーの既定値",
		apply: "適用",
		presetOfficial: "すべてに適用：Off / High / Max（公式 DeepSeek 形式）",
		presetGeneric: "すべてに適用：Off / Low / Medium / High（汎用）",
		searchPlaceholder: "モデル名または ID で検索…",
		loading: "読み込み中…",
		noModels: "手動で宣言された pi-ai モデルはありません",
		noMatches: "一致するモデルはありません",
		noDeclared: "未宣言",
		route: "ルート：{route}",
		customize: "推論強度をカスタマイズ",
		collapse: "折りたたむ",
		editorTitle: "推論強度を編集（レベルを選択し、送信値を入力して適用）",
		applyLevel: "推論強度を適用",
		restoreDefault: "既定値に戻す",
		expandedCount: "{count} 個のモデルを展開中",
		versionLabel: "プラグインバージョン",
		languageLabel: "ページの言語",
		languageChinese: "中文",
		languageEnglish: "English",
		languageJapanese: "日本語",
		languageKorean: "한국어",
		customPlaceholder: "カスタム推論強度（例：ultra）",
		offPlaceholder: "空欄 = 送信しない",
		wirePlaceholder: "カスタム送信値（例：ultra）",
		noNamespace: "llm-pi-ai の設定名前空間が見つかりません（サードパーティモデルの設定がありません）。",
		customEffortRequired: "カスタム推論強度を入力してください",
		levelNeedsValue: "推論強度 {level} には送信値が必要です",
		atLeastThinking: "少なくとも 1 つの推論強度を選択してください",
		readSettingsFailed: "設定の読み込みに失敗しました：{message}",
		writeFailed: "書き込みに失敗しました。もう一度お試しください。",
		writeError: "書き込みに失敗しました：{message}",
		levelOff: "off",
		levelMinimal: "minimal",
		levelLow: "low",
		levelMedium: "medium",
		levelHigh: "high",
		levelXhigh: "xhigh",
		levelMax: "max",
		levelSuffix: " の推論強度",
		pageTitle: "モデルの能力と推論強度",
		subagentCardTitle: "Subagent の既定の推論強度",
		inputCapabilityMinimum: "少なくとも 1 つの入力能力を有効にしてください",
		contextInteger: "コンテキスト長は整数で入力してください（2000-1000000）",
		contextRange: "コンテキスト長は 2000 から 1000000 の範囲で指定してください",
		saveMissingNamespace: "保存しましたが、最新の設定が返されませんでした",
		settingsUpdated: "設定を更新しました",
		modelSettingsSaved: "モデル設定を保存しました",
		restoreReasoning: "既定の推論強度に戻しました",
		restoreCapability: "既定の能力に戻しました",
		officialPreset: "公式プリセット",
		genericPreset: "汎用プリセット",
		subagentSaved: "Subagent の既定の推論強度を保存しました",
		quickSettings: "クイック設定",
		vendor: "プロバイダー",
		modelCount: "{count} 個のモデル",
		searchResults: "検索結果",
		model: "モデル",
		unsaved: "未保存",
		textEnabled: "テキスト入力：有効",
		textDisabled: "テキスト入力：無効",
		imageEnabled: "画像入力：有効",
		imageDisabled: "画像入力：無効",
		openModelSettings: "モデル設定を開く",
		closeModelSettings: "モデル設定を折りたたむ",
		contextLength: "コンテキスト長",
		oneMillionMode: "1M モード",
		inputCapabilities: "入力能力",
		textInput: "テキスト入力",
		imageInput: "画像入力",
		reasoningLevels: "推論強度",
		saveChanges: "変更を保存",
		saved: "保存済み",
		saveModelChanges: "モデルの変更を保存",
		noPendingChanges: "保存する変更はありません",
		expandedSettings: "{count} 個のモデル設定を展開中",
		collapseProvider: "プロバイダーを折りたたむ",
		expandProvider: "プロバイダーを展開",
		providerDefaultShort: "プロバイダーの既定値",
		contextTitle: "コンテキスト {value}",
		contextLabel: "コンテキスト {label}",
		gatewayMoreFields: "その他のフィールド（{count}）",
		gatewayExpandedLess: "フィールドを折りたたむ",
		gatewayGroupRole: "ロール",
		gatewayGroupFormat: "形式",
		gatewayGroupStream: "ストリーミング",
		gatewayGroupCache: "キャッシュ",
		gatewayCompatTitle: "ゲートウェイ互換性",
		supportsDeveloperRole: "Developer ロール",
		maxTokensField: "最大トークン項目",
		supportsStore: "ストレージ対応",
		supportsReasoningEffort: "推論強度対応",
		supportsUsageInStreaming: "ストリーミング中の使用量",
		supportsFinishReason: "終了理由",
		requiresToolResultName: "ツール結果名",
		requiresAssistantAfterToolResult: "ツール結果の後に Assistant",
		requiresThinkingAsText: "思考をテキストとして送信",
		requiresReasoningContentOnAssistantMessages: "Assistant メッセージに推論内容",
		supportsThinkingTokenBudget: "思考トークン予算対応",
		supportsStrictMode: "Strict モード",
		supportsLongCacheRetention: "長期キャッシュ保持",
		thinkingFormat: "思考フォーマット",
		cacheControlFormat: "キャッシュ制御形式",
		cacheControlFormatAnthropic: "anthropic",
		gatewayCompatAuto: "自動",
		gatewayCompatSupported: "対応",
		gatewayCompatUnsupported: "非対応",
		maxTokensFieldStandard: "max_tokens",
		maxTokensFieldCompletion: "max_completion_tokens",
		gatewayCompatUnavailable: "利用不可",
		saveGatewayCompat: "ゲートウェイ互換性を保存",
		gatewayCompatSaved: "ゲートウェイ互換性を保存しました",
		gatewayCompatSaveFailed: "ゲートウェイ互換性の保存に失敗しました",
		modelGatewayCompatTitle: "モデルゲートウェイ互換性",
		compatSourceModel: "モデルの上書き",
		compatSourceBase: "ベース設定",
		compatSourceProvider: "プロバイダー",
		compatSourceCatalog: "モデルカタログ",
		compatSourceProtocol: "プロトコルの既定値",
		compatSourceUnknown: "不明なソース",
		inheritProviderCompat: "自動でプロバイダーの互換性を継承",
		saveModelGatewayCompat: "モデルの互換性を保存",
		modelGatewayCompatSaved: "モデルゲートウェイ互換性を保存しました",
		seatModelLoading: "モデルを読み込み中…",
		seatNoModel: "モデルが選択されていません",
		seatNoEfforts: "現在のモデルには推論レベルの指定がありません",
		seatError: "モデルディレクトリの読み込みに失敗しました：{message}",
		seatFollowDefault: "モデルの既定値に従う",
		seatSliderLabel: "推論強度",
		seatReasoningLabel: "推論レベル",
		seatModelLabel: "モデル",
		seatSearchModels: "モデルを検索",
		seatNoModelResults: "一致するモデルがありません",
		seatErrorAction: "モデル操作に失敗しました：{message}",
		modelsArrayCompatSaveNote: "保存すると、このモデルの設定だけが変更され、他のモデルには影響しません。",
		opencodeSessionHeader: "OpenCode セッション Header",
		opencodeSessionHeaderTitle: "OpenCode セッション Header",
		opencodeSessionHeaderDescription: "OpenCode、OpenCode Go、またはこの Header を転送するプロキシ向けに、現在の DSH セッションから導出した値を x-opencode-session としてこのモデルに送信します。既定の生成器は上流の形式に従い、opencodeSession.format で変更できます。",
		opencodeSessionSaved: "OpenCode セッション Header を保存しました",
		opencodeSessionSaveFailed: "OpenCode セッション Header の保存に失敗しました：{message}",
		backupCardTitle: "設定のバックアップとプロファイル",
		backupCollapsedHint: "{count} 件のプロファイル",
		backupCollapsedHintEmpty: "プロファイルなし",
		backupProfilesTitle: "プロファイル一覧",
		backupProfilesEmpty: "保存されたプロファイルはまだありません",
		backupProfileNamePlaceholder: "プロファイル名（例：「仕事」）",
		backupSaveCurrent: "現在の設定を保存",
		backupApply: "適用",
		backupExportProfile: "書き出し",
		backupDeleteProfile: "削除",
		backupDeleteConfirm: "削除を確定",
		backupCancel: "キャンセル",
		backupExportCurrent: "現在の設定を書き出す",
		backupExportHint: "書き出した内容には provider の headers などの平文が含まれる場合があります。ファイルの保管にご注意ください。",
		backupImportTitle: "設定を読み込む",
		backupImportChoose: "ファイルを選択…",
		backupPreviewTitle: "読み込みプレビュー",
		backupModeMerge: "マージ（ファイルにない設定は保持）",
		backupModeReplace: "置換（ファイルの内容を優先）",
		backupSummary: "追加 {added} · 上書き {overwritten} · 削除 {removed}",
		backupSummaryEmpty: "現在の設定と同じため、書き込みは不要です",
		backupSummaryLibraryOnly: "ファイルにはプロファイル一覧と読み込み前の自動バックアップしか含まれておらず、これらは読み込まれないため、書き込む内容がありません",
		backupIgnored: "未対応の {count} 項目を無視しました",
		backupWiringSkipped: "エンドポイント/認証情報の設定 {count} 件をスキップしました（スナップショットは能力設定のみを移行します）",
		backupWiringInclude: "エンドポイントと認証情報もインポートする（上級者向け）",
		formatCardTitle: "セッション値ジェネレーター",
		formatCardHint: "現在：{mode}",
		formatModeLabel: "生成モード",
		formatModeSesDerive: "派生 ses_ 値（既定）",
		formatModePassthrough: "DSH セッション ID をそのまま送信",
		formatModeTemplate: "テンプレート",
		formatModeExpression: "式",
		formatModeScript: "外部スクリプト",
		formatTimeLabel: "タイムスタンプの取得元",
		formatTimeFirstUse: "初回使用時に生成（セッション内で固定）",
		formatTimeHash: "セッションのダイジェストから導出（マシン間で同一）",
		formatApply: "適用",
		formatSaved: "ジェネレーター設定を保存しました",
		formatSaveFailed: "ジェネレーター設定の保存に失敗しました：{message}",
		formatConflict: "設定が他で更新されました。もう一度適用してください。",
		formatOnInvalidLabel: "検証に失敗したとき",
		formatUnsupportedStored: "保存された値は未対応です。次のように解決しました：{detail}",
		formatTemplateLabel: "テンプレート文字列",
		formatTemplateHint: "使用できるプレースホルダー：{hex12} {tail62} {sessionId} {rawSessionId} {sha256} {now} {provider} {model}",
		formatExpressionLabel: "式",
		formatExpressionHint: "識別子はテンプレートと同じ。関数 sha256 / slice / lower / upper も利用できます",
		formatScriptLabel: "スクリプトの絶対パス",
		formatScriptHint: "format(context) をエクスポートするファイル。変更後 1 秒以内に再読み込みされます",
		formatValidateLabel: "検証用正規表現",
		formatValidateHint: "空欄は検証なし。組み込みの既定形式は ^ses_[0-9a-f]{12}[0-9A-Za-z]{14}$",
		formatOnInvalidWarn: "ログに記録して送信する",
		formatOnInvalidDrop: "Header を送信しない",
		formatOnInvalidSend: "黙って送信する",
		formatErrValidateRegex: "正規表現として不正です。ホストは「検証なし」に後退します",
		formatErrTemplateRequired: "テンプレートモードではテンプレートが必須です。空だとホストは派生値に後退します",
		formatErrExpressionRequired: "式モードでは式が必須です。空だとホストは派生値に後退します",
		formatErrExpressionSyntax: "式を解析できません。ホストは派生値に後退します",
		formatErrExpressionUnknownName: "式に存在しない識別子または関数があります。ホストは黙って派生値に後退します",
		formatErrScriptRequired: "スクリプトモードではパスが必須です。空だとホストは派生値に後退します",
		formatErrScriptNotAbsolute: "絶対パスである必要があります（ホストは相対パスを自身の作業ディレクトリで解決します）",
		backupWiringWarning: "このインポートはエンドポイントと認証情報の設定を書き換えます",
		backupSourceFile: "ファイルから",
		backupSourceProfile: "プロファイル「{name}」から",
		backupSourceAutoBackup: "読み込み前の自動バックアップから",
		backupConfirmImport: "読み込みを実行",
		backupApplied: "設定を適用しました",
		backupAppliedPartial: "一部のみ適用：{detail}",
		backupSkipped: "変更がないため書き込みませんでした",
		backupRestartRequired: "DSH の再起動後に反映されます：{namespaces}",
		backupAutoBackupFailed: "読み込み前の自動バックアップの保存に失敗：{message}",
		backupSavedProfile: "プロファイル「{name}」を保存しました",
		backupSaveProfileFailed: "プロファイルの保存に失敗：{message}",
		backupDeleteProfileFailed: "プロファイルの削除に失敗：{message}",
		backupImportFailed: "読み込みに失敗：{message}",
		backupReadFailed: "ファイルの読み取りに失敗：{message}",
		backupProfileLimit: "プロファイルは最大 {max} 件です。先に削除してください",
		backupNameRequired: "プロファイル名を入力してください",
		backupNameTooLong: "プロファイル名は {max} 文字以内で入力してください",
		backupNameReserved: "そのプロファイル名は予約されています",
		backupNameInvalid: "プロファイル名に制御文字は使用できません",
		backupNameTaken: "同名のプロファイルが既にあります",
		backupReadOnly: "現在の設定ソースは読み取り専用です",
		backupAutoBackupTitle: "読み込み前の自動バックアップ",
		backupAutoBackupNone: "自動バックアップはまだありません",
		backupAutoBackupRestore: "読み込み前の設定に戻す",
		backupConflict: "他のウィンドウで設定が変更されました。確認して再試行してください",
		backupParseInvalidJson: "ファイルが正しい JSON ではありません",
		backupParseNotObject: "ファイルの内容が設定オブジェクトではありません",
		backupParseKindMismatch: "このプラグインが書き出したファイルではありません",
		backupParseVersion: "設定ファイルのバージョン {version} は未対応です（対応：{supported}）",
		backupParseSections: "設定ファイルに sections がありません",
		backupParseSection: "設定ファイルの {ns} セクションの形式が正しくありません",
		backupParseReserved: "設定に安全でないフィールド名「{key}」が含まれています",
		backupParseTooLarge: "ファイルが大きすぎます（上限 {maxBytes} バイト）"
	},
	ko: {
		title: "타사 모델 추론 강도",
		description: "추론 강도를 선택하고 게이트웨이에 보낼 값을 입력합니다. 예를 들어 high에 ultra를 설정하면 Composer에서 High를 선택할 때 ultra가 전송됩니다. 설정이 없는 모델은 기본 선택 항목(Off / High / Max)을 사용합니다.",
		subagentTitle: "Subagent 추론 강도",
		currentDefault: "현재 기본값: {effort}",
		unconfiguredSubagent: "설정되지 않음 (Subagent가 제공자 기본값을 상속)",
		providerDefault: "제공자 기본값",
		apply: "적용",
		presetOfficial: "전체에 적용: Off / High / Max (공식 DeepSeek 방식)",
		presetGeneric: "전체에 적용: Off / Low / Medium / High (일반 방식)",
		searchPlaceholder: "모델 이름 또는 ID로 검색…",
		loading: "로드 중…",
		noModels: "수동으로 선언된 pi-ai 모델이 없습니다",
		noMatches: "일치하는 모델이 없습니다",
		noDeclared: "선언되지 않음",
		route: "라우트: {route}",
		customize: "추론 강도 사용자 지정",
		collapse: "접기",
		editorTitle: "추론 강도 편집 (단계를 선택하고 전송 값을 입력한 후 적용)",
		applyLevel: "추론 강도 적용",
		restoreDefault: "기본값 복원",
		expandedCount: "모델 {count}개 펼침",
		versionLabel: "플러그인 버전",
		languageLabel: "페이지 언어",
		languageChinese: "中文",
		languageEnglish: "English",
		languageJapanese: "日本語",
		languageKorean: "한국어",
		customPlaceholder: "사용자 지정 추론 강도 (예: ultra)",
		offPlaceholder: "비워 둠 = 전송하지 않음",
		wirePlaceholder: "사용자 지정 전송 값 (예: ultra)",
		noNamespace: "llm-pi-ai 설정 네임스페이스를 찾을 수 없습니다 (타사 모델 설정이 없습니다).",
		customEffortRequired: "사용자 지정 추론 강도를 입력하세요",
		levelNeedsValue: "추론 강도 {level}에는 전송 값이 필요합니다",
		atLeastThinking: "추론 강도를 하나 이상 선택하세요",
		readSettingsFailed: "설정을 읽지 못했습니다: {message}",
		writeFailed: "쓰기에 실패했습니다. 다시 시도하세요.",
		writeError: "쓰기에 실패했습니다: {message}",
		levelOff: "off",
		levelMinimal: "minimal",
		levelLow: "low",
		levelMedium: "medium",
		levelHigh: "high",
		levelXhigh: "xhigh",
		levelMax: "max",
		levelSuffix: " 추론 강도",
		pageTitle: "모델 기능 및 추론 강도",
		subagentCardTitle: "Subagent 기본 추론 강도",
		inputCapabilityMinimum: "입력 기능을 하나 이상 활성화하세요",
		contextInteger: "컨텍스트 길이는 정수여야 합니다 (2000-1000000)",
		contextRange: "컨텍스트 길이는 2000에서 1000000 사이여야 합니다",
		saveMissingNamespace: "저장했지만 최신 설정을 받지 못했습니다",
		settingsUpdated: "설정이 업데이트되었습니다",
		modelSettingsSaved: "모델 설정이 저장되었습니다",
		restoreReasoning: "기본 추론 강도를 복원했습니다",
		restoreCapability: "기본 기능을 복원했습니다",
		officialPreset: "공식 프리셋",
		genericPreset: "일반 프리셋",
		subagentSaved: "Subagent 기본 추론 강도가 저장되었습니다",
		quickSettings: "빠른 설정",
		vendor: "제공자",
		modelCount: "모델 {count}개",
		searchResults: "검색 결과",
		model: "모델",
		unsaved: "저장되지 않음",
		textEnabled: "텍스트 입력: 활성화됨",
		textDisabled: "텍스트 입력: 비활성화됨",
		imageEnabled: "이미지 입력: 활성화됨",
		imageDisabled: "이미지 입력: 비활성화됨",
		openModelSettings: "모델 설정 열기",
		closeModelSettings: "모델 설정 접기",
		contextLength: "컨텍스트 길이",
		oneMillionMode: "1M 모드",
		inputCapabilities: "입력 기능",
		textInput: "텍스트 입력",
		imageInput: "이미지 입력",
		reasoningLevels: "추론 강도",
		saveChanges: "변경 사항 저장",
		saved: "저장됨",
		saveModelChanges: "모델 변경 사항 저장",
		noPendingChanges: "저장할 변경 사항이 없습니다",
		expandedSettings: "모델 설정 {count}개 펼침",
		collapseProvider: "제공자 접기",
		expandProvider: "제공자 펼치기",
		providerDefaultShort: "제공자 기본값",
		contextTitle: "컨텍스트 {value}",
		contextLabel: "컨텍스트 {label}",
		gatewayMoreFields: "추가 필드 {count}개",
		gatewayExpandedLess: "필드 접기",
		gatewayGroupRole: "역할",
		gatewayGroupFormat: "형식",
		gatewayGroupStream: "스트리밍",
		gatewayGroupCache: "캐시",
		gatewayCompatTitle: "게이트웨이 호환성",
		supportsDeveloperRole: "Developer 역할",
		maxTokensField: "최대 토큰 필드",
		supportsStore: "스토어 지원",
		supportsReasoningEffort: "추론 강도 지원",
		supportsUsageInStreaming: "스트리밍 중 사용량",
		supportsFinishReason: "종료 이유",
		requiresToolResultName: "도구 결과 이름",
		requiresAssistantAfterToolResult: "도구 결과 후 Assistant",
		requiresThinkingAsText: "사고를 텍스트로 전달",
		requiresReasoningContentOnAssistantMessages: "Assistant 메시지에 추론 콘텐츠",
		supportsThinkingTokenBudget: "사고 토큰 예산 지원",
		supportsStrictMode: "엄격 모드",
		supportsLongCacheRetention: "장기 캐시 보존",
		thinkingFormat: "사고 형식",
		cacheControlFormat: "캐시 제어 형식",
		cacheControlFormatAnthropic: "anthropic",
		gatewayCompatAuto: "자동",
		gatewayCompatSupported: "지원",
		gatewayCompatUnsupported: "지원 안 함",
		maxTokensFieldStandard: "max_tokens",
		maxTokensFieldCompletion: "max_completion_tokens",
		gatewayCompatUnavailable: "사용할 수 없음",
		saveGatewayCompat: "게이트웨이 호환성 저장",
		gatewayCompatSaved: "게이트웨이 호환성을 저장했습니다",
		gatewayCompatSaveFailed: "게이트웨이 호환성을 저장하지 못했습니다",
		modelGatewayCompatTitle: "모델 게이트웨이 호환성",
		compatSourceModel: "모델 재정의",
		compatSourceBase: "기본 구성",
		compatSourceProvider: "제공자",
		compatSourceCatalog: "모델 카탈로그",
		compatSourceProtocol: "프로토콜 기본값",
		compatSourceUnknown: "알 수 없는 출처",
		inheritProviderCompat: "자동으로 제공자 호환성 상속",
		saveModelGatewayCompat: "모델 호환성 저장",
		modelGatewayCompatSaved: "모델 게이트웨이 호환성이 저장되었습니다",
		seatModelLoading: "모델 로드 중…",
		seatNoModel: "모델이 선택되지 않았습니다",
		seatNoEfforts: "현재 모델에는 추론 수준이 제공되지 않습니다",
		seatError: "모델 디렉터리를 불러오지 못했습니다: {message}",
		seatFollowDefault: "모델 기본값 따르기",
		seatSliderLabel: "추론 강도",
		seatReasoningLabel: "추론 수준",
		seatModelLabel: "모델",
		seatSearchModels: "모델 검색",
		seatNoModelResults: "일치하는 모델이 없습니다",
		seatErrorAction: "모델 작업에 실패했습니다: {message}",
		modelsArrayCompatSaveNote: "저장하면 현재 모델의 설정만 변경되며 다른 모델에는 영향을 주지 않습니다.",
		opencodeSessionHeader: "OpenCode 세션 Header",
		opencodeSessionHeaderTitle: "OpenCode 세션 Header",
		opencodeSessionHeaderDescription: "OpenCode, OpenCode Go 또는 이 Header를 전달하는 프록시를 위해 현재 DSH 세션에서 파생한 값을 이 모델의 x-opencode-session으로 보냅니다. 기본 생성기는 상류 형식을 따르며 opencodeSession.format에서 변경할 수 있습니다.",
		opencodeSessionSaved: "OpenCode 세션 Header를 저장했습니다",
		opencodeSessionSaveFailed: "OpenCode 세션 Header를 저장하지 못했습니다: {message}",
		backupCardTitle: "설정 백업 및 프로필",
		backupCollapsedHint: "프로필 {count}개",
		backupCollapsedHintEmpty: "프로필 없음",
		backupProfilesTitle: "프로필 목록",
		backupProfilesEmpty: "저장된 프로필이 없습니다",
		backupProfileNamePlaceholder: "프로필 이름 (예: \"업무\")",
		backupSaveCurrent: "현재 설정 저장",
		backupApply: "적용",
		backupExportProfile: "내보내기",
		backupDeleteProfile: "삭제",
		backupDeleteConfirm: "삭제 확인",
		backupCancel: "취소",
		backupExportCurrent: "현재 설정 내보내기",
		backupExportHint: "내보낸 내용에는 provider 의 headers 등 평문 정보가 포함될 수 있습니다. 파일을 안전하게 보관하세요.",
		backupImportTitle: "설정 가져오기",
		backupImportChoose: "파일 선택…",
		backupPreviewTitle: "가져오기 미리보기",
		backupModeMerge: "병합 (파일에 없는 설정은 유지)",
		backupModeReplace: "교체 (파일 내용 기준)",
		backupSummary: "추가 {added} · 덮어쓰기 {overwritten} · 삭제 {removed}",
		backupSummaryEmpty: "현재 설정과 동일하여 기록하지 않습니다",
		backupSummaryLibraryOnly: "파일에는 프로필 목록과 가져오기 전 자동 백업만 들어 있으며, 이 항목들은 가져오지 않으므로 기록할 내용이 없습니다",
		backupIgnored: "지원하지 않는 항목 {count}개를 무시했습니다",
		backupWiringSkipped: "엔드포인트/자격 증명 설정 {count}건을 건너뛰었습니다(스냅샷은 능력 설정만 이전합니다)",
		backupWiringInclude: "엔드포인트와 자격 증명도 가져오기(고급)",
		formatCardTitle: "세션 값 생성기",
		formatCardHint: "현재: {mode}",
		formatModeLabel: "생성 모드",
		formatModeSesDerive: "파생 ses_ 값(기본)",
		formatModePassthrough: "DSH 세션 ID를 그대로 전송",
		formatModeTemplate: "템플릿",
		formatModeExpression: "표현식",
		formatModeScript: "외부 스크립트",
		formatTimeLabel: "타임스탬프 원본",
		formatTimeFirstUse: "최초 사용 시 생성(세션 내 고정)",
		formatTimeHash: "세션 다이제스트에서 파생(머신 간 동일)",
		formatApply: "적용",
		formatSaved: "생성기 설정을 저장했습니다",
		formatSaveFailed: "생성기 설정 저장 실패: {message}",
		formatConflict: "설정이 다른 곳에서 변경되었습니다. 다시 적용하세요.",
		formatOnInvalidLabel: "검증 실패 시",
		formatUnsupportedStored: "저장된 값을 지원하지 않습니다. 다음과 같이 해석했습니다: {detail}",
		formatTemplateLabel: "템플릿 문자열",
		formatTemplateHint: "사용 가능한 자리 표시자: {hex12} {tail62} {sessionId} {rawSessionId} {sha256} {now} {provider} {model}",
		formatExpressionLabel: "표현식",
		formatExpressionHint: "식별자는 템플릿과 같고, 함수 sha256 / slice / lower / upper도 쓸 수 있습니다",
		formatScriptLabel: "스크립트 절대 경로",
		formatScriptHint: "format(context)를 내보내는 파일이며, 변경 후 1초 이내에 다시 로드됩니다",
		formatValidateLabel: "검증 정규식",
		formatValidateHint: "비우면 검증하지 않습니다. 내장 기본 형식은 ^ses_[0-9a-f]{12}[0-9A-Za-z]{14}$",
		formatOnInvalidWarn: "로그를 남기고 그대로 전송",
		formatOnInvalidDrop: "Header를 보내지 않음",
		formatOnInvalidSend: "조용히 전송",
		formatErrValidateRegex: "정규식이 올바르지 않습니다. 호스트는 '검증 없음'으로 후퇴합니다",
		formatErrTemplateRequired: "템플릿 모드에는 템플릿이 필요합니다. 비우면 호스트가 파생 값으로 후퇴합니다",
		formatErrExpressionRequired: "표현식 모드에는 표현식이 필요합니다. 비우면 호스트가 파생 값으로 후퇴합니다",
		formatErrExpressionSyntax: "표현식을 해석할 수 없습니다. 호스트가 파생 값으로 후퇴합니다",
		formatErrExpressionUnknownName: "표현식에 존재하지 않는 식별자나 함수가 있습니다. 호스트가 조용히 파생 값으로 후퇴합니다",
		formatErrScriptRequired: "스크립트 모드에는 경로가 필요합니다. 비우면 호스트가 파생 값으로 후퇴합니다",
		formatErrScriptNotAbsolute: "절대 경로여야 합니다(호스트는 상대 경로를 자신의 작업 디렉터리 기준으로 해석합니다)",
		backupWiringWarning: "이번 가져오기는 엔드포인트와 자격 증명 설정을 변경합니다",
		backupSourceFile: "파일에서",
		backupSourceProfile: "프로필 \"{name}\" 에서",
		backupSourceAutoBackup: "가져오기 전 자동 백업에서",
		backupConfirmImport: "가져오기 실행",
		backupApplied: "설정을 적용했습니다",
		backupAppliedPartial: "일부만 적용됨: {detail}",
		backupSkipped: "변경 사항이 없어 기록하지 않았습니다",
		backupRestartRequired: "DSH 재시작 후 적용됩니다: {namespaces}",
		backupAutoBackupFailed: "가져오기 전 자동 백업 저장 실패: {message}",
		backupSavedProfile: "프로필 \"{name}\" 을(를) 저장했습니다",
		backupSaveProfileFailed: "프로필 저장 실패: {message}",
		backupDeleteProfileFailed: "프로필 삭제 실패: {message}",
		backupImportFailed: "가져오기 실패: {message}",
		backupReadFailed: "파일을 읽지 못했습니다: {message}",
		backupProfileLimit: "프로필은 최대 {max}개입니다. 먼저 삭제하세요",
		backupNameRequired: "프로필 이름을 입력하세요",
		backupNameTooLong: "프로필 이름은 {max}자 이내여야 합니다",
		backupNameReserved: "사용할 수 없는 프로필 이름입니다",
		backupNameInvalid: "프로필 이름에 제어 문자를 쓸 수 없습니다",
		backupNameTaken: "같은 이름의 프로필이 이미 있습니다",
		backupReadOnly: "현재 설정 소스는 읽기 전용입니다",
		backupAutoBackupTitle: "가져오기 전 자동 백업",
		backupAutoBackupNone: "자동 백업이 아직 없습니다",
		backupAutoBackupRestore: "가져오기 전 설정으로 복원",
		backupConflict: "다른 창에서 설정이 변경되었습니다. 확인 후 다시 시도하세요",
		backupParseInvalidJson: "파일이 올바른 JSON 이 아닙니다",
		backupParseNotObject: "파일 내용이 설정 객체가 아닙니다",
		backupParseKindMismatch: "이 플러그인이 내보낸 파일이 아닙니다",
		backupParseVersion: "설정 파일 버전 {version} 은(는) 지원되지 않습니다 (지원: {supported})",
		backupParseSections: "설정 파일에 sections 가 없습니다",
		backupParseSection: "설정 파일의 {ns} 섹션 형식이 올바르지 않습니다",
		backupParseReserved: "설정에 안전하지 않은 필드 이름 \"{key}\" 이(가) 있습니다",
		backupParseTooLarge: "파일이 너무 큽니다 (최대 {maxBytes} 바이트)"
	}
};
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
const GATEWAY_COMPAT_GROUPS = [
	{
		id: "role",
		titleKey: "gatewayGroupRole"
	},
	{
		id: "format",
		titleKey: "gatewayGroupFormat"
	},
	{
		id: "stream",
		titleKey: "gatewayGroupStream"
	},
	{
		id: "cache",
		titleKey: "gatewayGroupCache"
	}
];
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
const GATEWAY_COMPAT_FIELD_KEYS = Object.keys(GATEWAY_COMPAT_FIELDS);
/**
* Return the gateway compat fields offered by a route's `api` protocol. An
* unknown or missing api offers every registered field, so routes that do not
* declare a protocol keep the previous full-field compatibility behavior.
* Handles api values that are a string, an object (e.g. the provider profile),
* or undefined.
*/
function fieldsForApi(api) {
	const rawProtocol = typeof api === "string" && api.length > 0 ? api : record$7(api)?.api;
	const protocol = typeof rawProtocol === "string" && rawProtocol.length > 0 ? rawProtocol : void 0;
	if (protocol === void 0) return GATEWAY_COMPAT_FIELD_KEYS;
	const offered = GATEWAY_COMPAT_FIELD_KEYS.filter((key) => GATEWAY_COMPAT_FIELDS[key].protocols.some((candidate) => candidate === protocol));
	return offered.length > 0 ? offered : GATEWAY_COMPAT_FIELD_KEYS;
}
function record$7(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
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
function fieldsInGroup(group) {
	return GATEWAY_COMPAT_FIELD_KEYS.map((key) => GATEWAY_COMPAT_FIELDS[key]).filter((spec) => spec.group === group);
}
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
function takeoverTransportForVersion(version) {
	return capabilitiesForVersion(version)?.takeoverTransport;
}
function takeoverSupportedForVersion(version) {
	return takeoverTransportForVersion(version) === "optional";
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
function clientCapabilities(input) {
	return capabilities(hasMethods(input.remoteSettings, ["describe", "mutate"]) ? "remote" : hasMethods(input.legacySettings, ["describe", "mutate"]) ? "legacy" : "none", typeof input.addLanguage === "function");
}
//#endregion
//#region lib/types/compat/version-adapter.js
function profileForCapabilities(capabilities) {
	if (capabilities.settings === "remote") return "modern";
	if (capabilities.settings === "legacy") return "legacy";
	return "unknown";
}
function invalidVersionDiagnostic(version, capabilities) {
	return {
		code: "invalid-version",
		...version === void 0 ? {} : { version },
		actualCapabilities: capabilities,
		message: "Runtime version metadata is not a valid semver value."
	};
}
function mismatchDiagnostic(version, expectedProfile, capabilities) {
	return {
		code: "version-capability-mismatch",
		version,
		expectedProfile,
		actualCapabilities: capabilities,
		message: `Version metadata expects ${expectedProfile}, but detected capabilities select ${profileForCapabilities(capabilities)}.`
	};
}
function resolveCompatibility(input) {
	const { capabilities } = input;
	const actualProfile = profileForCapabilities(capabilities);
	const version = input.version;
	const diagnostics = [];
	if (version === void 0) return {
		profile: actualProfile,
		capabilities,
		diagnostics
	};
	if (!isValidSemver(version)) return {
		profile: "unknown",
		...typeof version === "string" ? { version } : {},
		capabilities,
		diagnostics: [invalidVersionDiagnostic(typeof version === "string" ? version : void 0, capabilities)]
	};
	const mappedCapabilities = capabilitiesForVersion(version);
	const expected = mappedCapabilities === void 0 ? void 0 : mappedCapabilities.settingsTransport;
	if (expected === void 0) return {
		profile: actualProfile,
		version,
		capabilities,
		diagnostics
	};
	if (expected !== actualProfile) {
		diagnostics.push(mismatchDiagnostic(version, expected, capabilities));
		return {
			profile: actualProfile,
			version,
			expected,
			versionCapabilities: mappedCapabilities,
			capabilities,
			diagnostics
		};
	}
	return {
		profile: expected,
		version,
		expected,
		versionCapabilities: mappedCapabilities,
		capabilities,
		diagnostics
	};
}
//#endregion
//#region lib/types/client/settings-bridge.js
function directResult(response) {
	if (response !== null && typeof response === "object" && "result" in response) {
		const result = response.result;
		if (result !== null && typeof result === "object") return result;
	}
	return response;
}
function settingsBridge(connection, remoteSettings, addLanguage) {
	const legacySettings = connection?.api?.settings;
	const legacyCapabilities = clientCapabilities({
		legacySettings,
		addLanguage
	});
	if (legacyCapabilities.settings === "legacy" && legacySettings !== void 0) {
		const legacy = legacySettings;
		return {
			externalLanguages: legacyCapabilities.externalLanguages,
			compatibilityProfile: resolveCompatibility({ capabilities: legacyCapabilities }).profile,
			describe: () => legacy.describe({}).then((response) => directResult(response)),
			mutate: (ns, ops, expectedRevision) => legacy.mutate({
				ns,
				ops,
				expectedRevision
			}).then((response) => directResult(response))
		};
	}
	const capabilities = clientCapabilities({
		remoteSettings,
		legacySettings,
		addLanguage
	});
	const compatibility = resolveCompatibility({ capabilities });
	if (compatibility.profile === "modern" && remoteSettings !== void 0) {
		const modern = remoteSettings;
		return {
			externalLanguages: capabilities.externalLanguages,
			compatibilityProfile: compatibility.profile,
			describe: () => modern.describe().then((response) => directResult(response)),
			mutate: (ns, ops, expectedRevision) => modern.mutate(ns, ops, expectedRevision).then((response) => directResult(response))
		};
	}
}
//#endregion
//#region lib/types/compat/gateway/validation.js
function record$6(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function hasProperty(value, key) {
	const object = record$6(value);
	return object !== void 0 && Object.prototype.hasOwnProperty.call(object, key);
}
function dereference(value, refs) {
	let current = value;
	const seen = /* @__PURE__ */ new Set();
	while (typeof current === "number" && refs !== void 0) {
		const key = String(current);
		if (seen.has(key) || !Object.prototype.hasOwnProperty.call(refs, key)) return void 0;
		seen.add(key);
		current = refs[key];
	}
	return current;
}
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
function schemaNodeAtPath(schema, path) {
	const envelope = record$6(schema);
	const refs = record$6(envelope?.refs);
	let node = refs !== void 0 && envelope?.uid !== void 0 ? refs[String(envelope.uid)] : schema;
	for (const key of path) {
		const object = record$6(dereference(node, refs));
		if (object === void 0) return void 0;
		const properties = record$6(object.dict) ?? record$6(object.properties);
		node = dereference((key === "*" ? object.additionalProperties ?? properties?.["*"] : properties?.[key]) ?? (object.type === "dict" || object.type === "array" ? object.inner : void 0), refs);
	}
	return record$6(dereference(node, refs));
}
function schemaProperties(value) {
	const object = record$6(value);
	if (!object) return void 0;
	const properties = record$6(object.properties) ?? record$6(object.dict);
	if (properties) return properties;
	const schema = record$6(object.schema);
	if (schema) return schemaProperties(schema);
	const inner = record$6(object.inner);
	if (inner) return schemaProperties(inner);
	const objectSchema = record$6(object.object);
	if (objectSchema) return schemaProperties(objectSchema);
	const additionalProperties = record$6(object.additionalProperties);
	if (additionalProperties) return schemaProperties(additionalProperties);
	const items = record$6(object.items);
	if (items) return schemaProperties(items);
}
function compatProperties(schema) {
	const pathProperties = schemaProperties(schemaNodeAtPath(schema, [
		"providers",
		"*",
		"compat"
	]));
	if (pathProperties && GATEWAY_COMPAT_FIELD_KEYS.some((field) => hasProperty(pathProperties, field))) return pathProperties;
	const direct = schemaProperties(schema);
	if (direct && GATEWAY_COMPAT_FIELD_KEYS.some((field) => hasProperty(direct, field))) return direct;
	const providers = direct?.providers;
	const compat = schemaProperties(providers)?.compat;
	const nested = schemaProperties(compat);
	if (nested) return nested;
	const descriptor = record$6(schema);
	if (!descriptor) return void 0;
	for (const key of [
		"schema",
		"value",
		"descriptor"
	]) {
		const nestedResult = compatProperties(descriptor[key]);
		if (nestedResult) return nestedResult;
	}
}
function schemaAllowsField(schema, field) {
	const properties = compatProperties(schema);
	return properties !== void 0 && hasProperty(properties, field);
}
function runtimeAllowsField(capabilities, field) {
	if (capabilities === "modern" || capabilities === "legacy") return true;
	if (capabilities === "unknown" || capabilities === void 0 || capabilities === null || typeof capabilities !== "object") return false;
	return Array.isArray(capabilities.gatewayCompatFields) && capabilities.gatewayCompatFields.includes(field);
}
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
function editableProviderCompatFields(capabilities, descriptorSchema, api) {
	const protocolFields = api === void 0 ? void 0 : fieldsForApi(api);
	const editableFieldsResult = GATEWAY_COMPAT_FIELD_KEYS.filter((field) => runtimeAllowsField(capabilities, field) && schemaAllowsField(descriptorSchema, field) && (protocolFields === void 0 || protocolFields.includes(field)));
	return {
		...Object.fromEntries(editableFieldsResult.map((field) => [field, true])),
		editableFields: editableFieldsResult
	};
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
function hasLayeredModelSourceConflict(namespace, route) {
	if (route.trim() === "" || !isPlainObject(namespace)) return false;
	let hasModels = false;
	let hasOverrides = false;
	for (const layerName of [
		"value",
		"base",
		"user"
	]) {
		if (!Object.prototype.hasOwnProperty.call(namespace, layerName)) continue;
		const layer = namespace[layerName];
		if (!isPlainObject(layer)) continue;
		const providers = layer.providers;
		if (!isPlainObject(providers) || !Object.prototype.hasOwnProperty.call(providers, route)) continue;
		const profile = providers[route];
		if (!isPlainObject(profile)) continue;
		hasModels ||= Array.isArray(profile.models) && profile.models.length > 0;
		hasOverrides ||= isPlainObject(profile.modelOverrides) && Object.getOwnPropertyNames(profile.modelOverrides).length > 0;
		if (hasModels && hasOverrides) return true;
	}
	return false;
}
//#endregion
//#region lib/types/compat/gateway/takeover.js
/** Read-only interoperability helpers for the optional OpenAI-completions takeover. */
function runtimeCapabilities(input) {
	if (input.version !== void 0) {
		if (typeof input.version !== "string") return void 0;
		const mapped = capabilitiesForVersion(input.version);
		if (mapped !== void 0) return takeoverSupportedForVersion(input.version) ? mapped : void 0;
	}
	if (input.runtimeProfile !== "legacy" && input.runtimeProfile !== "modern") return void 0;
	const editability = editableProviderCompatFields(input.runtimeProfile, input.descriptorSchema);
	if (editability.supportsDeveloperRole !== true || editability.maxTokensField !== true) return void 0;
	return {
		settingsTransport: input.runtimeProfile,
		settingsApi: input.runtimeProfile === "modern" ? "remote.settings" : "connection.api.settings",
		settingsModel: "namespace",
		baseModelFields: ["reasoningEfforts"],
		gatewayCompatFields: GATEWAY_COMPAT_FIELD_KEYS,
		externalLanguages: input.runtimeProfile === "modern",
		takeoverTransport: "optional"
	};
}
const OFFICIAL_HOST_RE = /(?:^|\.)(?:deepseek\.com|openai\.com|openrouter\.ai|anthropic\.com|googleapis\.com|ai\.google\.dev|mistral\.ai|x\.ai)$/i;
function isRecord$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isEffortsTable(value) {
	return isRecord$1(value);
}
function modelRows(profile) {
	if (profile === void 0 || hasModelSourceConflict(profile)) return [];
	const rows = [];
	if (Array.isArray(profile.models)) rows.push(...profile.models.filter(isRecord$1));
	if (isRecord$1(profile.modelOverrides)) rows.push(...Object.values(profile.modelOverrides).filter(isRecord$1));
	return rows;
}
/** Whether this profile points to a custom OpenAI-compatible endpoint. */
function isCustomOpenAiGateway(profile) {
	if (profile?.api !== "openai-completions" || typeof profile.baseURL !== "string" || profile.baseURL.trim() === "") return false;
	try {
		const endpoint = new URL(profile.baseURL);
		if (endpoint.protocol !== "http:" && endpoint.protocol !== "https:") return false;
		return !OFFICIAL_HOST_RE.test(endpoint.hostname);
	} catch {
		return false;
	}
}
/** Whether any shared llm-pi-ai model declares thinking capability. */
function declaresThinking(profile) {
	return modelRows(profile).some((model) => isEffortsTable(model.reasoningEfforts));
}
/** Identify custom thinking routes only when the mapped runtime allows takeover. */
function identifyTakeoverProviders(section, capabilities) {
	if (capabilities?.takeoverTransport !== "optional") return [];
	const providers = section?.providers;
	if (!isRecord$1(providers)) return [];
	return Object.entries(providers).filter(([, profile]) => isCustomOpenAiGateway(profile) && declaresThinking(profile)).map(([provider]) => provider);
}
/**
* Read the optional transport-layer takeover list. `null` means the transport
* plugin is not installed; an empty array means installed but inactive.
*/
function takeoverProvidersOf(section) {
	if (section === void 0) return null;
	if (section.enabled !== true || !Array.isArray(section.providers)) return [];
	return section.providers.filter((provider) => typeof provider === "string");
}
/**
* Resolve the providers eligible for the current runtime. Unknown versions and
* unsupported mapped versions intentionally produce no takeover candidates.
*/
function resolveTakeoverProviders(input) {
	const capabilities = runtimeCapabilities(input);
	if (capabilities === void 0) return [];
	const identified = identifyTakeoverProviders(input.piAi, capabilities);
	const configured = takeoverProvidersOf(input.takeover);
	return configured === null ? identified : identified.filter((provider) => configured.includes(provider));
}
function modelCompatFor(profile, model) {
	if (model === void 0 || hasModelSourceConflict(profile)) return void 0;
	if (isRecord$1(profile.modelOverrides) && Object.prototype.hasOwnProperty.call(profile.modelOverrides, model)) {
		const override = profile.modelOverrides[model];
		if (isRecord$1(override)) return override.compat;
		return;
	}
	if (Array.isArray(profile.models)) {
		const row = profile.models.find((candidate) => isRecord$1(candidate) && candidate.id === model);
		if (isRecord$1(row)) return row.compat;
	}
}
/** Project the shared provider/model config without retaining live settings objects. */
function takeoverGatewayCompatInputs(section, provider, model) {
	const providers = section?.providers;
	if (!isRecord$1(providers) || !Object.prototype.hasOwnProperty.call(providers, provider)) return {};
	const profileValue = providers[provider];
	if (!isRecord$1(profileValue)) return {};
	const profile = profileValue;
	const modelCompat = modelCompatFor(profile, model);
	return {
		providerCompat: profile.compat,
		...modelCompat === void 0 ? {} : { modelCompat }
	};
}
//#endregion
//#region lib/types/compat/gateway/resolve.js
function record$5(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function compatRecord(value) {
	const input = record$5(value);
	if (!input) return void 0;
	return record$5(input.compat) ?? input;
}
function readCompat(value) {
	const candidates = Array.isArray(value) ? value : [value];
	const output = {};
	for (const candidate of candidates) {
		const input = compatRecord(candidate);
		if (!input) continue;
		for (const spec of Object.values(GATEWAY_COMPAT_FIELDS)) {
			if (output[spec.key] !== void 0) continue;
			const fieldValue = input[spec.key];
			if (spec.kind === "boolean") {
				if (typeof fieldValue === "boolean") output[spec.key] = fieldValue;
			} else if (spec.kind === "enum") {
				if (typeof fieldValue === "string" && spec.enumValues.some((entry) => entry === fieldValue)) output[spec.key] = fieldValue;
			}
		}
	}
	return output;
}
function sourceFor(field, sources) {
	for (const candidate of sources) {
		const value = candidate.value[field];
		if (value !== void 0) return {
			value,
			source: candidate.source
		};
	}
	return {
		value: void 0,
		source: "unknown"
	};
}
function resolveGatewayCompat(input) {
	const sources = [
		{
			value: readCompat(input.modelCompat),
			source: "model"
		},
		{
			value: readCompat(input.providerCompat),
			source: "provider"
		},
		{
			value: readCompat(input.baseCompat),
			source: "base"
		},
		{
			value: readCompat(input.catalogCompat),
			source: "catalog"
		},
		{
			value: readCompat(input.protocolDefault),
			source: "protocol"
		}
	];
	const fields = {};
	for (const key of GATEWAY_COMPAT_FIELD_KEYS) fields[key] = sourceFor(key, sources);
	return {
		provider: input.provider,
		...input.model === void 0 ? {} : { model: input.model },
		...fields,
		...input.versionCapabilities === void 0 ? {} : { versionCapabilities: input.versionCapabilities }
	};
}
function resolveTakeoverGatewayCompat(input) {
	const version = input.version;
	if (!resolveTakeoverProviders({
		version,
		runtimeProfile: input.runtimeProfile,
		descriptorSchema: input.descriptorSchema,
		piAi: input.piAi,
		takeover: input.takeover
	}).includes(input.provider)) return void 0;
	const capabilities = typeof version === "string" ? capabilitiesForVersion(version) : void 0;
	const projected = takeoverGatewayCompatInputs(input.piAi, input.provider, input.model);
	return resolveGatewayCompat({
		provider: input.provider,
		...input.model === void 0 ? {} : { model: input.model },
		...projected,
		...capabilities === void 0 ? {} : { versionCapabilities: capabilities }
	});
}
function selectionFor(modelCompatValue, kind) {
	if (modelCompatValue === void 0) return "auto";
	if (kind === "boolean") return modelCompatValue ? "supported" : "unsupported";
	return String(modelCompatValue);
}
function isFieldAvailable(editability, key, resolved) {
	const record = editability;
	if (Object.prototype.hasOwnProperty.call(record, key)) return record[key] === true;
	if (Object.prototype.hasOwnProperty.call(record, `${key}Available`)) return record[`${key}Available`] === true;
	const ef = record.editableFields;
	if (Array.isArray(ef)) return ef.includes(key);
	return resolved !== void 0;
}
function resolveModelGatewayCompat(input, editability = {}) {
	const resolution = resolveGatewayCompat(input);
	const modelCompat = readCompat(input.modelCompat);
	const out = {
		provider: input.provider,
		model: input.model
	};
	for (const key of GATEWAY_COMPAT_FIELD_KEYS) {
		const spec = GATEWAY_COMPAT_FIELDS[key];
		out[key] = selectionFor(modelCompat[key], spec.kind);
		out[`${key}Source`] = resolution[key].source;
		out[`${key}Resolved`] = resolution[key].value;
		out[`${key}Available`] = isFieldAvailable(editability, key, resolution[key].value);
	}
	return out;
}
function providerSource(resolution) {
	const sources = GATEWAY_COMPAT_FIELD_KEYS.map((key) => resolution[key].source);
	if (sources.includes("model") || sources.includes("provider")) return "user";
	if (sources.includes("protocol") || sources.includes("base")) return "base";
	if (sources.includes("catalog")) return "catalog";
	return "unknown";
}
function resolveProviderGatewayCompat(input, editability = {}) {
	const resolution = resolveGatewayCompat({
		...input,
		model: void 0,
		modelCompat: void 0
	});
	const out = { provider: input.provider };
	for (const key of GATEWAY_COMPAT_FIELD_KEYS) {
		const spec = GATEWAY_COMPAT_FIELDS[key];
		out[key] = selectionFor(resolution[key].source === "provider" ? resolution[key].value : void 0, spec.kind);
		out[`${key}Source`] = resolution[key].source;
		out[`${key}Resolved`] = resolution[key].value;
		out[`${key}Available`] = isFieldAvailable(editability, key, resolution[key].value);
	}
	out.source = providerSource(resolution);
	return out;
}
//#endregion
//#region lib/types/client/takeover-runtime.js
const EMPTY_RESOLUTION = {
	providers: [],
	compat: []
};
function createTakeoverRuntimeStore() {
	let current = EMPTY_RESOLUTION;
	let active = true;
	const listeners = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => current,
		subscribe: (listener) => {
			if (!active) return () => void 0;
			listeners.add(listener);
			return () => listeners.delete(listener);
		},
		update: (resolution) => {
			if (!active) return;
			current = resolution;
			for (const listener of listeners) listener();
		},
		dispose: () => {
			active = false;
			current = EMPTY_RESOLUTION;
			listeners.clear();
		}
	};
}
function record$4(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function piAiValue(namespace) {
	return record$4(namespace?.value);
}
function takeoverValue(namespace) {
	return record$4(namespace?.value);
}
function modelNames(profile) {
	if (profile === void 0 || hasModelSourceConflict(profile)) return [];
	const names = [];
	if (Array.isArray(profile.models)) for (const model of profile.models) {
		const row = record$4(model);
		if (typeof row?.id === "string") names.push(row.id);
	}
	const overrides = record$4(profile.modelOverrides);
	if (overrides !== void 0) names.push(...Object.keys(overrides));
	return names.length === 0 ? [void 0] : names;
}
function resolveTakeoverDescription(settings, response) {
	if (!response.ok) return EMPTY_RESOLUTION;
	const namespaces = response.value?.namespaces;
	if (!Array.isArray(namespaces)) return EMPTY_RESOLUTION;
	const piAiNamespace = namespaces.find((namespace) => namespace.ns === "llm-pi-ai");
	if (piAiNamespace === void 0) return EMPTY_RESOLUTION;
	const takeoverNamespace = namespaces.find((namespace) => namespace.ns === "llm-openai-completions");
	const piAi = piAiValue(piAiNamespace);
	const takeover = takeoverValue(takeoverNamespace);
	const input = {
		runtimeProfile: settings.compatibilityProfile,
		descriptorSchema: piAiNamespace.schema,
		piAi,
		takeover
	};
	const providers = resolveTakeoverProviders(input).filter((provider) => !hasLayeredModelSourceConflict(piAiNamespace, provider));
	const profiles = record$4(piAi?.providers);
	if (profiles === void 0) return {
		providers,
		compat: []
	};
	const compat = [];
	for (const [provider, value] of Object.entries(profiles)) {
		if (!providers.includes(provider)) continue;
		const profile = record$4(value);
		const providerResolution = resolveTakeoverGatewayCompat({
			...input,
			provider
		});
		if (providerResolution !== void 0) compat.push(providerResolution);
		for (const model of modelNames(profile)) {
			if (model === void 0) continue;
			const resolution = resolveTakeoverGatewayCompat({
				...input,
				provider,
				model
			});
			if (resolution !== void 0) compat.push(resolution);
		}
	}
	return {
		providers,
		compat
	};
}
function observeTakeoverSettings(settings, onResolution) {
	let active = true;
	let sequence = 0;
	let mutationGeneration = 0;
	let pendingRefreshGeneration;
	const nextSequence = () => {
		sequence += 1;
		return sequence;
	};
	const publish = (requestSequence, requestGeneration, response, refresh) => {
		if (!active || requestGeneration !== mutationGeneration) return;
		if (refresh) {
			if (pendingRefreshGeneration !== requestGeneration) return;
			pendingRefreshGeneration = void 0;
			onResolution(resolveTakeoverDescription(settings, response));
			return;
		}
		if (pendingRefreshGeneration === requestGeneration || requestSequence !== sequence) return;
		onResolution(resolveTakeoverDescription(settings, response));
	};
	return {
		...settings,
		describe: () => {
			const requestSequence = nextSequence();
			const requestGeneration = mutationGeneration;
			return settings.describe().then((response) => {
				publish(requestSequence, requestGeneration, response, false);
				return response;
			});
		},
		mutate: async (ns, ops, expectedRevision) => {
			const response = await settings.mutate(ns, ops, expectedRevision);
			if (!response.ok || !active) return response;
			mutationGeneration += 1;
			const refreshGeneration = mutationGeneration;
			const refreshSequence = nextSequence();
			pendingRefreshGeneration = refreshGeneration;
			settings.describe().then((description) => {
				publish(refreshSequence, refreshGeneration, description, true);
			}).catch(() => {
				if (!active || pendingRefreshGeneration !== refreshGeneration) return;
				pendingRefreshGeneration = void 0;
				onResolution(EMPTY_RESOLUTION);
			});
			return response;
		},
		dispose: () => {
			active = false;
			sequence += 1;
			pendingRefreshGeneration = void 0;
		}
	};
}
const emptyTakeoverRuntimeResolution = EMPTY_RESOLUTION;
//#endregion
//#region lib/types/compat/opencode-session.js
/**
* The section id under the registered-namespace settings model (rc.7 … 0.1.6).
* The 0.1.7 entry-config model addresses the section by Loader entry id
* instead, which `settingsEntryId` reads from the live fiber.
*/
const OPENCODE_SESSION_NAMESPACE = "dsh-thinking-effort";
/**
* Whether a settings section id is this plugin's own. Which id that is depends
* on the settings model the running host exposes, and the Client cannot ask:
* its settings bridge answers `describe`/`mutate` only, so every host looks
* like the entry-config model from there. Accepting BOTH ids is what keeps a
* legacy host resolving `dsh-thinking-effort` while a 0.1.7 host resolves the
* entry id, with no model detection anywhere.
*/
function isOpenCodeSessionSectionId(value) {
	return value === "dsh-thinking-effort" || value === "thinking-effort";
}
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
function record$3(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function ownRecord$2(value, key) {
	const object = record$3(value);
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	return record$3(object[key]);
}
function isOpenCodeSessionEnabled(settings, provider, model) {
	if (provider.length === 0 || model.length === 0) return false;
	const models = ownRecord$2(ownRecord$2(ownRecord$2(ownRecord$2(settings, "opencodeSession"), "providers"), provider), "models");
	return Object.prototype.hasOwnProperty.call(models ?? {}, model) && models?.[model] === true;
}
function modelPath(provider, model) {
	if (provider.length === 0 || model.length === 0) return void 0;
	return [
		"opencodeSession",
		"providers",
		provider,
		"models",
		model
	];
}
//#endregion
//#region lib/types/client/constants.js
const ALL_LEVELS = [
	"off",
	"minimal",
	"low",
	"medium",
	"high",
	"xhigh",
	"max"
];
const DEFAULT_LEVELS = {
	off: null,
	high: "high",
	max: "max"
};
const PRESETS = [{
	key: "official",
	levels: DEFAULT_LEVELS,
	labelKey: "presetOfficial"
}, {
	key: "generic",
	levels: {
		off: null,
		low: "low",
		medium: "medium",
		high: "high"
	},
	labelKey: "presetGeneric"
}];
const NS = "llm-pi-ai";
const LOCALE_NS = "settings.thinkingEffort";
const CONTEXT_MIN = 2e3;
const CONTEXT_1M = 1e6;
const CONTEXT_MAX = CONTEXT_1M;
const INPUT_MODALITIES = ["text", "image"];
const LEVEL_LABEL_KEYS = {
	off: "levelOff",
	minimal: "levelMinimal",
	low: "levelLow",
	medium: "levelMedium",
	high: "levelHigh",
	xhigh: "levelXhigh",
	max: "levelMax"
};
//#endregion
//#region package.json
var version = "0.4.0";
//#endregion
//#region lib/types/client/model-inventory.js
function record$2(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function ownedData(value) {
	if (Array.isArray(value)) return value.map((entry) => ownedData(entry));
	const object = record$2(value);
	if (object === void 0) return value;
	const copy = {};
	for (const [key, entry] of Object.entries(object)) Object.defineProperty(copy, key, {
		configurable: true,
		enumerable: true,
		value: ownedData(entry),
		writable: true
	});
	return copy;
}
function modelItem(route, model, raw, index, inOverrides, modelsSnapshot, modelSourceConflict = false) {
	const levels = raw.reasoningEfforts === void 0 ? null : raw.reasoningEfforts;
	const contextWindow = Number.isInteger(raw.contextWindow) ? raw.contextWindow : void 0;
	const input = Array.isArray(raw.input) ? raw.input : [];
	return {
		route,
		model,
		name: typeof raw.name === "string" && raw.name.length > 0 ? raw.name : model,
		levels,
		contextWindow,
		input,
		raw,
		...modelSourceConflict ? { modelSourceConflict: true } : {},
		...modelsSnapshot === void 0 ? {} : { modelsSnapshot },
		index,
		inOverrides
	};
}
function layerCompat(layer, provider) {
	return record$2(record$2(record$2(record$2(layer)?.providers)?.[provider])?.compat);
}
/**
* Resolve the `api` protocol string a route declares across the descriptor
* value, user, and base layers. `undefined` means the route declares no
* protocol; the UI then keeps full-field compatibility.
*/
function routeApi(namespace, route) {
	for (const layer of [
		"value",
		"user",
		"base"
	]) {
		const profile = record$2(record$2(record$2(record$2(namespace)?.[layer])?.providers)?.[route]);
		if (profile === void 0) continue;
		const api = profile.api;
		if (typeof api === "string" && api.length > 0) return api;
	}
}
function modelLayerCompat(layer, provider, model) {
	const profile = record$2(record$2(record$2(layer)?.providers)?.[provider]);
	if (!profile) return void 0;
	if (hasModelSourceConflict(profile)) return void 0;
	const overrides = record$2(profile.modelOverrides);
	if (overrides !== void 0 && Object.prototype.hasOwnProperty.call(overrides, model)) {
		const override = record$2(overrides[model]);
		return override === void 0 ? void 0 : record$2(override.compat);
	}
	if (Array.isArray(profile.models)) return record$2(record$2(profile.models.find((entry) => record$2(entry)?.id === model))?.compat);
}
function modelRuntimeCompatFor(runtime, provider, model) {
	return runtime?.compat.find((resolution) => resolution.provider === provider && resolution.model === model);
}
function protocolCompatFrom(resolution) {
	if (resolution === void 0) return void 0;
	const projection = {};
	for (const key of GATEWAY_COMPAT_FIELD_KEYS) {
		const field = record$2(record$2(resolution)?.[key]);
		if (field?.source === "protocol" && field.value !== void 0) projection[key] = field.value;
	}
	return Object.keys(projection).length > 0 ? projection : void 0;
}
function modelGatewayCompatViewFrom(namespace, item, compatibilityProfile = "unknown", takeoverRuntime) {
	const descriptor = record$2(namespace);
	const sourceConflict = hasLayeredModelSourceConflict(namespace, item.route);
	const userModel = sourceConflict ? void 0 : modelLayerCompat(descriptor?.user, item.route, item.model);
	const userProvider = layerCompat(descriptor?.user, item.route);
	const baseModel = sourceConflict ? void 0 : modelLayerCompat(descriptor?.base, item.route, item.model);
	const baseProvider = layerCompat(descriptor?.base, item.route);
	const catalogProfile = record$2(record$2(record$2(descriptor?.value)?.providers)?.[item.route]);
	const catalogModel = sourceConflict || hasModelSourceConflict(catalogProfile) ? void 0 : record$2(item.raw?.compat) ?? modelLayerCompat(descriptor?.value, item.route, item.model);
	const catalogProvider = layerCompat(descriptor?.value, item.route);
	const modelSelection = userModel;
	const runtimeModel = modelRuntimeCompatFor(takeoverRuntime, item.route, item.model);
	const editability = editableProviderCompatFields(compatibilityProfile, descriptor?.schema, routeApi(namespace, item.route));
	return resolveModelGatewayCompat({
		provider: item.route,
		model: item.model,
		modelCompat: modelSelection,
		providerCompat: userProvider,
		baseCompat: [baseModel, baseProvider],
		catalogCompat: [catalogModel, catalogProvider],
		protocolDefault: protocolCompatFrom(runtimeModel)
	}, editability);
}
function modelCompatKey(route, model) {
	return JSON.stringify([route, model]);
}
function modelGatewayCompatViewsFrom(namespace, inventory, compatibilityProfile = "unknown", takeoverRuntime) {
	return Object.fromEntries(inventory.flatMap((item) => {
		if (hasLayeredModelSourceConflict(namespace, item.route)) return [];
		return [[modelCompatKey(item.route, item.model), modelGatewayCompatViewFrom(namespace, item, compatibilityProfile, takeoverRuntime)]];
	}));
}
function takeoverCompatFor(runtime, provider) {
	if (runtime === void 0 || !runtime.providers.includes(provider)) return void 0;
	return runtime.compat.find((resolution) => resolution.provider === provider && resolution.model === void 0);
}
function providerGatewayCompatViewFrom(namespace, provider, compatibilityProfile = "unknown", takeoverRuntime) {
	const descriptor = record$2(namespace);
	const user = layerCompat(descriptor?.user, provider);
	const base = layerCompat(descriptor?.base, provider);
	const value = layerCompat(descriptor?.value, provider);
	const runtime = takeoverCompatFor(takeoverRuntime, provider);
	const api = routeApi(namespace, provider);
	const editability = editableProviderCompatFields(compatibilityProfile, descriptor?.schema, api);
	const out = { ...resolveProviderGatewayCompat({
		provider,
		providerCompat: user,
		baseCompat: base,
		catalogCompat: value,
		protocolDefault: protocolCompatFrom(runtime)
	}, editability) };
	for (const key of GATEWAY_COMPAT_FIELD_KEYS) out[`${key}Available`] = editability[key] === true;
	return out;
}
function providerGatewayCompatViewsFrom(namespace, compatibilityProfile = "unknown", takeoverRuntime) {
	const providers = record$2(record$2(record$2(namespace)?.value)?.providers);
	if (!providers) return {};
	return Object.fromEntries(Object.keys(providers).map((provider) => [provider, providerGatewayCompatViewFrom(namespace, provider, compatibilityProfile, takeoverRuntime)]));
}
function inventoryFrom(namespace) {
	const providers = record$2(record$2(record$2(namespace)?.value)?.providers);
	if (!providers) return [];
	const inventory = [];
	for (const [route, profileValue] of Object.entries(providers)) {
		const profile = record$2(profileValue);
		if (!profile) continue;
		const modelSourceConflict = hasLayeredModelSourceConflict(namespace, route);
		if (Array.isArray(profile.models)) {
			const modelsSnapshot = ownedData(profile.models);
			profile.models.forEach((entry, index) => {
				const raw = record$2(entry);
				const model = typeof raw?.id === "string" ? raw.id : void 0;
				if (raw && model !== void 0) inventory.push(modelItem(route, model, raw, index, false, modelsSnapshot, modelSourceConflict));
			});
		}
		const overrides = record$2(profile.modelOverrides);
		if (overrides) for (const [model, entry] of Object.entries(overrides)) inventory.push(modelItem(route, model, record$2(entry) ?? {}, -1, true, void 0, modelSourceConflict));
	}
	return inventory;
}
//#endregion
//#region lib/types/client/model-header-ops.js
function record$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function ownRecord$1(value, key) {
	const object = record$1(value);
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	return record$1(object[key]);
}
function validSettingsValue(value) {
	const providers = ownRecord$1(ownRecord$1(value, "opencodeSession"), "providers");
	if (providers === void 0) return false;
	for (const provider of Object.values(providers)) {
		const models = ownRecord$1(provider, "models");
		if (models === void 0) return false;
		if (Object.values(models).some((enabled) => typeof enabled !== "boolean")) return false;
	}
	return true;
}
function isOpenCodeSessionNamespace(value) {
	const namespace = record$1(value);
	return namespace !== void 0 && isOpenCodeSessionSectionId(namespace.ns) && typeof namespace.revision === "number" && Number.isSafeInteger(namespace.revision) && namespace.revision >= 0 && validSettingsValue(namespace.value);
}
function openCodeSessionKey(item) {
	return JSON.stringify([item.route, item.model]);
}
function openCodeSessionView(namespace, item) {
	if (!isOpenCodeSessionNamespace(namespace)) return false;
	return isOpenCodeSessionEnabled(namespace.value, item.route, item.model);
}
function openCodeSessionOp(provider, model, enabled) {
	const path = modelPath(provider, model);
	if (path === void 0) return void 0;
	return enabled ? {
		op: "set",
		path,
		value: true
	} : {
		op: "unset",
		path
	};
}
function openCodeSessionStateFor(namespace, inventory, previous) {
	if (!isOpenCodeSessionNamespace(namespace)) return {
		namespace: null,
		views: {},
		drafts: {},
		dirty: {},
		found: namespace !== void 0,
		available: false
	};
	const views = {};
	const drafts = {};
	const dirty = {};
	for (const item of inventory) {
		const key = openCodeSessionKey(item);
		const view = openCodeSessionView(namespace, item);
		views[key] = view;
		if (previous?.dirty[key] === true && previous.drafts[key] !== void 0) {
			drafts[key] = previous.drafts[key];
			dirty[key] = true;
		} else drafts[key] = view;
	}
	return {
		namespace,
		views,
		drafts,
		dirty,
		found: true,
		available: true
	};
}
//#endregion
//#region lib/types/compat/gateway/ops.js
function providerPath(provider, field) {
	return [
		"providers",
		provider,
		"compat",
		field
	];
}
function fieldValue(spec, value) {
	if (value === "auto") return void 0;
	if (spec.kind === "boolean") {
		if (value === "supported") return true;
		if (value === "unsupported") return false;
		return;
	}
	if (typeof value === "string" && spec.enumValues.some((entry) => entry === value)) return value;
}
function pushFieldOperation(operations, path, spec, value) {
	const result = fieldValue(spec, value);
	if (result === void 0) {
		if (value === "auto") operations.push({
			op: "unset",
			path
		});
		return;
	}
	operations.push({
		op: "set",
		path,
		value: result
	});
}
function fieldEditable(editability, key, spec, value) {
	if (typeof value === "string" && (value === "auto" || fieldValue(spec, value) !== void 0)) return editability?.[key] === true;
	return false;
}
function opsForProviderCompat(provider, update, editability) {
	if (provider.trim() === "") return [];
	const fields = Object.keys(update);
	if (fields.length === 0) return [];
	if (fields.some((field) => {
		if (!GATEWAY_COMPAT_FIELD_KEYS.includes(field)) return true;
		const key = field;
		return !fieldEditable(editability, key, GATEWAY_COMPAT_FIELDS[key], update[key]);
	})) return [];
	const operations = [];
	GATEWAY_COMPAT_FIELD_KEYS.forEach((key) => {
		if (!Object.prototype.hasOwnProperty.call(update, key)) return;
		pushFieldOperation(operations, providerPath(provider, key), GATEWAY_COMPAT_FIELDS[key], update[key]);
	});
	return operations;
}
function opsForModelCompat(item, update, editability) {
	if (item.inOverrides !== true || item.modelSourceConflict === true || typeof item.route !== "string" || item.route.trim() === "" || typeof item.model !== "string" || item.model.trim() === "") return [];
	const fields = Object.keys(update);
	if (fields.length === 0) return [];
	if (fields.some((field) => {
		if (!GATEWAY_COMPAT_FIELD_KEYS.includes(field)) return true;
		const key = field;
		return !fieldEditable(editability, key, GATEWAY_COMPAT_FIELDS[key], update[key]);
	})) return [];
	const prefix = [
		"providers",
		item.route,
		"modelOverrides",
		item.model,
		"compat"
	];
	const operations = [];
	GATEWAY_COMPAT_FIELD_KEYS.forEach((key) => {
		if (!Object.prototype.hasOwnProperty.call(update, key)) return;
		pushFieldOperation(operations, [...prefix, key], GATEWAY_COMPAT_FIELDS[key], update[key]);
	});
	return operations;
}
function opsForModelArrayCompat(inventory, item, update, editability) {
	if (item.inOverrides !== false || item.modelSourceConflict === true || typeof item.route !== "string" || item.route.trim() === "" || typeof item.model !== "string" || item.model.trim() === "" || !Number.isInteger(item.index) || item.index < 0) return [];
	if (inventory.some((candidate) => candidate.route === item.route && (candidate.modelSourceConflict === true || candidate.inOverrides === true))) return [];
	if (inventory.filter((candidate) => candidate.inOverrides === false && candidate.route === item.route && candidate.index === item.index && candidate.model === item.model).length !== 1) return [];
	const fields = Object.keys(update);
	if (fields.length === 0) return [];
	if (fields.some((field) => {
		if (!GATEWAY_COMPAT_FIELD_KEYS.includes(field)) return true;
		const key = field;
		return !fieldEditable(editability, key, GATEWAY_COMPAT_FIELDS[key], update[key]);
	})) return [];
	const clone = (value) => {
		if (Array.isArray(value)) return value.map((entry) => clone(entry));
		if (typeof value !== "object" || value === null) return value;
		const source = value;
		const copy = {};
		for (const [key, entry] of Object.entries(source)) Object.defineProperty(copy, key, {
			configurable: true,
			enumerable: true,
			value: clone(entry),
			writable: true
		});
		return copy;
	};
	const snapshot = item.modelsSnapshot ?? inventory.filter((candidate) => candidate.inOverrides === false && candidate.route === item.route).sort((left, right) => left.index - right.index).map((candidate) => candidate.raw);
	if (!Array.isArray(snapshot) || snapshot.length <= item.index) return [];
	const originalTarget = snapshot[item.index];
	if (typeof originalTarget !== "object" || originalTarget === null || Array.isArray(originalTarget) || originalTarget.id !== item.model) return [];
	const models = snapshot.map((entry, index) => {
		if (index !== item.index) return clone(entry);
		const model = clone(entry);
		const compatSource = model.compat;
		const compat = typeof compatSource === "object" && compatSource !== null && !Array.isArray(compatSource) ? { ...compatSource } : {};
		GATEWAY_COMPAT_FIELD_KEYS.forEach((key) => {
			if (!Object.prototype.hasOwnProperty.call(update, key)) return;
			const value = update[key];
			if (value === "auto") delete compat[key];
			else compat[key] = fieldValue(GATEWAY_COMPAT_FIELDS[key], value);
		});
		if (Object.keys(compat).length === 0) delete model.compat;
		else model.compat = compat;
		return model;
	});
	return [{
		op: "set",
		path: [
			"providers",
			item.route,
			"models"
		],
		value: models
	}];
}
//#endregion
//#region lib/types/client/model-ops.js
function cloneOwned(value) {
	if (Array.isArray(value)) return value.map((entry) => cloneOwned(entry));
	if (typeof value !== "object" || value === null) return value;
	const copy = {};
	for (const [key, entry] of Object.entries(value)) Object.defineProperty(copy, key, {
		configurable: true,
		enumerable: true,
		value: cloneOwned(entry),
		writable: true
	});
	return copy;
}
function mergeModelUpdate(raw, update) {
	const next = { ...raw };
	if (update.levels !== void 0) next.reasoningEfforts = update.levels;
	if (update.contextWindowTouched === true) {
		if (update.contextWindow === void 0) delete next.contextWindow;
		else next.contextWindow = update.contextWindow;
	}
	if (update.inputTouched === true) {
		if (update.input === void 0) delete next.input;
		else next.input = update.input;
	}
	return next;
}
function setOps(inventory, updates) {
	const groups = /* @__PURE__ */ new Map();
	for (const update of updates) {
		const { item } = update;
		if (!item) continue;
		const type = item.inOverrides ? "modelOverrides" : "models";
		const key = `${item.route}\u0000${type}`;
		const group = groups.get(key) ?? {
			route: item.route,
			type,
			updates: []
		};
		group.updates.push(update);
		groups.set(key, group);
	}
	return [...groups.values()].map((group) => {
		const candidates = inventory.filter((candidate) => candidate.route === group.route && (group.type === "modelOverrides" ? candidate.inOverrides : !candidate.inOverrides));
		if (group.type === "modelOverrides") {
			const overrides = Object.fromEntries(candidates.map((candidate) => [candidate.model, { ...candidate.raw }]));
			for (const update of group.updates) {
				const model = update.item.model;
				const current = Object.prototype.hasOwnProperty.call(overrides, model) ? overrides[model] : {};
				Object.defineProperty(overrides, model, {
					configurable: true,
					enumerable: true,
					value: mergeModelUpdate(current, update),
					writable: true
				});
			}
			return {
				op: "set",
				path: [
					"providers",
					group.route,
					"modelOverrides"
				],
				value: overrides
			};
		}
		const snapshot = group.updates.find((update) => update.item.modelsSnapshot !== void 0)?.item.modelsSnapshot;
		const models = snapshot !== void 0 ? snapshot.map((entry, index) => {
			const raw = typeof entry === "object" && entry !== null && !Array.isArray(entry) ? entry : void 0;
			const update = raw?.id === void 0 ? void 0 : group.updates.find((candidate) => candidate.item.index === index && candidate.item.model === raw.id);
			return update ? mergeModelUpdate({ ...raw }, update) : cloneOwned(entry);
		}) : [...candidates].sort((a, b) => a.index - b.index).map((candidate) => {
			const update = group.updates.find((entry) => entry.item.index === candidate.index && entry.item.model === candidate.model);
			return update ? mergeModelUpdate({ ...candidate.raw }, update) : { ...candidate.raw };
		});
		return {
			op: "set",
			path: [
				"providers",
				group.route,
				"models"
			],
			value: models
		};
	});
}
//#endregion
//#region lib/types/client/subagent-section.js
/**
* The plugin's own settings section when the running host publishes one.
*
* Under the 0.1.7 entry-config model a Loader entry owns exactly one section,
* addressed by the entry id, and every plugin setting — the OpenCode session
* fields, the config snapshots and `subagentEffort` — lives in it. Legacy
* releases register the `dsh-thinking-effort` namespace instead and never
* publish an entry id, so this returns `undefined` there and callers keep the
* `llm-pi-ai` path.
*/
function pluginEntrySection(namespaces) {
	return namespaces.find((entry) => entry.ns === PLUGIN_ENTRY_ID);
}
/**
* The one section this plugin's configuration lives in under whichever model
* the running host exposes.
*
* The Client cannot detect the model itself: its settings bridge exposes only
* `describe`/`mutate`, so `settingsModelOf` always answers `entry-config`
* there. The published section ids are the only discriminator, so they are
* read once here rather than as an `ns === …` comparison at every call site:
* the entry section when the host published one (0.1.7 and later), and the
* registered `dsh-thinking-effort` namespace otherwise (rc.7 … 0.1.6), which
* is also the answer when neither exists — a missing section reads as
* unconfigured either way.
*/
function pluginSection(namespaces) {
	return pluginEntrySection(namespaces) ?? namespaces.find((entry) => entry.ns === "dsh-thinking-effort");
}
/** The id of `pluginSection`, resolved the same way and falling back to the legacy namespace id. */
function pluginSectionId(namespaces) {
	return pluginSection(namespaces)?.ns ?? "dsh-thinking-effort";
}
/**
* Whether `section` is the plugin's own Loader entry section — the one the
* 0.1.7 entry-config model derives from this plugin's exported `Config`.
*
* The published section id is the only discriminator the Client has, so this is
* the one place that compares it. Callers hold the plugin's section in a single
* field and ask this when the answer decides where a setting is written: a
* section that is not the entry section is the legacy registered namespace, and
* `subagentEffort` may only be written into the entry section.
*/
function isPluginEntrySection(section) {
	return section !== null && section !== void 0 && section.ns === "thinking-effort";
}
/**
* Where a `subagentEffort` write goes. Entry-config hosts store it in the
* plugin's own section; legacy hosts keep writing the `llm-pi-ai` section they
* already hold, so an existing user's setting stays where that host reads it.
*/
function subagentEffortTarget(ownSection, legacyRevision) {
	if (ownSection === null || ownSection === void 0) return {
		ns: NS,
		revision: legacyRevision,
		ownSection: false
	};
	return {
		ns: ownSection.ns,
		revision: typeof ownSection.revision === "number" ? ownSection.revision : 0,
		ownSection: true
	};
}
//#endregion
//#region lib/types/client/validation.js
function draftFrom(levels) {
	const draft = {};
	for (const level of ALL_LEVELS) {
		const value = levels?.[level];
		const wire = value === void 0 ? "" : value === null ? "" : String(value);
		draft[level] = {
			on: wire !== "" || level === "off" && levels?.off === null,
			wire
		};
	}
	return draft;
}
function buildLevels(draft) {
	const output = {};
	for (const level of ALL_LEVELS) {
		const cell = draft[level];
		if (!cell?.on) continue;
		output[level] = level === "off" ? cell.wire.trim() === "" ? null : cell.wire.trim() : cell.wire.trim();
	}
	return output;
}
function contextDraftFrom(item) {
	const contextWindow = Number.isInteger(item.contextWindow) ? item.contextWindow : void 0;
	const value = contextWindow === void 0 ? "" : String(contextWindow);
	return {
		value,
		oneMillion: contextWindow === CONTEXT_1M,
		previousValue: contextWindow === 1e6 ? "" : value,
		touched: false
	};
}
function inputDraftFrom(item) {
	const declared = Array.isArray(item.input) ? item.input : [];
	const effective = declared.length > 0 ? declared : ["text"];
	return {
		text: effective.includes("text"),
		image: effective.includes("image"),
		touched: false
	};
}
function buildInput(draft, translate) {
	if (!draft) return { value: void 0 };
	const value = INPUT_MODALITIES.filter((modality) => draft[modality] === true);
	return value.length === 0 ? { error: translate("inputCapabilityMinimum") } : { value };
}
function validateContextWindow(draft, translate) {
	if (!draft) return { value: void 0 };
	if (draft.oneMillion) return { value: CONTEXT_1M };
	const raw = typeof draft.value === "string" ? draft.value.trim() : "";
	if (raw === "") return { value: void 0 };
	if (!/^\d+$/.test(raw)) return { error: translate("contextInteger") };
	const value = Number(raw);
	if (!Number.isSafeInteger(value) || value < 2e3 || value > 1e6) return { error: translate("contextRange") };
	return { value };
}
function validateLevels(levels, translate) {
	let hasThinking = false;
	for (const [level, wire] of Object.entries(levels)) {
		if (level === "off") continue;
		hasThinking = true;
		if (typeof wire !== "string" || wire.length === 0) return translate("levelNeedsValue", { level: translate(LEVEL_LABEL_KEYS[level] ?? level) });
	}
	return hasThinking ? null : translate("atLeastThinking");
}
//#endregion
//#region lib/types/client/theme.js
function isDark(environment) {
	if (environment?.backgroundColor !== void 0) {
		const values = environment.backgroundColor.match(/\d+(?:\.\d+)?/g);
		const alpha = values && values.length > 3 ? Number(values[3]) : 1;
		if (values && values.length >= 3 && alpha > 0) {
			const rgb = values.slice(0, 3).map(Number);
			return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722 < 145;
		}
	}
	if (environment?.prefersDark !== void 0) return environment.prefersDark;
	return true;
}
function iosPalette(environment) {
	let dark = true;
	if (environment === void 0) try {
		const body = typeof document === "undefined" ? void 0 : document.body;
		dark = isDark({
			backgroundColor: body === void 0 ? void 0 : getComputedStyle(body).backgroundColor,
			prefersDark: typeof window === "undefined" || typeof window.matchMedia !== "function" ? void 0 : window.matchMedia("(prefers-color-scheme: dark)").matches
		});
	} catch {
		dark = true;
	}
	else dark = isDark(environment);
	return dark ? {
		canvas: "#1C1C1E",
		group: "#2C2C2E",
		raised: "#3A3A3C",
		field: "#2C2C2E",
		border: "rgba(255,255,255,0.12)",
		divider: "rgba(255,255,255,0.10)",
		text: "#F5F5F7",
		secondary: "rgba(235,235,245,0.60)",
		accent: "#0A84FF",
		accentSoft: "rgba(10,132,255,0.16)",
		accentBorder: "rgba(10,132,255,0.42)",
		switchOff: "#39393D",
		danger: "#FF453A",
		dangerBg: "rgba(255,69,58,0.16)",
		dangerBorder: "rgba(255,69,58,0.30)",
		shadow: "0 1px 1px rgba(0,0,0,0.24)"
	} : {
		canvas: "#F2F2F7",
		group: "#FFFFFF",
		raised: "#F9F9FB",
		field: "#F2F2F7",
		border: "rgba(60,60,67,0.18)",
		divider: "rgba(60,60,67,0.18)",
		text: "#1C1C1E",
		secondary: "#6D6D72",
		accent: "#007AFF",
		accentSoft: "rgba(0,122,255,0.10)",
		accentBorder: "rgba(0,122,255,0.32)",
		switchOff: "#E5E5EA",
		danger: "#FF3B30",
		dangerBg: "rgba(255,59,48,0.12)",
		dangerBorder: "rgba(255,59,48,0.28)",
		shadow: "0 1px 1px rgba(0,0,0,0.05)"
	};
}
//#endregion
//#region lib/types/client/components/Controls.js
function Icon({ name, size = 15 }) {
	const children = [];
	if (name === "sliders" || name === "settings") children.push((0, react_jsx_runtime.jsx)("path", { d: "M4 6h16M4 12h16M4 18h16" }, "lines"), (0, react_jsx_runtime.jsx)("circle", {
		cx: "8",
		cy: "6",
		r: "2"
	}, "a"), (0, react_jsx_runtime.jsx)("circle", {
		cx: "15",
		cy: "12",
		r: "2"
	}, "b"), (0, react_jsx_runtime.jsx)("circle", {
		cx: "10",
		cy: "18",
		r: "2"
	}, "c"));
	else if (name === "chevronDown") children.push((0, react_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" }, "path"));
	else if (name === "chevronUp") children.push((0, react_jsx_runtime.jsx)("path", { d: "m18 15-6-6-6 6" }, "path"));
	else if (name === "check") children.push((0, react_jsx_runtime.jsx)("path", { d: "m5 12 4 4L19 6" }, "path"));
	else if (name === "restore") children.push((0, react_jsx_runtime.jsx)("path", { d: "M9 7H5v4" }, "arrow"), (0, react_jsx_runtime.jsx)("path", { d: "M5 11a7 7 0 1 1 2 6" }, "curve"));
	else if (name === "search") children.push((0, react_jsx_runtime.jsx)("circle", {
		cx: "11",
		cy: "11",
		r: "6.5"
	}, "circle"), (0, react_jsx_runtime.jsx)("path", { d: "m16 16 4 4" }, "handle"));
	else if (name === "layers") children.push((0, react_jsx_runtime.jsx)("path", { d: "m12 3 8 4-8 4-8-4 8-4Z" }, "top"), (0, react_jsx_runtime.jsx)("path", { d: "m4 12 8 4 8-4" }, "middle"), (0, react_jsx_runtime.jsx)("path", { d: "m4 17 8 4 8-4" }, "bottom"));
	else if (name === "text") children.push((0, react_jsx_runtime.jsx)("path", { d: "M5 5h14M12 5v14M8 19h8" }, "path"));
	else if (name === "image") children.push((0, react_jsx_runtime.jsx)("rect", {
		x: "3",
		y: "4",
		width: "18",
		height: "16",
		rx: "2"
	}, "rect"), (0, react_jsx_runtime.jsx)("circle", {
		cx: "8.5",
		cy: "9",
		r: "1.5"
	}, "circle"), (0, react_jsx_runtime.jsx)("path", { d: "m4 17 5-5 3 3 2-2 6 4" }, "mountain"));
	else if (name === "model") children.push((0, react_jsx_runtime.jsx)("path", { d: "m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" }, "box"), (0, react_jsx_runtime.jsx)("path", { d: "m4 7.5 8 4.5 8-4.5" }, "top"), (0, react_jsx_runtime.jsx)("path", { d: "M12 12v9" }, "side"));
	else if (name === "context") children.push((0, react_jsx_runtime.jsx)("path", { d: "M8 4H5v16h3M16 4h3v16h-3" }, "brackets"), (0, react_jsx_runtime.jsx)("path", { d: "M10 8h4M10 12h4M10 16h4" }, "lines"));
	else if (name === "sparkles") children.push((0, react_jsx_runtime.jsx)("path", { d: "m12 3-1.2 4.8L6 9l4.8 1.2L12 15l1.2-4.8L18 9l-4.8-1.2L12 3Z" }, "large"), (0, react_jsx_runtime.jsx)("path", { d: "m19 14-.7 2.3L16 17l2.3.7L19 20l.7-2.3L22 17l-2.3-.7L19 14Z" }, "small"));
	return (0, react_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.8,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		focusable: "false",
		style: {
			display: "block",
			flex: "0 0 auto"
		},
		children
	});
}
function ActionButton({ text = "", onClick, disabled = false, tone = "secondary", palette, icon, label, children }) {
	const visual = tone === "primary" ? {
		background: palette.accent,
		color: "#FFFFFF",
		border: palette.accent
	} : tone === "danger" ? {
		background: palette.dangerBg,
		color: palette.danger,
		border: palette.dangerBorder
	} : tone === "ghost" ? {
		background: "transparent",
		color: palette.accent,
		border: "transparent"
	} : {
		background: palette.field,
		color: palette.text,
		border: palette.border
	};
	const iconOnly = text.length === 0 && children === void 0;
	return (0, react_jsx_runtime.jsxs)("button", {
		type: "button",
		title: label,
		"aria-label": label,
		disabled,
		onClick,
		style: {
			height: "28px",
			minWidth: "28px",
			width: iconOnly ? "28px" : void 0,
			padding: iconOnly ? 0 : "0 9px",
			borderRadius: "8px",
			border: `1px solid ${visual.border}`,
			backgroundColor: visual.background,
			color: visual.color,
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "5px",
			fontSize: "12px",
			fontWeight: 600,
			letterSpacing: 0,
			whiteSpace: "nowrap",
			cursor: disabled ? "default" : "pointer",
			opacity: disabled ? .5 : 1,
			boxShadow: tone === "primary" ? palette.shadow : "none",
			transition: "background-color 150ms ease, opacity 150ms ease, transform 150ms ease"
		},
		children: [icon ? (0, react_jsx_runtime.jsx)(Icon, {
			name: icon,
			size: 14
		}) : null, text ? (0, react_jsx_runtime.jsx)("span", { children: text }) : children]
	});
}
function SwitchControl({ checked, onChange, disabled = false, label, palette }) {
	return (0, react_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-label": label,
		title: label,
		disabled,
		onClick: () => onChange(!checked),
		style: {
			width: "38px",
			height: "22px",
			minWidth: "38px",
			padding: 0,
			position: "relative",
			border: `1px solid ${checked ? palette.accent : palette.border}`,
			borderRadius: "11px",
			backgroundColor: checked ? palette.accent : palette.switchOff,
			cursor: disabled ? "default" : "pointer",
			opacity: disabled ? .5 : 1,
			transition: "background-color 160ms ease, border-color 160ms ease, opacity 160ms ease"
		},
		children: (0, react_jsx_runtime.jsx)("span", { style: {
			position: "absolute",
			top: "2px",
			left: "2px",
			width: "16px",
			height: "16px",
			borderRadius: "50%",
			backgroundColor: "#FFFFFF",
			boxShadow: "0 1px 2px rgba(0,0,0,0.22)",
			transform: checked ? "translateX(16px)" : "translateX(0)",
			transition: "transform 160ms ease"
		} })
	});
}
//#endregion
//#region lib/types/client/components/GatewayCompatGroup.js
function defaultTranslation(key) {
	return en_default[key] ?? key;
}
function selectStyle$2(palette) {
	return {
		boxSizing: "border-box",
		minWidth: 0,
		height: "28px",
		padding: "0 7px",
		border: `1px solid ${palette.border}`,
		borderRadius: "8px",
		backgroundColor: palette.group,
		color: palette.text,
		fontSize: "12px"
	};
}
function fieldOptions(spec, t) {
	if (spec.kind === "boolean") return [
		{
			value: "auto",
			label: t("gatewayCompatAuto")
		},
		{
			value: "supported",
			label: t("gatewayCompatSupported")
		},
		{
			value: "unsupported",
			label: t("gatewayCompatUnsupported")
		}
	];
	return [{
		value: "auto",
		label: t("gatewayCompatAuto")
	}, ...spec.enumValues.map((value) => {
		const option = spec.enumOptions?.find((candidate) => candidate.value === value);
		return {
			value,
			label: option?.labelKey === void 0 ? value : t(option.labelKey)
		};
	})];
}
function renderField(spec, view, onChange, disabled, palette, t) {
	const key = spec.key;
	const value = view[key] ?? "auto";
	return (0, react_jsx_runtime.jsxs)("label", {
		style: {
			display: "grid",
			gridTemplateColumns: "minmax(0, 1fr) minmax(110px, auto)",
			alignItems: "center",
			gap: "7px",
			minWidth: 0,
			fontSize: "12px",
			color: palette.text
		},
		children: [(0, react_jsx_runtime.jsx)("span", {
			style: {
				minWidth: 0,
				overflowWrap: "anywhere"
			},
			children: t(spec.labelKey)
		}), (0, react_jsx_runtime.jsx)("select", {
			"aria-label": t(spec.labelKey),
			value,
			disabled,
			onChange: (event) => onChange({ [key]: event.currentTarget.value }),
			style: selectStyle$2(palette),
			children: fieldOptions(spec, t).map((option) => (0, react_jsx_runtime.jsx)("option", {
				value: option.value,
				children: option.label
			}, option.value))
		})]
	}, key);
}
function GatewayCompatGroup({ groupId, view, onChange, disabled = false, excludeKeys, palette = iosPalette(), t = defaultTranslation }) {
	const excluded = new Set(excludeKeys ?? []);
	const available = fieldsInGroup(groupId).filter((spec) => !excluded.has(spec.key) && view[`${spec.key}Available`] === true);
	if (available.length === 0) return null;
	const titleKey = GATEWAY_COMPAT_GROUPS.find((group) => group.id === groupId)?.titleKey ?? groupId;
	return (0, react_jsx_runtime.jsxs)("div", {
		style: {
			display: "grid",
			gap: "4px"
		},
		children: [(0, react_jsx_runtime.jsx)("div", {
			style: {
				fontSize: "11px",
				fontWeight: 700,
				color: palette.secondary
			},
			children: t(titleKey)
		}), (0, react_jsx_runtime.jsx)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
				gap: "6px"
			},
			children: available.map((spec) => renderField(spec, view, onChange, disabled, palette, t))
		})]
	});
}
//#endregion
//#region lib/types/client/components/GatewayCompatControls.js
function selectStyle$1(palette) {
	return {
		boxSizing: "border-box",
		minWidth: 0,
		height: "28px",
		padding: "0 7px",
		border: `1px solid ${palette.border}`,
		borderRadius: "8px",
		backgroundColor: palette.group,
		color: palette.text,
		fontSize: "12px"
	};
}
function sourceKey(source) {
	return {
		model: "compatSourceModel",
		provider: "compatSourceProvider",
		base: "compatSourceBase",
		catalog: "compatSourceCatalog",
		protocol: "compatSourceProtocol",
		unknown: "compatSourceUnknown"
	}[source];
}
function sourceLabel(t, source) {
	return t(sourceKey(source));
}
function isModelView(scope, view) {
	return scope === "model" && "model" in view;
}
function renderGatewayCompatControls({ scope = "provider", view, onChange, disabled = false, expanded = false, onToggleExpanded, availableCount, expandedLabel, collapsedHint }, { palette, t }) {
	if (!GATEWAY_COMPAT_FIELD_KEYS.some((key) => view[`${key}Available`] === true)) return null;
	const modelView = isModelView(scope, view);
	const patch = (next) => {
		if (modelView) onChange(next);
		else onChange({
			...view,
			...next
		});
	};
	const fieldSource = (source) => (0, react_jsx_runtime.jsxs)("span", {
		style: {
			color: palette.secondary,
			fontSize: "10px",
			fontWeight: 500
		},
		children: [
			"(",
			sourceLabel(t, source),
			")"
		]
	});
	return (0, react_jsx_runtime.jsxs)("div", {
		"data-provider": view.provider,
		"data-scope": modelView ? "model" : "provider",
		style: {
			display: "grid",
			gap: "5px",
			marginBottom: "4px",
			padding: "6px 8px",
			border: `1px solid ${palette.border}`,
			borderRadius: "8px",
			backgroundColor: palette.group
		},
		children: [
			(0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: "2px",
					fontSize: "12px",
					fontWeight: 700,
					color: palette.text
				},
				children: [(0, react_jsx_runtime.jsx)("span", { children: t(modelView ? "modelGatewayCompatTitle" : "gatewayCompatTitle") }), modelView ? (0, react_jsx_runtime.jsx)("span", {
					style: {
						fontSize: "11px",
						fontWeight: 600,
						overflowWrap: "anywhere"
					},
					children: view.model
				}) : null]
			}),
			view.supportsDeveloperRoleAvailable || view.maxTokensFieldAvailable ? (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
					gap: "6px"
				},
				children: [view.supportsDeveloperRoleAvailable ? (0, react_jsx_runtime.jsxs)("label", {
					style: {
						display: "grid",
						gridTemplateColumns: "minmax(0, 1fr) minmax(110px, auto)",
						alignItems: "center",
						gap: "7px",
						minWidth: 0,
						fontSize: "12px",
						color: palette.text
					},
					children: [(0, react_jsx_runtime.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "4px",
							minWidth: 0,
							flexWrap: "wrap"
						},
						children: [(0, react_jsx_runtime.jsx)("span", { children: t("supportsDeveloperRole") }), modelView ? fieldSource(view.supportsDeveloperRoleSource) : null]
					}), (0, react_jsx_runtime.jsxs)("select", {
						"aria-label": t("supportsDeveloperRole"),
						value: view.supportsDeveloperRole,
						disabled,
						onChange: (event) => patch({ supportsDeveloperRole: event.currentTarget.value }),
						style: selectStyle$1(palette),
						children: [
							(0, react_jsx_runtime.jsx)("option", {
								value: "auto",
								children: t("gatewayCompatAuto")
							}),
							(0, react_jsx_runtime.jsx)("option", {
								value: "supported",
								children: t("gatewayCompatSupported")
							}),
							(0, react_jsx_runtime.jsx)("option", {
								value: "unsupported",
								children: t("gatewayCompatUnsupported")
							})
						]
					})]
				}) : null, view.maxTokensFieldAvailable ? (0, react_jsx_runtime.jsxs)("label", {
					style: {
						display: "grid",
						gridTemplateColumns: "minmax(0, 1fr) minmax(110px, auto)",
						alignItems: "center",
						gap: "7px",
						minWidth: 0,
						fontSize: "12px",
						color: palette.text
					},
					children: [(0, react_jsx_runtime.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "4px",
							minWidth: 0,
							flexWrap: "wrap"
						},
						children: [(0, react_jsx_runtime.jsx)("span", { children: t("maxTokensField") }), modelView ? fieldSource(view.maxTokensFieldSource) : null]
					}), (0, react_jsx_runtime.jsxs)("select", {
						"aria-label": t("maxTokensField"),
						value: view.maxTokensField,
						disabled,
						onChange: (event) => patch({ maxTokensField: event.currentTarget.value }),
						style: selectStyle$1(palette),
						children: [
							(0, react_jsx_runtime.jsx)("option", {
								value: "auto",
								children: t("gatewayCompatAuto")
							}),
							(0, react_jsx_runtime.jsx)("option", {
								value: "max_tokens",
								children: t("maxTokensFieldStandard")
							}),
							(0, react_jsx_runtime.jsx)("option", {
								value: "max_completion_tokens",
								children: t("maxTokensFieldCompletion")
							})
						]
					})]
				}) : null]
			}) : null,
			availableCount > 0 ? (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: "3px",
					justifyItems: "start"
				},
				children: [(0, react_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-expanded": expanded,
					onClick: () => onToggleExpanded?.(),
					disabled,
					style: {
						border: 0,
						padding: "2px 0",
						background: "transparent",
						color: palette.accent,
						fontSize: "11px",
						fontWeight: 650,
						cursor: disabled ? "default" : "pointer"
					},
					children: expanded ? t("gatewayExpandedLess") : expandedLabel ?? t("gatewayMoreFields", { count: availableCount })
				}), !expanded && collapsedHint ? (0, react_jsx_runtime.jsx)("span", {
					style: {
						color: palette.secondary,
						fontSize: "10px"
					},
					children: collapsedHint
				}) : null]
			}) : null,
			expanded ? (0, react_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gap: "9px",
					paddingTop: "2px"
				},
				children: GATEWAY_COMPAT_GROUPS.map((group) => (0, react_jsx_runtime.jsx)(GatewayCompatGroup, {
					groupId: group.id,
					view,
					onChange: patch,
					disabled,
					excludeKeys: ["supportsDeveloperRole", "maxTokensField"],
					palette,
					t
				}, group.id))
			}) : null,
			modelView ? (0, react_jsx_runtime.jsx)("div", {
				style: {
					color: palette.secondary,
					fontSize: "10px"
				},
				children: t("inheritProviderCompat")
			}) : null
		]
	});
}
//#endregion
//#region lib/types/client/components/ModelEditor.js
function ModelEditor({ item, draft, contextDraft, inputDraft, dirty, busy, palette, t, onLevelChange, onContextChange, onOneMillionChange, onInputChange, onSave, onRestoreReasoning, onRestoreCapability, compatView, onCompatChange, onSaveCompat, compatDirty, compatExpanded, onToggleCompatExpanded, openCodeSession, openCodeSessionAvailable = false, onOpenCodeSessionChange }) {
	const levelLabel = (level) => t(LEVEL_LABEL_KEYS[level]);
	const anyCompatDirty = compatDirty !== void 0 && GATEWAY_COMPAT_FIELD_KEYS.some((key) => compatDirty[key] === true);
	const modelCompatControls = compatView !== void 0 ? renderGatewayCompatControls({
		scope: "model",
		view: compatView,
		onChange: (next) => onCompatChange?.(next),
		disabled: busy || onCompatChange === void 0,
		expanded: compatExpanded === true,
		onToggleExpanded: onToggleCompatExpanded,
		availableCount: GATEWAY_COMPAT_FIELD_KEYS.filter((key) => key !== "supportsDeveloperRole" && key !== "maxTokensField" && compatView[`${key}Available`] === true).length
	}, {
		palette,
		t
	}) : null;
	const modelCompat = modelCompatControls !== null ? (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
		modelCompatControls,
		!item.inOverrides ? (0, react_jsx_runtime.jsx)("div", {
			style: {
				color: palette.secondary,
				fontSize: "10px",
				marginBottom: "6px"
			},
			children: t("modelsArrayCompatSaveNote")
		}) : null,
		onSaveCompat ? (0, react_jsx_runtime.jsx)("div", {
			style: {
				display: "flex",
				gap: "6px",
				flexWrap: "wrap",
				marginBottom: "6px"
			},
			children: (0, react_jsx_runtime.jsx)(ActionButton, {
				text: t("saveModelGatewayCompat"),
				onClick: onSaveCompat,
				disabled: busy || !anyCompatDirty,
				tone: "primary",
				palette,
				icon: "check"
			})
		}) : null
	] }) : null;
	const openCodeSessionControls = openCodeSessionAvailable && item.modelSourceConflict !== true ? (0, react_jsx_runtime.jsxs)("div", {
		"data-scope": "opencode-session",
		style: {
			display: "grid",
			gap: "5px",
			marginBottom: "8px",
			padding: "8px",
			border: `0.5px solid ${palette.border}`,
			borderRadius: "6px",
			backgroundColor: palette.field
		},
		children: [(0, react_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: "8px"
			},
			children: [(0, react_jsx_runtime.jsx)("span", {
				style: {
					fontSize: "13px",
					fontWeight: 650
				},
				children: t("opencodeSessionHeaderTitle")
			}), (0, react_jsx_runtime.jsx)(SwitchControl, {
				checked: openCodeSession === true,
				onChange: (enabled) => onOpenCodeSessionChange?.(enabled),
				disabled: busy || onOpenCodeSessionChange === void 0,
				label: t("opencodeSessionHeaderTitle"),
				palette
			})]
		}), (0, react_jsx_runtime.jsx)("span", {
			style: {
				color: palette.secondary,
				fontSize: "11px",
				lineHeight: "15px"
			},
			children: t("opencodeSessionHeaderDescription")
		})]
	}) : null;
	return (0, react_jsx_runtime.jsxs)("div", {
		style: {
			padding: "10px 12px 12px",
			borderTop: `0.5px solid ${palette.divider}`,
			backgroundColor: palette.canvas
		},
		children: [
			openCodeSessionControls,
			modelCompat,
			(0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
					gap: "8px",
					marginBottom: "8px"
				},
				children: [(0, react_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "auto minmax(0, 1fr) auto",
						alignItems: "center",
						gap: "8px",
						minWidth: 0,
						padding: "8px",
						border: `0.5px solid ${palette.border}`,
						borderRadius: "6px",
						backgroundColor: palette.field
					},
					children: [
						(0, react_jsx_runtime.jsxs)("span", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "6px",
								fontSize: "13px",
								fontWeight: 650
							},
							children: [(0, react_jsx_runtime.jsx)(Icon, {
								name: "context",
								size: 15
							}), (0, react_jsx_runtime.jsx)("span", { children: t("contextLength") })]
						}),
						(0, react_jsx_runtime.jsx)("input", {
							type: "number",
							inputMode: "numeric",
							min: CONTEXT_MIN,
							max: CONTEXT_MAX,
							step: 1,
							value: contextDraft.oneMillion ? String(CONTEXT_1M) : contextDraft.value,
							disabled: busy || contextDraft.oneMillion,
							placeholder: t("providerDefaultShort"),
							"aria-label": t("contextLength"),
							onChange: (event) => onContextChange(event.currentTarget.value),
							style: {
								boxSizing: "border-box",
								width: "100%",
								minWidth: 0,
								height: "30px",
								padding: "0 8px",
								border: `0.5px solid ${palette.border}`,
								borderRadius: "6px",
								fontSize: "13px",
								backgroundColor: palette.group,
								color: palette.text,
								outline: "none"
							}
						}),
						(0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
								gap: "6px",
								minWidth: 0,
								fontSize: "12px",
								whiteSpace: "nowrap"
							},
							children: [(0, react_jsx_runtime.jsx)("span", { children: t("oneMillionMode") }), (0, react_jsx_runtime.jsx)(SwitchControl, {
								checked: contextDraft.oneMillion,
								onChange: onOneMillionChange,
								disabled: busy,
								label: t("oneMillionMode"),
								palette
							})]
						})
					]
				}), (0, react_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "auto minmax(0, 1fr) minmax(0, 1fr)",
						alignItems: "center",
						gap: "8px",
						minWidth: 0,
						padding: "8px",
						border: `0.5px solid ${palette.border}`,
						borderRadius: "6px",
						backgroundColor: palette.field
					},
					children: [
						(0, react_jsx_runtime.jsx)("span", {
							style: {
								fontSize: "13px",
								fontWeight: 650
							},
							children: t("inputCapabilities")
						}),
						(0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
								gap: "6px",
								minWidth: 0,
								fontSize: "12px",
								whiteSpace: "nowrap"
							},
							children: [(0, react_jsx_runtime.jsxs)("span", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "5px"
								},
								children: [(0, react_jsx_runtime.jsx)(Icon, {
									name: "text",
									size: 14
								}), (0, react_jsx_runtime.jsx)("span", { children: t("textInput") })]
							}), (0, react_jsx_runtime.jsx)(SwitchControl, {
								checked: inputDraft.text,
								onChange: (enabled) => onInputChange("text", enabled),
								disabled: busy,
								label: t("textInput"),
								palette
							})]
						}),
						(0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
								gap: "6px",
								minWidth: 0,
								fontSize: "12px",
								whiteSpace: "nowrap"
							},
							children: [(0, react_jsx_runtime.jsxs)("span", {
								style: {
									display: "inline-flex",
									alignItems: "center",
									gap: "5px"
								},
								children: [(0, react_jsx_runtime.jsx)(Icon, {
									name: "image",
									size: 14
								}), (0, react_jsx_runtime.jsx)("span", { children: t("imageInput") })]
							}), (0, react_jsx_runtime.jsx)(SwitchControl, {
								checked: inputDraft.image,
								onChange: (enabled) => onInputChange("image", enabled),
								disabled: busy,
								label: t("imageInput"),
								palette
							})]
						})
					]
				})]
			}),
			(0, react_jsx_runtime.jsx)("div", {
				style: {
					fontSize: "12px",
					fontWeight: 700,
					color: palette.secondary,
					margin: "0 0 4px 2px"
				},
				children: t("reasoningLevels")
			}),
			(0, react_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "minmax(0, 1fr)",
					marginBottom: "2px",
					border: `0.5px solid ${palette.border}`,
					borderRadius: "6px",
					backgroundColor: palette.field,
					overflow: "hidden"
				},
				children: ALL_LEVELS.map((level, index) => {
					const cell = draft[level] ?? {
						on: false,
						wire: ""
					};
					return (0, react_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "38px 72px minmax(0, 1fr)",
							alignItems: "center",
							gap: "8px",
							minHeight: "36px",
							padding: "4px 8px",
							borderBottom: index < ALL_LEVELS.length - 1 ? `0.5px solid ${palette.divider}` : "none",
							backgroundColor: cell.on ? palette.raised : "transparent",
							fontSize: "12px"
						},
						children: [
							(0, react_jsx_runtime.jsx)(SwitchControl, {
								checked: cell.on,
								onChange: (enabled) => onLevelChange(level, { on: enabled }),
								disabled: busy,
								label: `${levelLabel(level)}${t("levelSuffix")}`,
								palette
							}),
							(0, react_jsx_runtime.jsx)("span", {
								style: {
									width: "58px",
									fontSize: "13px",
									fontWeight: 650
								},
								children: levelLabel(level)
							}),
							cell.on ? (0, react_jsx_runtime.jsx)("input", {
								type: "text",
								value: cell.wire,
								disabled: busy,
								placeholder: level === "off" ? t("offPlaceholder") : t("wirePlaceholder"),
								onChange: (event) => onLevelChange(level, { wire: event.currentTarget.value }),
								style: {
									boxSizing: "border-box",
									width: "100%",
									minWidth: 0,
									height: "26px",
									padding: "0 8px",
									border: `1px solid ${palette.border}`,
									borderRadius: "8px",
									fontSize: "13px",
									backgroundColor: palette.group,
									color: palette.text,
									outline: "none"
								}
							}) : null
						]
					}, level);
				})
			}),
			(0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					gap: "6px",
					flexWrap: "wrap",
					marginTop: "6px",
					paddingTop: "6px",
					borderTop: `1px solid ${palette.divider}`
				},
				children: [
					(0, react_jsx_runtime.jsx)(ActionButton, {
						text: dirty ? t("saveChanges") : t("saved"),
						onClick: onSave,
						disabled: busy || !dirty,
						tone: "primary",
						palette,
						icon: "check",
						label: dirty ? t("saveModelChanges") : t("noPendingChanges")
					}),
					(0, react_jsx_runtime.jsx)(ActionButton, {
						text: t("restoreReasoning"),
						onClick: onRestoreReasoning,
						disabled: busy,
						tone: "secondary",
						palette,
						icon: "restore"
					}),
					(0, react_jsx_runtime.jsx)(ActionButton, {
						text: t("restoreCapability"),
						onClick: onRestoreCapability,
						disabled: busy,
						tone: "danger",
						palette,
						icon: "restore"
					})
				]
			})
		]
	});
}
//#endregion
//#region lib/types/client/components/ModelRow.js
function modelSummary(item, t) {
	const input = item.input.length > 0 ? item.input : ["text"];
	const value = item.contextWindow;
	return {
		text: input.includes("text"),
		image: input.includes("image"),
		context: Number.isInteger(value) ? {
			label: value === 1e6 ? "1M" : value >= 1024 ? `${Math.round(value / 1024)}K` : String(value),
			title: t("contextTitle", { value })
		} : void 0
	};
}
function ModelRow({ item, open, draft, contextDraft, inputDraft, dirty, busy, palette, t, onToggle, onLevelChange, onContextChange, onOneMillionChange, onInputChange, onSave, onRestoreReasoning, onRestoreCapability, compatView, onCompatChange, onSaveCompat, compatDirty, compatExpanded, onToggleCompatExpanded, openCodeSession, openCodeSessionAvailable, onOpenCodeSessionChange }) {
	const summary = modelSummary(item, t);
	const hasCompatDirty = compatDirty !== void 0 && Object.values(compatDirty).some((value) => value === true);
	return (0, react_jsx_runtime.jsxs)("div", {
		style: {
			border: `1px solid ${open ? palette.accent : dirty || hasCompatDirty ? palette.accentBorder : palette.border}`,
			borderRadius: "8px",
			marginBottom: "4px",
			backgroundColor: open ? palette.raised : palette.group,
			boxShadow: palette.shadow,
			overflow: "hidden",
			transition: "background-color 160ms ease, border-color 160ms ease"
		},
		children: [(0, react_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "minmax(0, 1fr) auto",
				alignItems: "center",
				columnGap: "8px",
				minHeight: "42px",
				padding: "4px 6px 4px 8px"
			},
			children: [(0, react_jsx_runtime.jsxs)("span", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "7px",
					minWidth: 0
				},
				children: [(0, react_jsx_runtime.jsx)("span", {
					style: {
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						width: "22px",
						height: "22px",
						minWidth: "22px",
						borderRadius: "7px",
						color: palette.accent,
						backgroundColor: palette.field
					},
					children: (0, react_jsx_runtime.jsx)(Icon, {
						name: "model",
						size: 14
					})
				}), (0, react_jsx_runtime.jsxs)("span", {
					style: {
						display: "grid",
						gap: "1px",
						minWidth: 0
					},
					children: [(0, react_jsx_runtime.jsx)("span", {
						style: {
							minWidth: 0,
							fontSize: "13px",
							lineHeight: "15px",
							fontWeight: 700,
							overflowWrap: "anywhere"
						},
						children: item.model
					}), (0, react_jsx_runtime.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "5px",
							fontSize: "10px",
							lineHeight: "11px",
							color: palette.secondary
						},
						children: [(0, react_jsx_runtime.jsx)("span", { children: t("model") }), dirty || hasCompatDirty ? (0, react_jsx_runtime.jsx)("span", {
							title: t("unsaved"),
							style: {
								padding: "1px 4px",
								border: `1px solid ${palette.accentBorder}`,
								borderRadius: "5px",
								color: palette.accent,
								backgroundColor: palette.accentSoft,
								fontSize: "9px",
								lineHeight: "11px",
								fontWeight: 700
							},
							children: t("unsaved")
						}) : null]
					})]
				})]
			}), (0, react_jsx_runtime.jsxs)("span", {
				style: {
					display: "grid",
					gridTemplateColumns: "154px 28px",
					columnGap: "8px",
					alignItems: "center"
				},
				children: [(0, react_jsx_runtime.jsxs)("span", {
					style: {
						display: "grid",
						gridTemplateColumns: "22px 22px minmax(86px, 1fr)",
						columnGap: "8px",
						alignItems: "center",
						color: palette.secondary
					},
					children: [
						(0, react_jsx_runtime.jsx)("span", {
							title: summary.text ? t("textEnabled") : t("textDisabled"),
							"aria-label": summary.text ? t("textEnabled") : t("textDisabled"),
							style: {
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								width: "22px",
								height: "22px",
								color: summary.text ? palette.accent : palette.secondary,
								border: `1px solid ${summary.text ? palette.accentBorder : palette.border}`,
								borderRadius: "6px",
								backgroundColor: summary.text ? palette.accentSoft : palette.raised
							},
							children: (0, react_jsx_runtime.jsx)(Icon, {
								name: "text",
								size: 14
							})
						}),
						(0, react_jsx_runtime.jsx)("span", {
							title: summary.image ? t("imageEnabled") : t("imageDisabled"),
							"aria-label": summary.image ? t("imageEnabled") : t("imageDisabled"),
							style: {
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								width: "22px",
								height: "22px",
								color: summary.image ? palette.accent : palette.secondary,
								border: `1px solid ${summary.image ? palette.accentBorder : palette.border}`,
								borderRadius: "6px",
								backgroundColor: summary.image ? palette.accentSoft : palette.raised
							},
							children: (0, react_jsx_runtime.jsx)(Icon, {
								name: "image",
								size: 14
							})
						}),
						(0, react_jsx_runtime.jsx)("span", {
							title: summary.context?.title,
							"aria-label": summary.context?.title,
							style: {
								display: "inline-flex",
								alignItems: "center",
								gap: "4px",
								minHeight: "22px",
								padding: summary.context ? "0 5px" : 0,
								border: summary.context ? `1px solid ${palette.border}` : "1px solid transparent",
								borderRadius: "6px",
								backgroundColor: summary.context ? palette.raised : "transparent",
								whiteSpace: "nowrap"
							},
							children: summary.context ? (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [(0, react_jsx_runtime.jsx)(Icon, {
								name: "context",
								size: 14
							}), (0, react_jsx_runtime.jsx)("span", {
								style: {
									fontSize: "11px",
									fontWeight: 700
								},
								children: t("contextLabel", { label: summary.context.label })
							})] }) : null
						})
					]
				}), (0, react_jsx_runtime.jsx)(ActionButton, {
					text: "",
					onClick: onToggle,
					palette,
					tone: "ghost",
					icon: open ? "chevronUp" : "settings",
					label: open ? t("closeModelSettings") : t("openModelSettings")
				})]
			})]
		}), open && draft ? (0, react_jsx_runtime.jsx)(ModelEditor, {
			item,
			draft,
			contextDraft,
			inputDraft,
			dirty,
			busy,
			palette,
			t,
			onLevelChange,
			onContextChange,
			onOneMillionChange,
			onInputChange,
			onSave,
			onRestoreReasoning,
			onRestoreCapability,
			compatView,
			onCompatChange,
			onSaveCompat,
			compatDirty,
			compatExpanded,
			onToggleCompatExpanded,
			openCodeSession,
			openCodeSessionAvailable,
			onOpenCodeSessionChange
		}) : null]
	});
}
//#endregion
//#region lib/types/client/components/SubagentSettings.js
function SubagentSettings({ effort, namespaceFound, draft, custom, busy, palette, t, onDraftChange, onCustomChange, onSave }) {
	const options = [
		["default", t("providerDefault")],
		...ALL_LEVELS.map((level) => [level, t(LEVEL_LABEL_KEYS[level])]),
		["custom", t("customize")]
	];
	return (0, react_jsx_runtime.jsxs)("div", {
		style: {
			backgroundColor: palette.group,
			border: `1px solid ${palette.border}`,
			borderRadius: "8px",
			boxShadow: palette.shadow,
			overflow: "hidden",
			marginBottom: "8px"
		},
		children: [
			(0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "7px",
					padding: "7px 8px 1px",
					fontSize: "13px",
					fontWeight: 700,
					letterSpacing: 0
				},
				children: [(0, react_jsx_runtime.jsx)(Icon, {
					name: "sparkles",
					size: 15
				}), (0, react_jsx_runtime.jsx)("span", { children: t("subagentCardTitle") })]
			}),
			(0, react_jsx_runtime.jsx)("div", {
				style: {
					padding: "0 8px",
					fontSize: "12px",
					color: palette.secondary,
					marginBottom: "5px"
				},
				children: namespaceFound ? t("currentDefault", { effort: effort ?? t("providerDefault") }) : t("unconfiguredSubagent")
			}),
			(0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					gap: "8px",
					flexWrap: "wrap",
					alignItems: "center",
					padding: "6px 8px 7px",
					borderTop: `1px solid ${palette.divider}`
				},
				children: [
					(0, react_jsx_runtime.jsx)("select", {
						value: draft,
						disabled: busy,
						onChange: (event) => onDraftChange(event.currentTarget.value),
						style: {
							height: "28px",
							minWidth: "136px",
							padding: "0 10px",
							border: `1px solid ${palette.border}`,
							borderRadius: "8px",
							fontSize: "13px",
							fontWeight: 500,
							backgroundColor: palette.field,
							color: palette.text,
							colorScheme: "light dark",
							boxShadow: palette.shadow
						},
						children: options.map(([value, label]) => (0, react_jsx_runtime.jsx)("option", {
							value,
							children: label
						}, value))
					}),
					draft === "custom" ? (0, react_jsx_runtime.jsx)("input", {
						type: "text",
						value: custom,
						placeholder: t("customPlaceholder"),
						"aria-label": t("customPlaceholder"),
						onChange: (event) => onCustomChange(event.currentTarget.value),
						style: {
							flex: "1 1 160px",
							minWidth: "140px",
							height: "28px",
							padding: "0 8px",
							border: `1px solid ${palette.border}`,
							borderRadius: "8px",
							fontSize: "13px",
							backgroundColor: palette.field,
							color: palette.text,
							outline: "none"
						}
					}) : null,
					(0, react_jsx_runtime.jsx)(ActionButton, {
						text: t("apply"),
						onClick: onSave,
						disabled: busy,
						tone: "primary",
						palette,
						icon: "check"
					})
				]
			})
		]
	});
}
//#endregion
//#region lib/types/client/browser-download.js
/**
* The one browser side effect the card cannot exercise under jsdom, kept
* behind a single function so components can take it as an injectable
* dependency.
*/
function downloadJson(filename, text) {
	const blob = new Blob([text], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = filename;
	anchor.rel = "noopener";
	document.body.append(anchor);
	anchor.click();
	anchor.remove();
	setTimeout(() => URL.revokeObjectURL(url), 0);
}
//#endregion
//#region lib/types/client/config-snapshot/types.js
const SNAPSHOT_KIND = "dsh-thinking-effort/config-snapshot";
const SNAPSHOT_MAX_BYTES = 2097152;
const LLM_NAMESPACE = "llm-pi-ai";
/**
* The plugin section's legacy id: what rc.7 … 0.1.6 register, and the snapshot
* key this build falls back to when the host publishes no entry section. Under
* the 0.1.7 entry-config model the section is the Loader entry
* (`PLUGIN_ENTRY_ID`); the snapshot pipeline resolves that live id from the
* `describe()` result it already holds — `pluginSectionId` — and only falls
* back to this constant when neither id is published.
*/
const PLUGIN_NAMESPACE = OPENCODE_SESSION_NAMESPACE;
/**
* Namespaces a snapshot carries, in write order. `dsh-thinking-effort` is
* small and structurally simple while `llm-pi-ai` carries provider topology
* the host schema can reject, so the riskier write lands last and a failure
* there leaves the user's model configuration untouched.
*/
const CONFIG_NAMESPACES = [PLUGIN_NAMESPACE, LLM_NAMESPACE];
/** Path segments a settings path op may never address. */
const RESERVED_PATH_KEYS = [
	"__proto__",
	"constructor",
	"prototype"
];
/** Plugin-owned keys that must never ride inside their own snapshot. */
const PLUGIN_SNAPSHOT_EXCLUDED_KEYS = ["profiles", "autoBackup"];
//#endregion
//#region lib/types/client/config-snapshot/snapshot.js
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
/**
* The namespace's RAW user layer — the override layer as the settings document
* actually stores it, with schema defaults and the composition base left out.
* Reading `value` instead would bake derived data into the snapshot and turn it
* into user config on import. (On 0.1.7 and later that document is the active
* profile's config rather than `settings.yaml`, which the entry-config model no
* longer uses; both are the same user layer through `describe()`.)
*/
function userSectionOf(namespaces, ns) {
	const found = namespaces.find((entry) => entry.ns === ns);
	const user = found === void 0 ? void 0 : found.user;
	return isRecord(user) ? { ...user } : {};
}
/**
* Which of a snapshot's sections holds this plugin's own configuration.
*
* `resolved` is the id the running host addresses that section by — the entry
* id under the 0.1.7 entry-config model, `dsh-thinking-effort` on legacy
* releases. A file exported by the other model carries the other id, so the
* section is keyed by whichever of the two the file actually holds rather than
* by a constant: reading the wrong key would silently snapshot the plugin's
* settings as `{}` and write them back nowhere.
*
* Content decides, not mere presence. An exporter writes ONE plugin key — the
* id of the model that produced the file, beside the always-present
* `llm-pi-ai` key — so a file from the other model has that key empty and the
* other one populated. Keying on presence alone would still be wrong for a
* hand-edited file that carries both: the populated one is the one that means
* something, and the final fallback only decides between two empty sections.
*/
function pluginSectionKey(sections, resolved) {
	const alternate = resolved === PLUGIN_NAMESPACE ? PLUGIN_ENTRY_ID : PLUGIN_NAMESPACE;
	const populated = (key) => {
		const section = sections[key];
		return isRecord(section) && Object.keys(section).length > 0;
	};
	if (populated(resolved)) return resolved;
	if (populated(alternate)) return alternate;
	return Object.prototype.hasOwnProperty.call(sections, resolved) ? resolved : alternate;
}
/**
* Whether a key of `ns` belongs to the snapshot library itself — the profile
* library and the rollback copy — rather than to the configuration a snapshot
* carries. Both directions of a snapshot ask this one question: the export
* leaves these keys out of a file, and an import must never write them back. A
* hand-edited file that carries them would otherwise replace the user's profile
* library, or the rollback copy written moments before the apply.
*
* This is a property of the plugin's own section, which the 0.1.7 entry-config
* model addresses by entry id, so the id is accepted rather than compared.
*/
function isSnapshotLibraryKey(ns, key) {
	return isOpenCodeSessionSectionId(ns) && PLUGIN_SNAPSHOT_EXCLUDED_KEYS.includes(key);
}
/** The plugin section minus the snapshot library itself, which cannot nest inside its own entries. */
function pluginSectionOf(user) {
	const next = {};
	for (const [key, value] of Object.entries(user)) {
		if (isSnapshotLibraryKey(PLUGIN_NAMESPACE, key)) continue;
		next[key] = value;
	}
	return next;
}
function snapshotFromNamespaces(namespaces, meta, pluginNamespace = pluginSectionId(namespaces)) {
	const sections = {};
	for (const ns of CONFIG_NAMESPACES) {
		const target = ns === PLUGIN_NAMESPACE ? pluginNamespace : ns;
		const user = userSectionOf(namespaces, target);
		sections[target] = target === pluginNamespace ? pluginSectionOf(user) : user;
	}
	return {
		kind: SNAPSHOT_KIND,
		version: 1,
		createdAt: meta.createdAt,
		pluginVersion: meta.pluginVersion,
		sourceProfile: meta.sourceProfile,
		sections
	};
}
/** `dsh-config-YYYYMMDD-HHmm.json` in local time. */
function snapshotFileName(now) {
	const pad = (value) => String(value).padStart(2, "0");
	return `dsh-config-${`${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`}.json`;
}
/**
* Structural JSON equality. Lives here rather than beside `planImport` because
* both the planner and the wiring rules compare values, and a planner that
* imports the wiring module must not import back into itself.
*/
function deepEqualJson(left, right) {
	if (left === right) return true;
	if (Array.isArray(left) || Array.isArray(right)) {
		if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) return false;
		return left.every((entry, index) => deepEqualJson(entry, right[index]));
	}
	if (!isRecord(left) || !isRecord(right)) return false;
	const keys = Object.keys(left);
	if (keys.length !== Object.keys(right).length) return false;
	return keys.every((key) => Object.prototype.hasOwnProperty.call(right, key) && deepEqualJson(left[key], right[key]));
}
//#endregion
//#region lib/types/client/config-snapshot/wiring.js
/**
* Provider fields that decide WHERE a request goes and WHICH credential it
* carries, rather than what the model can do. A snapshot carries capability
* configuration across machines; these fields are deployment wiring and are
* withheld unless the user explicitly opts in.
*
* MAINTENANCE RULE: any future field that names an endpoint, names a
* credential, injects a raw request header, or points configuration at
* executable local code MUST be added here, with a test. Fields that only
* shape a request the current endpoint already receives (api, transport,
* timeouts, compat, reasoningEfforts, models, modelOverrides) are deliberately
* absent — they neither redirect traffic nor carry credentials.
*/
const PROVIDER_WIRING_KEYS = [
	"baseURL",
	"apiKeyEnv",
	"headers"
];
/** The `opencodeSession.format` field that names an executable local module. */
const PLUGIN_WIRING_SCRIPT_KEY = "script";
const EMPTY_WIRING_REPORT = {
	count: 0,
	providers: [],
	endpoints: []
};
/**
* Exported because `planImport` merges one report per namespace. The report
* types live in `types.ts` so this module depends on it one way only.
*/
function mergeWiringReports(reports) {
	const kept = reports.filter((entry) => entry.count > 0);
	if (kept.length === 0) return EMPTY_WIRING_REPORT;
	const script = kept.find((entry) => entry.script !== void 0)?.script;
	return {
		count: kept.reduce((total, entry) => total + entry.count, 0),
		providers: kept.flatMap((entry) => entry.providers),
		endpoints: kept.flatMap((entry) => entry.endpoints),
		...script === void 0 ? {} : { script }
	};
}
function own$1(object, key) {
	return Object.prototype.hasOwnProperty.call(object, key);
}
const EMPTY_ADJUSTED = (value) => ({
	value,
	report: EMPTY_WIRING_REPORT
});
/**
* Compute one namespace's effective incoming section plus what was withheld.
*
* The rule is uniform: a wiring value the FILE supplies is always discarded and
* this machine's value is always kept. Dropping the file's value alone is not
* enough — `planImport` in `replace` mode treats a key the file omits as a
* deletion, so this machine's value has to be written back or stripping the
* wiring would silently delete the user's own endpoint.
*
* The report is narrower than the rule on purpose: it counts only wiring the
* file ACTIVELY supplies that differs from this machine. An omission needs no
* warning (nothing is being redirected) and would otherwise make every
* self-exported snapshot look suspicious.
*
* `ns` is the id the *host* addresses this section by, so the plugin branch
* also matches the 0.1.7 entry id; the script rule is the plugin section's own
* rule, not a property of the legacy namespace name.
*/
function adjustIncoming(ns, incoming, current, importWiring) {
	if (ns === "llm-pi-ai") return adjustProviders(incoming, current, importWiring);
	if (isOpenCodeSessionSectionId(ns)) return adjustScript(incoming, current, importWiring);
	return EMPTY_ADJUSTED(incoming);
}
function adjustProviders(incoming, current, importWiring) {
	const fileProviders = incoming["providers"];
	if (!isRecord(fileProviders)) return EMPTY_ADJUSTED(incoming);
	const localProviders = isRecord(current["providers"]) ? current["providers"] : {};
	const providers = {};
	const changed = [];
	const endpoints = [];
	let count = 0;
	for (const [route, rawProfile] of Object.entries(fileProviders)) {
		if (!isRecord(rawProfile)) {
			providers[route] = rawProfile;
			continue;
		}
		const localProfile = isRecord(localProviders[route]) ? localProviders[route] : void 0;
		const next = { ...rawProfile };
		for (const key of PROVIDER_WIRING_KEYS) {
			const fileProvides = own$1(rawProfile, key);
			const localProvides = localProfile !== void 0 && own$1(localProfile, key);
			if (fileProvides && (!localProvides || !deepEqualJson(rawProfile[key], localProfile[key]))) {
				count += 1;
				if (!changed.includes(route)) changed.push(route);
				if (key === "baseURL" && typeof rawProfile[key] === "string") endpoints.push({
					provider: route,
					baseURL: rawProfile[key]
				});
			}
			if (importWiring) continue;
			if (localProvides) next[key] = localProfile[key];
			else delete next[key];
		}
		if (localProfile === void 0 && Object.keys(next).length === 0) continue;
		providers[route] = next;
	}
	return {
		value: {
			...incoming,
			providers
		},
		report: count === 0 ? EMPTY_WIRING_REPORT : {
			count,
			providers: changed,
			endpoints
		}
	};
}
function adjustScript(incoming, current, importWiring) {
	const fileSession = incoming["opencodeSession"];
	if (!isRecord(fileSession)) return EMPTY_ADJUSTED(incoming);
	const fileFormat = fileSession["format"];
	if (!isRecord(fileFormat)) return EMPTY_ADJUSTED(incoming);
	const localSession = isRecord(current["opencodeSession"]) ? current["opencodeSession"] : void 0;
	const localFormat = localSession !== void 0 && isRecord(localSession["format"]) ? localSession["format"] : void 0;
	const localProvides = localFormat !== void 0 && own$1(localFormat, "script");
	const differs = own$1(fileFormat, "script") && (!localProvides || !deepEqualJson(fileFormat["script"], localFormat["script"]));
	const scriptValue = fileFormat[PLUGIN_WIRING_SCRIPT_KEY];
	const report = !differs ? EMPTY_WIRING_REPORT : typeof scriptValue === "string" && scriptValue.length > 0 ? {
		count: 1,
		providers: [],
		endpoints: [],
		script: scriptValue
	} : {
		count: 1,
		providers: [],
		endpoints: []
	};
	if (importWiring) return {
		value: incoming,
		report
	};
	const nextFormat = { ...fileFormat };
	if (localProvides) nextFormat[PLUGIN_WIRING_SCRIPT_KEY] = localFormat[PLUGIN_WIRING_SCRIPT_KEY];
	else delete nextFormat[PLUGIN_WIRING_SCRIPT_KEY];
	return {
		value: {
			...incoming,
			opencodeSession: {
				...fileSession,
				format: nextFormat
			}
		},
		report
	};
}
//#endregion
//#region lib/types/client/config-snapshot/plan.js
function has(object, key) {
	return Object.prototype.hasOwnProperty.call(object, key);
}
/**
* Plugin-owned keys the releases before 0.1.7 wrote into the `llm-pi-ai`
* section and the entry-config model no longer declares there.
*
* The entry-config writer refuses a WHOLE batch when any op path is not
* volatile, and `llm-pi-ai` declares only `providers`. A snapshot the plugin
* exported before 0.1.7 — when it still wrote `subagentEffort` into
* `llm-pi-ai` — therefore plans that `set` beside the `providers` `set`, and
* the host rejects both: the user's providers do not import either. Both halves
* are the plugin's to fix, because the key and the entry that supersedes it
* belong to this plugin: the key is dropped from the plan for `llm-pi-ai` and,
* when the file states a value, migrated into the plugin's own section, which
* does declare it.
*/
const LEGACY_LLM_SECTION_KEYS = ["subagentEffort"];
/** `section` without the plugin keys the entry-config `llm-pi-ai` schema does not declare. */
function withoutLegacyLlmKeys(section) {
	if (!LEGACY_LLM_SECTION_KEYS.some((key) => has(section, key))) return section;
	const next = {};
	for (const [key, value] of Object.entries(section)) if (!LEGACY_LLM_SECTION_KEYS.includes(key)) next[key] = value;
	return next;
}
/**
* The file's sections as the entry-config host can accept them.
*
* `llm-pi-ai` loses the plugin keys that host does not declare, and the plugin
* section gains the ones the file still states — the migration that keeps a
* setting the user already chose. The plugin section wins when the file states
* the key in both places, because that section is the model that wrote it
* second. A value that is not a non-empty string is dropped rather than
* migrated: the plugin's own schema spells "unset" as an empty string, and
* there is nothing else a host could have written there.
*
* A file with no such key is returned untouched, so the only plans this
* changes are the ones the entry-config writer would otherwise refuse.
*/
function sectionsForEntryConfig(snapshot, pluginKey) {
	const sections = snapshot.sections;
	const fileLlm = sections[LLM_NAMESPACE];
	if (!isRecord(fileLlm) || !LEGACY_LLM_SECTION_KEYS.some((key) => has(fileLlm, key))) return sections;
	const rawPlugin = sections[pluginKey];
	const plugin = isRecord(rawPlugin) ? { ...rawPlugin } : {};
	const llm = { ...fileLlm };
	for (const key of LEGACY_LLM_SECTION_KEYS) {
		const value = llm[key];
		delete llm[key];
		if (!has(plugin, key) && typeof value === "string" && value.length > 0) plugin[key] = value;
	}
	return {
		...sections,
		[pluginKey]: plugin,
		[LLM_NAMESPACE]: llm
	};
}
/**
* Count one removed entry. A dict-valued entry counts its own first-level
* items — the unit the user reasons about is a provider, not a key — but never
* fewer than one: deleting a settings key is a user-visible change even when
* the value it held was an empty dict, so the summary must not read zero.
*/
function countRemoved(value) {
	return isRecord(value) ? Math.max(1, Object.keys(value).length) : 1;
}
/**
* Compute the path ops that turn `current` into `snapshot`.
*
* Both modes merge at exactly one level: the first level of a dict-valued
* entry is compared per key and each key is replaced wholesale, while
* everything below it is written as one value. Whole-provider replacement is
* deliberate — a field-level merge could never restore a field the snapshot
* deliberately omits, which is what rollback needs.
*
* `merge` keeps top-level entries the snapshot omits; `replace` unsets them.
* Deletions are emitted before writes so the op list reads the same way it is
* summarized, and the summary counts only entries that actually differ — an
* import whose file already matches reports zero across the board.
*
* The plugin namespace's own library keys are never planned, in either mode and
* on either side: `isSnapshotLibraryKey` drops them from the key set entirely,
* so no import can replace the profile library or the rollback copy, and a
* `replace` cannot unset them either. The summary counts ops, and no op exists
* for a key that never enters the loop.
*
* Provider wiring is withheld before the diff: `adjustIncoming` drops the
* endpoint and credential fields the file supplies and writes this machine's
* values back, so a snapshot cannot redirect traffic by default and `replace`
* cannot delete the user's own endpoint either. The withholding happens here,
* inside the planner, so the preview and the write share one rule —
* `applySnapshot` re-runs this same function against a fresh read.
*
* A file exported before 0.1.7 also carries `subagentEffort` inside
* `llm-pi-ai`, which the entry-config model does not declare there and refuses
* wholesale. That key is migrated into the plugin's own section before the diff
* (see `LEGACY_LLM_SECTION_KEYS`), so the providers beside it still import and
* the user's choice survives the model change.
*/
function planImport(snapshot, namespaces, mode, options = {}) {
	const summary = {
		added: 0,
		overwritten: 0,
		removed: 0
	};
	const plans = [];
	const reports = [];
	const pluginNamespace = options.pluginNamespace ?? pluginSectionId(namespaces);
	const fileKey = pluginSectionKey(snapshot.sections, pluginNamespace);
	const entryConfig = pluginNamespace === PLUGIN_ENTRY_ID;
	const sections = entryConfig ? sectionsForEntryConfig(snapshot, fileKey) : snapshot.sections;
	for (const ns of CONFIG_NAMESPACES) {
		const target = ns === PLUGIN_NAMESPACE ? pluginNamespace : ns;
		const currentSection = userSectionOf(namespaces, target);
		const current = entryConfig && ns === "llm-pi-ai" ? withoutLegacyLlmKeys(currentSection) : currentSection;
		const adjusted = adjustIncoming(ns, (ns === PLUGIN_NAMESPACE ? sections[fileKey] : sections[ns]) ?? {}, current, options.importWiring ?? false);
		const incoming = adjusted.value;
		reports.push(adjusted.report);
		const unsets = [];
		const sets = [];
		const keys = (mode === "replace" ? [.../* @__PURE__ */ new Set([...Object.keys(incoming), ...Object.keys(current)])] : Object.keys(incoming)).filter((key) => !isSnapshotLibraryKey(ns, key));
		for (const key of keys) {
			const inFile = has(incoming, key);
			const inCurrent = has(current, key);
			const fileValue = incoming[key];
			const currentValue = current[key];
			if (!inFile) {
				summary.removed += countRemoved(currentValue);
				unsets.push({
					op: "unset",
					path: [key]
				});
				continue;
			}
			if (isRecord(fileValue) && isRecord(currentValue)) {
				let changed = false;
				if (mode === "merge") {
					const merged = { ...currentValue };
					for (const [inner, innerValue] of Object.entries(fileValue)) {
						if (has(currentValue, inner)) {
							if (!deepEqualJson(currentValue[inner], innerValue)) {
								summary.overwritten += 1;
								changed = true;
							}
						} else {
							summary.added += 1;
							changed = true;
						}
						merged[inner] = innerValue;
					}
					if (changed) sets.push({
						op: "set",
						path: [key],
						value: merged
					});
					continue;
				}
				for (const inner of Object.keys(fileValue)) if (has(currentValue, inner)) {
					if (!deepEqualJson(currentValue[inner], fileValue[inner])) {
						summary.overwritten += 1;
						changed = true;
					}
				} else {
					summary.added += 1;
					changed = true;
				}
				for (const inner of Object.keys(currentValue)) if (!has(fileValue, inner)) {
					summary.removed += countRemoved(currentValue[inner]);
					changed = true;
				}
				if (changed) sets.push({
					op: "set",
					path: [key],
					value: fileValue
				});
				continue;
			}
			if (!inCurrent) {
				summary.added += 1;
				sets.push({
					op: "set",
					path: [key],
					value: fileValue
				});
				continue;
			}
			if (!deepEqualJson(fileValue, currentValue)) {
				summary.overwritten += 1;
				sets.push({
					op: "set",
					path: [key],
					value: fileValue
				});
			}
		}
		const ops = [...unsets, ...sets];
		if (ops.length > 0) plans.push({
			ns: target,
			ops
		});
	}
	return {
		mode,
		summary,
		namespaces: plans,
		wiring: mergeWiringReports(reports),
		empty: plans.length === 0
	};
}
//#endregion
//#region lib/types/client/config-snapshot/library.js
const PROFILES_PATH = ["profiles"];
const AUTO_BACKUP_PATH = ["autoBackup"];
const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F]/;
/** Whether a stored value has the shape of a snapshot this build can apply. */
function isStoredSnapshot(value) {
	return isRecord(value) && value.kind === "dsh-thinking-effort/config-snapshot" && value.version === 1 && isRecord(value.sections);
}
/**
* Read the profile library defensively: the user layer is hand-editable (in
* `settings.yaml` before 0.1.7 and in the active profile's config after it), so
* a hand-written entry must be dropped rather than crash the settings page.
*
* `pluginNamespace` is the id the running host addresses the plugin section by
* — the Loader entry under the 0.1.7 entry-config model, and the legacy
* registered namespace on older releases. It is resolved from `namespaces`,
* the very read being keyed, so no caller can omit it and read the library as
* absent on 0.1.7; the parameter is only an override for a caller that already
* resolved the id.
*/
function profilesFromNamespaces(namespaces, pluginNamespace = pluginSectionId(namespaces)) {
	const raw = userSectionOf(namespaces, pluginNamespace).profiles;
	if (!isRecord(raw)) return {};
	const profiles = {};
	for (const [name, value] of Object.entries(raw)) {
		if (RESERVED_PATH_KEYS.includes(name)) continue;
		if (isStoredSnapshot(value)) profiles[name] = value;
	}
	return profiles;
}
/** The auto backup written before a destructive apply; absent until one is written. */
function autoBackupFromNamespaces(namespaces, pluginNamespace = pluginSectionId(namespaces)) {
	const value = userSectionOf(namespaces, pluginNamespace).autoBackup;
	if (!isStoredSnapshot(value) || value.createdAt === "") return void 0;
	return value;
}
function validateProfileName(name, existing) {
	const trimmed = name.trim();
	if (trimmed.length === 0) return {
		ok: false,
		error: "required"
	};
	if (trimmed.length > 40) return {
		ok: false,
		error: "tooLong"
	};
	if (RESERVED_PATH_KEYS.includes(trimmed)) return {
		ok: false,
		error: "reserved"
	};
	if (CONTROL_CHARACTERS.test(trimmed)) return {
		ok: false,
		error: "invalid"
	};
	if (existing.includes(trimmed)) return {
		ok: false,
		error: "taken"
	};
	return {
		ok: true,
		value: trimmed
	};
}
function saveProfileOps(name, snapshot) {
	return [{
		op: "set",
		path: [...PROFILES_PATH, name],
		value: snapshot
	}];
}
function deleteProfileOps(name) {
	return [{
		op: "unset",
		path: [...PROFILES_PATH, name]
	}];
}
function autoBackupOps(snapshot) {
	return [{
		op: "set",
		path: [...AUTO_BACKUP_PATH],
		value: snapshot
	}];
}
//#endregion
//#region lib/types/client/config-snapshot/apply.js
/** The Remote classifies a stale revision as `settings/conflict`; older transports only carry the message. */
function isConflictError(error) {
	return error.code === "settings/conflict" || /conflict/i.test(error.message);
}
function revisionOf$2(namespaces, ns) {
	const found = namespaces.find((entry) => entry.ns === ns);
	return found !== void 0 && typeof found.revision === "number" ? found.revision : 0;
}
/**
* Apply a snapshot to the live configuration.
*
* The caller's snapshot is the *source*, so it is read once up front, and every
* write is fenced with the revision that read reported — or, when an earlier
* write of this same apply moved that namespace, with the revision that write
* returned. That is what keeps a concurrent edit in another window from being
* silently overwritten. A namespace that fails does not roll back its siblings:
* a rollback is another write and can fail the same way, so the outcome names
* exactly which half applied instead.
*/
async function applySnapshot(request) {
	const { settings, snapshot, mode } = request;
	const fresh = await settings.describe();
	if (!fresh.ok) return {
		ok: false,
		skipped: false,
		outcomes: [],
		restartRequired: []
	};
	const namespaces = fresh.value.namespaces;
	const pluginNamespace = request.pluginNamespace ?? pluginSectionId(namespaces);
	const plan = planImport(snapshot, namespaces, mode, {
		importWiring: request.importWiring ?? false,
		pluginNamespace
	});
	if (plan.empty) return {
		ok: true,
		skipped: true,
		outcomes: [],
		restartRequired: []
	};
	let autoBackupError;
	let backedUpNamespace;
	if (request.autoBackup) {
		const backup = await writeAutoBackup(request, namespaces, pluginNamespace);
		autoBackupError = backup.error;
		backedUpNamespace = backup.namespace;
	}
	const revisionFor = (ns) => {
		if (backedUpNamespace !== void 0 && backedUpNamespace.ns === ns && typeof backedUpNamespace.revision === "number") return backedUpNamespace.revision;
		return revisionOf$2(namespaces, ns);
	};
	const outcomes = [];
	for (const namespacePlan of plan.namespaces) {
		const response = await settings.mutate(namespacePlan.ns, namespacePlan.ops, revisionFor(namespacePlan.ns));
		if (response.ok) {
			outcomes.push({
				ns: namespacePlan.ns,
				ok: true,
				revision: response.value.revision
			});
			continue;
		}
		outcomes.push({
			ns: namespacePlan.ns,
			ok: false,
			error: response.error.message,
			conflict: isConflictError(response.error)
		});
	}
	const applied = new Set(outcomes.filter((outcome) => outcome.ok).map((outcome) => outcome.ns));
	return {
		ok: outcomes.every((outcome) => outcome.ok),
		skipped: false,
		outcomes,
		...autoBackupError === void 0 ? {} : { autoBackupError },
		restartRequired: namespaces.filter((entry) => entry.applies === "restart" && applied.has(entry.ns)).map((entry) => entry.ns)
	};
}
/**
* Back up the pre-apply configuration; a failure here must not look like an
* apply failure. The write is fenced with the plugin namespace revision from
* the read at the top of the apply: nothing has written that namespace yet, so
* that revision is still the current one, and a second `describe()` would only
* read the same value back.
*/
async function writeAutoBackup(request, preApply, pluginNamespace) {
	const { settings, now, pluginVersion } = request;
	const backup = snapshotFromNamespaces(preApply, {
		createdAt: (now ?? (() => /* @__PURE__ */ new Date()))().toISOString(),
		pluginVersion: pluginVersion ?? "",
		sourceProfile: "unknown"
	}, pluginNamespace);
	const revision = revisionOf$2(preApply, pluginNamespace);
	const response = await settings.mutate(pluginNamespace, autoBackupOps(backup), revision);
	return response.ok ? { namespace: response.value } : { error: response.error.message };
}
//#endregion
//#region lib/types/client/config-snapshot/parse.js
function byteLength(text) {
	return typeof TextEncoder === "function" ? new TextEncoder().encode(text).length : text.length;
}
/**
* Nesting levels the reserved-key walk descends before refusing the section. A
* snapshot holds a handful of levels of settings objects, so the bound never
* rejects real configuration — it keeps the walk's recursion finite instead of
* leaving it to whatever stack the host happens to have.
*/
const MAX_SECTION_DEPTH = 100;
/** Walk result for a value nested `MAX_SECTION_DEPTH` levels or deeper. */
const DEPTH_EXCEEDED = Symbol("sectionDepthExceeded");
/**
* First reserved path segment found anywhere in the value, if any, or
* `DEPTH_EXCEEDED` when the value nests `MAX_SECTION_DEPTH` levels or deeper.
*/
function findReservedKey(value, depth = 0) {
	if (depth >= MAX_SECTION_DEPTH) return DEPTH_EXCEEDED;
	if (Array.isArray(value)) {
		for (const entry of value) {
			const found = findReservedKey(entry, depth + 1);
			if (found !== void 0) return found;
		}
		return;
	}
	if (!isRecord(value)) return void 0;
	for (const [key, entry] of Object.entries(value)) {
		if (RESERVED_PATH_KEYS.includes(key)) return key;
		const found = findReservedKey(entry, depth + 1);
		if (found !== void 0) return found;
	}
}
function text(value, fallback) {
	return typeof value === "string" && value.length > 0 ? value : fallback;
}
/**
* Validate an untrusted snapshot document. Every failure refuses the whole
* file: a partial import would persist half a configuration while reporting
* success. Unknown namespaces are the one tolerated deviation, because a
* snapshot written by a newer plugin is otherwise still usable.
*/
function parseSnapshot(input) {
	if (byteLength(input) > 2097152) return {
		ok: false,
		error: {
			code: "tooLarge",
			params: { maxBytes: SNAPSHOT_MAX_BYTES }
		}
	};
	let document;
	try {
		document = JSON.parse(input);
	} catch {
		return {
			ok: false,
			error: { code: "invalidJson" }
		};
	}
	if (!isRecord(document)) return {
		ok: false,
		error: { code: "notObject" }
	};
	if (document.kind !== "dsh-thinking-effort/config-snapshot") return {
		ok: false,
		error: {
			code: "kindMismatch",
			params: { kind: SNAPSHOT_KIND }
		}
	};
	if (document.version !== 1) return {
		ok: false,
		error: {
			code: "unsupportedVersion",
			params: {
				version: document.version,
				supported: 1
			}
		}
	};
	const rawSections = document.sections;
	if (!isRecord(rawSections)) return {
		ok: false,
		error: { code: "missingSections" }
	};
	const ignoredNamespaces = [];
	const sections = {};
	for (const [ns, section] of Object.entries(rawSections)) {
		if (!isRecord(section)) return {
			ok: false,
			error: {
				code: "invalidSection",
				params: { ns }
			}
		};
		if (ns !== "llm-pi-ai" && !isOpenCodeSessionSectionId(ns)) {
			ignoredNamespaces.push(ns);
			continue;
		}
		const reserved = findReservedKey(section);
		if (reserved === DEPTH_EXCEEDED) return {
			ok: false,
			error: {
				code: "invalidSection",
				params: {
					ns,
					maxDepth: MAX_SECTION_DEPTH
				}
			}
		};
		if (reserved !== void 0) return {
			ok: false,
			error: {
				code: "reservedKey",
				params: {
					key: reserved,
					ns
				}
			}
		};
		sections[ns] = section;
	}
	sections[LLM_NAMESPACE] ??= {};
	if (!Object.keys(sections).some((ns) => isOpenCodeSessionSectionId(ns))) sections[PLUGIN_NAMESPACE] = {};
	return {
		ok: true,
		value: {
			snapshot: {
				kind: SNAPSHOT_KIND,
				version: 1,
				createdAt: text(document.createdAt, ""),
				pluginVersion: text(document.pluginVersion, ""),
				sourceProfile: text(document.sourceProfile, "unknown"),
				sections
			},
			ignoredNamespaces
		}
	};
}
/** Pretty-printed with a trailing newline so the file diffs cleanly in version control. */
function serializeSnapshot(snapshot) {
	return `${JSON.stringify(snapshot, null, 2)}\n`;
}
//#endregion
//#region lib/types/client/components/ConfigBackupCard.js
const PLUGIN_VERSION$1 = version;
const PARSE_ERROR_KEYS = {
	tooLarge: "backupParseTooLarge",
	invalidJson: "backupParseInvalidJson",
	notObject: "backupParseNotObject",
	kindMismatch: "backupParseKindMismatch",
	unsupportedVersion: "backupParseVersion",
	missingSections: "backupParseSections",
	invalidSection: "backupParseSection",
	reservedKey: "backupParseReserved"
};
const NAME_ERROR_KEYS = {
	required: "backupNameRequired",
	tooLong: "backupNameTooLong",
	reserved: "backupNameReserved",
	invalid: "backupNameInvalid",
	taken: "backupNameTaken"
};
const initialState$2 = {
	open: false,
	namespaces: [],
	writable: true,
	profiles: {},
	profileNames: [],
	autoBackupAt: null,
	nameDraft: "",
	pendingDelete: null,
	preview: null,
	mode: "merge",
	importWiring: false,
	busy: false,
	error: null,
	notice: []
};
function ConfigBackupCard({ settings, palette, t, onApplied, download = downloadJson, now }) {
	const [state, setState] = react.default.useState(initialState$2);
	const fileInput = react.default.useRef(null);
	/**
	* Ordinal of the newest file read. Two selections in quick succession can
	* resolve out of order, and the slower earlier read would otherwise install
	* its preview over the file the user chose last — and confirmation writes the
	* preview, so the token is what keeps consent attached to the last choice.
	*/
	const readToken = react.default.useRef(0);
	const clock = () => (now ?? (() => /* @__PURE__ */ new Date()))();
	const withNamespaces = (current, value) => {
		const namespaces = value.namespaces;
		const profiles = profilesFromNamespaces(namespaces);
		return {
			...current,
			namespaces,
			writable: value.writable !== false,
			profiles,
			profileNames: Object.keys(profiles).sort(),
			autoBackupAt: autoBackupFromNamespaces(namespaces)?.createdAt ?? null
		};
	};
	/**
	* Re-read the registry into the card. The refresh writes only the fields it
	* read, and never the error slot: every caller that means to clear a failure
	* clears it on the way into its own action, while a partial apply installs its
	* report and refreshes in one step — a refresh that cleared the error there
	* would erase the only message naming the namespace that was not written.
	*/
	const load = () => {
		settings.describe().then((response) => {
			if (!response.ok) {
				setState((current) => ({
					...current,
					busy: false,
					error: response.error.message
				}));
				return;
			}
			setState((current) => ({
				...withNamespaces(current, response.value),
				busy: false
			}));
		}).catch((error) => {
			const message = error instanceof Error ? error.message : String(error);
			setState((current) => ({
				...current,
				busy: false,
				error: message
			}));
		});
	};
	react.default.useEffect(() => {
		load();
	}, []);
	const revisionOf = (namespaces, ns) => namespaces.find((entry) => entry.ns === ns)?.revision ?? 0;
	/**
	* The id this host addresses the plugin section by, resolved from the read
	* the caller is working with and falling back to the legacy registered
	* namespace. Every write and every snapshot key uses it.
	*/
	const pluginId = (namespaces = state.namespaces) => pluginSectionId(namespaces);
	const fail = (message) => setState((current) => ({
		...current,
		busy: false,
		notice: [],
		error: message
	}));
	const failImport = (message) => setState((current) => ({
		...current,
		busy: false,
		notice: [],
		error: message,
		preview: null
	}));
	const snapshotMeta = () => ({
		createdAt: clock().toISOString(),
		pluginVersion: PLUGIN_VERSION$1,
		sourceProfile: settings.compatibilityProfile
	});
	const freshSnapshot = async () => {
		setState((current) => ({
			...current,
			busy: true,
			error: null,
			notice: []
		}));
		try {
			const response = await settings.describe();
			if (!response.ok) {
				fail(response.error.message);
				return;
			}
			const namespaces = response.value.namespaces;
			const fresh = {
				snapshot: snapshotFromNamespaces(namespaces, snapshotMeta(), pluginId(namespaces)),
				revision: revisionOf(namespaces, pluginId(namespaces))
			};
			setState((current) => ({
				...current,
				busy: false
			}));
			return fresh;
		} catch (error) {
			fail(error instanceof Error ? error.message : String(error));
			return;
		}
	};
	const exportCurrent = () => {
		freshSnapshot().then((fresh) => {
			if (fresh === void 0) return;
			download(snapshotFileName(clock()), serializeSnapshot(fresh.snapshot));
		});
	};
	const exportProfile = (name) => {
		const stored = state.profiles[name];
		if (stored === void 0) return;
		download(snapshotFileName(clock()), serializeSnapshot(stored));
	};
	const saveProfile = () => {
		if (state.profileNames.length >= 20) {
			fail(t("backupProfileLimit", { max: 20 }));
			return;
		}
		const validated = validateProfileName(state.nameDraft, state.profileNames);
		if (!validated.ok) {
			fail(t(NAME_ERROR_KEYS[validated.error], { max: 40 }));
			return;
		}
		const name = validated.value;
		freshSnapshot().then((fresh) => {
			if (fresh === void 0) return;
			setState((current) => ({
				...current,
				busy: true,
				error: null,
				notice: []
			}));
			settings.mutate(pluginId(), saveProfileOps(name, fresh.snapshot), fresh.revision).then((response) => {
				if (!response.ok) {
					fail(t("backupSaveProfileFailed", { message: response.error.message }));
					return;
				}
				setState((current) => ({
					...current,
					busy: false,
					nameDraft: "",
					notice: [t("backupSavedProfile", { name })]
				}));
				load();
			}).catch((error) => {
				fail(t("backupSaveProfileFailed", { message: error instanceof Error ? error.message : String(error) }));
			});
		});
	};
	const removeProfile = (name) => {
		freshSnapshot().then((fresh) => {
			if (fresh === void 0) return;
			setState((current) => ({
				...current,
				busy: true,
				error: null,
				notice: []
			}));
			settings.mutate(pluginId(), deleteProfileOps(name), fresh.revision).then((response) => {
				if (!response.ok) {
					fail(t("backupDeleteProfileFailed", { message: response.error.message }));
					return;
				}
				setState((current) => ({
					...current,
					busy: false,
					pendingDelete: null
				}));
				load();
			}).catch((error) => {
				fail(t("backupDeleteProfileFailed", { message: error instanceof Error ? error.message : String(error) }));
			});
		});
	};
	const refreshNamespaces = async () => {
		try {
			const response = await settings.describe();
			if (!response.ok) return;
			setState((current) => withNamespaces(current, response.value));
		} catch {}
	};
	const openPreview = (snapshot, label, ignored = []) => {
		setState((current) => ({
			...current,
			error: null,
			notice: [],
			mode: "merge",
			importWiring: false,
			preview: {
				snapshot,
				label,
				ignored
			}
		}));
		refreshNamespaces();
	};
	/**
	* Preview the stored rollback copy, keyed by the same resolved plugin id as
	* every other read. The copy is re-read here rather than passed down from the
	* header, which only renders the timestamp: an id that disagreed with the one
	* the library used would hand `openPreview` `undefined`, and the preview
	* dereferences the snapshot. Returning without a preview is the whole failure
	* mode — a refresh can legitimately drop a copy the mount read still saw.
	*/
	const openAutoBackupPreview = () => {
		const backup = autoBackupFromNamespaces(state.namespaces, pluginId());
		if (backup === void 0) return;
		openPreview(backup, t("backupSourceAutoBackup"));
	};
	const onFileChange = (event) => {
		const input = event.currentTarget;
		const file = input.files?.[0];
		if (file === void 0) return;
		readToken.current += 1;
		const token = readToken.current;
		const current = () => readToken.current === token;
		file.text().then((content) => {
			if (!current()) return;
			const parsed = parseSnapshot(content);
			if (!parsed.ok) {
				failImport(t(PARSE_ERROR_KEYS[parsed.error.code], parsed.error.params ?? {}));
				return;
			}
			openPreview(parsed.value.snapshot, t("backupSourceFile"), parsed.value.ignoredNamespaces);
		}).catch((error) => {
			if (!current()) return;
			failImport(t("backupReadFailed", { message: error instanceof Error ? error.message : String(error) }));
		}).finally(() => {
			input.value = "";
		});
	};
	const appliedNamespaces = (outcome) => outcome.outcomes.filter((entry) => entry.ok).map((entry) => entry.ns);
	/**
	* The outcomes of the writes themselves, reported beside the apply result
	* rather than inside it: a copy that could not be written is not a failed
	* write, and a namespace that needs a restart is not a failure either. These
	* are true of every apply that reached the writes, so a half-applied plan
	* reports them too — a namespace that failed does not unsay a namespace that
	* landed.
	*/
	const applyWarnings = (outcome) => {
		const warnings = [];
		if (outcome.restartRequired.length > 0) warnings.push(t("backupRestartRequired", { namespaces: outcome.restartRequired.join(", ") }));
		if (outcome.autoBackupError !== void 0) warnings.push(t("backupAutoBackupFailed", { message: outcome.autoBackupError }));
		return warnings;
	};
	const confirmImport = () => {
		const pending = state.preview;
		if (pending === null) return;
		setState((current) => ({
			...current,
			busy: true,
			error: null,
			notice: []
		}));
		applySnapshot({
			snapshot: pending.snapshot,
			mode: state.mode,
			importWiring: state.importWiring,
			settings,
			autoBackup: true,
			now: clock,
			pluginVersion: PLUGIN_VERSION$1
		}).then((outcome) => {
			if (outcome.skipped) {
				setState((current) => ({
					...current,
					busy: false,
					preview: null,
					notice: [t("backupSkipped")]
				}));
				return;
			}
			const failed = outcome.outcomes.filter((entry) => !entry.ok);
			if (failed.length > 0) {
				const partial = t("backupAppliedPartial", { detail: failed.map((entry) => `${entry.ns}: ${entry.error ?? ""}`).join("; ") });
				const conflicted = failed.some((entry) => entry.conflict === true);
				const applied = appliedNamespaces(outcome);
				const notice = [...applied.length === 0 ? [] : [t("backupAppliedPartial", { detail: applied.join(", ") })], ...applyWarnings(outcome)];
				setState((current) => ({
					...current,
					busy: false,
					preview: null,
					notice,
					error: conflicted ? `${t("backupConflict")} — ${partial}` : partial
				}));
				load();
				return;
			}
			const notice = [t("backupApplied"), ...applyWarnings(outcome)];
			setState((current) => ({
				...current,
				busy: false,
				preview: null,
				notice
			}));
			onApplied();
			load();
		}).catch((error) => {
			setState((current) => ({
				...current,
				busy: false,
				preview: null,
				error: t("backupImportFailed", { message: error instanceof Error ? error.message : String(error) })
			}));
		});
	};
	const previewPlan = state.preview === null ? null : planImport(state.preview.snapshot, state.namespaces, state.mode, { importWiring: state.importWiring });
	const previewPluginKey = state.preview === null ? pluginId() : pluginSectionKey(state.preview.snapshot.sections, pluginId());
	const previewKeys = state.preview === null ? [] : Object.keys(state.preview.snapshot.sections[previewPluginKey] ?? {});
	const previewLibraryOnly = previewKeys.length > 0 && previewKeys.every((key) => isSnapshotLibraryKey(previewPluginKey, key));
	const wiringDetail = previewPlan === null ? "" : [...previewPlan.wiring.endpoints.map((entry) => `${entry.provider} → ${entry.baseURL}`), ...previewPlan.wiring.script === void 0 ? [] : [previewPlan.wiring.script]].join(", ");
	const readOnly = !state.writable;
	const profileCount = state.profileNames.length;
	const hint = profileCount === 0 ? t("backupCollapsedHintEmpty") : t("backupCollapsedHint", { count: profileCount });
	const muted = {
		color: palette.secondary,
		fontSize: "11px",
		lineHeight: "16px"
	};
	const sectionTitle = {
		fontSize: "12px",
		fontWeight: 700,
		marginBottom: "3px"
	};
	const field = {
		height: "28px",
		padding: "0 8px",
		border: `1px solid ${palette.border}`,
		borderRadius: "8px",
		fontSize: "12px",
		backgroundColor: palette.field,
		color: palette.text,
		outline: "none"
	};
	return (0, react_jsx_runtime.jsxs)("div", {
		"data-scope": "config-backup",
		style: {
			backgroundColor: palette.group,
			border: `1px solid ${palette.border}`,
			borderRadius: "8px",
			boxShadow: palette.shadow,
			overflow: "hidden",
			marginBottom: "8px"
		},
		children: [
			(0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "7px",
					padding: "7px 8px",
					fontSize: "13px",
					fontWeight: 700
				},
				children: [(0, react_jsx_runtime.jsx)(Icon, {
					name: "layers",
					size: 15
				}), (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-label": t("backupCardTitle"),
					"aria-expanded": state.open,
					onClick: () => setState((current) => ({
						...current,
						open: !current.open
					})),
					style: {
						display: "flex",
						alignItems: "center",
						gap: "6px",
						flex: "1 1 auto",
						minWidth: 0,
						padding: 0,
						border: "none",
						background: "transparent",
						color: palette.text,
						font: "inherit",
						letterSpacing: 0,
						cursor: "pointer",
						textAlign: "left"
					},
					children: [
						(0, react_jsx_runtime.jsx)("span", { children: t("backupCardTitle") }),
						(0, react_jsx_runtime.jsx)("span", {
							style: {
								marginLeft: "auto",
								color: palette.secondary,
								fontSize: "11px",
								fontWeight: 600
							},
							children: hint
						}),
						(0, react_jsx_runtime.jsx)(Icon, {
							name: state.open ? "chevronUp" : "chevronDown",
							size: 14
						})
					]
				})]
			}),
			state.error ? (0, react_jsx_runtime.jsx)("div", {
				role: "alert",
				"aria-live": "assertive",
				style: {
					fontSize: "12px",
					lineHeight: "18px",
					color: palette.danger,
					backgroundColor: palette.dangerBg,
					border: `1px solid ${palette.dangerBorder}`,
					borderRadius: "8px",
					padding: "6px 8px",
					margin: "0 8px 8px"
				},
				children: state.error
			}) : null,
			state.notice.length === 0 ? null : (0, react_jsx_runtime.jsx)("div", {
				role: "status",
				"aria-live": "polite",
				style: {
					fontSize: "12px",
					lineHeight: "18px",
					color: palette.accent,
					backgroundColor: palette.accentSoft,
					border: `1px solid ${palette.accentBorder}`,
					borderRadius: "8px",
					padding: "6px 8px",
					margin: "0 8px 8px",
					whiteSpace: "pre-line"
				},
				children: state.notice.join("\n")
			}),
			state.open ? (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: "9px",
					padding: "8px",
					borderTop: `1px solid ${palette.divider}`
				},
				children: [
					(0, react_jsx_runtime.jsxs)("div", { children: [
						(0, react_jsx_runtime.jsx)("div", {
							style: sectionTitle,
							children: t("backupProfilesTitle")
						}),
						profileCount === 0 ? (0, react_jsx_runtime.jsx)("div", {
							style: muted,
							children: t("backupProfilesEmpty")
						}) : state.profileNames.map((name) => (0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "6px",
								padding: "3px 0"
							},
							children: [
								(0, react_jsx_runtime.jsx)("span", {
									style: {
										flex: "1 1 auto",
										minWidth: 0,
										fontSize: "12px",
										overflowWrap: "anywhere"
									},
									children: name
								}),
								(0, react_jsx_runtime.jsx)("span", {
									style: muted,
									children: (state.profiles[name]?.createdAt ?? "").slice(0, 10)
								}),
								(0, react_jsx_runtime.jsx)(ActionButton, {
									text: t("backupApply"),
									onClick: () => openPreview(state.profiles[name], t("backupSourceProfile", { name })),
									disabled: state.busy || readOnly,
									palette,
									icon: "check"
								}),
								(0, react_jsx_runtime.jsx)(ActionButton, {
									text: t("backupExportProfile"),
									onClick: () => exportProfile(name),
									disabled: state.busy,
									palette
								}),
								state.pendingDelete === name ? (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [(0, react_jsx_runtime.jsx)(ActionButton, {
									text: t("backupDeleteConfirm"),
									onClick: () => removeProfile(name),
									disabled: state.busy || readOnly,
									tone: "danger",
									palette
								}), (0, react_jsx_runtime.jsx)(ActionButton, {
									text: t("backupCancel"),
									onClick: () => setState((current) => ({
										...current,
										pendingDelete: null
									})),
									disabled: state.busy,
									palette
								})] }) : (0, react_jsx_runtime.jsx)(ActionButton, {
									text: t("backupDeleteProfile"),
									onClick: () => setState((current) => ({
										...current,
										pendingDelete: name
									})),
									disabled: state.busy || readOnly,
									tone: "danger",
									palette
								})
							]
						}, name)),
						(0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								gap: "6px",
								alignItems: "center",
								paddingTop: "4px"
							},
							children: [(0, react_jsx_runtime.jsx)("input", {
								type: "text",
								value: state.nameDraft,
								placeholder: t("backupProfileNamePlaceholder"),
								"aria-label": t("backupProfileNamePlaceholder"),
								onChange: (event) => {
									const value = event.currentTarget.value;
									setState((current) => ({
										...current,
										notice: [],
										nameDraft: value
									}));
								},
								style: {
									...field,
									flex: "1 1 auto",
									minWidth: 0
								}
							}), (0, react_jsx_runtime.jsx)(ActionButton, {
								text: t("backupSaveCurrent"),
								onClick: saveProfile,
								disabled: state.busy || readOnly,
								tone: "primary",
								palette,
								icon: "check"
							})]
						})
					] }),
					(0, react_jsx_runtime.jsxs)("div", { children: [
						(0, react_jsx_runtime.jsx)("div", {
							style: sectionTitle,
							children: t("backupExportCurrent")
						}),
						(0, react_jsx_runtime.jsx)(ActionButton, {
							text: t("backupExportCurrent"),
							onClick: exportCurrent,
							disabled: state.busy,
							palette
						}),
						(0, react_jsx_runtime.jsx)("div", {
							style: {
								...muted,
								paddingTop: "3px"
							},
							children: t("backupExportHint")
						})
					] }),
					(0, react_jsx_runtime.jsxs)("div", { children: [
						(0, react_jsx_runtime.jsx)("div", {
							style: sectionTitle,
							children: t("backupImportTitle")
						}),
						(0, react_jsx_runtime.jsx)("input", {
							ref: fileInput,
							type: "file",
							accept: "application/json,.json",
							onChange: onFileChange,
							style: { display: "none" }
						}),
						(0, react_jsx_runtime.jsx)(ActionButton, {
							text: t("backupImportChoose"),
							onClick: () => fileInput.current?.click(),
							disabled: state.busy || readOnly,
							palette
						})
					] }),
					readOnly ? (0, react_jsx_runtime.jsx)("div", {
						style: muted,
						children: t("backupReadOnly")
					}) : null,
					(0, react_jsx_runtime.jsxs)("div", { children: [(0, react_jsx_runtime.jsx)("div", {
						style: sectionTitle,
						children: t("backupAutoBackupTitle")
					}), (0, react_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: "6px"
						},
						children: [(0, react_jsx_runtime.jsx)("span", {
							style: muted,
							children: state.autoBackupAt === null ? t("backupAutoBackupNone") : state.autoBackupAt
						}), state.autoBackupAt === null ? null : (0, react_jsx_runtime.jsx)(ActionButton, {
							text: t("backupAutoBackupRestore"),
							onClick: openAutoBackupPreview,
							disabled: state.busy || readOnly,
							palette,
							icon: "restore"
						})]
					})] }),
					state.preview === null || previewPlan === null ? null : (0, react_jsx_runtime.jsxs)("div", {
						style: {
							display: "grid",
							gap: "6px",
							border: `1px solid ${palette.accentBorder}`,
							borderRadius: "8px",
							backgroundColor: palette.accentSoft,
							padding: "7px 8px"
						},
						children: [
							(0, react_jsx_runtime.jsx)("div", {
								style: {
									fontSize: "12px",
									fontWeight: 700
								},
								children: t("backupPreviewTitle")
							}),
							(0, react_jsx_runtime.jsxs)("div", {
								style: muted,
								children: [state.preview.label, state.preview.snapshot.createdAt === "" ? "" : ` · ${state.preview.snapshot.createdAt.slice(0, 10)}`]
							}),
							(0, react_jsx_runtime.jsxs)("select", {
								value: state.mode,
								"aria-label": t("backupPreviewTitle"),
								onChange: (event) => {
									const value = event.currentTarget.value;
									setState((current) => ({
										...current,
										mode: value === "replace" ? "replace" : "merge"
									}));
								},
								style: {
									...field,
									colorScheme: "light dark"
								},
								children: [(0, react_jsx_runtime.jsx)("option", {
									value: "merge",
									children: t("backupModeMerge")
								}), (0, react_jsx_runtime.jsx)("option", {
									value: "replace",
									children: t("backupModeReplace")
								})]
							}),
							(0, react_jsx_runtime.jsx)("div", {
								style: { fontSize: "12px" },
								children: previewPlan.empty ? t(previewLibraryOnly ? "backupSummaryLibraryOnly" : "backupSummaryEmpty") : t("backupSummary", {
									added: previewPlan.summary.added,
									overwritten: previewPlan.summary.overwritten,
									removed: previewPlan.summary.removed
								})
							}),
							previewPlan.wiring.count === 0 ? null : (0, react_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gap: "4px"
								},
								children: [
									(0, react_jsx_runtime.jsx)("div", {
										style: {
											...muted,
											color: palette.secondary
										},
										children: state.importWiring ? t("backupWiringWarning") : t("backupWiringSkipped", { count: previewPlan.wiring.count })
									}),
									!state.importWiring || wiringDetail === "" ? null : (0, react_jsx_runtime.jsx)("div", {
										style: {
											...muted,
											color: palette.secondary
										},
										children: wiringDetail
									}),
									(0, react_jsx_runtime.jsxs)("label", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: "5px",
											fontSize: "12px"
										},
										children: [(0, react_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: state.importWiring,
											onChange: (event) => {
												const checked = event.currentTarget.checked;
												setState((current) => ({
													...current,
													importWiring: checked
												}));
											}
										}), t("backupWiringInclude")]
									})
								]
							}),
							state.preview.ignored.length === 0 ? null : (0, react_jsx_runtime.jsx)("div", {
								style: muted,
								children: t("backupIgnored", { count: state.preview.ignored.length })
							}),
							(0, react_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: "6px"
								},
								children: [(0, react_jsx_runtime.jsx)(ActionButton, {
									text: t("backupConfirmImport"),
									onClick: confirmImport,
									disabled: state.busy || readOnly || previewPlan.empty,
									tone: "primary",
									palette,
									icon: "check"
								}), (0, react_jsx_runtime.jsx)(ActionButton, {
									text: t("backupCancel"),
									onClick: () => setState((current) => ({
										...current,
										preview: null
									})),
									disabled: state.busy,
									palette
								})]
							})
						]
					})
				]
			}) : null
		]
	});
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
function parseExpression(source) {
	return new ExpressionParser(tokenize(source)).parse();
}
/**
* Every identifier the evaluation scope provides — the data keys of the Host's
* `SessionFormatContext`. The Host asserts these two sets are exactly equal at
* compile time, so this list cannot drift away from what evaluation sees.
*/
const SESSION_CONTEXT_KEYS = [
	"provider",
	"model",
	"rawSessionId",
	"sessionId",
	"now",
	"hex12",
	"tail62",
	"sha256"
];
/** Every helper function `expression` mode may call. Also type-checked against the Host's table. */
const EXPRESSION_HELPER_NAMES = [
	"sha256",
	"slice",
	"lower",
	"upper"
];
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
function collectExpressionNames(node) {
	const refs = [];
	const calls = [];
	const visit = (current) => {
		switch (current.kind) {
			case "literal": return;
			case "ref":
				refs.push(current.name);
				return;
			case "call":
				calls.push(current.name);
				for (const arg of current.args) visit(arg);
				return;
			case "binary":
				visit(current.left);
				visit(current.right);
				return;
		}
	};
	visit(node);
	return {
		refs,
		calls
	};
}
//#endregion
//#region lib/types/client/opencode-format-validation.js
/**
* The section the generator settings live in — the legacy registered namespace.
* Under the 0.1.7 entry-config model they live in the plugin's own entry
* section instead, so the card that reads and writes them is handed the id
* `pluginSectionId` resolved from its own `describe()`.
*/
const FORMAT_NAMESPACE = OPENCODE_SESSION_NAMESPACE;
/** The path prefix every generated op addresses. */
const FORMAT_PATH = ["opencodeSession", "format"];
/** The seven editable fields, in the order the card renders them. */
const FORMAT_KEYS = [
	"mode",
	"time",
	"template",
	"expression",
	"script",
	"validate",
	"onInvalid"
];
/**
* Must equal the schema defaults in `src/host/plugin-settings.ts`. Kept as a
* literal rather than derived from the schema because the client bundle does
* not import the host schema.
*/
const DEFAULT_FORMAT_DRAFT = {
	mode: "ses-derive",
	time: "firstUse",
	template: "",
	expression: "",
	script: "",
	validate: "",
	onInvalid: "warn"
};
function record(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) ? value : void 0;
}
function own(value, key) {
	const object = record(value);
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	return object[key];
}
function enumValue(value, allowed, fallback) {
	return typeof value === "string" && allowed.includes(value) ? value : fallback;
}
function stringValue(value, fallback) {
	return typeof value === "string" ? value : fallback;
}
/**
* Read a draft from a namespace's raw user layer.
*
* Unsupported enum values fall back exactly the way the Host resolves them, so
* the card never shows a mode the Host would not honour. The string fields are
* taken verbatim, including values the Host would reject at runtime: showing
* the stored text is what lets the user see and repair a bad entry.
*/
function draftFromSettings(stored) {
	const format = own(own(stored, "opencodeSession"), "format");
	return {
		mode: enumValue(own(format, "mode"), FORMAT_MODES, DEFAULT_FORMAT_DRAFT.mode),
		time: enumValue(own(format, "time"), FORMAT_TIMES, DEFAULT_FORMAT_DRAFT.time),
		template: stringValue(own(format, "template"), DEFAULT_FORMAT_DRAFT.template),
		expression: stringValue(own(format, "expression"), DEFAULT_FORMAT_DRAFT.expression),
		script: stringValue(own(format, "script"), DEFAULT_FORMAT_DRAFT.script),
		validate: stringValue(own(format, "validate"), DEFAULT_FORMAT_DRAFT.validate),
		onInvalid: enumValue(own(format, "onInvalid"), FORMAT_INVALID_POLICIES, DEFAULT_FORMAT_DRAFT.onInvalid)
	};
}
/** Whether `value` is an absolute path on POSIX or Windows. */
function isAbsolutePath(value) {
	if (value.startsWith("/")) return true;
	return /^[A-Za-z]:[\\/]/.test(value);
}
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
function formatFieldErrors(draft) {
	const problems = [];
	if (draft.validate.trim() !== "") try {
		new RegExp(draft.validate);
	} catch {
		problems.push({
			field: "validate",
			error: "validateRegex"
		});
	}
	if (draft.mode === "template" && draft.template.trim() === "") problems.push({
		field: "template",
		error: "templateRequired"
	});
	if (draft.mode === "expression") {
		if (draft.expression.trim() === "") problems.push({
			field: "expression",
			error: "expressionRequired"
		});
		else try {
			const names = collectExpressionNames(parseExpression(draft.expression));
			const unknownRef = names.refs.find((name) => !SESSION_CONTEXT_KEYS.includes(name));
			const unknownCall = names.calls.find((name) => !EXPRESSION_HELPER_NAMES.includes(name));
			if (unknownRef !== void 0 || unknownCall !== void 0) problems.push({
				field: "expression",
				error: "expressionUnknownName"
			});
		} catch {
			problems.push({
				field: "expression",
				error: "expressionSyntax"
			});
		}
	}
	if (draft.mode === "script") {
		if (draft.script.trim() === "") problems.push({
			field: "script",
			error: "scriptRequired"
		});
		else if (!isAbsolutePath(draft.script.trim())) problems.push({
			field: "script",
			error: "scriptNotAbsolute"
		});
	}
	return problems;
}
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
function formatOps(draft, saved) {
	const ops = [];
	for (const key of FORMAT_KEYS) {
		const value = key === "validate" && draft.validate.trim() === "" ? "" : draft[key];
		if (value === saved[key]) continue;
		ops.push({
			op: "set",
			path: [...FORMAT_PATH, key],
			value
		});
	}
	return ops;
}
//#endregion
//#region lib/types/client/components/OpenCodeFormatCard.js
/**
* Localization keys for the five generator modes. Typed as a complete map over
* the shared mode list, so adding a mode there without a label here is a type
* error rather than an option that renders its raw key name.
*/
const MODE_LABEL_KEYS = {
	"ses-derive": "formatModeSesDerive",
	"passthrough": "formatModePassthrough",
	"template": "formatModeTemplate",
	"expression": "formatModeExpression",
	"script": "formatModeScript"
};
/** Localization key naming each enum field in the fallback notice. */
const ENUM_LABEL_KEYS = {
	mode: "formatModeLabel",
	time: "formatTimeLabel",
	onInvalid: "formatOnInvalidLabel"
};
/** Localization keys for the three invalid policies, in `FORMAT_INVALID_POLICIES` order. */
const POLICY_LABEL_KEYS = {
	"warn": "formatOnInvalidWarn",
	"drop": "formatOnInvalidDrop",
	"send": "formatOnInvalidSend"
};
/**
* Localization key per validation problem.
*
* Every `FormatFieldError` needs an entry: the card has already refused the
* write at this point, so an unmapped problem would show its raw key name and
* leave the user without the reason the Apply button is dark.
*/
const ERROR_LABEL_KEYS = {
	validateRegex: "formatErrValidateRegex",
	templateRequired: "formatErrTemplateRequired",
	expressionRequired: "formatErrExpressionRequired",
	expressionSyntax: "formatErrExpressionSyntax",
	expressionUnknownName: "formatErrExpressionUnknownName",
	scriptRequired: "formatErrScriptRequired",
	scriptNotAbsolute: "formatErrScriptNotAbsolute"
};
/** The hint key shown under each free-text field, keyed by field. */
const HINT_LABEL_KEYS = {
	template: "formatTemplateHint",
	expression: "formatExpressionHint",
	script: "formatScriptHint",
	validate: "formatValidateHint"
};
/**
* The modes whose value consumes the timestamp source. Only `passthrough`
* never does: it hands `request.sessionId` straight to validation, while
* `ses-derive` derives from the source and `template`, `expression` and
* `script` all read `hex12` through `context(request, session, config.time)` —
* as does `derive(session, config.time)`, which each of them falls back to when
* its source is empty or fails.
*
* Derived from the shared mode list rather than listed again, so a mode added
* there is offered its timestamp source by default instead of silently losing
* the control.
*/
const TIME_MODES = FORMAT_MODES.filter((mode) => mode !== "passthrough");
const initialState$1 = {
	open: false,
	saved: DEFAULT_FORMAT_DRAFT,
	draft: DEFAULT_FORMAT_DRAFT,
	unsupportedStored: [],
	writable: true,
	busy: false,
	error: null,
	notice: null
};
function revisionOf$1(namespaces, namespace) {
	return namespaces.find((entry) => entry.ns === namespace)?.revision ?? 0;
}
function userOf(namespaces, namespace) {
	return namespaces.find((entry) => entry.ns === namespace)?.user;
}
/**
* Stored enum values the Host would reject, with the value it resolves them to.
*
* All three enum fields are reported, not just `mode`: a hand-written document
* can put garbage in any of them, and showing the resolved default without
* saying so leaves the user unable to tell "stored as firstUse" from "stored as
* garbage, resolved to firstUse".
*/
function unsupportedStoredEnums(stored) {
	const format = ownRecord(ownRecord(stored, "opencodeSession"), "format");
	const found = [];
	const check = (field, allowed, fallback) => {
		const value = ownValue(format, field);
		if (value !== void 0 && !allowed.includes(String(value))) found.push({
			field,
			fallback
		});
	};
	check("mode", FORMAT_MODES, DEFAULT_FORMAT_DRAFT.mode);
	check("time", FORMAT_TIMES, DEFAULT_FORMAT_DRAFT.time);
	check("onInvalid", FORMAT_INVALID_POLICIES, DEFAULT_FORMAT_DRAFT.onInvalid);
	return found;
}
/** Read one own property of a possibly-absent record. */
function ownValue(object, key) {
	if (object === void 0 || !Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	return object[key];
}
/** Read one own property that must itself be a record. */
function ownRecord(value, key) {
	if (typeof value !== "object" || value === null) return void 0;
	const object = value;
	if (!Object.prototype.hasOwnProperty.call(object, key)) return void 0;
	const nested = object[key];
	return typeof nested === "object" && nested !== null && !Array.isArray(nested) ? nested : void 0;
}
const isConflict = (message) => /conflict/i.test(message);
function OpenCodeFormatCard({ settings, palette, t, revision, namespace = FORMAT_NAMESPACE, onApplied }) {
	const [state, setState] = react.default.useState(initialState$1);
	/**
	* The latest state, for the async callbacks below. `apply` re-reads the
	* registry before writing, and by the time that read lands the user may have
	* typed into a field this card did not re-render for; the draft that gets
	* written has to be the one on screen at that moment, not the one captured
	* when Apply was clicked.
	*/
	const stateRef = react.default.useRef(state);
	stateRef.current = state;
	/**
	* Fold one read into the card's state.
	*
	* A field the user has already edited (`draft` differs from `saved`) keeps
	* its draft; every other field takes the freshly read value. That keeps the
	* card from writing back the values it read before a page-mate — the backup
	* card's import, the model editor's session switch — changed this namespace:
	* with the whole draft replaced, the next Apply would present those retired
	* values as edits and silently undo the other write. `saved` always advances
	* to the fresh read, so it stays the single reference for "unchanged".
	*/
	const applyRead = (current, value) => {
		const user = userOf(value.namespaces, namespace);
		const fresh = draftFromSettings(user);
		let draft = current.draft;
		for (const key of FORMAT_KEYS) if (draft[key] === current.saved[key]) draft = {
			...draft,
			[key]: fresh[key]
		};
		return {
			...current,
			saved: fresh,
			draft,
			unsupportedStored: unsupportedStoredEnums(user),
			writable: value.writable !== false,
			busy: false,
			error: null
		};
	};
	const load = () => {
		settings.describe().then((response) => {
			if (!response.ok) {
				setState((current) => ({
					...current,
					busy: false,
					error: response.error.message
				}));
				return;
			}
			setState((current) => applyRead(current, response.value));
		}).catch((error) => {
			const message = error instanceof Error ? error.message : String(error);
			setState((current) => ({
				...current,
				busy: false,
				error: message
			}));
		});
	};
	react.default.useEffect(() => {
		load();
	}, [revision]);
	const patch = (field, value) => {
		setState((current) => ({
			...current,
			notice: null,
			error: null,
			draft: {
				...current.draft,
				[field]: value
			}
		}));
	};
	/**
	* Apply the draft. The registry is described again first: the model editor's
	* session switch and the backup card both write this namespace, so the
	* revision this card mounted with can already be stale, and a stale write is
	* refused by the host.
	*/
	const apply = () => {
		setState((current) => ({
			...current,
			busy: true,
			error: null,
			notice: null
		}));
		settings.describe().then((response) => {
			if (!response.ok) {
				setState((current) => ({
					...current,
					busy: false,
					error: response.error.message
				}));
				return;
			}
			const stored = draftFromSettings(userOf(response.value.namespaces, namespace));
			const ops = formatOps(stateRef.current.draft, stored);
			if (ops.length === 0) {
				setState((current) => ({
					...current,
					busy: false,
					saved: current.draft,
					notice: t("formatSaved")
				}));
				return;
			}
			return settings.mutate(namespace, ops, revisionOf$1(response.value.namespaces, namespace)).then((written) => {
				if (!written.ok) {
					const message = written.error.message;
					setState((current) => ({
						...current,
						busy: false,
						error: isConflict(message) ? t("formatConflict") : t("formatSaveFailed", { message })
					}));
					return;
				}
				setState((current) => ({
					...current,
					busy: false,
					saved: current.draft,
					notice: t("formatSaved")
				}));
				load();
				onApplied?.();
			});
		}).catch((error) => {
			const message = error instanceof Error ? error.message : String(error);
			setState((current) => ({
				...current,
				busy: false,
				error: t("formatSaveFailed", { message })
			}));
		});
	};
	/** Validation problems for the current draft; used by the disabled state and the field errors. */
	const errors = formatFieldErrors(state.draft);
	const dirty = formatOps(state.draft, state.saved).length > 0;
	const blocked = dirty && errors.length > 0;
	const readOnly = !state.writable;
	const errorFor = (field) => errors.find((problem) => problem.field === field)?.error;
	/**
	* One free-text field with its hint and, when the draft has a problem, the
	* reason the write is refused. Defined below `errors` on purpose: it closes
	* over that value, and moving it above would read it before initialization.
	*/
	const textField = (field, labelKey) => {
		const problem = errorFor(field);
		return (0, react_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gap: "3px"
			},
			children: [
				(0, react_jsx_runtime.jsxs)("label", {
					style: rowStyle,
					children: [(0, react_jsx_runtime.jsx)("span", {
						style: labelStyle,
						children: t(labelKey)
					}), (0, react_jsx_runtime.jsx)("input", {
						type: "text",
						value: state.draft[field],
						"aria-label": t(labelKey),
						"aria-invalid": problem === void 0 ? void 0 : true,
						disabled: state.busy,
						onChange: (event) => patch(field, event.currentTarget.value),
						style: {
							...selectStyle(palette),
							borderColor: problem === void 0 ? palette.border : palette.danger,
							color: problem === void 0 ? palette.text : palette.danger
						}
					})]
				}),
				(0, react_jsx_runtime.jsx)("span", {
					style: {
						fontSize: "11px",
						color: palette.secondary,
						lineHeight: "15px"
					},
					children: t(HINT_LABEL_KEYS[field])
				}),
				problem === void 0 ? null : (0, react_jsx_runtime.jsx)("span", {
					role: "alert",
					style: {
						fontSize: "11px",
						color: palette.danger,
						lineHeight: "15px"
					},
					children: t(ERROR_LABEL_KEYS[problem])
				})
			]
		});
	};
	const modeSelect = (0, react_jsx_runtime.jsx)("select", {
		value: state.draft.mode,
		"aria-label": t("formatModeLabel"),
		disabled: state.busy,
		onChange: (event) => patch("mode", event.currentTarget.value),
		style: selectStyle(palette),
		children: FORMAT_MODES.map((mode) => (0, react_jsx_runtime.jsx)("option", {
			value: mode,
			children: t(MODE_LABEL_KEYS[mode])
		}, mode))
	});
	const timeSelect = TIME_MODES.includes(state.draft.mode) ? (0, react_jsx_runtime.jsxs)("select", {
		value: state.draft.time,
		"aria-label": t("formatTimeLabel"),
		disabled: state.busy,
		onChange: (event) => patch("time", event.currentTarget.value),
		style: selectStyle(palette),
		children: [(0, react_jsx_runtime.jsx)("option", {
			value: "firstUse",
			children: t("formatTimeFirstUse")
		}), (0, react_jsx_runtime.jsx)("option", {
			value: "hash",
			children: t("formatTimeHash")
		})]
	}) : null;
	return (0, react_jsx_runtime.jsxs)("div", {
		style: {
			backgroundColor: palette.group,
			border: `1px solid ${palette.border}`,
			borderRadius: "8px",
			boxShadow: palette.shadow,
			overflow: "hidden",
			marginBottom: "8px"
		},
		"data-scope": "opencode-format",
		children: [
			(0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "7px",
					padding: "7px 8px 6px"
				},
				children: [(0, react_jsx_runtime.jsx)(Icon, {
					name: "sliders",
					size: 15
				}), (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-label": t("formatCardTitle"),
					"aria-expanded": state.open,
					onClick: () => setState((current) => ({
						...current,
						open: !current.open
					})),
					style: {
						display: "flex",
						alignItems: "center",
						gap: "6px",
						flex: "1 1 auto",
						minWidth: 0,
						padding: 0,
						border: "none",
						background: "transparent",
						color: palette.text,
						font: "inherit",
						fontSize: "13px",
						fontWeight: 700,
						letterSpacing: 0,
						cursor: "pointer",
						textAlign: "left"
					},
					children: [
						(0, react_jsx_runtime.jsx)("span", { children: t("formatCardTitle") }),
						(0, react_jsx_runtime.jsx)("span", {
							style: {
								marginLeft: "auto",
								color: palette.secondary,
								fontSize: "11px",
								fontWeight: 600
							},
							children: t("formatCardHint", { mode: t(MODE_LABEL_KEYS[state.saved.mode] ?? "formatModeSesDerive") })
						}),
						(0, react_jsx_runtime.jsx)(Icon, {
							name: state.open ? "chevronUp" : "chevronDown",
							size: 14
						})
					]
				})]
			}),
			state.error ? (0, react_jsx_runtime.jsx)("div", {
				role: "alert",
				"aria-live": "assertive",
				style: {
					fontSize: "12px",
					lineHeight: "18px",
					color: palette.danger,
					backgroundColor: palette.dangerBg,
					border: `1px solid ${palette.dangerBorder}`,
					borderRadius: "8px",
					padding: "6px 8px",
					margin: "0 8px 8px"
				},
				children: state.error
			}) : null,
			state.notice === null ? null : (0, react_jsx_runtime.jsx)("div", {
				role: "status",
				"aria-live": "polite",
				style: {
					fontSize: "12px",
					lineHeight: "18px",
					color: palette.accent,
					backgroundColor: palette.accentSoft,
					border: `1px solid ${palette.accentBorder}`,
					borderRadius: "8px",
					padding: "6px 8px",
					margin: "0 8px 8px"
				},
				children: state.notice
			}),
			state.open ? (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: "9px",
					padding: "8px",
					borderTop: `1px solid ${palette.divider}`
				},
				children: [
					state.unsupportedStored.length === 0 ? null : (0, react_jsx_runtime.jsx)("div", {
						style: {
							fontSize: "11px",
							color: palette.secondary
						},
						children: t("formatUnsupportedStored", { detail: state.unsupportedStored.map((entry) => `${t(ENUM_LABEL_KEYS[entry.field])} → ${entry.fallback}`).join(", ") })
					}),
					(0, react_jsx_runtime.jsxs)("label", {
						style: rowStyle,
						children: [(0, react_jsx_runtime.jsx)("span", {
							style: labelStyle,
							children: t("formatModeLabel")
						}), modeSelect]
					}),
					timeSelect === null ? null : (0, react_jsx_runtime.jsxs)("label", {
						style: rowStyle,
						children: [(0, react_jsx_runtime.jsx)("span", {
							style: labelStyle,
							children: t("formatTimeLabel")
						}), timeSelect]
					}),
					state.draft.mode === "template" ? textField("template", "formatTemplateLabel") : null,
					state.draft.mode === "expression" ? textField("expression", "formatExpressionLabel") : null,
					state.draft.mode === "script" ? textField("script", "formatScriptLabel") : null,
					textField("validate", "formatValidateLabel"),
					state.draft.validate.trim() === "" ? null : (0, react_jsx_runtime.jsxs)("label", {
						style: rowStyle,
						children: [(0, react_jsx_runtime.jsx)("span", {
							style: labelStyle,
							children: t("formatOnInvalidLabel")
						}), (0, react_jsx_runtime.jsx)("select", {
							value: state.draft.onInvalid,
							"aria-label": t("formatOnInvalidLabel"),
							disabled: state.busy,
							onChange: (event) => patch("onInvalid", event.currentTarget.value),
							style: selectStyle(palette),
							children: FORMAT_INVALID_POLICIES.map((policy) => (0, react_jsx_runtime.jsx)("option", {
								value: policy,
								children: t(POLICY_LABEL_KEYS[policy])
							}, policy))
						})]
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: "6px",
							alignItems: "center"
						},
						children: (0, react_jsx_runtime.jsx)(ActionButton, {
							text: t("formatApply"),
							onClick: apply,
							disabled: state.busy || readOnly || !dirty || blocked,
							tone: "primary",
							palette,
							icon: "check"
						})
					})
				]
			}) : null
		]
	});
}
const rowStyle = {
	display: "grid",
	gridTemplateColumns: "auto minmax(0, 1fr)",
	alignItems: "center",
	gap: "8px"
};
const labelStyle = {
	fontSize: "12px",
	fontWeight: 600
};
const selectStyle = (palette) => ({
	height: "28px",
	minWidth: "180px",
	maxWidth: "100%",
	padding: "0 10px",
	border: `1px solid ${palette.border}`,
	borderRadius: "8px",
	fontSize: "13px",
	backgroundColor: palette.field,
	color: palette.text,
	colorScheme: "light dark",
	boxShadow: palette.shadow
});
//#endregion
//#region lib/types/client/SectionEditor.js
const PLUGIN_VERSION = version;
const initialState = {
	loading: true,
	namespace: null,
	openCodeSessionReads: 0,
	openCodeSessionViews: {},
	openCodeSessionDrafts: {},
	openCodeSessionDirty: {},
	openCodeSessionFound: false,
	openCodeSessionAvailable: false,
	inventory: [],
	providerViews: {},
	providerDrafts: {},
	providerDirty: {},
	providerCompatDirty: {},
	providerCompatExpanded: {},
	modelCompatViews: {},
	modelCompatDrafts: {},
	modelCompatDirty: {},
	modelCompatExpanded: {},
	revision: 0,
	expanded: {},
	expandedProviders: {},
	drafts: {},
	contextDrafts: {},
	inputDrafts: {},
	dirty: {},
	busy: false,
	error: null,
	notice: null,
	query: "",
	nsFound: true,
	pluginSection: null,
	subagent: null,
	subagentDraft: "default",
	subagentCustom: "",
	quickSettingsOpen: false
};
function createOpenCodeSessionState(namespace, inventory, previous) {
	return openCodeSessionStateFor(namespace, inventory, previous);
}
function applyOpenCodeSessionMutation(state, response, inventory, savedKey) {
	if (!response.ok || !isOpenCodeSessionNamespace(response.value)) return state;
	const previous = {
		...state,
		dirty: { ...state.dirty }
	};
	if (savedKey !== void 0) delete previous.dirty[savedKey];
	return openCodeSessionStateFor(response.value, inventory, previous);
}
function keyOf(item) {
	return modelCompatKey(item.route, item.model);
}
function revisionOf(namespace) {
	return typeof namespace.revision === "number" ? namespace.revision : 0;
}
function availableCompatFieldCount(view) {
	const values = view;
	return GATEWAY_COMPAT_FIELD_KEYS.filter((key) => key !== "supportsDeveloperRole" && key !== "maxTokensField" && values[`${key}Available`] === true).length;
}
function removeDirtyFields(dirty, key, fields) {
	const next = { ...dirty };
	const entry = { ...next[key] ?? {} };
	fields.forEach((field) => {
		delete entry[field];
	});
	if (Object.keys(entry).length === 0) delete next[key];
	else next[key] = entry;
	return next;
}
function clearOpenCodeSessionState(current, _key) {
	return current;
}
function clearModelEditorState(current, key) {
	const next = clearOpenCodeSessionState(current, key);
	const expanded = { ...next.expanded };
	delete expanded[key];
	const drafts = { ...next.drafts };
	delete drafts[key];
	const contextDrafts = { ...next.contextDrafts };
	delete contextDrafts[key];
	const inputDrafts = { ...next.inputDrafts };
	delete inputDrafts[key];
	const dirty = { ...next.dirty };
	delete dirty[key];
	return {
		...next,
		expanded,
		drafts,
		contextDrafts,
		inputDrafts,
		dirty
	};
}
function subagentView(namespace) {
	if (!namespace) return {
		subagent: null,
		draft: "default",
		custom: "",
		revision: 0
	};
	const revision = revisionOf(namespace);
	const user = namespace.user ?? {};
	const effort = typeof user.subagentEffort === "string" && user.subagentEffort.length > 0 ? user.subagentEffort : null;
	const draft = effort === null ? "default" : ALL_LEVELS.includes(effort) ? effort : "custom";
	return {
		subagent: {
			effort,
			revision
		},
		draft,
		custom: draft === "custom" ? effort ?? "" : "",
		revision
	};
}
const noRuntimeSubscribe = () => () => void 0;
const noRuntimeSnapshot = () => emptyTakeoverRuntimeResolution;
/**
* The section whose `user` layer holds `subagentEffort`: the plugin's own entry
* section when the host publishes one (0.1.7 and later), else the `llm-pi-ai`
* section the releases before it wrote the value into. `null` while the model
* registry itself is missing, which is the state the editor already reports as
* "unconfigured": the setting is only meaningful beside the models it applies
* to, and `nsFound` hides the rest of the page in exactly that case.
*/
function subagentSection(pluginSection, llmSection) {
	return isPluginEntrySection(pluginSection) && llmSection !== null ? pluginSection : llmSection;
}
/** The OpenCode session state the editor holds, in the shape its merge helpers take. */
function openCodeStateOf(current) {
	return {
		namespace: isOpenCodeSessionNamespace(current.pluginSection) ? current.pluginSection : null,
		views: current.openCodeSessionViews,
		drafts: current.openCodeSessionDrafts,
		dirty: current.openCodeSessionDirty,
		found: current.openCodeSessionFound,
		available: current.openCodeSessionAvailable
	};
}
function SectionEditor({ settings, locale, t, palette = iosPalette(), takeoverRuntime }) {
	const [state, setState] = react.default.useState(initialState);
	const takeoverResolution = react.default.useSyncExternalStore(takeoverRuntime?.subscribe ?? noRuntimeSubscribe, takeoverRuntime?.getSnapshot ?? noRuntimeSnapshot, takeoverRuntime?.getSnapshot ?? noRuntimeSnapshot);
	const applyNamespaceView = (current, nextNamespace, notice, pluginSection) => {
		const view = subagentView(subagentSection(pluginSection, nextNamespace));
		const nextInventory = inventoryFrom(nextNamespace);
		const providerViews = providerGatewayCompatViewsFrom(nextNamespace, settings.compatibilityProfile, takeoverResolution);
		const modelCompatViews = modelGatewayCompatViewsFrom(nextNamespace, nextInventory, settings.compatibilityProfile, takeoverResolution);
		const modelCompatDrafts = { ...current.modelCompatDrafts };
		for (const item of nextInventory) {
			const key = keyOf(item);
			const draft = modelCompatDrafts[key];
			const dirty = current.modelCompatDirty[key];
			const view = modelCompatViews[key];
			if (view === void 0) continue;
			if (!dirty) modelCompatDrafts[key] = view;
			else if (draft) {
				const preserved = { ...view };
				for (const field of GATEWAY_COMPAT_FIELD_KEYS) if (dirty[field] === true) Object.assign(preserved, { [field]: draft[field] });
				modelCompatDrafts[key] = preserved;
			}
		}
		const providerDrafts = { ...current.providerDrafts };
		for (const [provider, providerView] of Object.entries(providerViews)) if (current.providerDirty[provider] !== true) providerDrafts[provider] = providerView;
		return {
			...current,
			loading: false,
			namespace: nextNamespace,
			busy: false,
			nsFound: true,
			pluginSection,
			inventory: nextInventory,
			providerViews,
			providerDrafts,
			modelCompatViews,
			modelCompatDrafts,
			revision: revisionOf(nextNamespace),
			subagent: view.subagent,
			subagentDraft: view.draft,
			subagentCustom: view.custom,
			notice
		};
	};
	/**
	* Refresh every view of the plugin's one section from a single descriptor.
	*
	* `subagentEffort` and the OpenCode session fields live in the same section
	* under the 0.1.7 entry-config model, so one write to either returns the
	* descriptor that supersedes what the editor holds for both — and the
	* revision in it is the `expectedRevision` the NEXT write to that section has
	* to send. Revisions are per section there, so a view left on the pre-write
	* copy made the second of any two such writes fail as a conflict. Every write
	* whose response targets this section lands here; `savedKey` names the
	* OpenCode toggle just persisted, whose draft is no longer dirty.
	*/
	const applyPluginSectionView = (current, section, notice, savedKey) => {
		const previous = openCodeStateOf(current);
		const refreshed = section === null ? createOpenCodeSessionState(void 0, current.inventory, previous) : applyOpenCodeSessionMutation(previous, {
			ok: true,
			value: section
		}, current.inventory, savedKey);
		const view = subagentView(subagentSection(section, current.namespace));
		return {
			...current,
			busy: false,
			pluginSection: section,
			openCodeSessionReads: current.openCodeSessionReads + 1,
			openCodeSessionViews: refreshed.views,
			openCodeSessionDrafts: refreshed.drafts,
			openCodeSessionDirty: refreshed.dirty,
			openCodeSessionFound: refreshed.found,
			openCodeSessionAvailable: refreshed.available,
			subagent: view.subagent,
			subagentDraft: view.draft,
			subagentCustom: view.custom,
			notice
		};
	};
	const load = () => {
		setState((current) => ({
			...current,
			loading: true,
			error: null
		}));
		settings.describe().then((response) => {
			if (!response.ok) {
				setState((current) => ({
					...current,
					loading: false,
					busy: false,
					error: response.error.message
				}));
				return;
			}
			const found = response.value.namespaces.find((entry) => entry.ns === NS);
			const plugin = pluginSection(response.value.namespaces) ?? null;
			if (!found) {
				setState((current) => {
					const next = {
						...current,
						loading: false,
						busy: false,
						nsFound: false,
						namespace: null,
						inventory: [],
						providerViews: {},
						providerDrafts: {},
						providerDirty: {},
						providerCompatDirty: {},
						providerCompatExpanded: {},
						modelCompatViews: {},
						modelCompatDrafts: {},
						modelCompatDirty: {},
						modelCompatExpanded: {},
						subagent: null
					};
					return applyPluginSectionView(next, plugin, null);
				});
				return;
			}
			setState((current) => applyPluginSectionView(applyNamespaceView(current, found, null, plugin), plugin, null));
		}).catch((error) => {
			const message = error instanceof Error ? error.message : String(error);
			setState((current) => ({
				...current,
				loading: false,
				busy: false,
				error: t("readSettingsFailed", { message })
			}));
		});
	};
	react.default.useEffect(() => {
		load();
	}, []);
	react.default.useEffect(() => {
		setState((current) => {
			if (current.namespace === null) return current;
			const providerViews = providerGatewayCompatViewsFrom(current.namespace, settings.compatibilityProfile, takeoverResolution);
			const providerDrafts = { ...current.providerDrafts };
			for (const [provider, view] of Object.entries(providerViews)) if (current.providerDirty[provider] !== true) providerDrafts[provider] = view;
			const modelCompatViews = modelGatewayCompatViewsFrom(current.namespace, current.inventory, settings.compatibilityProfile, takeoverResolution);
			const modelCompatDrafts = { ...current.modelCompatDrafts };
			for (const item of current.inventory) {
				const key = keyOf(item);
				const draft = modelCompatDrafts[key];
				const dirty = current.modelCompatDirty[key];
				const view = modelCompatViews[key];
				if (view === void 0) continue;
				if (!dirty) modelCompatDrafts[key] = view;
				else if (draft) {
					const preserved = { ...view };
					for (const field of GATEWAY_COMPAT_FIELD_KEYS) if (dirty[field] === true) Object.assign(preserved, { [field]: draft[field] });
					modelCompatDrafts[key] = preserved;
				}
			}
			return {
				...current,
				providerViews,
				providerDrafts,
				modelCompatViews,
				modelCompatDrafts
			};
		});
	}, [takeoverResolution]);
	const runOps = ({ ns, revision, ops, successMessage, onSuccess, openCodeSessionSavedKey, entrySectionWrite }) => {
		const writeError = (message) => isOpenCodeSessionSectionId(ns) && entrySectionWrite !== true ? t("opencodeSessionSaveFailed", { message }) : t("writeError", { message });
		setState((current) => ({
			...current,
			busy: true,
			error: null,
			notice: null
		}));
		settings.mutate(ns, ops, revision).then((response) => {
			if (!response.ok) {
				setState((current) => ({
					...current,
					busy: false,
					error: writeError(response.error.message)
				}));
				return;
			}
			if (!response.value || typeof response.value !== "object") {
				setState((current) => ({
					...current,
					busy: false,
					error: t("saveMissingNamespace")
				}));
				return;
			}
			const savedKey = openCodeSessionSavedKey;
			if (ns !== "llm-pi-ai" && entrySectionWrite !== true && (savedKey === void 0 || !isOpenCodeSessionNamespace(response.value))) {
				setState((current) => ({
					...current,
					busy: false,
					error: t("saveMissingNamespace")
				}));
				return;
			}
			onSuccess?.();
			setState((current) => {
				if (ns === "llm-pi-ai") return applyNamespaceView(current, response.value, successMessage, current.pluginSection);
				if (entrySectionWrite === true) return applyPluginSectionView(current, response.value, successMessage);
				return applyPluginSectionView(current, response.value, successMessage, savedKey);
			});
		}).catch((error) => {
			const message = error instanceof Error ? error.message : String(error);
			setState((current) => ({
				...current,
				busy: false,
				error: message.length > 0 ? writeError(message) : t("writeFailed")
			}));
		});
	};
	const applyModel = (item) => {
		const key = keyOf(item);
		const levels = buildLevels(state.drafts[key] ?? {});
		const levelError = validateLevels(levels, t);
		if (levelError) {
			setState((current) => ({
				...current,
				error: levelError
			}));
			return;
		}
		const contextDraft = state.contextDrafts[key] ?? contextDraftFrom(item);
		const context = contextDraft.touched ? validateContextWindow(contextDraft, t) : { value: void 0 };
		if (context.error) {
			const error = context.error;
			setState((current) => ({
				...current,
				error
			}));
			return;
		}
		const inputDraft = state.inputDrafts[key] ?? inputDraftFrom(item);
		const input = inputDraft.touched ? buildInput(inputDraft, t) : { value: void 0 };
		if (input.error) {
			const error = input.error;
			setState((current) => ({
				...current,
				error
			}));
			return;
		}
		const update = {
			item,
			levels,
			contextWindow: context.value,
			contextWindowTouched: contextDraft.touched,
			input: input.value,
			inputTouched: inputDraft.touched
		};
		runOps({
			ns: NS,
			revision: state.revision,
			ops: setOps(state.inventory, [update]),
			successMessage: t("modelSettingsSaved"),
			onSuccess: () => {
				setState((current) => ({
					...current,
					dirty: removeDirtyFields(current.dirty, key, [
						"levels",
						"context",
						"input"
					])
				}));
			}
		});
	};
	const applyModelCompat = (item) => {
		const key = keyOf(item);
		const draft = state.modelCompatDrafts[key];
		const current = state.modelCompatViews[key];
		const dirty = state.modelCompatDirty[key];
		if (!draft || !current || !dirty) return;
		const update = {};
		for (const field of GATEWAY_COMPAT_FIELD_KEYS) if (dirty[field] === true && draft[field] !== current[field]) Object.assign(update, { [field]: draft[field] });
		const editability = editableProviderCompatFields(settings.compatibilityProfile, state.namespace?.schema);
		const ops = item.inOverrides ? opsForModelCompat(item, update, editability) : opsForModelArrayCompat(state.inventory, item, update, editability);
		if (ops.length === 0) {
			setState((currentState) => ({
				...currentState,
				modelCompatDirty: removeDirtyFields(currentState.modelCompatDirty, key, GATEWAY_COMPAT_FIELD_KEYS)
			}));
			return;
		}
		runOps({
			ns: NS,
			revision: state.revision,
			ops,
			successMessage: t("modelGatewayCompatSaved"),
			onSuccess: () => {
				setState((currentState) => ({
					...currentState,
					modelCompatDirty: removeDirtyFields(currentState.modelCompatDirty, key, GATEWAY_COMPAT_FIELD_KEYS)
				}));
			}
		});
	};
	const patchModelCompat = (item, next) => {
		const key = keyOf(item);
		setState((current) => {
			const draft = current.modelCompatDrafts[key] ?? current.modelCompatViews[key];
			if (!draft) return current;
			const modelCompatDrafts = {
				...current.modelCompatDrafts,
				[key]: {
					...draft,
					...next
				}
			};
			const nextDirty = { ...current.modelCompatDirty[key] };
			for (const field of GATEWAY_COMPAT_FIELD_KEYS) if (Object.prototype.hasOwnProperty.call(next, field)) Object.assign(nextDirty, { [field]: true });
			const modelCompatDirty = {
				...current.modelCompatDirty,
				[key]: nextDirty
			};
			return {
				...current,
				notice: null,
				modelCompatDrafts,
				modelCompatDirty
			};
		});
	};
	const patchOpenCodeSession = (item, enabled) => {
		const key = keyOf(item);
		const namespace = state.pluginSection;
		if (namespace === null || !isOpenCodeSessionNamespace(namespace)) return;
		const operation = openCodeSessionOp(item.route, item.model, enabled);
		if (operation === void 0) return;
		setState((current) => ({
			...current,
			notice: null,
			openCodeSessionDrafts: {
				...current.openCodeSessionDrafts,
				[key]: enabled
			}
		}));
		runOps({
			ns: namespace.ns,
			revision: namespace.revision,
			ops: [operation],
			successMessage: t("opencodeSessionSaved"),
			openCodeSessionSavedKey: key
		});
	};
	const closeModelEditor = (item) => {
		const key = keyOf(item);
		setState((current) => clearModelEditorState(current, key));
	};
	const restoreReasoningDefaults = (item) => {
		const key = keyOf(item);
		runOps({
			ns: NS,
			revision: state.revision,
			ops: setOps(state.inventory, [{
				item,
				levels: DEFAULT_LEVELS
			}]),
			successMessage: t("restoreReasoning"),
			onSuccess: () => {
				setState((current) => ({
					...current,
					drafts: current.drafts[key] ? {
						...current.drafts,
						[key]: draftFrom(DEFAULT_LEVELS)
					} : current.drafts,
					dirty: removeDirtyFields(current.dirty, key, ["levels"])
				}));
			}
		});
	};
	const restoreProviderDefaults = (item) => {
		runOps({
			ns: NS,
			revision: state.revision,
			ops: setOps(state.inventory, [{
				item,
				contextWindow: void 0,
				contextWindowTouched: true,
				input: void 0,
				inputTouched: true
			}]),
			successMessage: t("restoreCapability"),
			onSuccess: () => closeModelEditor(item)
		});
	};
	const applyPreset = (levels) => {
		runOps({
			ns: NS,
			revision: state.revision,
			ops: setOps(state.inventory, state.inventory.map((item) => ({
				item,
				levels
			}))),
			successMessage: t("settingsUpdated"),
			onSuccess: () => {
				setState((current) => {
					let dirty = current.dirty;
					const drafts = { ...current.drafts };
					current.inventory.forEach((item) => {
						const key = keyOf(item);
						if (drafts[key]) drafts[key] = draftFrom(levels);
						dirty = removeDirtyFields(dirty, key, ["levels"]);
					});
					return {
						...current,
						drafts,
						dirty
					};
				});
			}
		});
	};
	const applySubagentEffort = () => {
		const value = state.subagentDraft === "default" ? void 0 : state.subagentDraft === "custom" ? state.subagentCustom.trim() : state.subagentDraft;
		if (state.subagentDraft !== "default" && !value) {
			setState((current) => ({
				...current,
				notice: null,
				error: t("customEffortRequired")
			}));
			return;
		}
		const ops = state.subagentDraft === "default" ? [{
			op: "unset",
			path: ["subagentEffort"]
		}] : [{
			op: "set",
			path: ["subagentEffort"],
			value
		}];
		const target = subagentEffortTarget(isPluginEntrySection(state.pluginSection) ? state.pluginSection : null, state.revision);
		runOps({
			ns: target.ns,
			revision: target.revision,
			ops,
			successMessage: t("subagentSaved"),
			entrySectionWrite: target.ownSection
		});
	};
	const applyProviderCompat = (route) => {
		const draft = state.providerDrafts[route];
		const current = state.providerViews[route];
		const dirtyFields = state.providerCompatDirty[route];
		if (!draft || !current) return;
		const update = {};
		for (const field of GATEWAY_COMPAT_FIELD_KEYS) if (dirtyFields?.[field] === true && draft[field] !== current[field]) Object.assign(update, { [field]: draft[field] });
		const ops = opsForProviderCompat(route, update, editableProviderCompatFields(settings.compatibilityProfile, state.namespace?.schema));
		const clearProviderDirty = (currentState) => {
			const providerDirty = { ...currentState.providerDirty };
			delete providerDirty[route];
			const providerCompatDirty = { ...currentState.providerCompatDirty };
			delete providerCompatDirty[route];
			return {
				...currentState,
				providerDirty,
				providerCompatDirty
			};
		};
		if (ops.length === 0) {
			setState((currentState) => clearProviderDirty(currentState));
			return;
		}
		runOps({
			ns: NS,
			revision: state.revision,
			ops,
			successMessage: t("gatewayCompatSaved"),
			onSuccess: () => {
				setState((currentState) => clearProviderDirty(currentState));
			}
		});
	};
	const patchProviderCompat = (route, next) => {
		setState((current) => {
			const draft = current.providerDrafts[route] ?? current.providerViews[route];
			if (!draft) return {
				...current,
				notice: null,
				providerDrafts: {
					...current.providerDrafts,
					[route]: next
				},
				providerDirty: {
					...current.providerDirty,
					[route]: true
				}
			};
			const keysChanged = GATEWAY_COMPAT_FIELD_KEYS.filter((key) => next[key] !== draft[key]);
			const nextDirtyFields = { ...current.providerCompatDirty[route] };
			for (const field of keysChanged) Object.assign(nextDirtyFields, { [field]: true });
			return {
				...current,
				notice: null,
				providerDrafts: {
					...current.providerDrafts,
					[route]: next
				},
				providerCompatDirty: {
					...current.providerCompatDirty,
					[route]: nextDirtyFields
				},
				providerDirty: {
					...current.providerDirty,
					[route]: true
				}
			};
		});
	};
	const toggleProviderCompatExpanded = (route) => setState((current) => ({
		...current,
		providerCompatExpanded: {
			...current.providerCompatExpanded,
			[route]: current.providerCompatExpanded[route] !== true
		}
	}));
	const toggleModelCompatExpanded = (key) => setState((current) => ({
		...current,
		modelCompatExpanded: {
			...current.modelCompatExpanded,
			[key]: current.modelCompatExpanded[key] !== true
		}
	}));
	const toggleProvider = (route) => setState((current) => ({
		...current,
		expandedProviders: {
			...current.expandedProviders,
			[route]: current.expandedProviders[route] !== true
		}
	}));
	const toggleExpand = (item) => {
		const key = keyOf(item);
		setState((current) => {
			if (current.expanded[key]) {
				const expanded = { ...current.expanded };
				delete expanded[key];
				return {
					...clearOpenCodeSessionState(current, key),
					expanded
				};
			}
			return {
				...current,
				expanded: {
					...current.expanded,
					[key]: true
				},
				drafts: current.drafts[key] ? current.drafts : {
					...current.drafts,
					[key]: draftFrom(item.levels)
				},
				contextDrafts: current.contextDrafts[key] ? current.contextDrafts : {
					...current.contextDrafts,
					[key]: contextDraftFrom(item)
				},
				inputDrafts: current.inputDrafts[key] ? current.inputDrafts : {
					...current.inputDrafts,
					[key]: inputDraftFrom(item)
				}
			};
		});
	};
	const patchDraft = (item, level, patch) => {
		const key = keyOf(item);
		setState((current) => {
			const cell = {
				...current.drafts[key]?.[level] ?? {
					on: false,
					wire: ""
				},
				...patch
			};
			if (level !== "off" && patch.on === true && cell.wire.trim() === "") cell.wire = level;
			return {
				...current,
				notice: null,
				dirty: {
					...current.dirty,
					[key]: {
						...current.dirty[key],
						levels: true
					}
				},
				drafts: {
					...current.drafts,
					[key]: {
						...current.drafts[key],
						[level]: cell
					}
				}
			};
		});
	};
	const patchContextValue = (item, value) => {
		const key = keyOf(item);
		setState((current) => {
			const draft = current.contextDrafts[key] ?? contextDraftFrom(item);
			return {
				...current,
				notice: null,
				dirty: {
					...current.dirty,
					[key]: {
						...current.dirty[key],
						context: true
					}
				},
				contextDrafts: {
					...current.contextDrafts,
					[key]: {
						...draft,
						value,
						previousValue: value,
						oneMillion: false,
						touched: true
					}
				}
			};
		});
	};
	const setOneMillion = (item, enabled) => {
		const key = keyOf(item);
		setState((current) => {
			const draft = current.contextDrafts[key] ?? contextDraftFrom(item);
			const previous = enabled ? draft.oneMillion ? draft.previousValue : draft.value : draft.previousValue;
			return {
				...current,
				notice: null,
				dirty: {
					...current.dirty,
					[key]: {
						...current.dirty[key],
						context: true
					}
				},
				contextDrafts: {
					...current.contextDrafts,
					[key]: {
						...draft,
						oneMillion: enabled,
						previousValue: previous || "",
						value: enabled ? String(CONTEXT_1M) : previous || "",
						touched: true
					}
				}
			};
		});
	};
	const patchInputCapability = (item, modality, enabled) => {
		const key = keyOf(item);
		setState((current) => {
			const draft = current.inputDrafts[key] ?? inputDraftFrom(item);
			if (!enabled && !draft[modality === "text" ? "image" : "text"]) return {
				...current,
				notice: null,
				error: t("inputCapabilityMinimum")
			};
			return {
				...current,
				error: null,
				notice: null,
				dirty: {
					...current.dirty,
					[key]: {
						...current.dirty[key],
						input: true
					}
				},
				inputDrafts: {
					...current.inputDrafts,
					[key]: {
						...draft,
						[modality]: enabled,
						touched: true
					}
				}
			};
		});
	};
	const query = state.query.trim().toLowerCase();
	const visible = query === "" ? state.inventory : state.inventory.filter((item) => item.model.toLowerCase().includes(query) || item.name.toLowerCase().includes(query));
	const routes = [...new Set(visible.map((item) => item.route))];
	const expandedCount = visible.filter((item) => state.expanded[keyOf(item)] && (query !== "" || state.expandedProviders[item.route])).length;
	const snapshot = locale.getSnapshot?.() ?? {};
	const available = new Set(snapshot.locales?.map((entry) => entry.id).filter((id) => typeof id === "string") ?? [
		"zh",
		"en",
		"ja",
		"ko"
	]);
	return (0, react_jsx_runtime.jsxs)("div", {
		style: {
			position: "relative",
			maxWidth: "920px",
			margin: "0 auto",
			padding: "6px 8px 34px",
			color: palette.text,
			fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, sans-serif"
		},
		children: [
			(0, react_jsx_runtime.jsxs)("label", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					gap: "6px",
					fontSize: "12px",
					marginBottom: "4px"
				},
				children: [t("languageLabel"), (0, react_jsx_runtime.jsx)("select", {
					value: snapshot.active,
					onChange: (event) => locale.setLocale?.(event.currentTarget.value),
					style: {
						height: "26px",
						padding: "0 7px",
						border: `1px solid ${palette.border}`,
						borderRadius: "7px",
						backgroundColor: palette.field,
						color: palette.text,
						fontSize: "12px"
					},
					children: [
						["zh", "languageChinese"],
						["en", "languageEnglish"],
						["ja", "languageJapanese"],
						["ko", "languageKorean"]
					].map(([id, key]) => available.has(id) ? (0, react_jsx_runtime.jsx)("option", {
						value: id,
						children: t(key)
					}, id) : null)
				})]
			}),
			(0, react_jsx_runtime.jsxs)("h3", {
				style: {
					display: "flex",
					alignItems: "center",
					flexWrap: "wrap",
					columnGap: "8px",
					rowGap: "4px",
					fontSize: "18px",
					lineHeight: "24px",
					fontWeight: 700,
					letterSpacing: 0,
					margin: "0 0 7px"
				},
				children: [
					(0, react_jsx_runtime.jsx)(Icon, {
						name: "sliders",
						size: 19
					}),
					(0, react_jsx_runtime.jsx)("span", { children: t("pageTitle") }),
					state.notice ? (0, react_jsx_runtime.jsxs)("span", {
						role: "status",
						"aria-live": "polite",
						style: {
							display: "inline-flex",
							alignItems: "center",
							gap: "4px",
							marginLeft: "auto",
							padding: "2px 6px",
							border: `1px solid ${palette.accentBorder}`,
							borderRadius: "6px",
							color: palette.accent,
							backgroundColor: palette.accentSoft,
							fontSize: "11px",
							lineHeight: "16px",
							fontWeight: 650
						},
						children: [(0, react_jsx_runtime.jsx)(Icon, {
							name: "check",
							size: 12
						}), state.notice]
					}) : null
				]
			}),
			state.error ? (0, react_jsx_runtime.jsx)("div", {
				role: "alert",
				"aria-live": "assertive",
				style: {
					fontSize: "12px",
					lineHeight: "18px",
					color: palette.danger,
					backgroundColor: palette.dangerBg,
					border: `1px solid ${palette.dangerBorder}`,
					borderRadius: "8px",
					padding: "6px 8px",
					margin: "0 0 8px"
				},
				children: state.error
			}) : null,
			(0, react_jsx_runtime.jsx)(SubagentSettings, {
				effort: state.subagent?.effort ?? null,
				namespaceFound: state.subagent !== null,
				draft: state.subagentDraft,
				custom: state.subagentCustom,
				busy: state.busy,
				palette,
				t,
				onDraftChange: (value) => setState((current) => ({
					...current,
					notice: null,
					subagentDraft: value
				})),
				onCustomChange: (value) => setState((current) => ({
					...current,
					notice: null,
					subagentCustom: value
				})),
				onSave: applySubagentEffort
			}),
			(0, react_jsx_runtime.jsx)(ConfigBackupCard, {
				settings,
				palette,
				t,
				onApplied: load
			}),
			(0, react_jsx_runtime.jsx)(OpenCodeFormatCard, {
				settings,
				palette,
				t,
				revision: state.openCodeSessionReads,
				namespace: state.pluginSection?.ns ?? "dsh-thinking-effort",
				onApplied: load
			}),
			state.nsFound === false ? (0, react_jsx_runtime.jsx)("p", {
				style: {
					fontSize: "12px",
					opacity: .75
				},
				children: t("noNamespace")
			}) : (0, react_jsx_runtime.jsxs)("div", { children: [
				(0, react_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "8px",
						flexWrap: "wrap",
						marginBottom: state.quickSettingsOpen ? "4px" : "6px"
					},
					children: [(0, react_jsx_runtime.jsx)(ActionButton, {
						text: t("quickSettings"),
						onClick: () => setState((current) => ({
							...current,
							quickSettingsOpen: !current.quickSettingsOpen
						})),
						disabled: state.busy,
						palette,
						icon: state.quickSettingsOpen ? "chevronUp" : "sliders"
					}), state.quickSettingsOpen ? (0, react_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: "6px",
							flexWrap: "wrap",
							flexBasis: "100%",
							padding: "4px",
							border: `1px solid ${palette.border}`,
							borderRadius: "8px",
							backgroundColor: palette.field
						},
						children: PRESETS.map((preset) => (0, react_jsx_runtime.jsx)(ActionButton, {
							text: t(preset.labelKey),
							onClick: () => {
								setState((current) => ({
									...current,
									quickSettingsOpen: false
								}));
								applyPreset(preset.levels);
							},
							disabled: state.busy,
							palette,
							icon: preset.key === "official" ? "sparkles" : "sliders"
						}, preset.key))
					}) : null]
				}),
				(0, react_jsx_runtime.jsxs)("div", {
					style: {
						position: "relative",
						marginBottom: "7px"
					},
					children: [(0, react_jsx_runtime.jsx)("span", {
						style: {
							position: "absolute",
							left: "10px",
							top: "50%",
							transform: "translateY(-50%)",
							color: palette.secondary,
							pointerEvents: "none"
						},
						children: (0, react_jsx_runtime.jsx)(Icon, {
							name: "search",
							size: 15
						})
					}), (0, react_jsx_runtime.jsx)("input", {
						type: "text",
						value: state.query,
						placeholder: t("searchPlaceholder"),
						onChange: (event) => {
							const value = event.currentTarget.value;
							setState((current) => ({
								...current,
								query: value
							}));
						},
						style: {
							boxSizing: "border-box",
							width: "100%",
							height: "30px",
							padding: "0 10px 0 30px",
							border: `1px solid ${palette.border}`,
							borderRadius: "8px",
							fontSize: "13px",
							backgroundColor: palette.field,
							color: palette.text,
							outline: "none",
							boxShadow: palette.shadow
						}
					})]
				}),
				state.loading ? (0, react_jsx_runtime.jsx)("div", {
					style: {
						fontSize: "12px",
						opacity: .7
					},
					children: t("loading")
				}) : visible.length === 0 ? (0, react_jsx_runtime.jsx)("div", {
					style: {
						fontSize: "12px",
						opacity: .7
					},
					children: state.inventory.length === 0 ? t("noModels") : t("noMatches")
				}) : routes.map((route) => {
					const providerModels = visible.filter((item) => item.route === route);
					const providerOpen = query !== "" || state.expandedProviders[route] === true;
					return (0, react_jsx_runtime.jsxs)("div", {
						style: { marginBottom: "6px" },
						children: [
							(0, react_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "minmax(0, 1fr) auto",
									alignItems: "center",
									columnGap: "8px",
									minHeight: "32px",
									padding: "4px 6px",
									marginBottom: "4px",
									border: `1px solid ${palette.border}`,
									borderRadius: "8px",
									backgroundColor: palette.raised
								},
								children: [(0, react_jsx_runtime.jsxs)("span", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "7px",
										minWidth: 0
									},
									children: [(0, react_jsx_runtime.jsx)("span", {
										style: {
											display: "inline-flex",
											alignItems: "center",
											justifyContent: "center",
											width: "22px",
											height: "22px",
											minWidth: "22px",
											border: `1px solid ${palette.border}`,
											borderRadius: "7px",
											color: palette.secondary,
											backgroundColor: palette.group
										},
										children: (0, react_jsx_runtime.jsx)(Icon, {
											name: "layers",
											size: 14
										})
									}), (0, react_jsx_runtime.jsxs)("span", {
										style: {
											display: "grid",
											gap: "1px",
											minWidth: 0
										},
										children: [(0, react_jsx_runtime.jsx)("span", {
											style: {
												color: palette.text,
												fontSize: "12px",
												fontWeight: 700,
												overflowWrap: "anywhere"
											},
											children: route
										}), (0, react_jsx_runtime.jsx)("span", {
											style: {
												color: palette.accent,
												fontSize: "10px",
												lineHeight: "11px",
												fontWeight: 700
											},
											children: t("vendor")
										})]
									})]
								}), (0, react_jsx_runtime.jsxs)("span", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "6px",
										fontSize: "11px",
										color: palette.secondary,
										whiteSpace: "nowrap"
									},
									children: [(0, react_jsx_runtime.jsx)("span", { children: t("modelCount", { count: providerModels.length }) }), query !== "" ? (0, react_jsx_runtime.jsx)("span", { children: t("searchResults") }) : (0, react_jsx_runtime.jsx)(ActionButton, {
										text: "",
										onClick: () => toggleProvider(route),
										palette,
										tone: "ghost",
										icon: providerOpen ? "chevronUp" : "chevronDown",
										label: providerOpen ? t("collapseProvider") : t("expandProvider")
									})]
								})]
							}),
							providerOpen && state.providerDrafts[route] ? (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [renderGatewayCompatControls({
								view: state.providerDrafts[route],
								onChange: (next) => patchProviderCompat(route, next),
								disabled: state.busy,
								expanded: state.providerCompatExpanded[route] === true,
								onToggleExpanded: () => toggleProviderCompatExpanded(route),
								availableCount: availableCompatFieldCount(state.providerDrafts[route])
							}, {
								palette,
								t
							}), state.providerDirty[route] ? (0, react_jsx_runtime.jsx)(ActionButton, {
								text: t("saveGatewayCompat"),
								onClick: () => applyProviderCompat(route),
								disabled: state.busy,
								tone: "primary",
								palette,
								icon: "check"
							}) : null] }) : null,
							providerOpen ? providerModels.map((item) => {
								const key = keyOf(item);
								const dirty = state.dirty[key] ?? {};
								const compatAvailable = state.modelCompatViews[key] !== void 0;
								const openCodeSessionEditable = state.openCodeSessionAvailable && item.modelSourceConflict !== true;
								return (0, react_jsx_runtime.jsx)(ModelRow, {
									item,
									open: state.expanded[key] === true,
									draft: state.drafts[key],
									contextDraft: state.contextDrafts[key] ?? contextDraftFrom(item),
									inputDraft: state.inputDrafts[key] ?? inputDraftFrom(item),
									dirty: dirty.levels === true || dirty.context === true || dirty.input === true,
									busy: state.busy,
									palette,
									t,
									onToggle: () => toggleExpand(item),
									onLevelChange: (level, patch) => patchDraft(item, level, patch),
									onContextChange: (value) => patchContextValue(item, value),
									onOneMillionChange: (enabled) => setOneMillion(item, enabled),
									onInputChange: (modality, enabled) => patchInputCapability(item, modality, enabled),
									onSave: () => applyModel(item),
									onRestoreReasoning: () => restoreReasoningDefaults(item),
									onRestoreCapability: () => restoreProviderDefaults(item),
									compatView: compatAvailable ? state.modelCompatDrafts[key] : void 0,
									compatExpanded: state.modelCompatExpanded[key] === true,
									onToggleCompatExpanded: compatAvailable ? () => toggleModelCompatExpanded(key) : void 0,
									compatDirty: state.modelCompatDirty[key],
									onCompatChange: compatAvailable ? (next) => patchModelCompat(item, next) : void 0,
									onSaveCompat: compatAvailable ? () => applyModelCompat(item) : void 0,
									openCodeSession: state.openCodeSessionDrafts[key],
									openCodeSessionAvailable: openCodeSessionEditable,
									onOpenCodeSessionChange: (enabled) => patchOpenCodeSession(item, enabled)
								}, `${key}-${item.inOverrides ? "override" : item.index}`);
							}) : null
						]
					}, route);
				}),
				expandedCount > 0 ? (0, react_jsx_runtime.jsx)("div", {
					style: {
						fontSize: "12px",
						color: palette.secondary,
						margin: "4px 2px 0"
					},
					children: t("expandedSettings", { count: expandedCount })
				}) : null
			] }),
			(0, react_jsx_runtime.jsxs)("span", {
				"aria-label": t("versionLabel"),
				style: {
					position: "absolute",
					right: "12px",
					bottom: "8px",
					fontSize: "10px",
					lineHeight: "14px",
					opacity: .45,
					pointerEvents: "none",
					userSelect: "none"
				},
				children: ["v", PLUGIN_VERSION]
			})
		]
	});
}
//#endregion
//#region lib/types/compat/model-directory.js
/** Read and narrow the optional host model-directory service. */
function asModelDirectories(value) {
	if (value === null || typeof value !== "object") return void 0;
	return typeof value.directoryFor === "function" ? value : void 0;
}
/**
* Detect the modern session Remote namespace by method shape. DSH rc.7/rc.8
* use `connection.api.sessions` and do not provide `remote.session`.
* @param context - Client context with inject-free service reads.
* @returns Whether the session Remote generation is installed.
*/
function hasSessionRemote(context) {
	return hasMethods(context.get("remote.session"), ["modelCatalog"]);
}
/**
* Build the exact Cordis dependencies for the official model-directory
* generation. Older DSH builds must not inject the missing `remote.session`
* service: Cordis parks such a fiber until the service exists.
* @param context - Client context used for the generation probe.
* @returns The generation and its required injected services.
*/
function modelDirectoryCompatibility(context) {
	return hasSessionRemote(context) ? {
		generation: "session",
		inject: [
			"slots",
			"modelDirectories",
			"sessions",
			"remote",
			"remote.session"
		]
	} : {
		generation: "connection",
		inject: [
			"slots",
			"modelDirectories",
			"sessions",
			"connection",
			"remote"
		]
	};
}
//#endregion
//#region \0dsh-css:A:\Downloads\dsh-thinking-effort\src\client\thinking-slider\slider.module.css.mjs
const css = "._0K_syW_root{min-width:0;color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px;display:flex;position:relative}._0K_syW_panel{z-index:20;box-sizing:border-box;background:var(--dsw-specific-menu);width:min(336px,100vw - 32px);max-width:calc(100vw - 32px);color:var(--dsw-alias-label-primary);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent);border:0;border-radius:8px;flex-direction:column;gap:10px;padding:16px;display:flex;position:absolute;bottom:calc(100% + 8px);right:0}._0K_syW_reasoning{justify-content:space-between;align-items:baseline;gap:12px;min-width:0;display:flex}._0K_syW_reasoningLabel{color:var(--dsw-alias-label-primary);font-weight:600}._0K_syW_currentEffort{color:var(--dsw-alias-brand-primary);text-overflow:ellipsis;white-space:nowrap;font-weight:600;overflow:hidden}._0K_syW_rangeWrap{min-width:0;height:30px;position:relative}._0K_syW_rangeTrack{background:var(--dsw-alias-border-l2);border-radius:999px;height:4px;position:absolute;top:13px;left:0;right:0;overflow:visible}._0K_syW_rangeFill{width:var(--range-progress,0%);border-radius:inherit;background:var(--dsw-alias-brand-primary-new-colorprimary-new-color);height:100%;position:absolute;top:0;left:0;overflow:hidden}._0K_syW_rangeFill:after{background:linear-gradient(90deg, transparent, var(--dsw-alias-label-primary-foreground), transparent);content:\"\";opacity:.5;border-radius:999px;width:42px;height:20px;animation:1.8s ease-in-out infinite _0K_syW_rangeShimmer;position:absolute;top:-8px;left:-48px}._0K_syW_rangePips{position:absolute;inset:-3px 0}._0K_syW_rangePip{border:3px solid var(--dsw-alias-border-l2);corner-shape:round;background:var(--dsw-specific-menu);box-sizing:border-box;border-radius:50%;width:14px;height:14px;position:absolute;top:50%;transform:translate(-50%,-50%)}._0K_syW_activePip{width:14px;height:14px;box-shadow:none;opacity:0;border-color:#0000}._0K_syW_range{z-index:1;appearance:none;cursor:pointer;background:0 0;width:100%;min-width:0;height:30px;margin:0;position:absolute;inset:0}._0K_syW_range::-webkit-slider-runnable-track{background:0 0;height:4px}._0K_syW_range::-moz-range-track{background:0 0;height:4px}._0K_syW_range::-webkit-slider-thumb{appearance:none;border:3px solid var(--dsw-alias-brand-primary-new-colorprimary-new-color);background:var(--dsw-specific-menu);width:18px;height:18px;box-shadow:0 0 0 0 var(--dsw-alias-interactive-bg-hover-accent);border-radius:50%;margin-top:-7px;transition:box-shadow .16s,transform .16s}._0K_syW_range::-moz-range-thumb{border:3px solid var(--dsw-alias-brand-primary-new-colorprimary-new-color);background:var(--dsw-specific-menu);width:12px;height:12px;box-shadow:0 0 0 0 var(--dsw-alias-interactive-bg-hover-accent);border-radius:50%}._0K_syW_range:hover::-webkit-slider-thumb,._0K_syW_range:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 5px var(--dsw-alias-interactive-bg-hover-accent);transform:scale(1.05)}._0K_syW_range:focus-visible{outline:2px solid var(--dsw-alias-brand-primary-new-colorprimary-new-color);outline-offset:2px}._0K_syW_range:disabled{cursor:default;opacity:.65}._0K_syW_range[data-seat-unset=true]::-webkit-slider-thumb{opacity:0;box-shadow:none}._0K_syW_range[data-seat-unset=true]::-moz-range-thumb{opacity:0;box-shadow:none}@keyframes _0K_syW_rangeShimmer{0%{transform:translate(0)}to{transform:translate(360px)}}._0K_syW_scale{align-items:center;gap:4px;min-width:0;display:flex}._0K_syW_tick{min-width:0;color:var(--dsw-alias-label-secondary);text-align:center;text-overflow:ellipsis;white-space:nowrap;flex:1 1 0;overflow:hidden}._0K_syW_activeTick{color:var(--dsw-alias-brand-primary);font-weight:600}._0K_syW_followDefault{min-height:32px;color:var(--dsw-alias-label-secondary);font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:4px;align-self:stretch;align-items:center;gap:8px;margin:0;padding:4px 8px;display:flex}._0K_syW_followDefault:before{border:2px solid var(--dsw-alias-border-l1);background:var(--dsw-specific-menu);box-sizing:border-box;content:\"\";border-radius:50%;flex:0 0 14px;width:14px;height:14px}._0K_syW_followDefault:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}._0K_syW_followDefaultActive{color:var(--dsw-alias-brand-primary-new-colorprimary-new-color);font-weight:600}._0K_syW_followDefaultActive:before{border-color:var(--dsw-alias-brand-primary-new-colorprimary-new-color);box-shadow:inset 0 0 0 3px var(--dsw-specific-menu);background:var(--dsw-alias-brand-primary-new-colorprimary-new-color)}._0K_syW_empty{color:var(--dsw-alias-label-tertiary)}._0K_syW_error{color:var(--dsw-alias-state-error-primary)}._0K_syW_modelRow,._0K_syW_chip{min-width:0;color:var(--dsw-alias-label-primary);font:inherit;text-align:left;cursor:pointer;border:0;align-items:center;display:flex}._0K_syW_modelRow{border-top:.5px solid var(--dsw-alias-border-l1);box-sizing:border-box;background:0 0;border-radius:4px;align-items:center;gap:12px;height:44px;margin:2px -8px -4px;padding:0 8px;display:flex;position:relative}._0K_syW_modelRow:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}._0K_syW_modelLabel{color:var(--dsw-alias-label-secondary);flex:none}._0K_syW_modelName,._0K_syW_chipModel{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}._0K_syW_modelName{text-align:right;flex:auto;min-width:0}._0K_syW_modelRowButton{width:100%;min-width:0;height:100%;color:inherit;font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;align-items:center;gap:12px;padding:0;display:flex}._0K_syW_modelRowButton:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}._0K_syW_modelSelect{z-index:-1;opacity:0;pointer-events:none;width:1px;height:1px;position:absolute;inset:0}._0K_syW_modelGroup+._0K_syW_modelGroup{margin-top:4px}._0K_syW_modelGroupLabel{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}._0K_syW_modelMenu{z-index:2;background:var(--dsw-specific-menu);max-height:220px;box-shadow:var(--dsw-elevation-prominent);color:var(--dsw-alias-label-primary);border:0;border-radius:6px;padding:4px;position:absolute;bottom:58px;left:16px;right:16px;overflow:auto}._0K_syW_modelSearch{border:.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);width:100%;height:32px;color:var(--dsw-alias-label-primary);font:inherit;border-radius:4px;outline:none;margin-bottom:4px;padding:0 8px}._0K_syW_modelSearch:focus{border-color:var(--dsw-alias-brand-primary-new-colorprimary-new-color);box-shadow:0 0 0 2px var(--dsw-alias-interactive-bg-hover-accent)}._0K_syW_modelGroupToggle{width:100%;min-height:30px;color:var(--dsw-alias-label-tertiary);font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:4px;justify-content:space-between;align-items:center;padding:3px 8px;font-size:12px;display:flex}._0K_syW_modelGroupToggle:hover,._0K_syW_modelGroupToggle:focus-visible{background:var(--dsw-alias-interactive-bg-hover);outline:0}._0K_syW_modelGroupChevron{border-bottom:1.5px solid;border-right:1.5px solid;width:7px;height:7px;margin-left:8px;transition:transform .14s;transform:rotate(45deg)translateY(-2px)}._0K_syW_modelGroupChevronOpen{transform:rotate(225deg)translateY(-2px)}._0K_syW_modelNoResults{color:var(--dsw-alias-label-tertiary);text-align:center;padding:16px 8px}._0K_syW_modelOption{width:100%;min-height:32px;color:var(--dsw-alias-label-primary);font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:4px;padding:5px 8px;display:block}._0K_syW_modelOption:hover,._0K_syW_modelOption:focus-visible{background:var(--dsw-alias-interactive-bg-hover);outline:0}._0K_syW_modelOptionSelected{color:var(--dsw-alias-brand-primary-new-colorprimary-new-color);font-weight:600}._0K_syW_chevron{height:14px;color:var(--dsw-alias-label-secondary);flex:0 0 14px;place-items:center;margin-left:8px;display:grid}._0K_syW_chevron:before{content:\"\";border-bottom:1px solid;border-right:1px solid;width:6px;height:6px;display:block;transform:rotate(45deg)translateY(-2px)}._0K_syW_chip{background:var(--dsw-alias-interactive-bg-hover);corner-shape:round;border-radius:14px;width:fit-content;max-width:min(360px,100vw - 80px);height:28px;padding:0 8px}._0K_syW_chip:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-accent)}._0K_syW_chipModel{flex:auto}._0K_syW_chipEffort{border-left:.5px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);white-space:nowrap;flex:none;margin-left:6px;padding-left:6px}._0K_syW_modelRow:focus-within{outline:2px solid var(--dsw-alias-brand-primary-new-colorprimary-new-color);outline-offset:2px}._0K_syW_modelRow:focus-visible,._0K_syW_chip:focus-visible,._0K_syW_followDefault:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}._0K_syW_modelRow:disabled,._0K_syW_chip:disabled,._0K_syW_followDefault:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}";
const tagId = "@hytime/dsh-thinking-effort/slider.module.css";
if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
	const tag = document.createElement("style");
	tag.dataset.plugin = "@hytime/dsh-thinking-effort";
	tag.dataset.pluginCss = tagId;
	tag.textContent = css;
	document.head.appendChild(tag);
}
var slider_module_css_default = {
	"activePip": "_0K_syW_activePip",
	"activeTick": "_0K_syW_activeTick",
	"chevron": "_0K_syW_chevron",
	"chip": "_0K_syW_chip",
	"chipEffort": "_0K_syW_chipEffort",
	"chipModel": "_0K_syW_chipModel",
	"currentEffort": "_0K_syW_currentEffort",
	"empty": "_0K_syW_empty",
	"error": "_0K_syW_error",
	"followDefault": "_0K_syW_followDefault",
	"followDefaultActive": "_0K_syW_followDefaultActive",
	"modelGroup": "_0K_syW_modelGroup",
	"modelGroupChevron": "_0K_syW_modelGroupChevron",
	"modelGroupChevronOpen": "_0K_syW_modelGroupChevronOpen",
	"modelGroupLabel": "_0K_syW_modelGroupLabel",
	"modelGroupToggle": "_0K_syW_modelGroupToggle",
	"modelLabel": "_0K_syW_modelLabel",
	"modelMenu": "_0K_syW_modelMenu",
	"modelName": "_0K_syW_modelName",
	"modelNoResults": "_0K_syW_modelNoResults",
	"modelOption": "_0K_syW_modelOption",
	"modelOptionSelected": "_0K_syW_modelOptionSelected",
	"modelRow": "_0K_syW_modelRow",
	"modelRowButton": "_0K_syW_modelRowButton",
	"modelSearch": "_0K_syW_modelSearch",
	"modelSelect": "_0K_syW_modelSelect",
	"panel": "_0K_syW_panel",
	"range": "_0K_syW_range",
	"rangeFill": "_0K_syW_rangeFill",
	"rangePip": "_0K_syW_rangePip",
	"rangePips": "_0K_syW_rangePips",
	"rangeShimmer": "_0K_syW_rangeShimmer",
	"rangeTrack": "_0K_syW_rangeTrack",
	"rangeWrap": "_0K_syW_rangeWrap",
	"reasoning": "_0K_syW_reasoning",
	"reasoningLabel": "_0K_syW_reasoningLabel",
	"root": "_0K_syW_root",
	"scale": "_0K_syW_scale",
	"tick": "_0K_syW_tick"
};
//#endregion
//#region lib/types/client/thinking-slider/slider.js
/**
* Composer model seat (`conversation.input.model`) renders the host-provided
* model directory and submits discrete reasoning-effort changes through the
* injected session-selection callback.
*/
const EMPTY_EFFORTS = [];
/** Resolve the current selection back to its catalog model entry. */
function currentModelOf(state) {
	if (state.current === null) return void 0;
	for (const group of state.groups) for (const model of group.models) if (group.id === state.current.provider && model.id === state.current.model) return model;
}
/** Build opaque option keys without treating provider/model ids as a wire format. */
function modelChoicesOf(state) {
	const choices = [];
	state.groups.forEach((group, groupIndex) => {
		group.models.forEach((model, modelIndex) => {
			choices.push({
				key: `choice:${groupIndex}:${modelIndex}`,
				provider: group.id,
				model
			});
		});
	});
	return choices;
}
/**
* Render the composer model seat. The expanded panel presents reasoning before
* the model row; the compact trigger preserves both model and effort labels.
*/
function Slider({ directory, load, select, locked = false, t }) {
	const state = (0, react.useSyncExternalStore)((fn) => directory.subscribe(fn), () => directory.getSnapshot());
	const [open, setOpen] = (0, react.useState)(false);
	const [modelOpen, setModelOpen] = (0, react.useState)(false);
	const [modelQuery, setModelQuery] = (0, react.useState)("");
	const [expandedModelGroup, setExpandedModelGroup] = (0, react.useState)(null);
	const rootRef = (0, react.useRef)(null);
	const triggerRef = (0, react.useRef)(null);
	const current = state.current;
	const model = currentModelOf(state);
	const modelLabel = current === null ? state.status === "loading" ? t("seatModelLoading") : t("seatNoModel") : model?.name ?? `${current.provider}/${current.model}`;
	const reasoning = model?.reasoning;
	const efforts = reasoning?.efforts ?? EMPTY_EFFORTS;
	const choices = modelChoicesOf(state);
	const selectedChoice = choices.find((choice) => choice.provider === current?.provider && choice.model.id === current?.model);
	const selectedProvider = selectedChoice?.provider;
	const normalizedModelQuery = modelQuery.trim().toLocaleLowerCase();
	const visibleModelGroups = state.groups.map((group) => ({
		group,
		models: group.models.filter((option) => normalizedModelQuery.length === 0 || `${option.name} ${option.id}`.toLocaleLowerCase().includes(normalizedModelQuery))
	})).filter(({ models }) => models.length > 0);
	const effectiveEffort = current?.reasoningEffort ?? reasoning?.defaultEffort;
	const effortIndex = efforts.findIndex(({ id }) => id === effectiveEffort);
	const rangeValue = effortIndex < 0 ? 0 : effortIndex;
	const rangeEffort = efforts[rangeValue];
	const followingModelDefault = current !== null && current.reasoningEffort === void 0 && reasoning?.defaultEffort === void 0;
	const currentEffortLabel = followingModelDefault ? t("seatFollowDefault") : rangeEffort?.name ?? t("seatNoEfforts");
	const hasDirectoryError = state.status === "error" && state.error !== null;
	const busy = locked || state.status === "selecting" || select === void 0;
	const rangeProgress = !followingModelDefault && efforts.length > 1 && effortIndex >= 0 ? `${effortIndex / (efforts.length - 1) * 100}%` : "0%";
	(0, react.useEffect)(() => {
		if (!open) return;
		const closeOutside = (event) => {
			if (rootRef.current?.contains(event.target)) return;
			setModelOpen(false);
			setModelQuery("");
			setOpen(false);
		};
		document.addEventListener("mousedown", closeOutside);
		return () => {
			document.removeEventListener("mousedown", closeOutside);
		};
	}, [open]);
	(0, react.useEffect)(() => {
		if (modelOpen) setExpandedModelGroup(selectedProvider ?? state.groups[0]?.id ?? null);
	}, [
		modelOpen,
		selectedProvider,
		state.groups
	]);
	const closeWithFocus = () => {
		setModelOpen(false);
		setModelQuery("");
		setOpen(false);
		queueMicrotask(() => {
			triggerRef.current?.focus();
		});
	};
	const onKeyDown = (event) => {
		if (event.key !== "Escape" || !open) return;
		event.preventDefault();
		closeWithFocus();
	};
	const submit = (selection) => {
		if (locked || select === void 0) return;
		select(selection).then(() => {}, () => {});
	};
	const onRangeChange = (event) => {
		if (current === null) return;
		const effort = efforts[Number(event.currentTarget.value)];
		if (effort === void 0) return;
		submit({
			provider: current.provider,
			model: current.model,
			reasoningEffort: effort.id
		});
	};
	const submitModel = (choice) => {
		const reasoningEffort = choice.provider === current?.provider && choice.model.id === current?.model ? current?.reasoningEffort ?? choice.model.reasoning?.defaultEffort : choice.model.reasoning?.defaultEffort;
		submit({
			provider: choice.provider,
			model: choice.model.id,
			...reasoningEffort === void 0 ? {} : { reasoningEffort }
		});
		setModelOpen(false);
		setModelQuery("");
	};
	const onModelChange = (event) => {
		const choice = choices.find((item) => item.key === event.currentTarget.value);
		if (choice !== void 0) submitModel(choice);
	};
	const modelTrigger = () => (0, react.createElement)("button", {
		className: slider_module_css_default.chip,
		"data-seat-trigger": "true",
		ref: triggerRef,
		type: "button",
		disabled: locked,
		"aria-expanded": open,
		"aria-label": `${modelLabel}: ${currentEffortLabel}`,
		onClick: () => {
			setOpen(true);
			load?.();
		}
	}, [
		(0, react.createElement)("span", {
			className: slider_module_css_default.chipModel,
			key: "model",
			title: modelLabel
		}, modelLabel),
		(0, react.createElement)("span", {
			className: slider_module_css_default.chipEffort,
			key: "effort"
		}, currentEffortLabel),
		(0, react.createElement)("span", {
			className: slider_module_css_default.chevron,
			key: "chevron",
			"aria-hidden": true
		})
	]);
	const modelSelect = (0, react.createElement)("div", {
		className: slider_module_css_default.modelRow,
		"data-seat-model-row": "true"
	}, (0, react.createElement)("button", {
		className: slider_module_css_default.modelRowButton,
		type: "button",
		disabled: busy,
		"aria-haspopup": "listbox",
		"aria-expanded": modelOpen,
		onClick: () => {
			setModelOpen((value) => {
				if (value) setModelQuery("");
				return !value;
			});
		}
	}, (0, react.createElement)("span", { className: slider_module_css_default.modelLabel }, t("seatModelLabel")), (0, react.createElement)("span", {
		className: slider_module_css_default.modelName,
		title: modelLabel
	}, modelLabel), (0, react.createElement)("span", {
		className: slider_module_css_default.chevron,
		"aria-hidden": true
	})), (0, react.createElement)("select", {
		className: slider_module_css_default.modelSelect,
		"data-seat-model-select": "true",
		"aria-label": t("seatModelLabel"),
		tabIndex: -1,
		"aria-hidden": true,
		value: selectedChoice?.key ?? "",
		disabled: busy,
		onChange: onModelChange
	}, (0, react.createElement)("option", {
		value: "",
		disabled: true
	}, t("seatNoModel")), ...state.groups.map((group, groupIndex) => (0, react.createElement)("optgroup", {
		label: group.name,
		key: group.id
	}, ...group.models.map((option, modelIndex) => (0, react.createElement)("option", {
		value: `choice:${groupIndex}:${modelIndex}`,
		key: option.id
	}, option.name))))));
	const modelMenu = modelOpen ? (0, react.createElement)("div", {
		className: slider_module_css_default.modelMenu,
		role: "listbox",
		"data-seat-model-menu": "true",
		"aria-label": t("seatModelLabel")
	}, (0, react.createElement)("input", {
		className: slider_module_css_default.modelSearch,
		"data-seat-model-search": "true",
		type: "search",
		value: modelQuery,
		placeholder: t("seatSearchModels"),
		"aria-label": t("seatSearchModels"),
		onChange: (event) => {
			setModelQuery(event.currentTarget.value);
		}
	}), visibleModelGroups.length === 0 ? (0, react.createElement)("div", { className: slider_module_css_default.modelNoResults }, t("seatNoModelResults")) : visibleModelGroups.map(({ group, models }) => {
		const expanded = modelQuery.trim().length > 0 || group.id === expandedModelGroup;
		return (0, react.createElement)("div", {
			className: slider_module_css_default.modelGroup,
			key: group.id
		}, (0, react.createElement)("button", {
			className: slider_module_css_default.modelGroupToggle,
			type: "button",
			"aria-expanded": expanded,
			onClick: () => {
				setExpandedModelGroup((value) => value === group.id ? null : group.id);
			}
		}, (0, react.createElement)("span", { className: slider_module_css_default.modelGroupLabel }, group.name), (0, react.createElement)("span", {
			className: expanded ? `${slider_module_css_default.modelGroupChevron} ${slider_module_css_default.modelGroupChevronOpen}` : slider_module_css_default.modelGroupChevron,
			"aria-hidden": true
		})), expanded ? models.map((option) => {
			const choice = choices.find((item) => item.provider === group.id && item.model.id === option.id);
			if (choice === void 0) return null;
			const selected = choice.key === selectedChoice?.key;
			return (0, react.createElement)("button", {
				className: selected ? `${slider_module_css_default.modelOption} ${slider_module_css_default.modelOptionSelected}` : slider_module_css_default.modelOption,
				type: "button",
				role: "option",
				"aria-selected": selected,
				disabled: busy,
				onClick: () => {
					submitModel(choice);
				},
				key: choice.key
			}, option.name);
		}) : null);
	})) : null;
	const content = efforts.length === 0 ? hasDirectoryError ? (0, react.createElement)("div", { className: slider_module_css_default.error }, t("seatError", { message: state.error })) : (0, react.createElement)("div", { className: slider_module_css_default.empty }, t("seatNoEfforts")) : [
		(0, react.createElement)("div", {
			className: slider_module_css_default.rangeWrap,
			"data-seat-range": "true",
			key: "range"
		}, (0, react.createElement)("div", {
			className: slider_module_css_default.rangeTrack,
			style: { "--range-progress": rangeProgress },
			"aria-hidden": true
		}, (0, react.createElement)("span", { className: slider_module_css_default.rangeFill }), (0, react.createElement)("span", { className: slider_module_css_default.rangePips }, ...efforts.map((effort, index) => (0, react.createElement)("span", {
			className: !followingModelDefault && index === effortIndex ? `${slider_module_css_default.rangePip} ${slider_module_css_default.activePip}` : slider_module_css_default.rangePip,
			key: effort.id,
			style: { left: `${index / Math.max(efforts.length - 1, 1) * 100}%` }
		})))), (0, react.createElement)("input", {
			className: slider_module_css_default.range,
			"data-seat-input": "true",
			...followingModelDefault ? { "data-seat-unset": "true" } : {},
			type: "range",
			min: 0,
			max: efforts.length - 1,
			step: 1,
			value: rangeValue,
			disabled: busy,
			"aria-label": t("seatSliderLabel"),
			"aria-valuetext": currentEffortLabel,
			onChange: onRangeChange
		})),
		(0, react.createElement)("div", {
			className: slider_module_css_default.scale,
			"data-seat-scale": "true",
			key: "scale"
		}, ...efforts.map((effort, index) => (0, react.createElement)("span", {
			className: !followingModelDefault && index === effortIndex ? `${slider_module_css_default.tick} ${slider_module_css_default.activeTick}` : slider_module_css_default.tick,
			...!followingModelDefault && index === effortIndex ? { "data-seat-active": "true" } : {},
			key: effort.id
		}, effort.name))),
		reasoning?.defaultEffort === void 0 && current !== null ? (0, react.createElement)("button", {
			className: followingModelDefault ? `${slider_module_css_default.followDefault} ${slider_module_css_default.followDefaultActive}` : slider_module_css_default.followDefault,
			"data-seat-default": "true",
			"aria-pressed": followingModelDefault,
			type: "button",
			disabled: busy,
			onClick: () => {
				submit({
					provider: current.provider,
					model: current.model
				});
			},
			key: "default"
		}, t("seatFollowDefault")) : null,
		hasDirectoryError ? (0, react.createElement)("div", {
			className: slider_module_css_default.error,
			"data-seat-select-error": "true",
			key: "error"
		}, t("seatErrorAction", { message: state.error })) : null
	];
	const panel = open ? (0, react.createElement)("div", {
		className: slider_module_css_default.panel,
		"data-seat-panel": "true"
	}, (0, react.createElement)("div", {
		className: slider_module_css_default.reasoning,
		"data-seat-reasoning": "true"
	}, (0, react.createElement)("span", { className: slider_module_css_default.reasoningLabel }, t("seatReasoningLabel")), (0, react.createElement)("span", { className: slider_module_css_default.currentEffort }, currentEffortLabel)), content, modelSelect, modelMenu) : modelTrigger();
	return (0, react.createElement)("div", {
		className: slider_module_css_default.root,
		ref: rootRef,
		onKeyDown,
		"data-seat-root": "true"
	}, panel);
}
//#endregion
//#region lib/types/client/thinking-slider/index.js
/**
* Thinking-effort composer model seat (`conversation.input.model`): registers
* the seat over the optional shared model directory. The directory service is
* read from the application context at apply time — when the official
* ui-model-selection plugin is absent the seat is skipped so the Settings page
* keeps working. The injected face is exactly the JSON-safe directory
* store/verbs (`{ directory, load, select }`); the seat renders only through
* those props.
*
* DSH version adaptation (see version-research.md): the seat's closure calls
* `directoryFor()`, whose controller internally reaches the session remote
* face. That face is `remote.session` from DSH `0.1.2-alpha.1+` (npm
* `0.1.2-alpha.2`+) but `connection.api.sessions` on `0.1.0-rc.7` and
* `0.1.0-rc.8` — a version where `remote.session` does not exist as a service.
* Because Cordis silently parks a fiber whose `inject` lists a missing service
* (never calling `apply`), the seat must declare `remote.session` only when the
* runtime exposes it, decided here by a shape probe via `context.get` (the
* inject-free read face).
*/
/** Target slot key of the composer model seat. */
const SEAT_NAME = "conversation.input.model";
/** Build one session's injected face from the shared directory service. */
function seatFace(modelDirectories, sessionId) {
	const instance = modelDirectories.directoryFor(sessionId);
	return {
		directory: instance.store,
		load: () => {
			instance.load().catch(() => {});
		},
		select: (selection) => instance.select(selection).then(() => true, () => false)
	};
}
/**
* Register the composer model seat over a Cordis-style client context. The
* optional `modelDirectories` service is a declared `inject` dependency, so the
* seat registers only when the official ui-model-selection service is live; it
* is skipped when that service is absent. The `inject` list includes
* `remote.session` only on runtimes that expose it (modern DSH); older
* runtimes register with the base list, which is enough because the directory
* controller owns its own `connection` face there.
* @param context - client root context (slots + locale + optional model service).
*/
function apply$1(context) {
	const translate = context.get("locale") ? context.get("locale").bind(LOCALE_NS) : (key) => key;
	let registered = false;
	const registerWhenReady = () => {
		if (registered) return;
		if (!asModelDirectories(context.get("modelDirectories"))) return;
		const compatibility = modelDirectoryCompatibility(context);
		registered = true;
		context.plugin({
			name: "dsh-thinking-effort:composer-seat",
			inject: compatibility.inject,
			apply: (scope) => {
				const scopedSlots = scope.slots;
				if (scopedSlots === void 0) return;
				const directories = asModelDirectories(scope.get("modelDirectories"));
				if (directories === void 0) return;
				scopedSlots.inject(SEAT_NAME, () => scopedSlots.register({
					name: SEAT_NAME,
					priority: -10,
					locale: LOCALE_NS,
					inject: (sessionId) => seatFace(directories, sessionId)
				}, (props) => (0, react.createElement)(Slider, {
					directory: props.directory,
					load: props.load,
					select: props.select,
					locked: props.locked,
					t: props.t ?? translate
				})));
			}
		});
	};
	registerWhenReady();
	context.on("internal/service", (serviceName) => {
		if (serviceName === "modelDirectories" || serviceName === "remote.session") registerWhenReady();
	});
}
//#endregion
//#region lib/types/client/index.js
const name = "@hytime/dsh-thinking-effort";
const inject = [
	"slots",
	"connection",
	"locale"
];
const SLOT_NAME = "settings.section";
const SLOT_ID = "thinking-effort";
const SLOT_ORDER = 12;
function hasLanguage(locale, id) {
	const snapshot = locale.getSnapshot?.();
	return Array.isArray(snapshot?.locales) && snapshot.locales.some((entry) => entry?.id === id);
}
function apply(context) {
	const slots = context.get("slots");
	if (slots === void 0) return;
	const connection = context.get("connection");
	const locale = context.get("locale");
	let mounted = false;
	const mount = (settings) => {
		if (mounted || settings === void 0) return;
		mounted = true;
		const runtime = createTakeoverRuntimeStore();
		const observedSettings = observeTakeoverSettings(settings, runtime.update);
		const translate = locale.bind(LOCALE_NS);
		context.effect(() => {
			const languageDisposers = [];
			const disposeDictionaries = locale.register(LOCALE_NS, LOCALE_DATA);
			const canRegisterExternalLanguages = settings.externalLanguages && typeof locale.addLanguage === "function";
			try {
				if (canRegisterExternalLanguages && !hasLanguage(locale, "ja")) languageDisposers.push(locale.addLanguage({
					id: "ja",
					label: translate("languageJapanese"),
					fallback: "en"
				}));
				if (canRegisterExternalLanguages && !hasLanguage(locale, "ko")) languageDisposers.push(locale.addLanguage({
					id: "ko",
					label: translate("languageKorean"),
					fallback: "en"
				}));
			} catch (error) {
				for (const dispose of languageDisposers.reverse()) dispose();
				disposeDictionaries();
				runtime.dispose();
				observedSettings.dispose();
				throw error;
			}
			return () => {
				observedSettings.dispose();
				runtime.dispose();
				for (const dispose of languageDisposers.reverse()) dispose();
				disposeDictionaries();
			};
		}, "dsh-thinking-effort: language pack dictionaries");
		slots.inject(SLOT_NAME, () => slots.register({
			name: SLOT_NAME,
			id: SLOT_ID,
			order: SLOT_ORDER,
			locale: LOCALE_NS,
			label: () => translate("pageTitle")
		}, () => (0, react.createElement)(SectionEditor, {
			settings: observedSettings,
			locale,
			t: translate,
			takeoverRuntime: runtime
		})));
	};
	const mountFromRemote = () => {
		mount(settingsBridge(connection, context.get("remote.settings"), locale.addLanguage));
	};
	mountFromRemote();
	context.on("internal/service", (serviceName) => {
		if (serviceName === "remote.settings" || serviceName === "remote") mountFromRemote();
	});
	apply$1(context);
}
//#endregion
exports.apply = apply;
exports.inject = inject;
exports.name = name;

module.exports = exports; return module.exports; } });