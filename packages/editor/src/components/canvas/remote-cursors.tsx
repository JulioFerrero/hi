import { useEffect, useRef } from "react";
import type { RemoteCursor } from "./use-cursor-sync";

const LERP = 0.15;

type AnimState = { x: number; y: number; initialized: boolean };

export function RemoteCursors({
  cursors,
  containerRef,
  transformRef,
}: {
  cursors: RemoteCursor[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  transformRef: React.RefObject<{ x: number; y: number; scale: number }>;
}) {
  const animRef = useRef<Map<string, AnimState>>(new Map());
  const frameRef = useRef(0);
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      const container = containerRef.current;
      const el = renderRef.current;
      if (!container || !el) { frameRef.current = requestAnimationFrame(tick); return; }

      const t = transformRef.current;
      const anim = animRef.current;

      for (const c of cursors) {
        const targetX = c.x * t.scale + t.x;
        const targetY = c.y * t.scale + t.y;
        let state = anim.get(c.userId);
        if (!state) {
          state = { x: targetX, y: targetY, initialized: true };
          anim.set(c.userId, state);
        } else {
          state.x += (targetX - state.x) * LERP;
          state.y += (targetY - state.y) * LERP;
        }
      }

      const stale = new Set(anim.keys());
      for (const c of cursors) stale.delete(c.userId);
      for (const id of stale) anim.delete(id);

      const children = el.children;
      let i = 0;
      for (const c of cursors) {
        const state = anim.get(c.userId);
        if (!state || i >= children.length) { i++; continue; }
        const child = children[i] as HTMLElement;
        child.style.transform = `translate(${state.x}px, ${state.y}px)`;
        child.style.display = "";
        i++;
      }

      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [cursors, containerRef, transformRef]);

  return (
    <div ref={renderRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      {cursors.map((c) => (
        <div key={c.userId} style={{ position: "absolute", top: 0, left: 0, display: "none" }}>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" style={{ marginTop: -3, marginLeft: -1, opacity: 0.85 }}>
            <defs>
              <filter id={`shadow-${c.userId}`} x="5.6" y="6.3" width="22" height="23.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="shadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="shadow" result="shape" />
              </filter>
            </defs>
            <g filter={`url(#shadow-${c.userId})`}>
              <path fillRule="evenodd" clipRule="evenodd" d="M22 15.5068L10 10L12.8382 23L16.3062 17.8654L22 15.5068Z" fill={c.color} />
              <path d="M10.209 9.5459L22.209 15.0527L23.25 15.5303L22.1914 15.9688L16.6367 18.2695L13.2529 23.2803L12.5986 24.248L12.3496 23.1064L9.51172 10.1064L9.29785 9.12793L10.209 9.5459Z" stroke="white" strokeMiterlimit="16" />
            </g>
          </svg>
          <span style={{
            position: "absolute", top: 16, left: 14,
            background: c.color, color: "white",
            fontSize: 10, fontWeight: 600, fontFamily: "Inter, system-ui, sans-serif",
            padding: "2px 7px", borderRadius: 4, whiteSpace: "nowrap",
            boxShadow: "0 1px 4px rgba(0,0,0,.18)",
            maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {c.name}
          </span>
        </div>
      ))}
    </div>
  );
}
