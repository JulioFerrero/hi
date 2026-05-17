import React from "react";
import type { RenderElement } from "./lib/types";
import { elAttrs } from "./lib/types";
import { classesFromStyles, inlineStylesFromTokens } from "./lib/styles";
import { COMPONENT_REGISTRY, hasComponent } from "./components";

export { classesFromStyles, inlineStylesFromTokens } from "./lib/styles";
export type { RenderElement, ElementProps } from "./lib/types";
export { COMPONENT_REGISTRY, hasComponent } from "./components";

function DefaultElement({ element, className, style, children, attrs }: { element: RenderElement; className: string; style: React.CSSProperties; children?: React.ReactNode; attrs: Record<string, string> }) {
  return (
    <div {...attrs} className={className} style={style}>
      {children}
      {element.data.content && <span>{element.data.content}</span>}
    </div>
  );
}

export function ElementRenderer({ element, editor }: { element: RenderElement; editor?: boolean }) {
  const isEditor = editor ?? false;
  const className = classesFromStyles(element.styles as Record<string, unknown>);
  const style = inlineStylesFromTokens(element.styles as Record<string, unknown>);
  const attrs = elAttrs(element.id, element.type, isEditor);
  const children = element.children?.map((c) => <ElementRenderer key={c.id} element={c} editor={editor} />);

  if (hasComponent(element.type)) {
    const Component = COMPONENT_REGISTRY[element.type]!;
    const el = <Component element={element} className={className} style={style} children={children} attrs={attrs} />;
    if (isEditor) {
      const Suspense = React.Suspense;
      return <Suspense fallback={<div {...attrs} className={className} />}>{el}</Suspense>;
    }
    return el;
  }

  return <DefaultElement element={element} className={className} style={style} children={children} attrs={attrs} />;
}

export function PageRenderer({ elements, editor }: { elements: RenderElement[]; editor?: boolean }) {
  const tree = buildTree(elements);
  return <>{tree.map((el) => <ElementRenderer key={el.id} element={el} editor={editor} />)}</>;
}

export function buildTree(flat: RenderElement[]): RenderElement[] {
  const map = new Map<string, RenderElement>();
  const roots: RenderElement[] = [];

  for (const el of flat) {
    map.set(el.id, { ...el, children: [] });
  }

  for (const el of flat) {
    const node = map.get(el.id)!;
    if (el.parentId && map.has(el.parentId)) {
      map.get(el.parentId)!.children!.push(node);
    } else {
      roots.push(node);
    }
  }

  const sortChildren = (nodes: RenderElement[]): RenderElement[] => {
    nodes.sort((a, b) => a.order - b.order);
    for (const n of nodes) {
      if (n.children?.length) sortChildren(n.children);
    }
    return nodes;
  };

  return sortChildren(roots);
}
