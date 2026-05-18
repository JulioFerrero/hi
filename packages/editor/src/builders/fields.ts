import type { FieldConfig } from "../types";

type FieldOptions = {
  name: string;
  label: string;
} & Record<string, unknown>;

export function createField(
  baseType: FieldConfig["type"],
  extra?: (opts: FieldOptions) => Partial<FieldConfig>,
): (opts: FieldOptions) => FieldConfig {
  return (opts: FieldOptions) => {
    const { name, label, ...rest } = opts;
    const base: FieldConfig = { name, label, type: baseType };
    if (extra) {
      Object.assign(base, extra(opts));
    }
    for (const [key, value] of Object.entries(rest)) {
      if (value !== undefined && !(key in base)) {
        (base as unknown as Record<string, unknown>)[key] = value;
      }
    }
    return base;
  };
}

export const textField = createField("text");
export const textareaField = createField("textarea");
export const selectField = createField("select", (opts) => ({
  options: opts.options as string[],
}));
export const urlField = createField("url");
export const numberField = createField("number");
