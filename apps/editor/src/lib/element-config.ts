import {
  LayoutDashboard,
  Rows3,
  Columns3,
  Grid3x3,
  Heading,
  Type,
  Image,
  Square,
  Link,
  Minus,
  MoveVertical,
  Play,
  Code,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const ELEMENT_ICON_MAP: Record<string, LucideIcon> = {
  LayoutDashboard,
  Rows3,
  Columns3,
  Grid3x3,
  Heading,
  Type,
  Image,
  Square,
  Link,
  Minus,
  MoveVertical,
  Play,
  Code,
};

export const ELEMENT_TYPES = [
  { type: "section", label: "Section", icon: "LayoutDashboard", category: "layout" },
  { type: "row", label: "Row", icon: "Rows3", category: "layout" },
  { type: "column", label: "Column", icon: "Columns3", category: "layout" },
  { type: "grid", label: "Grid", icon: "Grid3x3", category: "layout" },
  { type: "heading", label: "Heading", icon: "Heading", category: "content" },
  { type: "text", label: "Text", icon: "Type", category: "content" },
  { type: "image", label: "Image", icon: "Image", category: "content" },
  { type: "button", label: "Button", icon: "Square", category: "content" },
  { type: "link", label: "Link", icon: "Link", category: "content" },
  { type: "divider", label: "Divider", icon: "Minus", category: "content" },
  { type: "spacer", label: "Spacer", icon: "MoveVertical", category: "content" },
  { type: "video", label: "Video", icon: "Play", category: "content" },
  { type: "html", label: "HTML", icon: "Code", category: "advanced" },
] as const;

export const HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"] as const;

export const STYLE_GROUPS = {
  spacing: {
    label: "Spacing",
    fields: ["padding", "margin"],
  },
  sizing: {
    label: "Size",
    fields: ["width", "height", "minHeight", "maxWidth"],
  },
  typography: {
    label: "Typography",
    fields: ["fontSize", "fontWeight", "fontFamily", "lineHeight", "letterSpacing", "textAlign", "color"],
  },
  background: {
    label: "Background",
    fields: ["backgroundColor", "backgroundImage", "backgroundSize", "backgroundPosition"],
  },
  layout: {
    label: "Layout",
    fields: ["display", "flexDirection", "justifyContent", "alignItems", "gap", "gridTemplateColumns"],
  },
  border: {
    label: "Border",
    fields: ["borderRadius", "borderWidth", "borderColor", "borderStyle"],
  },
  effects: {
    label: "Effects",
    fields: ["opacity", "overflow"],
  },
};

export const DEFAULT_ELEMENT_STYLES: Record<string, Record<string, string>> = {
  section: { width: "100%", padding: "80px 24px" },
  row: { display: "flex", gap: "24px", padding: "0 24px" },
  column: { display: "flex", flexDirection: "column", flex: "1", gap: "8px" },
  grid: { display: "grid", gap: "24px", gridTemplateColumns: "repeat(2, 1fr)" },
  heading: { fontSize: "48px", fontWeight: "700", lineHeight: "1.1", color: "#0a0a0a" },
  text: { fontSize: "16px", lineHeight: "1.6", color: "#374151" },
  image: { maxWidth: "100%", objectFit: "cover" },
  button: {
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
    borderRadius: "8px",
  },
  link: { fontSize: "16px", color: "#2563eb" },
  spacer: { height: "40px" },
  divider: { margin: "24px 0" },
  video: { maxWidth: "100%" },
  html: {},
};

export const DEFAULT_ELEMENT_DATA: Record<string, Record<string, unknown>> = {
  heading: { content: "Heading", tagName: "h2" },
  text: { content: "Write your text here." },
  button: { content: "Click me", href: "#" },
  link: { content: "Link text", href: "#" },
  image: { src: "https://placehold.co/800x400/e5e5e5/999?text=Image", alt: "Image" },
  spacer: {},
  divider: {},
  section: {},
  row: {},
  column: {},
  grid: {},
  video: { src: "" },
  html: { content: "<p>Custom HTML</p>" },
};
