import React from 'react';
import type { Palette } from '../theme.js';
import type { SettingsApi, Translation } from '../types.js';
export interface OpenCodeFormatCardProps {
    readonly settings: SettingsApi;
    readonly palette: Palette;
    readonly t: Translation;
    /**
     * A value that changes on every read the surrounding editor performs for this
     * namespace — the backup card importing a snapshot, the model editor's
     * session switch, this card's own successful write. Every change re-reads the
     * stored draft, so the controls never keep a draft a page-mate has since
     * retired. It is compared for inequality only, so a read counter serves as
     * well as the namespace revision and does not miss a second read that lands
     * on the same revision.
     */
    readonly revision?: number;
    /**
     * The id the running host addresses this plugin's section by — the entry id
     * under the 0.1.7 entry-config model, the legacy registered namespace
     * otherwise. The editor resolves it from the same `describe()` this card
     * re-reads, so the draft and the write always land in the section the
     * surrounding page is showing. Defaults to the legacy id.
     */
    readonly namespace?: string;
    /**
     * Called after a successful write. This card shares its namespace with the
     * model editor's session switch, so the surrounding editor has to re-read the
     * registry too or its next write goes out with the revision this one retired.
     */
    readonly onApplied?: () => void;
}
export declare function OpenCodeFormatCard({ settings, palette, t, revision, namespace, onApplied }: OpenCodeFormatCardProps): React.ReactElement;
