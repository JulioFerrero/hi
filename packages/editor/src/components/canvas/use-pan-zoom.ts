import { useRef, useEffect, useCallback, useState } from "react";
import { getTotalWidth } from "./viewport-frame";

export function usePanZoom(containerRef: React.RefObject<HTMLDivElement | null>, wrapperRef: React.RefObject<HTMLDivElement | null>) {
  const transformRef = useRef({ x: 0, y: 0, scale: 1 });
  const [zoom, setZoom] = useState(100);

  const applyTransform = useCallback(() => {
    if (!wrapperRef.current) return;
    const t = transformRef.current;
    wrapperRef.current.style.transform = `translate(${t.x}px, ${t.y}px) scale(${t.scale})`;
    wrapperRef.current.style.transformOrigin = "0 0";
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
    } else { t.x -= e.deltaX; t.y -= e.deltaY; }
    applyTransform();
  }, [applyTransform]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const handleFitScreen = useCallback(() => {
    const container = containerRef.current;
    const totalWidth = getTotalWidth();
    if (!container) { transformRef.current = { x: 32, y: 32, scale: 0.3 }; applyTransform(); return; }
    const containerW = container.clientWidth;
    const padding = 64;
    const scale = Math.min((containerW - padding) / totalWidth, 1);
    const x = (containerW - totalWidth * scale) / 2;
    transformRef.current = { x, y: 32, scale };
    applyTransform();
  }, [applyTransform]);

  useEffect(() => { handleFitScreen(); }, [handleFitScreen]);

  return { transformRef, zoom, applyTransform, handleFitScreen };
}
