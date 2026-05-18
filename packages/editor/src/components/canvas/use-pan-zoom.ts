import { useRef, useCallback, useEffect, useState } from "react";

interface Transform {
  x: number;
  y: number;
  scale: number;
}

export function usePanZoom(
  containerRef: React.RefObject<HTMLDivElement | null>,
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  pageWidth: number,
) {
  const transformRef = useRef<Transform>({ x: 0, y: 0, scale: 1 });
  const [zoom, setZoom] = useState(100);

  const applyTransform = useCallback(() => {
    if (!wrapperRef.current) return;
    const t = transformRef.current;
    wrapperRef.current.style.transform = `translate(${t.x}px, ${t.y}px) scale(${t.scale})`;
    wrapperRef.current.style.transformOrigin = "0 0";
    setZoom(Math.round(t.scale * 100));
  }, [wrapperRef]);

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
  }, [containerRef, applyTransform]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [containerRef, handleWheel]);

  const handleZoomIn = useCallback(() => {
    transformRef.current.scale = Math.min(transformRef.current.scale + 0.1, 5);
    applyTransform();
  }, [applyTransform]);

  const handleZoomOut = useCallback(() => {
    transformRef.current.scale = Math.max(transformRef.current.scale - 0.1, 0.1);
    applyTransform();
  }, [applyTransform]);

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
  }, [containerRef, pageWidth, applyTransform]);

  useEffect(() => { handleFitScreen(); }, [handleFitScreen]);

  return {
    transformRef,
    zoom,
    handleZoomIn,
    handleZoomOut,
    handleFitScreen,
  };
}
