import React from 'react';
import type { ModelGatewayCompatUpdate, ModelGatewayCompatView, ProviderGatewayCompatView, Translation } from '../types.js';
import type { Palette } from '../theme.js';
interface ProviderGatewayCompatControlsProps {
    readonly scope?: 'provider';
    readonly view: ProviderGatewayCompatView;
    readonly onChange: (next: ProviderGatewayCompatView) => void;
    readonly disabled?: boolean;
    readonly expanded?: boolean;
    readonly onToggleExpanded?: () => void;
    readonly availableCount: number;
    readonly expandedLabel?: string;
    readonly collapsedHint?: string;
}
interface ModelGatewayCompatControlsProps {
    readonly scope: 'model';
    readonly view: ModelGatewayCompatView;
    readonly onChange: (next: Partial<ModelGatewayCompatUpdate>) => void;
    readonly disabled?: boolean;
    readonly expanded?: boolean;
    readonly onToggleExpanded?: () => void;
    readonly availableCount: number;
    readonly expandedLabel?: string;
    readonly collapsedHint?: string;
}
export type GatewayCompatControlsProps = ProviderGatewayCompatControlsProps | ModelGatewayCompatControlsProps;
export interface GatewayCompatControlsPresentation {
    readonly palette: Palette;
    readonly t: Translation;
}
export declare function renderGatewayCompatControls({ scope, view, onChange, disabled, expanded, onToggleExpanded, availableCount, expandedLabel, collapsedHint }: GatewayCompatControlsProps, { palette, t }: GatewayCompatControlsPresentation): React.ReactElement | null;
export declare function GatewayCompatControls(props: GatewayCompatControlsProps): React.ReactElement | null;
export {};
