import React from "react";
import { useEditorStore } from "../../stores";
import { useEditorContext } from "../../lib/context";
import { Copy, Trash2 } from "lucide-react";
import { IconBtn, CompactInput, Label, Btn, BtnGroup, SectionLabel } from "./primitives";
import { ContentField } from "./content-field";
import { StyleGroup } from "./style-group";
import { derivePath, slugify } from "../../lib/paths";

export function RightPanel() {
  const selectedElementId = useEditorStore((s) => s.selectedElementId);
  const elements = useEditorStore((s) => s.elements);
  const activePageId = useEditorStore((s) => s.activePageId);
  const pages = useEditorStore((s) => s.pages);
  const updatePageLocal = useEditorStore((s) => s.updatePageLocal);
  const { schema, actions } = useEditorContext();

  const selected = elements.find((e) => e.id === selectedElementId);
  const activePage = pages.find((p) => p.id === activePageId);

  if (!selected) {
    return (
      <div className="w-[240px] h-full flex flex-col bg-black/80 backdrop-blur-xl relative">
        {activePage ? (
          <>
            <SectionLabel>Page</SectionLabel>
            <div className="px-3 pb-2 space-y-3">
              <CompactInput label="Title" value={activePage.data.title} onChange={(v) => updatePageLocal(activePage.id, { data: { title: v } })} />
              <CompactInput label="Slug" value={activePage.slug} onChange={(v) => {
                const s = slugify(v);
                updatePageLocal(activePage.id, { slug: s, data: { path: derivePath(s, activePage.data.parentId, pages) } });
              }} />
              <div>
                <Label>Status</Label>
                <BtnGroup>
                  {(["draft", "published"] as const).map((s) => (
                    <Btn key={s} active={activePage.data.status === s} onClick={() => updatePageLocal(activePage.id, { data: { status: s } })}>
                      {s}
                    </Btn>
                  ))}
                </BtnGroup>
              </div>
            </div>
          </>
        ) : (
          <div className="px-3 py-8 text-[10px] text-white/20 text-center">Select a page</div>
        )}
      </div>
    );
  }

  const typeConfig = schema.elementTypes.find((t) => t.type === selected.type);
  const updateData = (key: string, value: unknown) => actions.updateElementData(selected.id, { ...selected.data, [key]: value });
  const updateStyle = (key: string, value: string) => actions.updateElementStyles(selected.id, { ...selected.styles, [key]: value || undefined });

  return (
    <div className="w-[240px] h-full flex flex-col bg-black/80 backdrop-blur-xl relative">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06]">
        <span className="text-[11px] font-semibold capitalize text-white/80">{typeConfig?.label ?? selected.type}</span>
        <div className="flex items-center gap-0.5">
          <IconBtn onClick={() => actions.duplicateElement(selected.id)} title="Duplicate" hoverColor="editor-ring">
            <Copy className="h-3 w-3" />
          </IconBtn>
          <IconBtn onClick={() => actions.deleteElement(selected.id)} title="Delete" hoverColor="destructive">
            <Trash2 className="h-3 w-3" />
          </IconBtn>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto editor-scroll">
        {typeConfig && typeConfig.fields.length > 0 && (
          <div className="border-b border-white/[0.06]">
            <SectionLabel>Content</SectionLabel>
            <div className="px-3 pb-3 space-y-2">
              {typeConfig.fields.map((f) => (
                <ContentField key={f.name} field={f} data={selected.data} updateData={updateData} />
              ))}
            </div>
          </div>
        )}

        {Object.entries(schema.styleGroups)
          .filter(([k]) => !typeConfig?.styleGroups || typeConfig.styleGroups.includes(k))
          .map(([k, group]) => (
            <StyleGroup key={k} group={group} styles={selected.styles} updateStyle={updateStyle} />
          ))}
      </div>
    </div>
  );
}
