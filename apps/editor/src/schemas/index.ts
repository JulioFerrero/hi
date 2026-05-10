import type { EditorSchema } from "@wb/editor";
import { elements } from "./elements";
import { spacing } from "./styles/spacing";
import { sizing } from "./styles/sizing";
import { typography } from "./styles/typography";
import { background } from "./styles/background";
import { layout } from "./styles/layout";
import { border } from "./styles/border";
import { effects } from "./styles/effects";

export const schema: EditorSchema = {
  elementTypes: elements,
  styleGroups: {
    spacing,
    sizing,
    typography,
    background,
    layout,
    border,
    effects,
  },
};
