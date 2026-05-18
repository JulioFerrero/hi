import { useRef, useEffect, useCallback } from "react";
import { useEditorStore } from "../../stores";

function applyOutline(el: HTMLElement | null, type: "hover" | "selected" | "none") {
  if (!el) return;
  if (type === "none") { el.style.outline = ""; el.style.outlineOffset = ""; }
  else if (type === "hover") { el.style.outline = "1px solid rgba(129, 140, 248, 0.5)"; el.style.outlineOffset = "-1px"; }
  else { el.style.outline = "2px solid #818cf8"; el.style.outlineOffset = "-1px"; }
}

export function useBlockerEvents(
  blockerRef: React.RefObject<HTMLDivElement | null>,
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  toolbarRef: React.RefObject<HTMLDivElement | null>,
  transformRef: React.RefObject<{ x: number; y: number; scale: number }>,
  isNativeDrag: React.RefObject<boolean>,
  actions: any,
  selectElement: (id: string | null) => void,
  editableTypes: Set<string>,
  applyTransform: () => void,
  setCursorMode: (m: any) => void,
) {
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastHoveredRef = useRef<HTMLElement | null>(null);
  const lastSelectedRef = useRef<HTMLElement | null>(null);
  const editingRef = useRef<HTMLElement | null>(null);

  const queryElementAtPoint = useCallback((screenX: number, screenY: number): { el: HTMLElement } | null => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return null;
    const iframes = Array.from(wrapper.querySelectorAll("iframe"));
    const t = transformRef.current;
    for (const iframe of iframes) {
      const rect = iframe.getBoundingClientRect();
      const px = (screenX - rect.left) / t.scale;
      const py = (screenY - rect.top) / t.scale;
      const doc = iframe.contentDocument;
      if (!doc) continue;
      const hit = doc.elementFromPoint(px, py)?.closest("[data-el-id]") as HTMLElement | null;
      if (hit) return { el: hit };
    }
    return null;
  }, []);

  const finishInlineEdit = useCallback(() => {
    const target = editingRef.current;
    if (!target) return;
    target.contentEditable = "false";
    target.style.cursor = "";
    const elId = target.getAttribute("data-el-id")!;
    actions.updateElementData(elId, { content: target.innerText });
    editingRef.current = null;
    setCursorMode("default");
  }, [actions]);

  const startInlineEdit = useCallback((target: HTMLElement) => {
    target.contentEditable = "true";
    target.style.outline = "2px solid #818cf8";
    target.style.cursor = "text";
    target.focus();
    const doc = target.ownerDocument;
    const win = doc.defaultView;
    if (win) {
      const range = doc.createRange();
      range.selectNodeContents(target);
      const sel = win.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    editingRef.current = target;
    setCursorMode("text");
  }, []);

  useEffect(() => {
    const blocker = blockerRef.current;
    if (!blocker) return;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const hit = queryElementAtPoint(e.clientX, e.clientY);
      if (hit) {
        if (editingRef.current && editingRef.current !== hit.el) finishInlineEdit();
        const clickedId = hit.el.getAttribute("data-el-id")!;
        if (clickedId === useEditorStore.getState().selectedElementId) {
          const elems = useEditorStore.getState().elements;
          const child = elems.find((c) => c.parentId === clickedId);
          if (child) selectElement(child.id);
        } else { selectElement(clickedId); }
        return;
      }
      if (editingRef.current) finishInlineEdit();
      selectElement(null);
      isDragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
      blocker.style.cursor = "none";
      setCursorMode("grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isNativeDrag.current) return;
      if (toolbarRef.current && toolbarRef.current.contains(e.target as Node)) return;
      if (isDragging.current) {
        transformRef.current.x += e.clientX - lastMouse.current.x;
        transformRef.current.y += e.clientY - lastMouse.current.y;
        lastMouse.current = { x: e.clientX, y: e.clientY };
        applyTransform();
        return;
      }
      if (editingRef.current) return;
      const hit = queryElementAtPoint(e.clientX, e.clientY);
      if (lastHoveredRef.current && lastHoveredRef.current !== hit?.el) {
        if (lastHoveredRef.current !== lastSelectedRef.current) applyOutline(lastHoveredRef.current, "none");
      }
      if (hit) {
        applyOutline(hit.el, "hover");
        lastHoveredRef.current = hit.el;
        setCursorMode("hover");
      } else {
        lastHoveredRef.current = null;
        setCursorMode("default");
      }
    };

    const onMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        setCursorMode("default");
      }
    };

    const onDblClick = (e: MouseEvent) => {
      const hit = queryElementAtPoint(e.clientX, e.clientY);
      if (!hit) return;
      const elId = hit.el.getAttribute("data-el-id")!;
      const el = useEditorStore.getState().elements.find((e) => e.id === elId);
      if (!el || !editableTypes.has(el.type)) return;
      selectElement(elId);
      startInlineEdit(hit.el);
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
  }, [queryElementAtPoint, applyTransform, selectElement, finishInlineEdit, startInlineEdit, editableTypes]);

  useEffect(() => {
    if (lastSelectedRef.current) applyOutline(lastSelectedRef.current, "none");
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const docs = Array.from(wrapper.querySelectorAll("iframe")).map((f) => f.contentDocument).filter(Boolean) as Document[];
    for (const doc of docs) {
      if (useEditorStore.getState().selectedElementId) {
        const el = doc.querySelector(`[data-el-id="${useEditorStore.getState().selectedElementId}"]`) as HTMLElement | null;
        if (el) { applyOutline(el, "selected"); lastSelectedRef.current = el; return; }
      }
    }
    if (!useEditorStore.getState().selectedElementId) lastSelectedRef.current = null;
  }, [useEditorStore.getState().selectedElementId, useEditorStore.getState().elements]);

  return { queryElementAtPoint, editingRef };
}
