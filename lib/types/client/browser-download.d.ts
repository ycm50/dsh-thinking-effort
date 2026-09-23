export type DownloadJson = (filename: string, text: string) => void;
/**
 * The one browser side effect the card cannot exercise under jsdom, kept
 * behind a single function so components can take it as an injectable
 * dependency.
 */
export declare function downloadJson(filename: string, text: string): void;
