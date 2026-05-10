import { defineStyleGroup, styleField } from "@wb/editor";
import { OPACITY, OVERFLOW } from "../tokens";

export const effects = defineStyleGroup({
  label: "Effects",
  fields: [
    styleField({ name: "opacity", label: "Opacity", options: OPACITY }),
    styleField({ name: "overflow", label: "Overflow", options: OVERFLOW }),
  ],
});
