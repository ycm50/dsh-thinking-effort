import React from 'react';
import { type GatewayCompatFieldKey, type GatewayCompatGroupId } from '../../compat/gateway/fields.js';
import type { ModelGatewayCompatUpdate, ModelGatewayCompatView, ProviderGatewayCompatView, Translation } from '../types.js';
import type { Palette } from '../theme.js';
export interface GatewayCompatGroupProps {
    readonly groupId: GatewayCompatGroupId;
    readonly view: ProviderGatewayCompatView | ModelGatewayCompatView;
    readonly onChange: (next: Partial<ModelGatewayCompatUpdate>) => void;
    readonly disabled?: boolean;
    readonly excludeKeys?: readonly GatewayCompatFieldKey[];
    readonly palette?: Palette;
    readonly t?: Translation;
}
export declare function GatewayCompatGroup({ groupId, view, onChange, disabled, excludeKeys, palette, t }: GatewayCompatGroupProps): React.ReactElement | null;
