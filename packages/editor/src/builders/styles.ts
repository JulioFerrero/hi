import type { StyleGroupConfig, StyleFieldConfig } from "../types";

export function defineStyleGroup(config: StyleGroupConfig): StyleGroupConfig {
  return config;
}

type StyleFieldInput = {
  name: string;
  label?: string;
  type?: StyleFieldConfig["type"];
  options?: string[];
  placeholder?: string;
};

export function styleField(opts: StyleFieldInput): StyleFieldConfig {
  return { type: "select", ...opts };
}
