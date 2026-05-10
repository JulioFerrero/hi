import { type StateCreator } from "zustand";
import type { RenderElement } from "@wb/website";

export type Viewport = "desktop" | "tablet" | "mobile";

type PageItem = {
  id: string;
  slug: string;
  data: { title: string; path: string; status: string; parentId?: string; order?: number };
};

interface HistoryEntry {
  elements: RenderElement[];
  pages: PageItem[];
  selectedElementId: string | null;
}

export interface EditorState {
  activeSiteId: string | null;
  activePageId: string | null;
  selectedElementId: string | null;
  viewport: Viewport;
  pages: PageItem[];
  dirtyPageIds: Set<string>;
  elements: RenderElement[];
  isDirty: boolean;
  isLoading: boolean;
  _history: HistoryEntry[];
  _historyIndex: number;
}

export interface EditorActions {
  setActiveSite: (id: string) => void;
  setActivePage: (id: string) => void;
  setViewport: (viewport: Viewport) => void;
  setPages: (pages: PageItem[]) => void;
  updatePageLocal: (id: string, updates: { data?: Record<string, unknown>; slug?: string }) => void;
  setElements: (elements: RenderElement[]) => void;
  selectElement: (id: string | null) => void;
  updateElement: (id: string, updates: Partial<RenderElement>) => void;
  addElement: (element: RenderElement) => void;
  removeElement: (id: string) => void;
  insertElements: (elements: RenderElement[]) => void;
  reorderElement: (id: string, direction: "up" | "down") => void;
  moveElement: (id: string, newParentId: string | null, index: number) => void;
  setDirty: (dirty: boolean) => void;
  setLoading: (loading: boolean) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
}

export type EditorStore = EditorState & EditorActions;

const MAX_HISTORY = 50;

function snapshot(state: EditorState): HistoryEntry {
  return {
    elements: state.elements.map((e) => ({ ...e, data: { ...e.data }, styles: { ...e.styles } })),
    pages: state.pages.map((p) => ({ ...p, data: { ...p.data } })),
    selectedElementId: state.selectedElementId,
  };
}

export const createEditorSlice: StateCreator<EditorStore> = (set, get) => ({
  activeSiteId: null,
  activePageId: null,
  selectedElementId: null,
  viewport: "desktop",
  pages: [],
  dirtyPageIds: new Set<string>(),
  elements: [],
  isDirty: false,
  isLoading: false,
  _history: [],
  _historyIndex: -1,

  setActiveSite: (id) => set({ activeSiteId: id, activePageId: null, selectedElementId: null, _history: [], _historyIndex: -1 }),
  setActivePage: (id) => set({ activePageId: id, selectedElementId: null }),
  setViewport: (viewport) => set({ viewport }),
  setPages: (pages) => set({ pages, dirtyPageIds: new Set() }),
  updatePageLocal: (id, updates) =>
    set((s) => {
      const prev = snapshot(s);
      const newHistory = s._historyIndex < s._history.length - 1
        ? s._history.slice(0, s._historyIndex + 1)
        : s._history;
      return {
        pages: s.pages.map((p) =>
          p.id === id
            ? {
                ...p,
                ...(updates.slug !== undefined ? { slug: updates.slug } : {}),
                data: updates.data ? { ...p.data, ...updates.data } as any : p.data,
              }
            : p
        ),
        dirtyPageIds: new Set([...s.dirtyPageIds, id]),
        isDirty: true,
        _history: [...newHistory, prev].slice(-MAX_HISTORY),
        _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
      };
    }),
  setElements: (elements) => set({ elements, isDirty: false }),
  selectElement: (id) => set({ selectedElementId: id }),
  updateElement: (id, updates) =>
    set((s) => {
      const prev = snapshot(s);
      const newHistory = s._historyIndex < s._history.length - 1
        ? s._history.slice(0, s._historyIndex + 1)
        : s._history;
      return {
        elements: s.elements.map((e) => (e.id === id ? { ...e, ...updates } : e)),
        isDirty: true,
        _history: [...newHistory, prev].slice(-MAX_HISTORY),
        _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
      };
    }),
  addElement: (element) =>
    set((s) => {
      const prev = snapshot(s);
      const newHistory = s._historyIndex < s._history.length - 1
        ? s._history.slice(0, s._historyIndex + 1)
        : s._history;
      return {
        elements: [...s.elements, element],
        isDirty: true,
        _history: [...newHistory, prev].slice(-MAX_HISTORY),
        _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
      };
    }),
  removeElement: (id) =>
    set((s) => {
      const prev = snapshot(s);
      const newHistory = s._historyIndex < s._history.length - 1
        ? s._history.slice(0, s._historyIndex + 1)
        : s._history;
      return {
        elements: s.elements.filter((e) => e.id !== id && e.parentId !== id),
        selectedElementId: s.selectedElementId === id ? null : s.selectedElementId,
        isDirty: true,
        _history: [...newHistory, prev].slice(-MAX_HISTORY),
        _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
      };
    }),
  insertElements: (newElements) =>
    set((s) => {
      const prev = snapshot(s);
      const newHistory = s._historyIndex < s._history.length - 1
        ? s._history.slice(0, s._historyIndex + 1)
        : s._history;
      return {
        elements: [...s.elements, ...newElements],
        isDirty: true,
        _history: [...newHistory, prev].slice(-MAX_HISTORY),
        _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
      };
    }),
  reorderElement: (id, direction) =>
    set((s) => {
      const el = s.elements.find((e) => e.id === id);
      if (!el) return s;
      const siblings = s.elements.filter((e) => e.parentId === el.parentId).sort((a, b) => a.order - b.order);
      const idx = siblings.findIndex((e) => e.id === id);
      if (idx < 0) return s;
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= siblings.length) return s;
      const swapEl = siblings[swapIdx]!;
      const updated = s.elements.map((e) => {
        if (e.id === id) return { ...e, order: swapEl.order };
        if (e.id === swapEl.id) return { ...e, order: el.order };
        return e;
      });
      const prev = { elements: s.elements, pages: s.pages, selectedElementId: s.selectedElementId };
      const newHistory = s._historyIndex < s._history.length - 1
        ? s._history.slice(0, s._historyIndex + 1)
        : s._history;
      return {
        elements: updated,
        isDirty: true,
        _history: [...newHistory, prev].slice(-MAX_HISTORY),
        _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
      };
    }),
  moveElement: (id, newParentId, index) =>
    set((s) => {
      const el = s.elements.find((e) => e.id === id);
      if (!el) return s;
      const prev = { elements: s.elements, pages: s.pages, selectedElementId: s.selectedElementId };
      const newHistory = s._historyIndex < s._history.length - 1
        ? s._history.slice(0, s._historyIndex + 1)
        : s._history;
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
        _history: [...newHistory, prev].slice(-MAX_HISTORY),
        _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1),
      };
    }),
  setDirty: (dirty) => set({ isDirty: dirty }),
  setLoading: (loading) => set({ isLoading: loading }),
  undo: () =>
    set((s) => {
      if (s._historyIndex < 0) return s;
      const entry = s._history[s._historyIndex];
      if (!entry) return s;
      return {
        elements: entry.elements,
        pages: entry.pages,
        selectedElementId: entry.selectedElementId,
        isDirty: true,
        _historyIndex: s._historyIndex - 1,
      };
    }),
  redo: () =>
    set((s) => {
      const nextIndex = s._historyIndex + 1;
      if (nextIndex >= s._history.length) return s;
      const entry = s._history[nextIndex];
      if (!entry) return s;
      return {
        elements: entry.elements,
        pages: entry.pages,
        selectedElementId: entry.selectedElementId,
        isDirty: true,
        _historyIndex: nextIndex,
      };
    }),
  canUndo: () => get()._historyIndex >= 0,
  canRedo: () => get()._historyIndex + 1 < get()._history.length,
});
