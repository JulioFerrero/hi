import type { StyleFieldConfig } from "../../types";
import { Label, IconBtnGroup, inputBase } from "./primitives";
import { ICON_MAP } from "./icon-configs";
import { getVal } from "./utils";
import { GenericStyleField } from "./generic-style-field";

export function EffectsFields({ fields, styles, updateStyle }: {
  fields: StyleFieldConfig[]; styles: Record<string, unknown>; updateStyle: (k: string, v: string) => void;
}) {
  return (
    <>
      {fields.map((f) => {
        const val = getVal(styles, f.name);

        if (f.name === "overflow") {
          const icons = ICON_MAP[f.name];
          if (icons) return (
            <IconBtnGroup key={f.name} label={f.label ?? f.name} icons={icons} value={val} onChange={(v) => updateStyle(f.name, v)} />
          );
        }

        if (f.name === "opacity") {
          return (
            <div key={f.name}>
              <Label>{f.label ?? f.name}</Label>
              <input type="text" value={val} onChange={(e) => updateStyle(f.name, e.target.value)}
                placeholder="—" className={inputBase} />
            </div>
          );
        }

        return <GenericStyleField key={f.name} field={f} styles={styles} updateStyle={updateStyle} />;
      })}
    </>
  );
}
