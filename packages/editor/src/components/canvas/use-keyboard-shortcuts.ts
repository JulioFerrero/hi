import { useEffect } from "react";
import { useEditorStore } from "../../stores";
import type { EditorActions } from "../../lib/actions";

export function useKeyboardShortcuts(
  actions: EditorActions,
  editingRef: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (editingRef.current) return;
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey) useEditorStore.getState().redo();
        else useEditorStore.getState().undo();
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        if (editingRef.current) return;
        const sel = useEditorStore.getState().selectedElementId;
        if (!sel) return;
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.contentEditable === "true") return;
        e.preventDefault();
        actions.deleteElement(sel);
      }
    };
    globalThis.addEventListener("keydown", handler);
    return () => globalThis.removeEventListener("keydown", handler);
  }, [actions, editingRef]);
}
