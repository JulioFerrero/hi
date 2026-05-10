import { defineStyleGroup, styleField } from "@wb/editor";
import { WIDTH, HEIGHT, MAX_WIDTH, MIN_HEIGHT } from "../tokens";

export const sizing = defineStyleGroup({
  label: "Size",
  fields: [
    styleField({ name: "width", label: "Width", options: WIDTH }),
    styleField({ name: "height", label: "Height", options: HEIGHT }),
    styleField({ name: "minHeight", label: "Min Height", options: MIN_HEIGHT }),
    styleField({ name: "maxWidth", label: "Max Width", options: MAX_WIDTH }),
  ],
});
