import React from "react";
import type { ComponentType } from "react";
import type { ElementProps } from "../lib/types";

const lazy = (load: () => Promise<Record<string, ComponentType<ElementProps>>>, name: string) =>
  React.lazy(() => load().then((m) => ({ default: m[name]! })));

export const COMPONENT_REGISTRY: Record<string, React.LazyExoticComponent<ComponentType<ElementProps>>> = {
  section: lazy(() => import("./section"), "Section"),
  row: lazy(() => import("./row"), "Row"),
  column: lazy(() => import("./column"), "Column"),
  grid: lazy(() => import("./grid"), "Grid"),
  heading: lazy(() => import("./heading"), "Heading"),
  text: lazy(() => import("./text"), "Text"),
  image: lazy(() => import("./image"), "Image"),
  button: lazy(() => import("./button"), "Button"),
  link: lazy(() => import("./link"), "Link"),
  spacer: lazy(() => import("./spacer"), "Spacer"),
  divider: lazy(() => import("./divider"), "Divider"),
  video: lazy(() => import("./video"), "Video"),
  html: lazy(() => import("./html"), "Html"),
};

export function hasComponent(type: string): boolean {
  return type in COMPONENT_REGISTRY;
}
