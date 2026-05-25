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

export function ElementRenderer({ element, renderer, editor }: { element: RenderElement; renderer: RendererMap; editor?: boolean }): React.ReactElement {
  const isEditor = editor ?? false;
  const className = classesFromStyles(element.styles as Record<string, unknown>);
  const style = inlineStylesFromTokens(element.styles as Record<string, unknown>);
  const attrs = elAttrs(element.id, element.type, isEditor);
  const children = element.children?.map((c) => <ElementRenderer key={c.id} element={c} renderer={renderer} editor={editor} />);

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

export function RenderPage({ content, renderer, editor }: { content: RenderElement[]; renderer: RendererMap; editor?: boolean }): React.ReactElement {
  return <>{content.map((el) => <ElementRenderer key={el.id} element={el} renderer={renderer} editor={editor} />)}</>;
}

export { classesFromStyles, inlineStylesFromTokens } from "./styles";
export type { RenderElement, ElementProps, RendererMap } from "./types";
