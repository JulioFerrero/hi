import { defineStyleGroup, styleField } from "@wb/editor";
import { SPACING } from "../tokens";

export const spacing = defineStyleGroup({
  label: "Spacing",
  fields: [
    styleField({ name: "padding", label: "Padding", options: SPACING }),
    styleField({ name: "paddingX", label: "Padding X", options: SPACING }),
    styleField({ name: "paddingY", label: "Padding Y", options: SPACING }),
    styleField({ name: "margin", label: "Margin", options: SPACING }),
    styleField({ name: "marginX", label: "Margin X", options: SPACING }),
    styleField({ name: "marginY", label: "Margin Y", options: SPACING }),
  ],
});
