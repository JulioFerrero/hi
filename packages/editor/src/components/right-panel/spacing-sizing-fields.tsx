import type { StyleFieldConfig } from "../../types";
import { Label, inputBase } from "./primitives";
import { getVal } from "./utils";

export function SpacingFields({ fields, styles, updateStyle }: {
  fields: StyleFieldConfig[]; styles: Record<string, unknown>; updateStyle: (k: string, v: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {fields.map((f) => (
        <div key={f.name}>
          <Label>{f.label ?? f.name}</Label>
          <input type="text" value={getVal(styles, f.name)} onChange={(e) => updateStyle(f.name, e.target.value)}
            placeholder="—" className={inputBase} />
        </div>
      ))}
    </div>
  );
}

export function SizingFields({ fields, styles, updateStyle }: {
  fields: StyleFieldConfig[]; styles: Record<string, unknown>; updateStyle: (k: string, v: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {fields.map((f) => (
        <div key={f.name}>
          <Label>{f.label ?? f.name}</Label>
          <input type="text" value={getVal(styles, f.name)} onChange={(e) => updateStyle(f.name, e.target.value)}
            placeholder="—" className={inputBase} />
        </div>
      ))}
    </div>
  );
}
