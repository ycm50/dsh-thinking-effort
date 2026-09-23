import type { DshVersionCapabilities } from './version-map.js';
import type { CompatibilityDiagnostic, CompatibilityProfile, DshCompatibilityCapabilities } from '../client/types.js';
export type { CompatibilityDiagnostic, CompatibilityDiagnosticCode, CompatibilityProfile, CompatibilitySettings, DshCompatibilityCapabilities, } from '../client/types.js';
export interface CompatibilityReport {
    readonly profile: CompatibilityProfile;
    readonly version?: string;
    readonly expected?: Exclude<CompatibilityProfile, 'unknown'>;
    readonly capabilities: DshCompatibilityCapabilities;
    readonly versionCapabilities?: DshVersionCapabilities;
    readonly diagnostics: readonly CompatibilityDiagnostic[];
}
export declare function resolveCompatibility(input: {
    readonly version?: unknown;
    readonly capabilities: DshCompatibilityCapabilities;
}): CompatibilityReport;
