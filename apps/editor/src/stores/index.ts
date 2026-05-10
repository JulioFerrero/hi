import { create } from "zustand";
import { createEditorSlice, type EditorStore, type Viewport } from "./editor-slice";

export type { Viewport };
export const useEditorStore = create<EditorStore>()((...a) => ({
  ...createEditorSlice(...a),
}));
