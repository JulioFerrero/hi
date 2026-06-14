import React, { useRef, useEffect, useState, useCallback } from "react";
import { createRoot, type Root } from "react-dom/client";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import { toCanvas } from "html-to-image";
import type { RenderElement, RendererAdapter, Viewport } from "../../types";

const VIEWPORT_WIDTHS: Record<Viewport, number> = { desktop: 1440, tablet: 768, mobile: 375 };
const VIEWPORT_HEIGHTS: Record<Viewport, number> = { desktop: 900, tablet: 1024, mobile: 812 };
const VIEWPORT_LABELS: Record<Viewport, string> = { desktop: "Desktop", tablet: "Tablet", mobile: "Mobile" };

const baseCSSCache = { current: "", fetched: false, pendingEls: [] as HTMLElement[] };

function injectBaseCSS() {
  if (baseCSSCache.current) {
    for (const el of baseCSSCache.pendingEls) el.textContent = baseCSSCache.current;
    baseCSSCache.pendingEls = [];
  }
}

const IFRAME_HTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><style id="tw-dynamic"></style><style id="tw-base"></style><style id="viewport-override"></style></head><body style="margin:0;padding:0;min-height:100%;background-color:#0a0a0a;color:#e5e5e5;-webkit-font-smoothing:antialiased"><div id="canvas-root"></div></body></html>`;

function viewportOverrideCSS(h: number) {
  return `.min-h-\\[100dvh\\]{min-height:${h}px!important}.min-h-\\[100vh\\]{min-height:${h}px!important}.h-\\[100dvh\\]{height:${h}px!important}.h-\\[100vh\\]{height:${h}px!important}`;
}

const PREVIEW_WIDTH = 1440;
const PREVIEW_HEIGHT = 600;

function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png", 0.92);
  });
}

export function ViewportFrame({
  viewport,
  content,
  renderer,
  onRegisterCapture,
}: {
  viewport: Viewport;
  content: RenderElement[];
  renderer: RendererAdapter;
  onRegisterCapture?: (capture: () => Promise<Blob | null>) => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeH, setIframeH] = useState(800);
  const mountedRef = useRef(false);
  const rootRef = useRef<Root | null>(null);
  const cssCache = useRef(new Set<string>());

  const ICONS: Record<Viewport, React.ComponentType<{ className?: string }>> = { desktop: Monitor, tablet: Tablet, mobile: Smartphone };

  const pageWidth = VIEWPORT_WIDTHS[viewport];
  const pageViewportH = VIEWPORT_HEIGHTS[viewport];
  const label = VIEWPORT_LABELS[viewport];

  const capturePreview = useCallback(async (): Promise<Blob | null> => {
    console.log("[preview-capture] capturePreview called");
    const iframe = iframeRef.current;
    if (!iframe) {
      console.warn("[preview-capture] iframe ref is null");
      return null;
    }
    const doc = iframe.contentDocument;
    if (!doc) {
      console.warn("[preview-capture] iframe contentDocument is null");
      return null;
    }
    const root = doc.getElementById("canvas-root");
    if (!root) {
      console.warn("[preview-capture] canvas-root not found");
      return null;
    }

    try {
      console.log("[preview-capture] calling toCanvas", root.getBoundingClientRect());
      const fullCanvas = await toCanvas(root, {
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: "#0a0a0a",
      });
      console.log("[preview-capture] toCanvas succeeded", fullCanvas.width, fullCanvas.height);

      const width = Math.min(PREVIEW_WIDTH, fullCanvas.width);
      const height = Math.min(PREVIEW_HEIGHT, fullCanvas.height);
      const cropCanvas = document.createElement("canvas");
      cropCanvas.width = width;
      cropCanvas.height = height;
      const ctx = cropCanvas.getContext("2d");
      if (!ctx) {
        console.warn("[preview-capture] crop canvas context is null");
        return null;
      }
      ctx.drawImage(fullCanvas, 0, 0, width, height, 0, 0, width, height);
      const blob = await canvasToBlob(cropCanvas);
      console.log("[preview-capture] cropped blob", blob?.size, blob?.type);
      return blob;
    } catch (err) {
      console.error("[preview-capture] toCanvas failed", err);
      return null;
    }
  }, []);

  useEffect(() => {
    console.log("[preview-capture] registering capture for viewport", viewport);
    onRegisterCapture?.(capturePreview);
  }, [onRegisterCapture, capturePreview, viewport]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (!doc) return;

    if (!mountedRef.current) {
      doc.open();
      doc.write(IFRAME_HTML);
      doc.close();
      mountedRef.current = true;

      const baseEl = doc.getElementById("tw-base");
      if (baseEl) {
        if (baseCSSCache.current) {
          baseEl.textContent = baseCSSCache.current;
        } else {
          baseCSSCache.pendingEls.push(baseEl);
          if (!baseCSSCache.fetched) {
            baseCSSCache.fetched = true;
            fetch("/api/iframe-base")
              .then((r) => r.text())
              .then((css) => {
                baseCSSCache.current = css;
                injectBaseCSS();
              })
              .catch(() => {});
          }
        }
      }
    }

    const overrideEl = doc.getElementById("viewport-override");
    if (overrideEl) overrideEl.textContent = viewportOverrideCSS(pageViewportH);

    const mountEl = doc.getElementById("canvas-root");
    if (!mountEl) return;

    if (!rootRef.current) rootRef.current = createRoot(mountEl);

    const tree = content.length === 0
      ? <div style={{ display: "flex", height: "600px", alignItems: "center", justifyContent: "center", color: "#999" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: 500 }}>Empty page</p>
            <p style={{ marginTop: "4px", fontSize: "14px" }}>Add elements using the toolbar below</p>
          </div>
        </div>
      : <renderer.PageRenderer content={content} editor />;

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
  }, [content, renderer, pageViewportH]);

  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      <span className="flex items-center gap-3 text-2xl font-bold text-muted-foreground/70">
        {React.createElement(ICONS[viewport], { className: "h-8 w-8" })}
        {label} · {pageWidth}
      </span>
      <div className="relative">
        <iframe
          ref={iframeRef}
          title={label}
          className="bg-dark-950 rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.3)] border border-white/[0.06] block"
          style={{ width: `${pageWidth}px`, height: `${iframeH}px`, pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}

export function getTotalWidth(): number {
  return VIEWPORT_WIDTHS.desktop + VIEWPORT_WIDTHS.tablet + VIEWPORT_WIDTHS.mobile + 128;
}

export { VIEWPORT_WIDTHS, VIEWPORT_HEIGHTS };
