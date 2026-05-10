import type { ElementData, ElementStyles } from "@wb/database/schema";

export interface RenderElement {
  id: string;
  parentId: string | null;
  type: string;
  data: ElementData;
  styles: ElementStyles;
  order: number;
  children?: RenderElement[];
}

export interface ElementProps {
  element: RenderElement;
  className: string;
  style: React.CSSProperties;
  children?: React.ReactNode;
  attrs: Record<string, string>;
}

export const elAttrs = (id: string, type: string, editor: boolean): Record<string, string> =>
  editor ? { "data-el-id": id, "data-el-type": type } : {};
