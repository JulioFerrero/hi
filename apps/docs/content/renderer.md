---
title: Renderer
description: How elements are rendered from flat database rows into a React component tree via PageRenderer, ElementRenderer, and the component registry.
order: 6
category: Building
---

## Rendering Pipeline

```
Flat elements from API          buildTree()          PageRenderer
(rows with parentId)      →     (nested tree)    →   (renders roots)
                                                       │
                                                       ▼
                                                ElementRenderer
                                                (per element)
                                                       │
                                               ┌───────┴───────┐
                                               │               │
                                        COMPONENT_REGISTRY   DefaultElement
                                        (registered type)   (fallback <div>)
```

**Step-by-step:**

1. **Fetch** — The web app fetches flat elements for a page: `GET /api/elements?pageId=X`
2. **buildTree()** — Converts the flat array into a nested tree using `parentId` and `order`
3. **PageRenderer** — Iterates over root elements, renders each with `ElementRenderer`
4. **ElementRenderer** — Resolves styles, looks up the component, renders it

## buildTree()

```ts
import { buildTree } from "@hi/website";

const flatElements = [
  { id: "s1", parentId: null, type: "section", order: 0, ... },
  { id: "h1", parentId: "s1", type: "heading", order: 0, ... },
  { id: "t1", parentId: "s1", type: "text", order: 1, ... },
];

const tree = buildTree(flatElements);
// → [{ id: "s1", children: [{ id: "h1", ... }, { id: "t1", ... }] }]
```

The algorithm:
1. Creates a `Map<string, RenderElement>` with empty `children` arrays
2. Iterates all elements: if `parentId` exists and the parent is in the map, pushes to parent's children; otherwise adds to `roots`
3. Recursively sorts children by `order`

## PageRenderer

```tsx
import { PageRenderer } from "@hi/website";

function MyPage({ elements }: { elements: RenderElement[] }) {
  return <PageRenderer elements={elements} />;
}
```

Props:

| Prop | Type | Description |
|---|---|---|
| `elements` | `RenderElement[]` | Flat element list (will be tree-ified internally) |
| `editor` | `boolean` | Optional. Enables editor mode attributes. |

## ElementRenderer

Called internally by `PageRenderer` for each element in the tree:

```tsx
<ElementRenderer element={el} editor={false} />
```

For each element:

1. **Resolve classes** — `classesFromStyles(element.styles)` → Tailwind class string
2. **Resolve inline styles** — `inlineStylesFromTokens(element.styles)` → `React.CSSProperties`
3. **Build attributes** — `elAttrs(id, type, editor)` → `{ "data-el-id": "...", "data-el-type": "..." }` (only in editor mode)
4. **Recurse children** — Each child element is rendered with `ElementRenderer`
5. **Look up component** — Checks `COMPONENT_REGISTRY[element.type]`
6. **Render** — Calls the registered component, or falls back to `DefaultElement`

## Component Registry

The registry maps element type strings to React components:

```ts
import { COMPONENT_REGISTRY } from "@hi/website";

// Built-in registrations (13 types):
{
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
}
```

Check if a component is registered:

```ts
import { hasComponent } from "@hi/website";

hasComponent("heading"); // true
hasComponent("custom-card"); // false
```

## ElementProps

Every registered component receives an `ElementProps` object:

```ts
interface ElementProps {
  element: RenderElement;
  className: string;
  style: React.CSSProperties;
  children?: React.ReactNode;
  attrs: Record<string, string>;
}
```

| Prop | Type | Description |
|---|---|---|
| `element` | `RenderElement` | The full element object with `data`, `styles`, `children`, etc. |
| `className` | `string` | Resolved Tailwind classes from `classesFromStyles()` |
| `style` | `React.CSSProperties` | Inline styles from `inlineStylesFromTokens()` (hex colors, background images) |
| `children` | `React.ReactNode` | Pre-rendered child elements (for containers) |
| `attrs` | `Record<string, string>` | Editor attributes (`data-el-id`, `data-el-type`) or empty object |

### Example component

```tsx
import type { ElementProps } from "@hi/website";

export function Heading({ element, className, style, attrs }: ElementProps) {
  const Tag = element.data.tagName ?? "h2";
  return <Tag {...attrs} className={className} style={style}>{element.data.content ?? ""}</Tag>;
}
```

```tsx
export function Section({ className, style, children, attrs }: ElementProps) {
  return <section {...attrs} className={className} style={style}>{children}</section>;
}
```

## Default Rendering Fallback

If an element type is **not** found in `COMPONENT_REGISTRY`, `ElementRenderer` renders a `DefaultElement`:

```tsx
<div {...attrs} className={className} style={style}>
  {children}
  {element.data.content && <span>{element.data.content}</span>}
</div>
```

This ensures that even unregistered elements render something useful — their children and text content.

## Editor Mode

When `editor={true}` is passed to `PageRenderer`, every rendered element gets additional DOM attributes:

```html
<section data-el-id="abc123" data-el-type="section" class="p-4 px-6 w-full">
  <h2 data-el-id="def456" data-el-type="heading" class="text-5xl font-bold">Hello</h2>
</section>
```

These attributes allow the editor to:
- **Identify elements** — Click detection reads `data-el-id` to select the element
- **Show type labels** — Tooltip or overlay from `data-el-type`
- **Enable contentEditable** — Text/heading elements can be edited inline

The `elAttrs` helper:

```ts
export const elAttrs = (id: string, type: string, editor: boolean): Record<string, string> =>
  editor ? { "data-el-id": id, "data-el-type": type } : {};
```

In editor mode, `ElementRenderer` also wraps each registered component in `React.Suspense` with a fallback:

```tsx
if (isEditor) {
  return (
    <Suspense fallback={<div {...attrs} className={className} />}>
      {el}
    </Suspense>
  );
}
```

## JIT CSS Middleware in the Web App

The web app uses Tailwind CSS v4 with JIT compilation. Since element styles produce arbitrary Tailwind class combinations at runtime (e.g., `p-4 text-2xl bg-gray-100 rounded-lg`), the Tailwind setup must be configured to scan the correct source files for class usage.

The styles are generated from the `styles` JSONB column at render time, so the actual classes used depend on the database content. Tailwind's content configuration should include:

1. All component files in `packages/website/src/components/`
2. All element definition files (for `defaultStyles`)
3. The seed data file (which defines the initial page content)

For production, the full Tailwind token set is included in the build to ensure all possible style combinations are available.
