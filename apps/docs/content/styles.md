---
title: Styles
description: How styles are stored as JSONB with Tailwind tokens, resolved at render time, and configured in the editor.
order: 4
category: Building
---

## Style Storage Format

Element styles are stored as a JSONB column in PostgreSQL. Keys are camelCase CSS property names; values are **Tailwind token strings** or **hex colors**:

```json
{
  "padding": "4",
  "paddingX": "6",
  "backgroundColor": "#0a0a0a",
  "fontSize": "2xl",
  "fontWeight": "bold",
  "color": "#ffffff",
  "borderRadius": "lg",
  "maxWidth": "3xl",
  "textAlign": "center"
}
```

This format gives you Tailwind's design system constraints while keeping the data portable and queryable.

## Style Resolution Functions

Two functions from `@hi/website` convert the JSONB style object into CSS at render time:

### `classesFromStyles(styles)`

Returns a string of Tailwind utility classes from named token values:

```ts
import { classesFromStyles } from "@hi/website";

const styles = { padding: "4", fontSize: "2xl", fontWeight: "bold", borderRadius: "lg" };
classesFromStyles(styles);
// → "p-4 text-2xl font-bold rounded-lg"
```

**Hex colors are excluded** from class output — they are handled by `inlineStylesFromTokens` instead.

### `inlineStylesFromTokens(styles)`

Returns a `React.CSSProperties` object for values that can't be Tailwind classes:

```ts
import { inlineStylesFromTokens } from "@hi/website";

const styles = { backgroundColor: "#0a0a0a", color: "#ffffff", backgroundImage: "url(/bg.jpg)" };
inlineStylesFromTokens(styles);
// → { backgroundColor: "#0a0a0a", color: "#ffffff", backgroundImage: "url(/bg.jpg)" }
```

### Full mapping

| Style Key | Token Example | Class Output | Inline Style |
|---|---|---|---|
| `padding` | `"4"` | `p-4` | — |
| `paddingX` | `"6"` | `px-6` | — |
| `paddingY` | `"2"` | `py-2` | — |
| `margin` | `"4"` | `m-4` | — |
| `marginX` | `"auto"` | `mx-auto` | — |
| `marginY` | `"6"` | `my-6` | — |
| `width` | `"full"` | `w-full` | — |
| `height` | `"10"` | `h-10` | — |
| `minHeight` | `"screen"` | `min-h-screen` | — |
| `maxWidth` | `"3xl"` | `max-w-3xl` | — |
| `fontSize` | `"2xl"` | `text-2xl` | — |
| `fontWeight` | `"bold"` | `font-bold` | — |
| `fontFamily` | `"sans"` | `font-sans` | — |
| `lineHeight` | `"relaxed"` | `leading-relaxed` | — |
| `letterSpacing` | `"tight"` | `tracking-tight` | — |
| `textAlign` | `"center"` | `text-center` | — |
| `color` | `"gray-600"` | `text-gray-600` | — |
| `color` | `"#ffffff"` | — | `{ color: "#ffffff" }` |
| `backgroundColor` | `"gray-100"` | `bg-gray-100` | — |
| `backgroundColor` | `"#0a0a0a"` | — | `{ backgroundColor: "#0a0a0a" }` |
| `display` | `"flex"` | `flex` | — |
| `flexDirection` | `"col"` | `flex-col` | — |
| `flexWrap` | `"wrap"` | `flex-wrap` | — |
| `justifyContent` | `"center"` | `justify-center` | — |
| `alignItems` | `"center"` | `items-center` | — |
| `gap` | `"6"` | `gap-6` | — |
| `gridTemplateColumns` | `"3"` | `grid-cols-3` | — |
| `borderRadius` | `"lg"` | `rounded-lg` | — |
| `borderWidth` | `"1"` | `border` | — |
| `borderWidth` | `"2"` | `border-2` | — |
| `borderColor` | `"gray-200"` | `border-gray-200` | — |
| `borderColor` | `"#e5e7eb"` | — | `{ borderColor: "#e5e7eb" }` |
| `borderStyle` | `"solid"` | — (no class) | — |
| `opacity` | `"50"` | `opacity-50` | — |
| `overflow` | `"hidden"` | `overflow-hidden` | — |
| `backgroundImage` | `"url(...)"` | — | `{ backgroundImage: "url(...)" }` |
| `backgroundSize` | `"cover"` | `bg-cover` | — |
| `backgroundPosition` | `"center"` | `bg-center` | — |
| `objectFit` | `"cover"` | `object-cover` | — |

## Style Groups

Style groups organize related fields in the editor's style panel. Each group has a label and an array of `StyleFieldConfig` entries.

| Group | Label | Fields |
|---|---|---|
| `spacing` | Spacing | `padding`, `paddingX`, `paddingY`, `margin`, `marginX`, `marginY` |
| `sizing` | Size | `width`, `height`, `minHeight`, `maxWidth` |
| `typography` | Typography | `fontSize`, `fontWeight`, `fontFamily`, `lineHeight`, `letterSpacing`, `textAlign`, `color` |
| `layout` | Layout | `display`, `flexDirection`, `flexWrap`, `justifyContent`, `alignItems`, `gap`, `gridTemplateColumns` |
| `background` | Background | `backgroundColor`, `backgroundImage`, `backgroundSize`, `backgroundPosition` |
| `border` | Border | `borderRadius`, `borderWidth`, `borderColor`, `borderStyle` |
| `effects` | Effects | `opacity`, `overflow` |

## StyleFieldConfig

Each field in a style group is defined by a `StyleFieldConfig`:

```ts
interface StyleFieldConfig {
  name: string;
  label?: string;
  type: "select" | "color" | "text";
  options?: string[];
  placeholder?: string;
}
```

| Field Type | Description | Example |
|---|---|---|
| `select` | Dropdown with predefined token options | Font size: `xs`, `sm`, `base`, `lg`, ... |
| `color` | Color picker input | `#0a0a0a` or Tailwind name like `gray-900` |
| `text` | Free-form text input | `url(...)` for background images |

## Available Token Values

### Spacing

Used by: `padding`, `paddingX`, `paddingY`, `margin`, `marginX`, `marginY`, `gap`

```
0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, auto
```

### Width

Used by: `width`

```
0, auto, full, screen, 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5,
1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96
```

### Height

Used by: `height`

```
0, auto, full, screen, 1/2, 1/3, 2/3,
1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96
```

### Min Height

Used by: `minHeight`

```
0, auto, full, screen,
1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96
```

### Max Width

Used by: `maxWidth`

```
0, none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, full, prose, screen
```

### Font Size

Used by: `fontSize`

```
xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
```

### Font Weight

Used by: `fontWeight`

```
thin, extralight, light, normal, medium, semibold, bold, extrabold, black
```

### Font Family

Used by: `fontFamily`

```
sans, serif, mono
```

### Line Height

Used by: `lineHeight`

```
none, tight, snug, normal, relaxed, loose
```

### Letter Spacing

Used by: `letterSpacing`

```
tighter, tight, normal, wide, wider, widest
```

### Text Align

Used by: `textAlign`

```
left, center, right, justify
```

### Display

Used by: `display`

```
block, inline-block, inline, flex, inline-flex, grid, inline-grid, hidden
```

### Flex Direction

Used by: `flexDirection`

```
row, row-reverse, col, col-reverse
```

### Flex Wrap

Used by: `flexWrap`

```
wrap, nowrap, reverse
```

### Justify Content

Used by: `justifyContent`

```
start, end, center, between, around, evenly
```

### Align Items

Used by: `alignItems`

```
start, end, center, stretch, baseline
```

### Grid Columns

Used by: `gridTemplateColumns`

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
```

### Border Radius

Used by: `borderRadius`

```
none, sm, md, lg, xl, 2xl, 3xl, full
```

### Border Width

Used by: `borderWidth`

```
0, 1, 2, 4, 8
```

### Border Style

Used by: `borderStyle`

```
solid, dashed, dotted, double, none
```

### Opacity

Used by: `opacity`

```
0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100
```

### Overflow

Used by: `overflow`

```
auto, hidden, visible, scroll
```

### Background Size

Used by: `backgroundSize`

```
auto, cover, contain
```

### Background Position

Used by: `backgroundPosition`

```
center, top, bottom, left, right, left-top, left-bottom, right-top, right-bottom
```

### Object Fit

Used by: `objectFit`

```
contain, cover, fill, none, scale-down
```

## Defining Custom Style Groups

Use `defineStyleGroup` and `styleField` from `@hi/editor`:

```ts
import { defineStyleGroup, styleField } from "@hi/editor";

export const shadow = defineStyleGroup({
  label: "Shadow",
  fields: [
    styleField({ name: "boxShadow", label: "Box Shadow", type: "text", placeholder: "0 4px 6px rgba(0,0,0,0.1)" }),
  ],
});
```

Then include the group name in an element's `styleGroups` array:

```ts
defineContainer({
  type: "card",
  label: "Card",
  icon: Box,
  styleGroups: ["spacing", "sizing", "background", "border", "effects", "shadow"],
});
```

And register the group in the schema object alongside the built-in groups:

```ts
import { spacing, sizing, typography, background, layout, border, effects } from "@hi/website/elements";
import { shadow } from "./my-groups/shadow";

const mySchema: EditorSchema = {
  elementTypes: [...elements],
  styleGroups: { spacing, sizing, typography, background, layout, border, effects, shadow },
};
```
