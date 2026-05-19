import type { StyleFieldConfig } from "../../types";
import { Label, Btn, BtnGroup, IconBtnGroup, inputBase } from "./primitives";
import { ICON_MAP } from "./icon-configs";
import { getVal } from "./utils";
import { GenericStyleField } from "./generic-style-field";

export function LayoutFields({ fields, styles, updateStyle }: {
  fields: StyleFieldConfig[]; styles: Record<string, unknown>; updateStyle: (k: string, v: string) => void;
}) {
  return (
    <>
      {fields.map((f) => {
        const icons = ICON_MAP[f.name];
        if (icons) {
          return (
            <IconBtnGroup key={f.name} label={f.label ?? f.name} icons={icons}
              value={getVal(styles, f.name)} onChange={(v) => updateStyle(f.name, v)} />
          );
        }
        if (f.name === "gap") {
          return (
            <div key={f.name}>
              <Label>{f.label ?? f.name}</Label>
              <input type="text" value={getVal(styles, f.name)} onChange={(e) => updateStyle(f.name, e.target.value)}
                placeholder="—" className={inputBase} />
            </div>
          );
        }
        if (f.name === "gridTemplateColumns") {
          return (
            <div key={f.name}>
              <Label>{f.label ?? f.name}</Label>
              <BtnGroup>
                {f.options?.map((opt) => (
                  <Btn key={opt} active={getVal(styles, f.name) === opt} onClick={() => updateStyle(f.name, getVal(styles, f.name) === opt ? "" : opt)}>
                    {opt}
                  </Btn>
                ))}
              </BtnGroup>
            </div>
          );
        }
        return <GenericStyleField key={f.name} field={f} styles={styles} updateStyle={updateStyle} />;
      })}
    </>
  );
}
