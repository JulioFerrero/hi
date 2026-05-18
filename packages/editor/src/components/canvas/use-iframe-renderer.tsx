import type React from "react";
import { useRef, useEffect, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import type { Viewport } from "../../types";

const VIEWPORT_WIDTHS: Record<Viewport, number> = { desktop: 1440, tablet: 768, mobile: 375 };
const VIEWPORT_HEIGHTS: Record<Viewport, number> = { desktop: 900, tablet: 1024, mobile: 812 };

const IFRAME_HTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><style id="tw-dynamic"></style><style id="viewport-override"></style></head><body style="margin:0;padding:0;min-height:100%"><div id="canvas-root"></div></body></html>`;

function viewportOverrideCSS(h: number) {
  return `.min-h-\\[100dvh\\]{min-height:${h}px!important}.min-h-\\[100vh\\]{min-height:${h}px!important}.h-\\[100dvh\\]{height:${h}px!important}.h-\\[100vh\\]{height:${h}px!important}`;
}

export function useIframeRenderer(
  iframeRef: React.RefObject<HTMLIFrameElement | null>,
  elements: any[],
  renderer: { PageRenderer: React.ComponentType<{ elements: any[]; editor?: boolean }> },
  viewport: Viewport,
) {
  const [iframeH, setIframeH] = useState(800);
  const mountedRef = useRef(false);
  const rootRef = useRef<Root | null>(null);
  const cssCache = useRef(new Set<string>());
  const viewportRef = useRef(viewport);

  const pageWidth = VIEWPORT_WIDTHS[viewport] ?? 1440;
  const pageViewportH = VIEWPORT_HEIGHTS[viewport] ?? 900;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (!doc) return;

    const viewportChanged = viewportRef.current !== viewport;
    if (viewportChanged) {
      cssCache.current.clear();
      mountedRef.current = false;
      rootRef.current = null;
      viewportRef.current = viewport;
    }

    if (!mountedRef.current) {
      doc.open();
      doc.write(IFRAME_HTML);
      doc.close();
      mountedRef.current = true;
    }

    const overrideEl = doc.getElementById("viewport-override");
    if (overrideEl) overrideEl.textContent = viewportOverrideCSS(pageViewportH);

    const mountEl = doc.getElementById("canvas-root");
    if (!mountEl) return;

    if (!rootRef.current) rootRef.current = createRoot(mountEl);

    const tree = elements.length === 0
      ? <div style={{ display: "flex", height: "600px", alignItems: "center", justifyContent: "center", color: "#999" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: 500 }}>Empty page</p>
            <p style={{ marginTop: "4px", fontSize: "14px" }}>Add elements using the toolbar below</p>
          </div>
        </div>
      : <renderer.PageRenderer elements={elements} editor />;

    rootRef.current.render(tree);

    const measure = () => {
      const root = doc.getElementById("canvas-root");
      if (!root) return;
      const finalH = Math.max(Math.ceil(root.getBoundingClientRect().height), pageViewportH);
      if (iframe.style.height !== `${finalH}px`) {
        iframe.style.height = `${finalH}px`;
        setIframeH(finalH);
      }
    };

    const rootEl = doc.getElementById("canvas-root");
    const ro = new ResizeObserver(() => requestAnimationFrame(measure));
    if (rootEl) ro.observe(rootEl);
    measure();

    const allClasses: string[] = [];
    mountEl.querySelectorAll("[class]").forEach((el) => {
      el.classList.forEach((c) => allClasses.push(c));
    });
    const newClasses = [...new Set(allClasses)].filter((c) => !cssCache.current.has(c));

    const styleEl = doc.getElementById("tw-dynamic");
    if (styleEl && newClasses.length > 0) {
      fetch("/api/tailwind", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ classes: newClasses }),
      })
        .then((r) => r.text())
        .then((css) => {
          if (!css) return;
          styleEl.textContent += css;
          for (const c of newClasses) cssCache.current.add(c);
        })
        .catch(() => {});
    }

    return () => ro.disconnect();
  }, [elements, renderer, pageViewportH, viewport]);

  return { iframeH, pageWidth };
}
