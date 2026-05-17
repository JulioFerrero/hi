---
title: Architecture
description: Understand the monorepo structure, package dependency graph, data flow, and style resolution.
order: 2
category: Getting Started
---

## Package Dependency Graph

```
                    ┌──────────┐
                    │  types   │
                    └────┬─────┘
                         │
              ┌──────────┼──────────┐
              │          │          │
         ┌────┴───┐ ┌───┴────┐ ┌──┴──────┐
         │ utils  │ │database│ │ config- │
         └────────┘ └───┬────┘ │tsconfig │
                        │      └─────────┘
                   ┌────┴────┐
                   │   api   │
                   └────┬────┘
                        │
              ┌─────────┼─────────┐
              │         │         │
         ┌────┴────┐ ┌─┴──────┐ ┌┴──────┐
         │ editor  │ │website │ │  cms  │
         └────┬────┘ └───┬────┘ └───────┘
              │          │
         ┌────┴──────────┴────┐
         │       apps/         │
         │  web  │  editor     │
         └────────────────────┘
```

## Package Reference

| Package | Import | Purpose |
|---|---|---|
| `types` | `@hi/types` | Shared TypeScript interfaces (`Site`, `Page`, `Element`, `ElementType`, etc.) |
| `utils` | `@hi/utils` | Utility functions: `cn()`, `slugify()`, `buildPath()` |
| `database` | `@hi/database` | Drizzle ORM schema, migrations, seed data, DB client |
| `api` | `@hi/api` | Hono REST API with Zod validation, mounted in both apps |
| `editor` | `@hi/editor` | Editor store (Zustand), element builders, style builders, actions |
| `website` | `@hi/website` | Component registry, `PageRenderer`, `ElementRenderer`, style functions |
| `ui` | `@hi/ui` | Base UI primitives and Tailwind components |
| `cms` | `@hi/cms` | Collection schema builder and item validation |

## Data Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                        Editor App                                │
│                                                                  │
│  User edits element → Zustand store updates → API PATCH request  │
│                                                                  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                      Hono REST API                               │
│                                                                  │
│   /api/elements/:id  ←→  Drizzle ORM  ←→  PostgreSQL            │
│   /api/pages/:id     ←→  Drizzle ORM  ←→  PostgreSQL            │
│                                                                  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                      PostgreSQL                                  │
│                                                                  │
│   sites  ──<  pages  ──<  elements                               │
│                  │                                               │
│                  └── Element rows with JSONB data + styles       │
│                                                                  │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                       Web App                                    │
│                                                                  │
│   /[...slug] → fetch page → fetch elements → buildTree() →      │
│   PageRenderer → ElementRenderer → React component tree          │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Step-by-step:**

1. **Editor** — User modifies an element in the visual builder. The Zustand store updates immediately for a responsive UI.
2. **Store → API** — On save, the editor sends a `PATCH /api/elements/:id` with updated `data` and `styles` JSONB objects.
3. **API → PostgreSQL** — The Hono route validates with Zod and updates the row via Drizzle ORM.
4. **Web App fetch** — The website app resolves the URL path, fetches the page and its flat element list from the API.
5. **PageRenderer** — `buildTree()` converts the flat list into a nested tree using `parentId`. Each element is rendered by `ElementRenderer`.
6. **ElementRenderer** — Looks up the element type in `COMPONENT_REGISTRY`, resolves styles via `classesFromStyles()` and `inlineStylesFromTokens()`, and renders the matching React component.

## Style Resolution

Styles are stored as JSONB with Tailwind token values:

```json
{
  "padding": "4",
  "paddingX": "6",
  "backgroundColor": "#0a0a0a",
  "fontSize": "2xl",
  "fontWeight": "bold",
  "color": "#ffffff",
  "borderRadius": "lg"
}
```

At render time, two functions convert these into CSS:

### `classesFromStyles(styles)` → Tailwind class string

Converts each token to a Tailwind utility class:

| JSONB Key | Token Value | Output Class |
|---|---|---|
| `padding` | `"4"` | `p-4` |
| `paddingX` | `"6"` | `px-6` |
| `fontSize` | `"2xl"` | `text-2xl` |
| `fontWeight` | `"bold"` | `font-bold` |
| `borderRadius` | `"lg"` | `rounded-lg` |
| `textAlign` | `"center"` | `text-center` |
| `display` | `"flex"` | `flex` |

Named tokens (e.g., `"bold"`, `"lg"`) map directly to Tailwind classes. Hex colors are **not** converted to classes — they fall through to inline styles.

### `inlineStylesFromTokens(styles)` → React CSSProperties

Handles values that Tailwind can't resolve from tokens alone:

| Condition | Example Value | Inline Style |
|---|---|---|
| `color` starts with `#` | `"#ffffff"` | `{ color: "#ffffff" }` |
| `backgroundColor` starts with `#` | `"#0a0a0a"` | `{ backgroundColor: "#0a0a0a" }` |
| `borderColor` starts with `#` | `"#e5e7eb"` | `{ borderColor: "#e5e7eb" }` |
| `backgroundImage` present | `"url(...)"` | `{ backgroundImage: "url(...)" }` |

### Combined output example

```tsx
// Input styles from JSONB:
{ padding: "4", backgroundColor: "#0a0a0a", fontSize: "2xl" }

// classesFromStyles → "p-4 text-2xl"
// inlineStylesFromTokens → { backgroundColor: "#0a0a0a" }

// Rendered:
<section className="p-4 text-2xl" style={{ backgroundColor: "#0a0a0a" }}>
```

## Framework Notes

### Runtime

Both apps use **Deno** with **Fresh** (the Deno web framework) and **Preact** for rendering. Vite is configured as the bundler with React-compatible aliases:

```ts
// vite.config.ts (simplified)
resolve: {
  alias: {
    "react": "preact/compat",
    "react-dom": "preact/compat",
  }
}
```

### Vite Aliases

Package imports are aliased through Vite so that `@hi/website` resolves to the local package source:

```ts
resolve: {
  alias: {
    "@hi/types": "../../packages/types/src/index.ts",
    "@hi/utils": "../../packages/utils/src/index.ts",
    "@hi/database": "../../packages/database/src/index.ts",
    "@hi/api": "../../packages/api/src/index.ts",
    "@hi/editor": "../../packages/editor/src/index.ts",
    "@hi/website": "../../packages/website/src/index.ts",
  }
}
```

### Monorepo Tooling

- **pnpm workspaces** manage package linking
- **Turborepo** orchestrates build/dev pipelines across packages
- **Drizzle ORM** generates SQL migrations from the TypeScript schema
