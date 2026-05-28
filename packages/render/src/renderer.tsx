import React from "react";
import type { RenderElement, RendererMap } from "./types";
import { elAttrs } from "./types";
import { classesFromStyles, inlineStylesFromTokens } from "./styles";

function DefaultElement({ element, className, style, children, attrs }: { element: RenderElement; className: string; style: React.CSSProperties; children?: React.ReactNode; attrs: Record<string, string> }) {
  return (
    <div {...attrs} className={className} style={style}>
      {children}
      {element.data.content ? <span>{String(element.data.content)}</span> : null}
    </div>
  );
}

function shallowEqual(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    const va = a[key];
    const vb = b[key];
    if (va === vb) continue;
    if (Array.isArray(va) && Array.isArray(vb)) {
      if (va.length !== vb.length) return false;
      for (let i = 0; i < va.length; i++) {
        if (va[i] !== vb[i]) return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

function elementEqual(prev: RenderElement, next: RenderElement): boolean {
  if (prev.id !== next.id || prev.type !== next.type) return false;
  if (!shallowEqual(prev.styles, next.styles)) return false;
  if (!shallowEqual(prev.data, next.data)) return false;
  if (prev.children.length !== next.children.length) return false;
  for (let i = 0; i < prev.children.length; i++) {
    const pc = prev.children[i];
    const nc = next.children[i];
    if (!pc || !nc || !elementEqual(pc, nc)) return false;
  }
  return true;
}

function ElementRenderer({ element, renderer, editor }: { element: RenderElement; renderer: RendererMap; editor?: boolean }): React.ReactElement {
  const isEditor = editor ?? false;
  const className = classesFromStyles(element.styles as Record<string, unknown>);
  const style = inlineStylesFromTokens(element.styles as Record<string, unknown>);
  const attrs = elAttrs(element.id, element.type, isEditor);
  const children = element.children?.map((c) => <MemoElementRenderer key={c.id} element={c} renderer={renderer} editor={editor} />);

  const Component = renderer[element.type];
  if (Component) {
    const el = <Component element={element} className={className} style={style} attrs={attrs}>{children}</Component>;
    if (isEditor) {
      return <React.Suspense fallback={<div {...attrs} className={className} />}>{el}</React.Suspense>;
    }
    return el;
  }

  return <DefaultElement element={element} className={className} style={style} attrs={attrs}>{children}</DefaultElement>;
}

const MemoElementRenderer: React.MemoExoticComponent<typeof ElementRenderer> = React.memo(ElementRenderer, (prev: { element: RenderElement; renderer: RendererMap; editor?: boolean }, next: { element: RenderElement; renderer: RendererMap; editor?: boolean }) => {
  if (prev.editor !== next.editor) return false;
  if (prev.renderer !== next.renderer) return false;
  return elementEqual(prev.element, next.element);
});

export { MemoElementRenderer as ElementRenderer };

export function RenderPage({ content, renderer, editor }: { content: RenderElement[]; renderer: RendererMap; editor?: boolean }): React.ReactElement {
  return <>{content.map((el) => <MemoElementRenderer key={el.id} element={el} renderer={renderer} editor={editor} />)}</>;
}

export { classesFromStyles, inlineStylesFromTokens } from "./styles";
export type { RenderElement, ElementProps, RendererMap } from "./types";
