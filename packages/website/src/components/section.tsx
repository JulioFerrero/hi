import React from "react";
import type { ElementProps } from "../lib/types";
export function Section({ element, className, style, children, attrs }: ElementProps) {
  return <section {...attrs} className={className} style={style}>{children}</section>;
}
