import { create } from "zustand";
import { createEditorSlice, type EditorStore, type SaveStatus } from "./editor-slice";

export type { SaveStatus };
export const useEditorStore = create<EditorStore>()((...a) => ({
  ...createEditorSlice(...a),
}));
