import React from "react";
import { RenderPage } from "@hi/render";
import { COMPONENT_REGISTRY } from "./components";

function PageRendererWrapper(props: { content: import("@hi/render").RenderElement[] }) {
  return React.createElement(RenderPage, { content: props.content, renderer: COMPONENT_REGISTRY });
}

export { PageRendererWrapper as PageRenderer };
export { classesFromStyles, inlineStylesFromTokens } from "@hi/render";
export type { RenderElement, ElementProps } from "@hi/render";
