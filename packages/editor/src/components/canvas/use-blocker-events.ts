import type React from "react";
import { useRef, useCallback, useEffect } from "react";
import { useEditorStore } from "../../stores";
import type { EditorActions } from "../../lib/actions";

interface Transform {
  x: number;
  y: number;
  scale: number;
}

function applyOutline(el: HTMLElement | null, type: "hover" | "selected" | "none") {
  if (!el) return;
  if (type === "none") {
    el.style.outline = "";
    el.style.outlineOffset = "";
  } else if (type === "hover") {
    el.style.outline = "1px solid rgba(129, 140, 248, 0.5)";
    el.style.outlineOffset = "-1px";
  } else {
    el.style.outline = "2px solid #818cf8";
    el.style.outlineOffset = "-1px";
  }
}

export function useBlockerEvents(
  blockerRef: React.RefObject<HTMLDivElement | null>,
  iframeRef: React.RefObject<HTMLIFrameElement | null>,
  transformRef: React.RefObject<Transform>,
  applyTransform: () => void,
  editableTypes: Set<string>,
  selectElement: (id: string | null) => void,
  actions: EditorActions,
) {
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastHoveredRef = useRef<HTMLElement | null>(null);
  const lastSelectedRef = useRef<HTMLElement | null>(null);
  const editingRef = useRef<HTMLElement | null>(null);

  const screenToPage = useCallback((screenX: number, screenY: number): { x: number; y: number } | null => {
    const iframe = iframeRef.current;
    if (!iframe) return null;
    const rect = iframe.getBoundingClientRect();
    const t = transformRef.current;
    return { x: (screenX - rect.left) / t.scale, y: (screenY - rect.top) / t.scale };
  }, [iframeRef, transformRef]);

  const queryElementAtPoint = useCallback((screenX: number, screenY: number): HTMLElement | null => {
    const point = screenToPage(screenX, screenY);
    if (!point) return null;
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return null;
    return doc.elementFromPoint(point.x, point.y)?.closest("[data-el-id]") as HTMLElement ?? null;
  }, [screenToPage, iframeRef]);

  const finishInlineEdit = useCallback(() => {
    const target = editingRef.current;
    if (!target) return;
    target.contentEditable = "false";
    target.style.cursor = "";
    const elId = target.getAttribute("data-el-id")!;
    actions.updateElementData(elId, { content: target.innerText });
    editingRef.current = null;
  }, [actions]);

  const startInlineEdit = useCallback((target: HTMLElement) => {
    target.contentEditable = "true";
    target.style.outline = "2px solid #818cf8";
    target.style.cursor = "text";
    target.focus();
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      const range = doc.createRange();
      range.selectNodeContents(target);
      const sel = iframeRef.current?.contentWindow?.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    editingRef.current = target;
  }, [iframeRef]);

  useEffect(() => {
    const blocker = blockerRef.current;
    if (!blocker) return;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const elTarget = queryElementAtPoint(e.clientX, e.clientY);
      if (elTarget) {
        if (editingRef.current && editingRef.current !== elTarget) finishInlineEdit();
        const clickedId = elTarget.getAttribute("data-el-id")!;
        if (clickedId === useEditorStore.getState().selectedElementId) {
          const elems = useEditorStore.getState().elements;
          const child = elems.find((c) => c.parentId === clickedId);
          if (child) selectElement(child.id);
        } else {
          selectElement(clickedId);
        }
        return;
      }
      if (editingRef.current) finishInlineEdit();
      selectElement(null);
      isDragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
      blocker.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        transformRef.current.x += e.clientX - lastMouse.current.x;
        transformRef.current.y += e.clientY - lastMouse.current.y;
        lastMouse.current = { x: e.clientX, y: e.clientY };
        applyTransform();
        return;
      }
      const elTarget = queryElementAtPoint(e.clientX, e.clientY);
      if (lastHoveredRef.current && lastHoveredRef.current !== elTarget) {
        if (lastHoveredRef.current !== lastSelectedRef.current) applyOutline(lastHoveredRef.current, "none");
      }
      if (elTarget) {
        applyOutline(elTarget, "hover");
        lastHoveredRef.current = elTarget;
        blocker.style.cursor = "pointer";
      } else {
        lastHoveredRef.current = null;
        blocker.style.cursor = "default";
      }
    };

    const onMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        blocker.style.cursor = "default";
      }
    };

    const onDblClick = (e: MouseEvent) => {
      const elTarget = queryElementAtPoint(e.clientX, e.clientY);
      if (!elTarget) return;
      const elId = elTarget.getAttribute("data-el-id")!;
      const el = useEditorStore.getState().elements.find((e) => e.id === elId);
      if (!el || !editableTypes.has(el.type)) return;
      selectElement(elId);
      startInlineEdit(elTarget);
    };

    blocker.addEventListener("mousedown", onMouseDown);
    blocker.addEventListener("dblclick", onDblClick);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      blocker.removeEventListener("mousedown", onMouseDown);
      blocker.removeEventListener("dblclick", onDblClick);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [blockerRef, queryElementAtPoint, applyTransform, selectElement, finishInlineEdit, startInlineEdit, editableTypes, transformRef]);

  return {
    editingRef,
    lastSelectedRef,
    applyOutline,
    finishInlineEdit,
  };
}
