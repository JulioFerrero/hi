import { create } from "zustand";
import { createEditorSlice, type EditorStore } from "./editor-slice";

export const useEditorStore = create<EditorStore>()((...a) => ({
  ...createEditorSlice(...a),
}));
