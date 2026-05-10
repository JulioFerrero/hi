"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { useEditorStore, type Viewport } from "@/stores";
import { useEditorActions } from "@/lib/editor-actions";
import { buildTree, ElementRenderer, type RenderElement } from "@wb/website";
import { ELEMENT_TYPES, ELEMENT_ICON_MAP } from "@/lib/element-config";

interface Transform {
  x: number;
  y: number;
  scale: number;
}

export function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<Transform>({ x: 0, y: 0, scale: 1 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastHoveredRef = useRef<HTMLElement | null>(null);
  const lastSelectedRef = useRef<HTMLElement | null>(null);
  const [zoom, setZoom] = useState(100);

  const elements = useEditorStore((s) => s.elements);
  const selectedElementId = useEditorStore((s) => s.selectedElementId);
  const selectElement = useEditorStore((s) => s.selectElement);
  const activePageId = useEditorStore((s) => s.activePageId);
  const viewport = useEditorStore((s) => s.viewport);
  const tree = buildTree(elements);

  const viewportWidths: Record<Viewport, number> = { desktop: 1440, tablet: 768, mobile: 375 };
  const pageWidth = viewportWidths[viewport];

  const applyOutline = useCallback((el: HTMLElement | null, type: "hover" | "selected" | "none") => {
    if (!el) return;
    if (type === "none") {
      el.style.outline = "";
      el.style.outlineOffset = "";
    } else if (type === "hover") {
      el.style.outline = "1px solid #93c5fd";
      el.style.outlineOffset = "-1px";
    } else {
      el.style.outline = "2px solid #3b82f6";
      el.style.outlineOffset = "-1px";
    }
  }, []);

  const applyTransform = useCallback(() => {
    if (!contentRef.current) return;
    const t = transformRef.current;
    contentRef.current.style.transform = `translate(${t.x}px, ${t.y}px) scale(${t.scale})`;
    contentRef.current.style.transformOrigin = "0 0";
    setZoom(Math.round(t.scale * 100));
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const rect = containerRef.current!.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const t = transformRef.current;

    if (e.ctrlKey || e.metaKey) {
      const oldScale = t.scale;
      const factor = 1 - Math.sign(e.deltaY) * 0.005 * Math.min(Math.abs(e.deltaY), 100);
      const newScale = Math.min(Math.max(0.1, oldScale * factor), 5);
      const ratio = newScale / oldScale;
      t.x = mouseX - ratio * (mouseX - t.x);
      t.y = mouseY - ratio * (mouseY - t.y);
      t.scale = newScale;
    } else {
      t.x -= e.deltaX;
      t.y -= e.deltaY;
    }
    applyTransform();
  }, [applyTransform]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (editingRef.current) return;
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey) {
          useEditorStore.getState().redo();
        } else {
          useEditorStore.getState().undo();
        }
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        if (editingRef.current) return;
        const sel = useEditorStore.getState().selectedElementId;
        if (!sel) return;
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.contentEditable === "true") return;
        e.preventDefault();
        useEditorActions().deleteElement(sel);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("[data-el-id]")) return;
    isDragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) {
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      transformRef.current.x += dx;
      transformRef.current.y += dy;
      lastMouse.current = { x: e.clientX, y: e.clientY };
      applyTransform();
      return;
    }

    const target = (e.target as HTMLElement).closest("[data-el-id]") as HTMLElement | null;
    if (lastHoveredRef.current && lastHoveredRef.current !== target) {
      if (lastHoveredRef.current !== lastSelectedRef.current) {
        applyOutline(lastHoveredRef.current, "none");
      }
    }
    if (target) {
      applyOutline(target, "hover");
      lastHoveredRef.current = target;
    } else {
      lastHoveredRef.current = null;
    }
  }, [applyTransform, applyOutline]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = "default";
  }, []);

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (lastHoveredRef.current && lastHoveredRef.current !== lastSelectedRef.current) {
      applyOutline(lastHoveredRef.current, "none");
    }
    lastHoveredRef.current = null;
    if (containerRef.current) containerRef.current.style.cursor = "default";
  }, [applyOutline]);

  const handleZoomIn = () => {
    transformRef.current.scale = Math.min(transformRef.current.scale + 0.1, 5);
    applyTransform();
  };

  const handleZoomOut = () => {
    transformRef.current.scale = Math.max(transformRef.current.scale - 0.1, 0.1);
    applyTransform();
  };

  const handleFitScreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      transformRef.current = { x: 32, y: 32, scale: 1 };
      applyTransform();
      return;
    }
    const containerW = container.clientWidth;
    const padding = 64;
    const scale = Math.min((containerW - padding) / pageWidth, 1);
    const x = (containerW - pageWidth * scale) / 2;
    transformRef.current = { x, y: 32, scale };
    applyTransform();
  }, [pageWidth, applyTransform]);

  useEffect(() => {
    handleFitScreen();
  }, [handleFitScreen]);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    if (lastSelectedRef.current) {
      applyOutline(lastSelectedRef.current, "none");
    }
    if (selectedElementId) {
      const el = root.querySelector(`[data-el-id="${selectedElementId}"]`) as HTMLElement | null;
      if (el) {
        applyOutline(el, "selected");
        lastSelectedRef.current = el;
      } else {
        lastSelectedRef.current = null;
      }
    } else {
      lastSelectedRef.current = null;
    }
  }, [selectedElementId, elements, applyOutline]);

  const findFirstChild = useCallback((elementId: string): string | null => {
    const el = elements.find((e) => e.id === elementId);
    if (!el) return null;
    const child = elements.find((e) => e.parentId === elementId);
    return child?.id ?? null;
  }, [elements]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (editingRef.current) return;
    const target = (e.target as HTMLElement).closest("[data-el-id]") as HTMLElement | null;
    if (!target) {
      selectElement(null);
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const clickedId = target.dataset.elId!;
    if (clickedId === selectedElementId) {
      const childId = findFirstChild(clickedId);
      if (childId) {
        selectElement(childId);
      }
    } else {
      selectElement(clickedId);
    }
  }, [selectedElementId, selectElement, findFirstChild]);

  const editingRef = useRef<HTMLElement | null>(null);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest("[data-el-id]") as HTMLElement | null;
    if (!target) return;
    const elId = target.dataset.elId!;
    const el = elements.find((e) => e.id === elId);
    if (!el) return;
    const textTypes = new Set(["heading", "text", "button", "link"]);
    if (!textTypes.has(el.type)) return;

    e.preventDefault();
    e.stopPropagation();
    selectElement(elId);

    target.contentEditable = "true";
    target.style.outline = "2px solid #3b82f6";
    target.style.cursor = "text";
    target.focus();
    const range = document.createRange();
    range.selectNodeContents(target);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    editingRef.current = target;
  }, [elements, selectElement]);

  const finishInlineEdit = useCallback(() => {
    const target = editingRef.current;
    if (!target) return;
    target.contentEditable = "false";
    target.style.cursor = "";
    const elId = target.dataset.elId!;
    const newContent = target.innerText;
    const actions = useEditorActions();
    actions.updateElementData(elId, { content: newContent });
    editingRef.current = null;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handler = (e: FocusEvent) => {
      if (editingRef.current && e.target === editingRef.current) {
        finishInlineEdit();
      }
    };
    container.addEventListener("blur", handler, true);
    return () => container.removeEventListener("blur", handler, true);
  }, [finishInlineEdit]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden bg-neutral-100"
        style={{ cursor: "default" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <div ref={contentRef} className="absolute" style={{ willChange: "transform" }}>
          <div
            className="bg-white shadow-lg"
            style={{ width: `${pageWidth}px`, minHeight: "800px", transition: "width 0.3s ease" }}
          >
            {tree.length === 0 && (
              <div className="flex h-[600px] items-center justify-center text-neutral-400">
                <div className="text-center">
                  <p className="text-lg">Empty page</p>
                  <p className="text-sm">Add elements using the toolbar below</p>
                </div>
              </div>
            )}
            {tree.map((el) => (
              <ElementRenderer key={el.id} element={el} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t bg-white px-3 py-2">
        <ElementToolbar pageId={activePageId} />
        <div className="flex items-center gap-1">
          <button onClick={handleZoomOut} className="rounded px-2 py-1 text-xs hover:bg-gray-100">−</button>
          <span className="text-xs text-gray-500">{zoom}%</span>
          <button onClick={handleZoomIn} className="rounded px-2 py-1 text-xs hover:bg-gray-100">+</button>
          <button onClick={handleFitScreen} className="ml-1 rounded px-2 py-1 text-xs hover:bg-gray-100">Fit</button>
        </div>
      </div>
    </div>
  );
}

const CONTAINER_TYPES = new Set(["section", "row", "column", "grid"]);

function ElementToolbar({ pageId }: { pageId: string | null }) {
  const actions = useEditorActions();
  const selectedElementId = useEditorStore((s) => s.selectedElementId);
  const elements = useEditorStore((s) => s.elements);
  if (!pageId) return null;

  const selected = selectedElementId ? elements.find((e) => e.id === selectedElementId) : null;
  const parentId = selected && CONTAINER_TYPES.has(selected.type) ? selected.id : null;

  return (
    <div className="flex items-center gap-1">
      {ELEMENT_TYPES.map((et) => {
        const Icon = ELEMENT_ICON_MAP[et.icon];
        return (
          <button
            key={et.type}
            onClick={() => actions.addElement(pageId, et.type, parentId)}
            className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            title={parentId ? `Add ${et.label} inside ${selected!.type}` : `Add ${et.label}`}
          >
            {Icon && <Icon className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{et.label}</span>
          </button>
        );
      })}
    </div>
  );
}
