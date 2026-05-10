"use client";

import { useEditorStore } from "@/stores";
import { useEditorActions } from "@/lib/editor-actions";
import { Input } from "@wb/ui/input";
import { Button } from "@wb/ui/button";
import { Separator } from "@wb/ui/separator";
import { Trash2, Copy } from "lucide-react";
import { HEADING_TAGS, STYLE_GROUPS } from "@/lib/element-config";
import type { RenderElement } from "@wb/website";
import React, { useCallback } from "react";

function derivePath(slug: string, parentId: string | undefined, pages: { id: string; slug: string; data: { path: string; parentId?: string } }[]): string {
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
  const actions = useEditorActions();
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
          <ContentSection element={selected} updateData={updateData} updateStyles={updateStyle} />
          <Separator />
          {Object.entries(STYLE_GROUPS).map(([groupKey, group]) => (
            <React.Fragment key={groupKey}>
              <StyleGroupSection group={group} styles={selected.styles} updateStyle={updateStyle} />
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentSection({
  element,
  updateData,
  updateStyles,
}: {
  element: RenderElement;
  updateData: (key: string, value: unknown) => void;
  updateStyles: (key: string, value: string) => void;
}) {
  const { type, data } = element;
  const handleInput = (key: string, value: string) => updateData(key, value);

  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase text-gray-400">Content</h4>
      <div className="space-y-2">
        {(type === "heading" || type === "text" || type === "button" || type === "link" || type === "html") && (
          <>
            {type === "heading" && (
              <div>
                <label className="text-xs text-gray-500">Tag</label>
                <div className="mt-1 flex gap-1">
                  {HEADING_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => updateData("tagName", tag)}
                      className={`rounded px-2 py-1 text-xs ${
                        (data.tagName ?? "h2") === tag
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div>
              <label className="text-xs text-gray-500">Text</label>
              <textarea
                value={typeof data.content === "string" ? data.content : ""}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInput("content", e.target.value)}
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        )}

        {(type === "button" || type === "link") && (
          <div>
            <label className="text-xs text-gray-500">Link URL</label>
            <input
              type="text"
              value={typeof data.href === "string" ? data.href : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput("href", e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {type === "image" && (
          <>
            <div>
              <label className="text-xs text-gray-500">Image URL</label>
              <input
                type="text"
                value={typeof data.src === "string" ? data.src : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput("src", e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500">Alt text</label>
              <input
                type="text"
                value={typeof data.alt === "string" ? data.alt : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput("alt", e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </>
        )}

        {type === "video" && (
          <div>
            <label className="text-xs text-gray-500">Video URL</label>
            <input
              type="text"
              value={typeof data.src === "string" ? data.src : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput("src", e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {type === "grid" && (
          <div>
            <label className="text-xs text-gray-500">Columns</label>
            <div className="mt-1 flex gap-1">
              {["1", "2", "3", "4"].map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    updateStyles("gridTemplateColumns", `repeat(${n}, 1fr)`);
                  }}
                  className={`rounded px-3 py-1 text-xs ${
                    element.styles.gridTemplateColumns?.includes(n)
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StyleGroupSection({
  group,
  styles,
  updateStyle,
}: {
  group: { label: string; fields: string[] };
  styles: Record<string, unknown>;
  updateStyle: (key: string, value: string) => void;
}) {
  const hasValues = group.fields.some((f) => styles[f]);
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
            <div key={field}>
              <label className="text-[11px] text-gray-500">{field}</label>
              <input
                type="text"
                value={typeof styles[field] === "string" ? String(styles[field]) : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateStyle(field, e.target.value)}
                placeholder={field.includes("color") ? "#000000" : undefined}
                className="mt-0.5 w-full rounded border border-gray-200 px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
