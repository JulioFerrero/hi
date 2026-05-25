import type { StateCreator } from "zustand";
import type { RenderElement, PageItem, Viewport } from "../types";
import type { HistoryEntry } from "./history";
import { computeUndo, computeRedo, canUndo, canRedo } from "./history";
import { computeReorder, computeMove } from "./element-operations";

export type SaveStatus = "idle" | "saving" | "saved";

export interface EditorState {
  activeSiteId: string | null;
  activePageId: string | null;
  selectedElementId: string | null;
  hoveredElementId: string | null;
  viewport: Viewport;
  pages: PageItem[];
  dirtyPageIds: Set<string>;
  dirtyElementIds: Set<string>;
  elements: RenderElement[];
  isDirty: boolean;
  hasActiveDraft: boolean;
  isLoading: boolean;
  saveStatus: SaveStatus;
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
  setHoveredElement: (id: string | null) => void;
  updateElement: (id: string, updates: Partial<RenderElement>) => void;
  addElement: (element: RenderElement) => void;
  removeElement: (id: string) => void;
  insertElements: (elements: RenderElement[]) => void;
  reorderElement: (id: string, direction: "up" | "down") => void;
  moveElement: (id: string, newParentId: string | null, index: number) => void;
  setDirty: (dirty: boolean) => void;
  setLoading: (loading: boolean) => void;
  setSaveStatus: (status: SaveStatus) => void;
  setHasActiveDraft: (hasDraft: boolean) => void;
  markElementStale: (id: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
}

export type EditorStore = EditorState & EditorActions;

export const createEditorSlice: StateCreator<EditorStore> = (set, get) => ({
  activeSiteId: null,
  activePageId: null,
  selectedElementId: null,
  hoveredElementId: null,
  viewport: "desktop" as Viewport,
  pages: [],
  dirtyPageIds: new Set<string>(),
  dirtyElementIds: new Set<string>(),
  elements: [],
  isDirty: false,
  hasActiveDraft: false,
  isLoading: false,
  saveStatus: "idle" as SaveStatus,
  _history: [],
  _historyIndex: -1,

  setActiveSite: (id) => set({ activeSiteId: id, activePageId: null, selectedElementId: null, _history: [], _historyIndex: -1 }),
  setActivePage: (id) => set({ activePageId: id, selectedElementId: null }),
  setViewport: (viewport) => set({ viewport }),
  setPages: (pages) => set({ pages, dirtyPageIds: new Set() }),
  updatePageLocal: (id, updates) =>
    set((s) => ({
      pages: s.pages.map((p) =>
        p.id === id
          ? {
              ...p,
              ...(updates.slug !== undefined ? { slug: updates.slug } : {}),
              data: updates.data ? { ...p.data, ...updates.data } as PageItem["data"] : p.data,
            }
          : p
      ),
      dirtyPageIds: new Set([...s.dirtyPageIds, id]),
      isDirty: true,
    })),
  setElements: (elements) => set({ elements, dirtyElementIds: new Set(), isDirty: false }),
  selectElement: (id) => set({ selectedElementId: id }),
  setHoveredElement: (id) => set({ hoveredElementId: id }),
  updateElement: (id, updates) =>
    set((s) => ({
      elements: s.elements.map((e) => (e.id === id ? { ...e, ...updates } : e)),
      dirtyElementIds: new Set([...s.dirtyElementIds, id]),
      isDirty: true,
      hasActiveDraft: true,
    })),
  addElement: (element) =>
    set((s) => ({ elements: [...s.elements, element], dirtyElementIds: new Set([...s.dirtyElementIds, element.id]), isDirty: true })),
  removeElement: (id) =>
    set((s) => ({
      elements: s.elements.filter((e) => e.id !== id && e.parentId !== id),
      selectedElementId: s.selectedElementId === id ? null : s.selectedElementId,
      dirtyElementIds: new Set([...s.dirtyElementIds].filter((d) => d !== id)),
      isDirty: true,
      hasActiveDraft: true,
    })),
  insertElements: (newElements) =>
    set((s) => ({
      elements: [...s.elements, ...newElements],
      dirtyElementIds: new Set([...s.dirtyElementIds, ...newElements.map((e) => e.id)]),
      isDirty: true,
    })),
  reorderElement: (id, direction) =>
    set((s) => {
      const result = computeReorder(s, id, direction);
      return result ?? {};
    }),
  moveElement: (id, newParentId, index) =>
    set((s) => {
      const result = computeMove(s, id, newParentId, index);
      return result ?? {};
    }),
  setDirty: (dirty) => set((s) => ({ isDirty: dirty, saveStatus: dirty ? "idle" : s.saveStatus })),
  setLoading: (loading) => set({ isLoading: loading }),
  setSaveStatus: (status) => set({ saveStatus: status }),
  setHasActiveDraft: (hasDraft) => set({ hasActiveDraft: hasDraft }),
  markElementStale: (id) =>
    set((s) => ({
      dirtyElementIds: new Set([...s.dirtyElementIds, id]),
      isDirty: true,
    })),
  undo: () => set((s) => computeUndo(s) ?? {}),
  redo: () => set((s) => computeRedo(s) ?? {}),
  canUndo: () => canUndo(get()),
  canRedo: () => canRedo(get()),
});
