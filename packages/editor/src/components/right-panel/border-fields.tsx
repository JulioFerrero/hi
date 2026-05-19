import type { StyleFieldConfig } from "../../types";
import { Label, Btn, BtnGroup, IconBtnGroup, ColorField } from "./primitives";
import { ICON_MAP } from "./icon-configs";
import { getVal } from "./utils";
import { GenericStyleField } from "./generic-style-field";

export function BorderFields({ fields, styles, updateStyle }: {
  fields: StyleFieldConfig[]; styles: Record<string, unknown>; updateStyle: (k: string, v: string) => void;
}) {
  return (
    <>
      {fields.map((f) => {
        const val = getVal(styles, f.name);

        if (f.name === "borderRadius") {
          const icons = ICON_MAP[f.name];
          if (icons) return (
            <IconBtnGroup key={f.name} label={f.label ?? f.name} icons={icons} value={val} onChange={(v) => updateStyle(f.name, v)} />
          );
        }

        if (f.name === "borderWidth") {
          return (
            <div key={f.name}>
              <Label>{f.label ?? f.name}</Label>
              <BtnGroup>
                <Btn active={!val} onClick={() => updateStyle(f.name, "")}>—</Btn>
                {f.options?.map((opt) => (
                  <Btn key={opt} active={val === opt} onClick={() => updateStyle(f.name, opt)}>
                    {opt}
                  </Btn>
                ))}
              </BtnGroup>
            </div>
          );
        }

        if (f.name === "borderStyle") {
          const icons = ICON_MAP[f.name];
          if (icons) return (
            <IconBtnGroup key={f.name} label={f.label ?? f.name} icons={icons} value={val} onChange={(v) => updateStyle(f.name, v)} />
          );
        }

        if (f.type === "color") {
          return <ColorField key={f.name} label={f.label ?? f.name} value={val} onChange={(v) => updateStyle(f.name, v)} />;
        }

        return <GenericStyleField key={f.name} field={f} styles={styles} updateStyle={updateStyle} />;
      })}
    </>
  );
}
