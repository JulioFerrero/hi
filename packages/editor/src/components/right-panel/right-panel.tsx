"use client";

import React, { useCallback } from "react";
import { useEditorStore } from "../../stores";
import { useEditorContext } from "../../lib/context";
import type { RenderElement, PageItem, FieldConfig, ElementTypeConfig } from "../../types";
import { Separator } from "@wb/ui/separator";
import { Trash2, Copy } from "lucide-react";

function derivePath(slug: string, parentId: string | undefined, pages: PageItem[]): string {
  if (!parentId) return "/" + slug;
  const parent = pages.find((p) => p.id === parentId);
  if (!parent) return "/" + slug;
  return parent.data.path.replace(/\/$/, "") + "/" + slug;
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

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
      <div className="w-[320px] flex-shrink-0 border-l bg-white flex flex-col overflow-hidden">
        {activePage ? (
          <>
            <div className="border-b p-3">
              <h3 className="text-sm font-semibold">Page Settings</h3>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="space-y-4 p-3">
                <div>
                  <label className="text-xs text-gray-500">Title</label>
                  <input
                    type="text"
                    value={activePage.data.title}
                    onChange={(e) => updatePageLocal(activePage.id, { data: { title: e.target.value } })}
                    className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Slug</label>
                  <input
                    type="text"
                    value={activePage.slug}
                    onChange={(e) => {
                      const newSlug = slugify(e.target.value);
                      const newPath = derivePath(newSlug, activePage.data.parentId, pages);
                      updatePageLocal(activePage.id, { slug: newSlug, data: { path: newPath } });
                    }}
                    className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Path</label>
                  <div className="mt-1 rounded-md border border-gray-100 bg-gray-50 px-2 py-1.5 text-sm text-gray-500">
                    {derivePath(activePage.slug, activePage.data.parentId, pages)}
                  </div>
                  <p className="mt-1 text-[10px] text-gray-400">Auto-derived from slug and parent page</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500">Status</label>
                  <div className="mt-1 flex gap-1">
                    {(["draft", "published"] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => updatePageLocal(activePage.id, { data: { status: s } })}
                        className={`rounded px-3 py-1 text-xs ${
                          activePage.data.status === s
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <label className="text-xs text-gray-500">SEO Title</label>
                  <input
                    type="text"
                    value={typeof (activePage.data as any).seo?.title === "string" ? (activePage.data as any).seo.title : ""}
                    onChange={(e) => updatePageLocal(activePage.id, { data: { seo: { ...(activePage.data as any).seo, title: e.target.value || undefined } } })}
                    placeholder={activePage.data.title}
                    className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">SEO Description</label>
                  <textarea
                    value={typeof (activePage.data as any).seo?.description === "string" ? (activePage.data as any).seo.description : ""}
                    onChange={(e) => updatePageLocal(activePage.id, { data: { seo: { ...(activePage.data as any).seo, description: e.target.value || undefined } } })}
                    rows={2}
                    className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="p-4">
            <p className="text-sm text-gray-400">Select a page to view its settings</p>
          </div>
        )}
      </div>
    );
  }

  const typeConfig = schema.elementTypes.find((t) => t.type === selected.type);

  const updateData = (key: string, value: unknown) => {
    const newData = { ...selected.data, [key]: value };
    actions.updateElementData(selected.id, newData);
  };

  const updateStyle = (key: string, value: string) => {
    const newStyles = { ...selected.styles, [key]: value || undefined };
    actions.updateElementStyles(selected.id, newStyles);
  };

  return (
    <div className="w-[320px] flex-shrink-0 border-l bg-white flex flex-col overflow-hidden">
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold capitalize">{selected.type}</h3>
          <div className="flex items-center gap-1">
            <button
              onClick={() => actions.duplicateElement(selected.id)}
              className="p-1 text-gray-400 hover:text-blue-500"
              title="Duplicate"
            >
              <Copy className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => actions.deleteElement(selected.id)}
              className="p-1 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="space-y-4 p-3">
          {typeConfig && typeConfig.fields.length > 0 && (
            <>
              <DynamicContentSection
                fields={typeConfig.fields}
                data={selected.data}
                updateData={updateData}
              />
              <Separator />
            </>
          )}
          {Object.entries(schema.styleGroups)
            .filter(([groupKey]) => !typeConfig?.styleGroups || typeConfig.styleGroups.includes(groupKey))
            .map(([groupKey, group]) => (
            <React.Fragment key={groupKey}>
              <StyleGroupSection
                group={group}
                styles={selected.styles}
                updateStyle={updateStyle}
              />
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function DynamicContentSection({
  fields,
  data,
  updateData,
}: {
  fields: FieldConfig[];
  data: Record<string, unknown>;
  updateData: (key: string, value: unknown) => void;
}) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase text-gray-400">Content</h4>
      <div className="space-y-2">
        {fields.map((field) => (
          <FieldRenderer key={field.name} field={field} data={data} updateData={updateData} />
        ))}
      </div>
    </div>
  );
}

function FieldRenderer({
  field,
  data,
  updateData,
}: {
  field: FieldConfig;
  data: Record<string, unknown>;
  updateData: (key: string, value: unknown) => void;
}) {
  const currentValue = data[field.name];

  if (field.type === "select" && field.options) {
    return (
      <div>
        <label className="text-xs text-gray-500">{field.label}</label>
        <div className="mt-1 flex gap-1">
          {field.options.map((opt) => (
            <button
              key={opt}
              onClick={() => updateData(field.name, opt)}
              className={`rounded px-2 py-1 text-xs ${
                (currentValue ?? field.options![0]) === opt
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div>
        <label className="text-xs text-gray-500">{field.label}</label>
        <textarea
          value={typeof currentValue === "string" ? currentValue : ""}
          onChange={(e) => updateData(field.name, e.target.value)}
          rows={field.rows ?? 3}
          className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }

  if (field.type === "number") {
    return (
      <div>
        <label className="text-xs text-gray-500">{field.label}</label>
        <input
          type="number"
          value={currentValue != null ? String(currentValue) : ""}
          onChange={(e) => updateData(field.name, e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }

  return (
    <div>
      <label className="text-xs text-gray-500">{field.label}</label>
      <input
        type="text"
        value={typeof currentValue === "string" ? currentValue : ""}
        onChange={(e) => updateData(field.name, e.target.value)}
        className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function StyleGroupSection({
  group,
  styles,
  updateStyle,
}: {
  group: { label: string; fields: import("../../types").StyleFieldConfig[] };
  styles: Record<string, unknown>;
  updateStyle: (key: string, value: string) => void;
}) {
  const hasValues = group.fields.some((f) => styles[f.name]);
  const [open, setOpen] = React.useState(hasValues);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-xs font-semibold uppercase text-gray-400"
      >
        {group.label}
        <span className="text-[10px]">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="mt-2 space-y-2">
          {group.fields.map((field) => (
            <StyleFieldRenderer key={field.name} field={field} styles={styles} updateStyle={updateStyle} />
          ))}
        </div>
      )}
    </div>
  );
}

function StyleFieldRenderer({
  field,
  styles,
  updateStyle,
}: {
  field: import("../../types").StyleFieldConfig;
  styles: Record<string, unknown>;
  updateStyle: (key: string, value: string) => void;
}) {
  const currentValue = typeof styles[field.name] === "string" ? String(styles[field.name]) : "";

  if (field.type === "color") {
    return (
      <div>
        <label className="text-[11px] text-gray-500">{field.label ?? field.name}</label>
        <div className="mt-0.5 flex items-center gap-2">
          <input
            type="color"
            value={currentValue || "#000000"}
            onChange={(e) => updateStyle(field.name, e.target.value)}
            className="h-7 w-7 cursor-pointer rounded border border-gray-200 p-0"
          />
          <input
            type="text"
            value={currentValue}
            onChange={(e) => updateStyle(field.name, e.target.value)}
            placeholder={field.placeholder ?? "#000000"}
            className="flex-1 rounded border border-gray-200 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    );
  }

  if (field.type === "text") {
    return (
      <div>
        <label className="text-[11px] text-gray-500">{field.label ?? field.name}</label>
        <input
          type="text"
          value={currentValue}
          onChange={(e) => updateStyle(field.name, e.target.value)}
          placeholder={field.placeholder}
          className="mt-0.5 w-full rounded border border-gray-200 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    );
  }

  if (field.options) {
    return (
      <div>
        <label className="text-[11px] text-gray-500">{field.label ?? field.name}</label>
        <div className="mt-0.5 flex flex-wrap gap-1">
          <button
            onClick={() => updateStyle(field.name, "")}
            className={`rounded px-2 py-0.5 text-xs ${
              !currentValue
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            —
          </button>
          {field.options.map((opt) => (
            <button
              key={opt}
              onClick={() => updateStyle(field.name, opt)}
              className={`rounded px-2 py-0.5 text-xs ${
                currentValue === opt
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <label className="text-[11px] text-gray-500">{field.label ?? field.name}</label>
      <input
        type="text"
        value={currentValue}
        onChange={(e) => updateStyle(field.name, e.target.value)}
        placeholder={field.placeholder}
        className="mt-0.5 w-full rounded border border-gray-200 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}
