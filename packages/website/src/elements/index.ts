import type { EditorSchema, RendererAdapter } from "@hi/editor";
import { PageRenderer } from "../renderer";

import { section } from "./section";
import { row } from "./row";
import { column } from "./column";
import { grid } from "./grid";
import { heading } from "./heading";
import { text } from "./text";
import { image } from "./image";
import { button } from "./button";
import { link } from "./link";
import { divider } from "./divider";
import { spacer } from "./spacer";
import { video } from "./video";
import { html } from "./html";

import { spacing } from "./styles/spacing";
import { sizing } from "./styles/sizing";
import { typography } from "./styles/typography";
import { background } from "./styles/background";
import { layout } from "./styles/layout";
import { border } from "./styles/border";
import { effects } from "./styles/effects";

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
];

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

export const websiteRenderer: RendererAdapter = {
  PageRenderer,
};
