import React from "react";
import type { ElementData, ElementStyles } from "@wb/database/schema";
import { styleMap } from "./styles";

export interface RenderElement {
  id: string;
  parentId: string | null;
  type: string;
  data: ElementData;
  styles: ElementStyles;
  order: number;
  children?: RenderElement[];
}

const TAG_MAP: Record<string, string> = {
  h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6",
  p: "p", span: "span", div: "div",
};

export function renderStyles(styles: ElementStyles): React.CSSProperties {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(styles)) {
    if (value == null || value === "") continue;
    const cssKey = styleMap[key] ?? key;
    result[cssKey] = value;
  }
  return result as React.CSSProperties;
}

export function PageRenderer({ elements }: { elements: RenderElement[] }) {
  const tree = buildTree(elements);
  return <>{tree.map((el) => <ElementRenderer key={el.id} element={el} />)}</>;
}

const elAttrs = (id: string, type: string) => ({ "data-el-id": id, "data-el-type": type });

export function ElementRenderer({ element }: { element: RenderElement }) {
  const { id, type, data, styles, children } = element;
  const css = renderStyles(styles);

  switch (type) {
    case "section":
      return (
        <section {...elAttrs(id, type)} style={{ width: "100%", ...css }}>
          {children?.map((c) => <ElementRenderer key={c.id} element={c} />)}
        </section>
      );

    case "row":
      return (
        <div {...elAttrs(id, type)} style={{ display: "flex", flexWrap: "wrap", ...css }}>
          {children?.map((c) => <ElementRenderer key={c.id} element={c} />)}
        </div>
      );

    case "column":
      return (
        <div {...elAttrs(id, type)} style={{ display: "flex", flexDirection: "column", ...css }}>
          {children?.map((c) => <ElementRenderer key={c.id} element={c} />)}
        </div>
      );

    case "grid":
      return (
        <div {...elAttrs(id, type)} style={{ display: "grid", ...css }}>
          {children?.map((c) => <ElementRenderer key={c.id} element={c} />)}
        </div>
      );

    case "heading": {
      const Tag = (TAG_MAP[data.tagName ?? "h2"] ?? "h2") as keyof React.JSX.IntrinsicElements;
      return <Tag {...elAttrs(id, type)} style={css}>{data.content ?? ""}</Tag>;
    }

    case "text":
      if (data.content && data.content.includes("<")) {
        return <div {...elAttrs(id, type)} style={css} dangerouslySetInnerHTML={{ __html: data.content }} />;
      }
      return <p {...elAttrs(id, type)} style={css}>{data.content ?? ""}</p>;

    case "image":
      return (
        <img
          {...elAttrs(id, type)}
          src={data.src}
          alt={data.alt ?? ""}
          style={{ maxWidth: "100%", display: "block", ...css }}
          loading="lazy"
        />
      );

    case "button":
      return (
        <a
          {...elAttrs(id, type)}
          href={data.href ?? "#"}
          target={data.target}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            textDecoration: "none",
            ...css,
          }}
        >
          {data.content ?? "Button"}
        </a>
      );

    case "link":
      return (
        <a {...elAttrs(id, type)} href={data.href ?? "#"} target={data.target} style={{ textDecoration: "none", ...css }}>
          {data.content ?? data.href ?? ""}
        </a>
      );

    case "spacer":
      return <div {...elAttrs(id, type)} style={css} />;

    case "divider":
      return <hr {...elAttrs(id, type)} style={{ border: "none", borderTop: "1px solid #e5e5e5", width: "100%", ...css }} />;

    case "video":
      return (
        <video
          {...elAttrs(id, type)}
          src={data.src}
          controls
          autoPlay={data.autoPlay as boolean}
          loop={data.loop as boolean}
          style={{ maxWidth: "100%", display: "block", ...css }}
        />
      );

    case "html":
      return <div {...elAttrs(id, type)} style={css} dangerouslySetInnerHTML={{ __html: data.content ?? "" }} />;

    default:
      return (
        <div {...elAttrs(id, type)} style={css}>
          {children?.map((c) => <ElementRenderer key={c.id} element={c} />)}
          {data.content && <span>{data.content}</span>}
        </div>
      );
  }
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
