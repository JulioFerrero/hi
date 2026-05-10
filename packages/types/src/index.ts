export interface SiteData {
  name: string;
  domain?: string;
  settings?: {
    favicon?: string;
    primaryColor?: string;
    fontFamily?: string;
    description?: string;
  };
}

export interface PageData {
  title: string;
  path: string;
  status: "draft" | "published";
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
    noIndex?: boolean;
  };
  parentId?: string;
}

export interface ElementData {
  content?: string;
  src?: string;
  alt?: string;
  href?: string;
  target?: string;
  tagName?: string;
  columns?: number;
  gap?: string;
  maxWidth?: string;
  variant?: string;
  [key: string]: unknown;
}

export interface ElementStyles {
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  maxWidth?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
  backgroundColor?: string;
  textAlign?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  gridTemplateColumns?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  opacity?: string;
  overflow?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  objectFit?: string;
  [key: string]: unknown;
}

export interface FileData {
  url: string;
  name?: string;
  type?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface Site {
  id: string;
  slug: string;
  data: SiteData;
  createdAt: Date;
  updatedAt: Date;
}

export interface Page {
  id: string;
  siteId: string;
  slug: string;
  data: PageData;
  createdAt: Date;
  updatedAt: Date;
}

export interface Element {
  id: string;
  pageId: string;
  parentId: string | null;
  type: string;
  data: ElementData;
  styles: ElementStyles;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ElementType =
  | "section"
  | "row"
  | "column"
  | "grid"
  | "text"
  | "heading"
  | "image"
  | "button"
  | "link"
  | "spacer"
  | "divider"
  | "video"
  | "html";
