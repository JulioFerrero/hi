import React from "react";
import type { ElementProps } from "../lib/types";
export function Spacer({ element, className, style, attrs }: ElementProps) {
  return <div {...attrs} className={className} style={style} />;
}
