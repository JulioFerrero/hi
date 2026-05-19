import type { StyleFieldConfig } from "../../types";
import { Label, Btn, BtnGroup, ColorField, IconBtnGroup, inputBase } from "./primitives";
import { ICON_MAP } from "./icon-configs";
import { getVal } from "./utils";

export function GenericStyleField({ field, styles, updateStyle }: {
  field: StyleFieldConfig; styles: Record<string, unknown>; updateStyle: (k: string, v: string) => void;
}) {
  const val = getVal(styles, field.name);

  if (field.type === "color") {
    return <ColorField label={field.label ?? field.name} value={val} onChange={(v) => updateStyle(field.name, v)} />;
  }

  const icons = ICON_MAP[field.name];
  if (icons) {
    return <IconBtnGroup label={field.label ?? field.name} icons={icons} value={val} onChange={(v) => updateStyle(field.name, v)} />;
  }

  if (field.options && field.options.length <= 8) {
    return (
      <div>
        <Label>{field.label ?? field.name}</Label>
        <BtnGroup>
          <Btn active={!val} onClick={() => updateStyle(field.name, "")}>—</Btn>
          {field.options.map((opt) => (
            <Btn key={opt} active={val === opt} onClick={() => updateStyle(field.name, opt)}>
              {opt}
            </Btn>
          ))}
        </BtnGroup>
      </div>
    );
  }

  return (
    <div>
      <Label>{field.label ?? field.name}</Label>
      <input type="text" value={val} onChange={(e) => updateStyle(field.name, e.target.value)}
        placeholder={field.placeholder ?? "—"} className={inputBase} />
    </div>
  );
}
