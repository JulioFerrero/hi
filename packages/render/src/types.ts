export interface RenderElement {
  id: string;
  type: string;
  data: Record<string, unknown>;
  styles: Record<string, unknown>;
  children: RenderElement[];
}

export interface ElementProps {
  element: RenderElement;
  className: string;
  style: React.CSSProperties;
  children?: React.ReactNode;
  attrs: Record<string, string>;
}

export type RendererMap = Record<string, React.ComponentType<ElementProps>>;

export const elAttrs = (id: string, type: string, editor: boolean): Record<string, string> =>
  editor ? { "data-el-id": id, "data-el-type": type } : {};
