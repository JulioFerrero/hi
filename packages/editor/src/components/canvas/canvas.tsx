"use client";

import { useRef, useEffect } from "react";
import { useEditorStore } from "../../stores";
import { useEditorContext } from "../../lib/context";
import { usePanZoom } from "./use-pan-zoom";
import { useIframeRenderer } from "./use-iframe-renderer";
import { useBlockerEvents } from "./use-blocker-events";
import { useKeyboardShortcuts } from "./use-keyboard-shortcuts";
import { CanvasToolbar } from "./canvas-toolbar";

export function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const blockerRef = useRef<HTMLDivElement>(null);

  const elements = useEditorStore((s) => s.elements);
  const selectedElementId = useEditorStore((s) => s.selectedElementId);
  const selectElement = useEditorStore((s) => s.selectElement);
  const activePageId = useEditorStore((s) => s.activePageId);
  const viewport = useEditorStore((s) => s.viewport);
  const { schema, actions, renderer } = useEditorContext();

  const containerSet = new Set(schema.elementTypes.filter((t) => t.isContainer).map((t) => t.type));
  const editableTypes = new Set(
    schema.elementTypes.filter((t) => t.fields.some((f) => f.name === "content")).map((t) => t.type),
  );

  const { iframeH, pageWidth } = useIframeRenderer(iframeRef, elements, renderer, viewport);
  const { transformRef, zoom, handleZoomIn, handleZoomOut, handleFitScreen } = usePanZoom(containerRef, wrapperRef, pageWidth);

  const applyTransform = () => {
    if (!wrapperRef.current) return;
    const t = transformRef.current;
    wrapperRef.current.style.transform = `translate(${t.x}px, ${t.y}px) scale(${t.scale})`;
    wrapperRef.current.style.transformOrigin = "0 0";
  };

  const { editingRef, lastSelectedRef, applyOutline } = useBlockerEvents(
    blockerRef, iframeRef, transformRef, applyTransform, editableTypes, selectElement, actions,
  );

  useKeyboardShortcuts(actions, editingRef);

  useEffect(() => {
    if (lastSelectedRef.current) applyOutline(lastSelectedRef.current, "none");
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    if (selectedElementId) {
      const el = doc.querySelector(`[data-el-id="${selectedElementId}"]`) as HTMLElement | null;
      if (el) { applyOutline(el, "selected"); lastSelectedRef.current = el; }
      else lastSelectedRef.current = null;
    } else {
      lastSelectedRef.current = null;
    }
  }, [selectedElementId, elements, applyOutline, lastSelectedRef, iframeRef]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div ref={containerRef} className="relative flex-1 overflow-hidden bg-editor-canvas">
        <div ref={wrapperRef} className="absolute" style={{ willChange: "transform" }}>
          <div className="relative">
            <iframe
              ref={iframeRef}
              title="Canvas"
              data-canvas-root
              className="bg-white rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.3)] border-none block"
              style={{ width: `${pageWidth}px`, height: `${iframeH}px`, transition: "width 0.3s ease", pointerEvents: "none" }}
            />
            <div ref={blockerRef} className="absolute inset-0" style={{ zIndex: 10, cursor: "default" }} />
          </div>
        </div>
      </div>
      <CanvasToolbar
        pageId={activePageId}
        containerSet={containerSet}
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onFitScreen={handleFitScreen}
      />
    </div>
  );
}
