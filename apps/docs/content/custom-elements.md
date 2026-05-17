---
title: Custom Elements
description: Create your own element types with custom components, data fields, and style groups.
order: 8
category: Advanced
---

## Overview

Creating a custom element requires four steps:

1. **Define the element type** — Use a builder function from `@hi/editor`
2. **Create the React component** — Implement the rendering logic
3. **Register in the schema** — Add the element type to the `EditorSchema`
4. **Register in the component registry** — Map the type string to your component

## Step-by-Step Example: Testimonial Card

Let's build a testimonial card element with a quote, author name, and author role.

### Step 1: Define the element type

Create `packages/website/src/elements/testimonial.ts`:

```ts
import { defineElement, textField, textareaField } from "@hi/editor";
import { Quote } from "lucide-react";

export const testimonial = defineElement({
  type: "testimonial",
  label: "Testimonial",
  icon: Quote,
  category: "content",
  isContainer: false,
  defaultStyles: {
    padding: "8",
    maxWidth: "2xl",
    margin: "auto",
    backgroundColor: "#f9fafb",
    borderRadius: "xl",
    borderWidth: "1",
    borderColor: "#e5e7eb",
    borderStyle: "solid",
  },
  defaultData: {
    quote: "This product changed how we work. Absolutely incredible.",
    author: "Jane Smith",
    role: "CEO at Acme Inc",
  },
  fields: [
    textareaField({ name: "quote", label: "Quote", rows: 3 }),
    textField({ name: "author", label: "Author Name" }),
    textField({ name: "role", label: "Author Role" }),
  ],
  styleGroups: ["spacing", "sizing", "background", "border", "effects"],
});
```

### Step 2: Create the React component

Create `packages/website/src/components/testimonial.tsx`:

```tsx
import React from "react";
import type { ElementProps } from "../lib/types";

export function Testimonial({ element, className, style, attrs }: ElementProps) {
  const { quote, author, role } = element.data;

  return (
    <div {...attrs} className={className} style={style}>
      <blockquote style={{ fontSize: "1.125rem", fontStyle: "italic", color: "#374151", marginBottom: "1rem" }}>
        &ldquo;{quote ?? ""}&rdquo;
      </blockquote>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div>
          <div style={{ fontWeight: 600, color: "#0a0a0a" }}>{author ?? ""}</div>
          <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>{role ?? ""}</div>
        </div>
      </div>
    </div>
  );
}
```

### Step 3: Register in the schema

Add the element to the elements array in `packages/website/src/elements/index.ts`:

```ts
import { testimonial } from "./testimonial";

export const elements = [
  section,
  row,
  column,
  grid,
  heading,
  text,
  image,
  button,
  link,
  divider,
  spacer,
  video,
  html,
  testimonial,  // Add here
];
```

### Step 4: Register in the component registry

Add the component to `COMPONENT_REGISTRY` in `packages/website/src/components/index.ts`:

```ts
import { Testimonial } from "./testimonial";

export const COMPONENT_REGISTRY: Record<string, ComponentType<ElementProps>> = {
  section: Section,
  row: Row,
  column: Column,
  grid: Grid,
  heading: Heading,
  text: Text,
  image: Image,
  button: Button,
  link: Link,
  spacer: Spacer,
  divider: Divider,
  video: Video,
  html: Html,
  testimonial: Testimonial,  // Add here
};
```

That's it. The testimonial element now appears in the editor's element picker and renders correctly in the website.

## Custom Style Groups

You can define custom style groups for specialized controls:

```ts
import { defineStyleGroup, styleField } from "@hi/editor";

export const transform = defineStyleGroup({
  label: "Transform",
  fields: [
    styleField({ name: "rotate", label: "Rotate", type: "text", placeholder: "45deg" }),
    styleField({ name: "scale", label: "Scale", type: "text", placeholder: "1.5" }),
    styleField({ name: "translateX", label: "Translate X", type: "text", placeholder: "10px" }),
    styleField({ name: "translateY", label: "Translate Y", type: "text", placeholder: "10px" }),
  ],
});
```

Then include the group name in an element's `styleGroups`:

```ts
defineElement({
  type: "animated-box",
  label: "Animated Box",
  icon: Sparkles,
  category: "advanced",
  isContainer: true,
  styleGroups: ["spacing", "sizing", "background", "transform"],
  ...
});
```

To handle custom style keys in the renderer, you can extend `classesFromStyles` or apply them directly in your component:

```tsx
export function AnimatedBox({ element, className, style, children, attrs }: ElementProps) {
  const customStyle: React.CSSProperties = {
    ...style,
    transform: [
      element.data.rotate ? `rotate(${element.data.rotate})` : "",
      element.data.scale ? `scale(${element.data.scale})` : "",
      element.data.translateX ? `translateX(${element.data.translateX})` : "",
    ].filter(Boolean).join(" ") || undefined,
  };

  return <div {...attrs} className={className} style={customStyle}>{children}</div>;
}
```

## Using Different Builder Functions

Choose the builder that matches your element's purpose:

```ts
import { defineContainer, defineText, defineMedia, defineAction, defineUtility, defineElement } from "@hi/editor";

const card = defineContainer({ type: "card", ... });
const paragraph = defineText({ type: "paragraph", ... });
const video = defineMedia({ type: "video", ... });
const ctaButton = defineAction({ type: "cta-button", ... });
const spacer = defineUtility({ type: "spacer", ... });
const anything = defineElement({ type: "anything", category: "advanced", isContainer: false, ... });
```

Each builder pre-configures the `category`, `isContainer`, and `styleGroups`:

| Builder | Category | Container | Style Groups |
|---|---|---|---|
| `defineContainer` | `"layout"` | `true` | spacing, sizing, layout, background, border, effects |
| `defineText` | `"content"` | `false` | spacing, sizing, typography, background, border, effects |
| `defineMedia` | `"content"` | `false` | spacing, sizing, effects |
| `defineAction` | `"content"` | `false` | spacing, sizing, typography, background, border, effects |
| `defineUtility` | `"content"` | `false` | spacing, sizing |
| `defineElement` | (custom) | (custom) | (none) |

## Tips and Best Practices

### Always set sensible defaults

Users expect an element to look reasonable when first added. Configure `defaultStyles` and `defaultData` with production-ready values:

```ts
defaultStyles: {
  padding: "6",
  maxWidth: "2xl",
  borderRadius: "lg",
  backgroundColor: "#ffffff",
},
defaultData: {
  content: "Edit this text",
},
```

### Use the correct field types

- `textField` — Single-line values (names, URLs, short text)
- `textareaField` — Multi-line content (paragraphs, HTML, code)
- `selectField` — Enumerated options (tag names, variants, sizes)
- `urlField` — URLs (image sources, links)
- `numberField` — Numeric values (columns, counts)

### Keep components pure

`ElementProps` provides everything you need. Avoid fetching external data or using hooks with side effects inside components. The component should render deterministically from `element.data`, `className`, and `style`.

### Use children for containers

Container elements should render `{children}` to support nested elements:

```tsx
export function Card({ className, style, children, attrs }: ElementProps) {
  return <div {...attrs} className={className} style={style}>{children}</div>;
}
```

### Spread attrs for editor support

Always spread `attrs` onto your root element. This adds `data-el-id` and `data-el-type` in editor mode, which enables click-to-select:

```tsx
<div {...attrs} className={className} style={style}>
```

### Handle missing data gracefully

Element data may be partially filled. Use nullish coalescing:

```tsx
<img src={element.data.src ?? ""} alt={element.data.alt ?? ""} />
<span>{element.data.content ?? ""}</span>
```

### Register all dependencies

An element type is only fully functional when it's registered in **both** the schema (for the editor UI) and the component registry (for rendering). If you forget one, the element will either not appear in the editor or render as a `DefaultElement` fallback.
