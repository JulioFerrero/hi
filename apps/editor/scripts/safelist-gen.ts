import {
  SPACING, WIDTH, HEIGHT, MAX_WIDTH, MIN_HEIGHT,
  FONT_SIZE, FONT_WEIGHT, FONT_FAMILY, LINE_HEIGHT, LETTER_SPACING, TEXT_ALIGN,
  DISPLAY, FLEX_DIRECTION, FLEX_WRAP, JUSTIFY_CONTENT, ALIGN_ITEMS,
  BORDER_RADIUS, BORDER_WIDTH, OPACITY, OVERFLOW,
  BACKGROUND_SIZE, BACKGROUND_POSITION, OBJECT_FIT, GAP, GRID_COLUMNS,
} from "../src/schemas/tokens";

const lines: string[] = [];

const add = (...classes: string[]) => lines.push(...classes);

for (const v of SPACING) {
  add(`p-${v}`, `px-${v}`, `py-${v}`, `m-${v}`, `mx-${v}`, `my-${v}`, `gap-${v}`);
}
for (const v of WIDTH) add(`w-${v}`);
for (const v of HEIGHT) add(`h-${v}`);
for (const v of MAX_WIDTH) add(`max-w-${v}`);
for (const v of MIN_HEIGHT) add(`min-h-${v}`);
for (const v of FONT_SIZE) add(`text-${v}`);
for (const v of FONT_WEIGHT) add(`font-${v}`);
for (const v of FONT_FAMILY) add(`font-${v}`);
for (const v of LINE_HEIGHT) add(`leading-${v}`);
for (const v of LETTER_SPACING) add(`tracking-${v}`);
for (const v of TEXT_ALIGN) add(`text-${v}`);
for (const v of DISPLAY) add(v);
for (const v of FLEX_DIRECTION) add(`flex-${v}`);
add("flex-wrap", "flex-nowrap", "flex-wrap-reverse");
for (const v of JUSTIFY_CONTENT) add(`justify-${v}`);
for (const v of ALIGN_ITEMS) add(`items-${v}`);
for (const v of BORDER_RADIUS) add(`rounded-${v}`);
for (const v of BORDER_WIDTH) add(v === "1" ? "border" : `border-${v}`);
for (const v of OPACITY) add(`opacity-${v}`);
for (const v of OVERFLOW) add(`overflow-${v}`);
for (const v of BACKGROUND_SIZE) add(`bg-${v}`);
for (const v of BACKGROUND_POSITION) add(`bg-${v}`);
for (const v of OBJECT_FIT) add(`object-${v}`);
for (const v of GRID_COLUMNS) add(`grid-cols-${v}`);

// Common arbitrary color patterns used in seed
add(
  "bg-[#0a0a0a]", "bg-[#ffffff]", "bg-[#f9fafb]",
  "text-[#0a0a0a]", "text-[#ffffff]", "text-[#9ca3af]", "text-[#6b7280]", "text-[#374151]", "text-[#2563eb]",
  "border-[#e5e7eb]",
);

const content = `/* eslint-disable */\n// @ts-nocheck\n// Tailwind safelist - generated from tokens\nexport default "${lines.join(" ")}";\n`;
process.stdout.write(content);
