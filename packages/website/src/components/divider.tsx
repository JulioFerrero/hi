import React from "react";
import type { ElementProps } from "../lib/types";
export function Divider({ element, className, style, attrs }: ElementProps) {
  return <hr {...attrs} className={className} style={style} />;
}
