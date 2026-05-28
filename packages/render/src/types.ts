/** A renderable page element with styles, data, and children. */
export interface RenderElement {
  id: string;
  type: string;
  data: Record<string, unknown>;
  styles: Record<string, unknown>;
  children: RenderElement[];
}

/** Props passed to renderer components. */
export interface ElementProps {
  element: RenderElement;
  className: string;
  style: React.CSSProperties;
  children?: React.ReactNode;
  attrs: Record<string, string>;
}

/** Maps element type strings to React renderer components. */
export type RendererMap = Record<string, React.ComponentType<ElementProps>>;

/** @internal Generates data attributes for editor mode. */
export const elAttrs = (id: string, type: string, editor: boolean): Record<string, string> =>
  editor ? { "data-el-id": id, "data-el-type": type } : {};
