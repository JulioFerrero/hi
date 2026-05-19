import type { RenderElement, PageItem } from "../types";

export interface HistoryEntry {
  elements: RenderElement[];
  pages: PageItem[];
  selectedElementId: string | null;
}

export const MAX_HISTORY = 50;

interface HistoryOpsState {
  _history: HistoryEntry[];
  _historyIndex: number;
}

export function pushHistoryEntry(
  history: HistoryEntry[],
  historyIndex: number,
  entry: HistoryEntry
): { _history: HistoryEntry[]; _historyIndex: number } {
  const newHistory = historyIndex < history.length - 1
    ? history.slice(0, historyIndex + 1)
    : history;
  return {
    _history: [...newHistory, entry].slice(-MAX_HISTORY),
    _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
  };
}

export function computeUndo(s: HistoryOpsState & { elements: RenderElement[]; pages: PageItem[]; selectedElementId: string | null }) {
  if (s._historyIndex < 0) return null;
  const entry = s._history[s._historyIndex];
  if (!entry) return null;
  return {
    elements: entry.elements,
    pages: entry.pages,
    selectedElementId: entry.selectedElementId,
    isDirty: true,
    _historyIndex: s._historyIndex - 1,
  };
}

export function computeRedo(s: HistoryOpsState & { elements: RenderElement[]; pages: PageItem[]; selectedElementId: string | null }) {
  const nextIndex = s._historyIndex + 1;
  if (nextIndex >= s._history.length) return null;
  const entry = s._history[nextIndex];
  if (!entry) return null;
  return {
    elements: entry.elements,
    pages: entry.pages,
    selectedElementId: entry.selectedElementId,
    isDirty: true,
    _historyIndex: nextIndex,
  };
}

export function canUndo(s: HistoryOpsState): boolean {
  return s._historyIndex >= 0;
}

export function canRedo(s: HistoryOpsState): boolean {
  return s._historyIndex + 1 < s._history.length;
}
