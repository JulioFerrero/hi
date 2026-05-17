import { defineStyleGroup, styleField } from "@hi/editor";
import { OPACITY, OVERFLOW } from "../tokens";

export const effects = defineStyleGroup({
  label: "Effects",
  fields: [
    styleField({ name: "opacity", label: "Opacity", options: OPACITY }),
    styleField({ name: "overflow", label: "Overflow", options: OVERFLOW }),
  ],
});
