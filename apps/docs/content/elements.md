---
title: Elements
description: Define element types, configure data fields, and understand the built-in elements and element hierarchy.
order: 3
category: Building
---

Elements are the atomic building blocks of pages. Each element has a **type** (e.g., `section`, `heading`, `image`), **data** (content, URLs, settings), and **styles** (Tailwind-based visual properties).

## ElementTypeConfig

Every element type is defined by an `ElementTypeConfig` object:

```ts
interface ElementTypeConfig {
  type: string;
  label: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  category: string;
  isContainer: boolean;
  defaultStyles: Record<string, string>;
  defaultData: Record<string, unknown>;
  fields: FieldConfig[];
  styleGroups?: string[];
}
```

| Field | Type | Description |
|---|---|---|
| `type` | `string` | Unique identifier (e.g., `"heading"`, `"image"`). Used in `COMPONENT_REGISTRY` and stored in the database. |
| `label` | `string` | Human-readable name shown in the editor UI. |
| `icon` | `LucideIcon` | Icon displayed in the element picker panel. |
| `category` | `string` | Grouping: `"layout"`, `"content"`, or `"advanced"`. Controls which tab the element appears under. |
| `isContainer` | `boolean` | Whether this element can have children. Containers (`section`, `row`, `column`, `grid`) accept nested elements. |
| `defaultStyles` | `Record<string, string>` | Default style values applied when the element is created (e.g., `{ padding: "4", fontSize: "base" }`). |
| `defaultData` | `Record<string, unknown>` | Default data values (e.g., `{ content: "Heading", tagName: "h2" }`). |
| `fields` | `FieldConfig[]` | Data fields shown in the editor's property panel. |
| `styleGroups` | `string[]` | Which style groups to show (e.g., `["spacing", "sizing", "typography"]`). |

## Builder Functions

Use builder functions to define elements with sensible presets for each category:

| Builder | Category | Container | Default Style Groups |
|---|---|---|---|
| `defineContainer(config)` | `"layout"` | Yes | spacing, sizing, layout, background, border, effects |
| `defineText(config)` | `"content"` | No | spacing, sizing, typography, background, border, effects |
| `defineMedia(config)` | `"content"` | No | spacing, sizing, effects |
| `defineAction(config)` | `"content"` | No | spacing, sizing, typography, background, border, effects |
| `defineUtility(config)` | `"content"` | No | spacing, sizing |
| `defineElement(config)` | (as specified) | (as specified) | (none — specify manually) |

### Usage

```ts
import { defineContainer, defineText, defineMedia, defineAction, defineUtility, defineElement } from "@hi/editor";
import { LayoutDashboard, Type, Image, Square, MoveVertical, Code } from "lucide-react";

const section = defineContainer({
  type: "section",
  label: "Section",
  icon: LayoutDashboard,
  defaultStyles: { width: "full", padding: "20", paddingX: "6" },
});

const heading = defineText({
  type: "heading",
  label: "Heading",
  icon: Type,
  defaultStyles: { fontSize: "5xl", fontWeight: "bold", color: "#0a0a0a" },
  defaultData: { content: "Heading", tagName: "h2" },
  fields: [
    selectField({ name: "tagName", label: "Tag", options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"] }),
    textareaField({ name: "content", label: "Text", rows: 3 }),
  ],
});

const customElement = defineElement({
  type: "my-element",
  label: "My Element",
  icon: Code,
  category: "advanced",
  isContainer: false,
  defaultStyles: {},
  defaultData: {},
  fields: [],
  styleGroups: ["spacing", "sizing"],
});
```

## Built-in Element Types

The `@hi/website` package ships with 13 element types:

| Type | Label | Builder | Container | Default Data | Default Styles |
|---|---|---|---|---|---|
| `section` | Section | `defineContainer` | Yes | — | `width: full, padding: 20, paddingX: 6` |
| `row` | Row | `defineContainer` | Yes | — | `display: flex, flexWrap: wrap, gap: 6` |
| `column` | Column | `defineContainer` | Yes | — | `display: flex, flexDirection: col, gap: 2` |
| `grid` | Grid | `defineContainer` | Yes | — | `display: grid, gap: 6, gridTemplateColumns: 2` |
| `heading` | Heading | `defineText` | No | `content: "Heading", tagName: "h2"` | `fontSize: 5xl, fontWeight: bold, color: #0a0a0a` |
| `text` | Text | `defineText` | No | `content: "Write your text here."` | `fontSize: base, lineHeight: relaxed, color: #374151` |
| `image` | Image | `defineMedia` | No | `src: "https://placehold.co/..."` | `maxWidth: full, objectFit: cover` |
| `button` | Button | `defineAction` | No | `content: "Click me", href: "#"` | `padding: 3, paddingX: 8, backgroundColor: #0a0a0a, color: #ffffff, borderRadius: lg` |
| `link` | Link | `defineAction` | No | `content: "Link text", href: "#"` | `fontSize: base, color: #2563eb` |
| `spacer` | Spacer | `defineUtility` | No | — | `height: 10` |
| `divider` | Divider | `defineUtility` | No | — | `marginY: 6` |
| `video` | Video | `defineMedia` | No | `src: ""` | `maxWidth: full` |
| `html` | HTML | `defineElement` | No | `content: "<p>Custom HTML</p>"` | — |

## Data Fields

Each element's `fields` array defines the data fields shown in the editor's property panel.

### FieldConfig Interface

```ts
interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "url" | "number";
  options?: string[];
  rows?: number;
}
```

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Key in the element's `data` object. |
| `label` | `string` | Label shown in the property panel. |
| `type` | `string` | Input type: `text`, `textarea`, `select`, `url`, or `number`. |
| `options` | `string[]` | Available options (only for `select` type). |
| `rows` | `number` | Number of textarea rows (only for `textarea` type). |

### Field Builders

Import from `@hi/editor`:

```ts
import { textField, textareaField, selectField, urlField, numberField, createField } from "@hi/editor";
```

| Builder | Input Type | Description |
|---|---|---|
| `textField({ name, label })` | `text` | Single-line text input |
| `textareaField({ name, label, rows })` | `textarea` | Multi-line text area |
| `selectField({ name, label, options })` | `select` | Dropdown select |
| `urlField({ name, label })` | `url` | URL input |
| `numberField({ name, label })` | `number` | Numeric input |
| `createField(type, extra?)` | any | Create a custom field builder |

### Example

```ts
fields: [
  selectField({ name: "tagName", label: "Tag", options: ["h1", "h2", "h3"] }),
  textareaField({ name: "content", label: "Text", rows: 3 }),
  urlField({ name: "src", label: "Image URL" }),
  textField({ name: "alt", label: "Alt text" }),
],
```

## Element Hierarchy

Elements form a tree structure via the `parentId` field:

```
section (parentId: null, order: 0)
├── column (parentId: section-id, order: 0)
│   ├── heading (parentId: column-id, order: 0)
│   ├── text (parentId: column-id, order: 1)
│   └── button (parentId: column-id, order: 2)
└── grid (parentId: section-id, order: 1)
    ├── column (parentId: grid-id, order: 0)
    │   ├── heading (parentId: column-id, order: 0)
    │   └── text (parentId: column-id, order: 1)
    └── column (parentId: grid-id, order: 1)
        ├── heading (parentId: column-id, order: 0)
        └── text (parentId: column-id, order: 1)
```

- **Root elements** have `parentId: null` — these are top-level sections on the page.
- **Child elements** reference their parent's `id` via `parentId`.
- **Order** determines sibling ordering within the same parent.
- The `buildTree()` function converts the flat element list into a nested tree:

```ts
import { buildTree } from "@hi/website";

const flatElements = await fetchElements(pageId);
const tree = buildTree(flatElements);
```

When you delete an element in the store, its children are also removed:

```ts
removeElement: (id) =>
  set((s) => ({
    elements: s.elements.filter((e) => e.id !== id && e.parentId !== id),
    ...
  })),
```
