import type { RenderElement, PageItem } from "../types";
import { pushHistoryEntry, type HistoryEntry } from "./history";

interface ElementOpState {
  elements: RenderElement[];
  pages: PageItem[];
  selectedElementId: string | null;
  _history: HistoryEntry[];
  _historyIndex: number;
}

export function computeReorder(
  s: ElementOpState,
  id: string,
  direction: "up" | "down"
) {
  const el = s.elements.find((e) => e.id === id);
  if (!el) return null;
  const siblings = s.elements.filter((e) => e.parentId === el.parentId).sort((a, b) => a.order - b.order);
  const idx = siblings.findIndex((e) => e.id === id);
  if (idx < 0) return null;
  const swapIdx = direction === "up" ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= siblings.length) return null;
  const swapEl = siblings[swapIdx]!;
  const updated = s.elements.map((e) => {
    if (e.id === id) return { ...e, order: swapEl.order };
    if (e.id === swapEl.id) return { ...e, order: el.order };
    return e;
  });
  const prevEntry: HistoryEntry = { elements: s.elements, pages: s.pages, selectedElementId: s.selectedElementId };
  return {
    elements: updated,
    isDirty: true,
    ...pushHistoryEntry(s._history, s._historyIndex, prevEntry),
  };
}

export function computeMove(
  s: ElementOpState,
  id: string,
  newParentId: string | null,
  index: number
) {
  const el = s.elements.find((e) => e.id === id);
  if (!el) return null;
  const prevEntry: HistoryEntry = { elements: s.elements, pages: s.pages, selectedElementId: s.selectedElementId };
  const siblings = s.elements.filter(
    (e) => e.parentId === newParentId && e.id !== id
  ).sort((a, b) => a.order - b.order);
  const reordered = siblings.slice(0, index).concat([el, ...siblings.slice(index)]);
  const updated = s.elements.map((e) => {
    if (e.id === id) return { ...e, parentId: newParentId, order: index };
    const sibIdx = reordered.findIndex((r) => r.id === e.id);
    if (sibIdx >= 0) return { ...e, order: sibIdx };
    return e;
  });
  return {
    elements: updated,
    isDirty: true,
    ...pushHistoryEntry(s._history, s._historyIndex, prevEntry),
  };
}
