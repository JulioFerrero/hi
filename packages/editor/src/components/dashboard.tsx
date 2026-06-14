"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Input } from "@vitrea/editor-ui/form-primitives";
import { Modal } from "@vitrea/editor-ui/modal";
import { glassStyle } from "@vitrea/editor-ui/glass";
import { Search, Plus, Settings, Trash2, Globe, Feather, Square, Layout, PenLine, Palette, Check, ArrowRight } from "lucide-react";
import { ProfileDropdown } from "./profile-dropdown";
import { ConfirmDialog } from "@vitrea/editor-ui/confirm-dialog";
import { cn } from "@vitrea/utils";
import { navigate } from "../lib/navigate";
import type React from "react";
import type { EditorApi } from "../types";

interface DashboardProps {
  api: EditorApi;
  onSelectSite: (siteId: string) => void;
}

interface Site {
  id: string;
  slug: string;
  data: { name: string; template?: string; previewImage?: string };
  createdAt: string;
}

const templates = [
  { id: "minimal", name: "Studio", Icon: Feather, description: "Clean, white, refined", accent: "bg-stone-100", text: "text-stone-600", preview: "light" },
  { id: "blank", name: "Blank", Icon: Square, description: "Empty canvas, full freedom", accent: "bg-white/[0.04]", text: "text-white/40", preview: "dark" },
  { id: "landing", name: "Landing", Icon: Layout, description: "Hero, features, CTA", accent: "bg-indigo-500/10", text: "text-indigo-300", preview: "indigo" },
  { id: "blog", name: "Blog", Icon: PenLine, description: "Articles, sidebar, posts", accent: "bg-amber-500/10", text: "text-amber-300", preview: "amber" },
  { id: "portfolio", name: "Portfolio", Icon: Palette, description: "Gallery showcase", accent: "bg-emerald-500/10", text: "text-emerald-300", preview: "emerald" },
] as const;

function formatDate(value: string | Date | undefined) {
  if (!value) return "";
  const date = typeof value === "string" ? new Date(value) : value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function TemplateThumb({ preview }: { preview: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.05] bg-[#0f0f0f]">
      {preview === "light" && (
        <div className="absolute inset-0 bg-[#f5f4f2]">
          <div className="absolute left-3 top-3 h-2 w-14 rounded-full bg-[#c4c0ba]" />
          <div className="absolute left-3 top-8 right-3 space-y-2">
            <div className="h-1.5 w-2/3 rounded-full bg-[#ddd9d3]" />
            <div className="h-1.5 w-1/2 rounded-full bg-[#ddd9d3]" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-12 rounded-lg bg-[#e8e6e1]" />
        </div>
      )}
      {preview === "dark" && (
        <div className="absolute inset-0 bg-[#111111]">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
          <div className="absolute left-3 top-3 h-2 w-12 rounded-full bg-white/15" />
          <div className="absolute bottom-3 left-3 right-3 top-12 rounded-lg border border-white/[0.08] bg-white/[0.04]" />
        </div>
      )}
      {preview === "indigo" && (
        <div className="absolute inset-0 bg-[#0d0d14]">
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-indigo-500/20 to-transparent" />
          <div className="absolute left-3 top-3 h-2 w-12 rounded-full bg-indigo-300/30" />
          <div className="absolute bottom-3 left-3 right-3 h-10 rounded-lg bg-indigo-500/15" />
        </div>
      )}
      {preview === "amber" && (
        <div className="absolute inset-0 bg-[#15120c]">
          <div className="absolute left-3 top-3 h-2 w-12 rounded-full bg-amber-300/30" />
          <div className="absolute bottom-3 left-3 right-3 space-y-2">
            <div className="h-8 rounded-lg bg-amber-500/15" />
            <div className="h-8 rounded-lg bg-amber-500/15" />
          </div>
        </div>
      )}
      {preview === "emerald" && (
        <div className="absolute inset-0 bg-[#0c1410]">
          <div className="absolute left-3 top-3 h-2 w-12 rounded-full bg-emerald-300/30" />
          <div className="absolute bottom-3 left-3 right-3 top-12 rounded-lg border border-emerald-500/20 bg-emerald-500/10" />
        </div>
      )}
    </div>
  );
}

export function Dashboard({ api, onSelectSite }: DashboardProps) {
  const [sites, setSites] = useState<Site[]>([]);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [template, setTemplate] = useState("blank");
  const [confirmDelete, setConfirmDelete] = useState<{ id: string; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetch("/sites")
      .then((data) => setSites(data as Site[]))
      .finally(() => setIsLoading(false));
  }, [api]);

  const filteredSites = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sites;
    return sites.filter((s) =>
      s.data.name.toLowerCase().includes(q) || s.slug.toLowerCase().includes(q)
    );
  }, [sites, query]);

  async function handleCreate() {
    if (!newName.trim()) return;
    const slug = newName.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const site = (await api.fetch("/sites", {
      method: "POST",
      body: JSON.stringify({ slug, data: { name: newName.trim(), template } }),
    })) as Site;
    setSites((prev) => [...prev, site]);
    setNewName("");
    setTemplate("blank");
    setDialogOpen(false);
    onSelectSite(site.id);
  }

  function handleDeleteSite(id: string, name: string, e: React.MouseEvent) {
    e.stopPropagation();
    setConfirmDelete({ id, name });
  }

  async function confirmDeleteSite() {
    if (!confirmDelete) return;
    try {
      await api.fetch(`/sites/${confirmDelete.id}`, { method: "DELETE" });
      setSites((prev) => prev.filter((s) => s.id !== confirmDelete.id));
    } catch {
      alert("Failed to delete site");
    }
    setConfirmDelete(null);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.03]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-black">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-gray-900">Vitrea</h1>
              <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">Editor</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/users")}
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-black/[0.04] hover:text-gray-900 sm:inline-flex"
            >
              Users
            </button>
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90 active:scale-[0.98]"
            >
              <Plus className="h-4 w-4" />
              New Site
            </button>
            <ProfileDropdown variant="light" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Title + Search */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Sites</h2>
            <p className="mt-1 text-sm text-gray-500">
              {sites.length === 0 ? "Create your first site to start building." : `${sites.length} site${sites.length === 1 ? "" : "s"}`}
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search sites..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-10 w-full rounded-xl border border-black/[0.08] bg-white pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-black/20 focus:bg-white"
            />
          </div>
        </div>

        {/* Site grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded-3xl border border-black/[0.06] bg-gray-100"
              />
            ))}
          </div>
        ) : filteredSites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-black/[0.06] bg-white px-6 py-24 text-center"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] bg-black/[0.03]">
              <Globe className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              {query ? "No matching sites" : "No sites yet"}
            </h3>
            <p className="mt-1 max-w-xs text-sm text-gray-500">
              {query
                ? "Try a different search term."
                : "Create your first site to start building pages and managing content."}
            </p>
            {!query && (
              <button
                type="button"
                onClick={() => setDialogOpen(true)}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                <Plus className="h-4 w-4" />
                Create Site
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredSites.map((site) => {
                const templateInfo = templates.find((t) => t.id === (site.data.template || "blank")) ?? templates[1];
                return (
                  <motion.div
                    key={site.id}
                    variants={cardVariants}
                    layout
                    layoutId={site.id}
                  >
                    <div
                      onClick={() => onSelectSite(site.id)}
                      className="group h-full cursor-pointer rounded-3xl p-4 transition-all duration-300 hover:scale-[1.01]"
                      style={glassStyle}
                    >
                      <div className="relative aspect-[12/5] overflow-hidden rounded-xl bg-[#0a0a0a]">
                        {site.data.previewImage ? (
                          <img
                            src={site.data.previewImage}
                            alt={`${site.data.name} preview`}
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        ) : (
                          <TemplateThumb preview={templateInfo.preview} />
                        )}
                      </div>

                      <div className="mt-4 flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-base font-semibold text-white">
                            {site.data.name}
                          </h3>
                          <p className="mt-0.5 truncate text-sm text-white/40">/{site.slug}</p>
                        </div>
                        <div className="flex shrink-0 gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); navigate(`/${site.id}/settings`); }}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/[0.08] hover:text-white"
                            title="Settings"
                          >
                            <Settings className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleDeleteSite(site.id, site.data.name, e)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-red-500/10 hover:text-red-400"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-white/[0.04] pt-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                          <templateInfo.Icon className={cn("h-3.5 w-3.5", templateInfo.text)} />
                          {templateInfo.name}
                        </span>
                        <span className="text-xs text-white/30">
                          {formatDate(site.createdAt)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* Create modal */}
      <Modal open={dialogOpen} onOpenChange={setDialogOpen} maxWidth="max-w-xl">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">Create New Site</h2>
          <p className="mt-1 text-sm text-white/40">Choose a name and a starting template.</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">
              Site name
            </label>
            <Input
              placeholder="My website"
              value={newName}
              onChange={setNewName}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            />
          </div>

          <div>
            <label className="mb-3 block text-xs font-medium uppercase tracking-wider text-white/50">
              Start with a template
            </label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {templates.map((t) => {
                const isSelected = template === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTemplate(t.id)}
                    className={cn(
                      "relative flex flex-col items-start gap-3 rounded-2xl border p-3 text-left transition-all duration-200",
                      isSelected
                        ? "border-white/20 bg-white/[0.06]"
                        : "border-white/[0.06] bg-transparent hover:border-white/[0.12] hover:bg-white/[0.03]"
                    )}
                  >
                    <div className={cn("flex h-12 w-full items-center justify-center rounded-xl", t.accent)}>
                      <t.Icon className={cn("h-5 w-5", t.text)} />
                    </div>
                    <div>
                      <p className={cn("text-xs font-semibold", isSelected ? "text-white" : "text-white/70")}>
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-white/30">
                        {t.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <Button
            variant="ghost"
            onClick={() => setDialogOpen(false)}
            className="text-white/60 hover:bg-white/[0.05] hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!newName.trim()}
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 disabled:opacity-40"
          >
            Create Site
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Modal>

      <ConfirmDialog
        open={confirmDelete !== null}
        onOpenChange={(o) => { if (!o) setConfirmDelete(null); }}
        title="Delete Site"
        description={`Are you sure you want to delete "${confirmDelete?.name}"? All pages and content will be permanently removed. This cannot be undone.`}
        confirmLabel="Delete"
        variant="danger"
        onConfirm={confirmDeleteSite}
      />
    </div>
  );
}
