"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@hi/ui/button";
import { Input } from "@hi/ui/input";
import { createApiFetch } from "../lib/api";
import { useEditorStore } from "../stores";
import { cn } from "@hi/utils";
import { ArrowLeft, Trash2, Pencil, Check, X, Upload, Search, Image as ImageIcon, Copy, Link } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@hi/ui/dialog";

const api = createApiFetch();

interface FileEntry {
  id: string;
  siteId: string;
  data: {
    url: string;
    name?: string;
    type?: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  createdAt: string;
}

export function AssetsPage({ onBack }: { onBack: () => void }) {
  const siteId = useEditorStore((s) => s.activeSiteId);
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [deleteModal, setDeleteModal] = useState<string[] | null>(null);
  const [detailFile, setDetailFile] = useState<FileEntry | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function fetchFiles() {
    if (!siteId) { setLoading(false); return; }
    setLoading(true);
    try {
      const res = await api.fetch(`/files?siteId=${encodeURIComponent(siteId)}`);
      setFiles((res as FileEntry[]).reverse());
    } catch {}
    setLoading(false);
  }

  useEffect(() => { fetchFiles(); }, [siteId]);

  const fileTypes = useMemo(() => {
    const types = new Set<string>();
    for (const f of files) {
      const t = f.data.type ?? "other";
      if (t.startsWith("image/")) types.add("image");
      else if (t.startsWith("video/")) types.add("video");
      else types.add("other");
    }
    return [...types];
  }, [files]);

  const filtered = useMemo(() => {
    return files.filter((f) => {
      const name = (f.data.name ?? "").toLowerCase();
      const matchesSearch = !search || name.includes(search.toLowerCase());
      const ft = (f.data.type ?? "").startsWith("image/") ? "image" : (f.data.type ?? "").startsWith("video/") ? "video" : "other";
      const matchesType = !typeFilter || ft === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [files, search, typeFilter]);

  function handleClick(f: FileEntry) {
    if (selected.size > 0) {
      toggleSelect(f.id);
    } else {
      setDetailFile(f);
    }
  }

  function toggleSelect(id: string, e?: React.MouseEvent) {
    e?.stopPropagation();
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(filtered.map((f) => f.id)));
  }

  function deselectAll() {
    setSelected(new Set());
  }

  async function handleUpload(file: File) {
    if (!siteId) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("siteId", siteId);
      formData.append("file", file);
      await api.fetch("/files/upload", { method: "POST", body: formData as unknown as BodyInit });
      fetchFiles();
    } catch {}
    setUploading(false);
  }

  function handleDeleteClick(ids: string[], e?: React.MouseEvent) {
    e?.stopPropagation();
    setDeleteModal(ids);
  }

  function handleBatchDelete() {
    if (selected.size === 0) return;
    setDeleteModal([...selected]);
  }

  async function confirmDelete() {
    if (!deleteModal) return;
    for (const id of deleteModal) {
      try { await api.fetch(`/files/${id}`, { method: "DELETE" }); } catch {}
    }
    setFiles((prev) => prev.filter((f) => !deleteModal.includes(f.id)));
    setSelected((prev) => {
      const next = new Set(prev);
      deleteModal.forEach((id) => next.delete(id));
      return next;
    });
    setDeleteModal(null);
    if (deleteModal.some((id) => id === detailFile?.id)) setDetailFile(null);
  }

  async function handleRename(id: string) {
    if (!editName.trim()) return;
    try {
      await api.fetch(`/files/${id}`, { method: "PATCH", body: JSON.stringify({ data: { name: editName.trim() } }) });
      setFiles((prev) => prev.map((f) => f.id === id ? { ...f, data: { ...f.data, name: editName.trim() } } : f));
      if (detailFile?.id === id) setDetailFile((d) => d ? { ...d, data: { ...d.data, name: editName.trim() } } : null);
      setEditingId(null);
    } catch {}
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function formatType(type?: string) {
    if (!type) return "—";
    if (type.startsWith("image/")) return type.slice(6).toUpperCase();
    return type.split("/")[1]?.toUpperCase() ?? type;
  }

  function formatDate(date: string) {
    try { return new Date(date).toLocaleString(); } catch { return date; }
  }

  function formatSize(type?: string): string {
    if (!type) return "";
    if (type.startsWith("image/")) return type.slice(6).toUpperCase();
    return type.split("/")[1]?.toUpperCase() ?? type;
  }

  const isImage = (type?: string) => type?.startsWith("image/") ?? false;

  return (
    <div className="flex flex-col h-screen bg-[#08080A]">
      <header className="shrink-0 flex h-14 items-center justify-between px-4 border-b border-white/[0.06] bg-[#08080A]/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-white/30 hover:text-white/60 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <span className="h-4 w-px bg-white/[0.08]" />
          <h1 className="text-sm font-medium tracking-wide text-white/60">Assets</h1>
          <span className="text-xs text-white/20">{files.length} files</span>
        </div>
        <div className="flex items-center gap-2">
          {selected.size > 0 && (
            <button onClick={handleBatchDelete}
              className="flex items-center gap-1.5 rounded-lg bg-red-500/[0.08] hover:bg-red-500/[0.14] border border-red-500/[0.10] px-3 py-1.5 text-xs text-red-400/80 transition-all">
              <Trash2 className="h-3.5 w-3.5" /> Delete ({selected.size})
            </button>
          )}
          {selected.size > 0 ? (
            <button onClick={deselectAll} className="text-xs text-white/30 hover:text-white/50 px-2">Clear</button>
          ) : (
            <button onClick={selectAll} className="text-xs text-white/30 hover:text-white/50 px-2">Select all</button>
          )}
          <button onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.06] px-3 py-1.5 text-xs text-white/60 hover:text-white/80 transition-all">
            <Upload className="h-3.5 w-3.5" /> Upload
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); e.target.value = ""; }} />
        </div>
      </header>

      <div className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-white/[0.04]">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/20" />
          <Input value={search} onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
            placeholder="Search files..." className="pl-9 h-9 rounded-lg border-white/[0.06] bg-white/[0.02] text-xs text-white/70 placeholder:text-white/20 focus:border-white/[0.12]" />
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setTypeFilter(null)} className={cn("px-2.5 py-1 rounded-lg text-xs transition-all", !typeFilter ? "bg-white/[0.08] text-white/70" : "text-white/30 hover:text-white/50")}>All</button>
          {fileTypes.map((t) => (
            <button key={t} onClick={() => setTypeFilter(t === typeFilter ? null : t)} className={cn("px-2.5 py-1 rounded-lg text-xs capitalize transition-all", typeFilter === t ? "bg-white/[0.08] text-white/70" : "text-white/30 hover:text-white/50")}>{t}</button>
          ))}
        </div>
      </div>

      <main className="flex-1 overflow-y-auto editor-scroll p-5">
        {uploading && (
          <div className="mb-4 flex items-center gap-2 text-xs text-white/30">
            <div className="h-4 w-4 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" /> Uploading...
          </div>
        )}
        {loading ? (
          <div className="flex items-center justify-center py-20"><div className="h-6 w-6 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" /></div>
        ) : !siteId ? (
          <div className="flex flex-col items-center justify-center py-20 text-white/20 gap-2"><ImageIcon className="h-10 w-10" /><p className="text-sm">No site selected</p></div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-white/20 gap-2"><ImageIcon className="h-10 w-10" /><p className="text-sm">{files.length === 0 ? "No files yet" : "No matches"}</p></div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {filtered.map((f) => {
              const isSel = selected.has(f.id);
              return (
                <div key={f.id} className="group relative">
                  <button type="button" onClick={() => handleClick(f)}
                    className={cn("w-full aspect-square rounded-xl overflow-hidden border transition-all", isSel ? "border-editor-ring/50 ring-2 ring-editor-ring/20" : "border-white/[0.04] hover:border-white/[0.10] bg-white/[0.02]")}>
                    {isImage(f.data.type) ? (
                      <img src={f.data.url} alt={f.data.name ?? ""} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/[0.03]"><span className="text-[10px] text-white/20 font-mono">{formatSize(f.data.type)}</span></div>
                    )}
                    {isSel && (
                      <div className="absolute top-2 right-2 h-5 w-5 rounded-md bg-editor-ring flex items-center justify-center"><Check className="h-3 w-3 text-white" /></div>
                    )}
                  </button>
                  <div className="flex items-center mt-1.5 px-0.5 gap-1">
                    <button type="button" onClick={(e) => toggleSelect(f.id, e)}
                      className={cn("h-4 w-4 shrink-0 rounded border transition-all flex items-center justify-center", isSel ? "border-editor-ring bg-editor-ring/20" : "border-white/[0.08] hover:border-white/[0.15]")}>
                      {isSel && <Check className="h-2.5 w-2.5 text-editor-ring" />}
                    </button>
                    {editingId === f.id ? (
                      <form onSubmit={(e) => { e.preventDefault(); handleRename(f.id); }} className="flex items-center gap-0.5 min-w-0 flex-1">
                        <input autoFocus value={editName} onChange={(e) => setEditName((e.target as HTMLInputElement).value)}
                          onKeyDown={(e) => { if (e.key === "Escape") setEditingId(null); }}
                          className="flex-1 min-w-0 bg-white/[0.04] border border-white/[0.08] rounded-md px-1 py-0.5 text-[11px] text-white/80 outline-none focus:border-editor-ring/50" />
                        <button type="submit" className="text-emerald-400/70 hover:text-emerald-400 shrink-0"><Check className="h-2.5 w-2.5" /></button>
                        <button type="button" onClick={() => setEditingId(null)} className="text-white/30 hover:text-white/50 shrink-0"><X className="h-2.5 w-2.5" /></button>
                      </form>
                    ) : (
                      <p className="text-[11px] text-white/40 truncate leading-tight min-w-0 flex-1">{f.data.name ?? "Untitled"}</p>
                    )}
                    <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <button onClick={(e) => { e.stopPropagation(); setEditingId(f.id); setEditName(f.data.name ?? ""); }}
                        className="h-4 w-4 flex items-center justify-center rounded text-white/30 hover:text-white/70"><Pencil className="h-2.5 w-2.5" /></button>
                      <button onClick={(e) => handleDeleteClick([f.id], e)}
                        className="h-4 w-4 flex items-center justify-center rounded text-white/30 hover:text-red-400"><Trash2 className="h-2.5 w-2.5" /></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Detail Modal */}
      <Dialog open={detailFile !== null} onOpenChange={(o) => { if (!o) setDetailFile(null); }}>
        <DialogContent className="sm:max-w-2xl overflow-hidden p-0 gap-0">
          <div className="grid grid-cols-[1fr_280px] h-[500px]">
            <div className="bg-[#050508] flex items-center justify-center p-6 overflow-hidden">
              {detailFile && isImage(detailFile.data.type) ? (
                <img src={detailFile.data.url} alt={detailFile.data.name ?? ""} className="max-w-full max-h-full object-contain rounded-lg" />
              ) : (
                <div className="flex flex-col items-center gap-2 text-white/20">
                  <ImageIcon className="h-16 w-16" />
                  <p className="text-xs">No preview</p>
                </div>
              )}
            </div>
            <div className="bg-[#0d0d10] border-l border-white/[0.06] flex flex-col overflow-y-auto editor-scroll">
              {detailFile && (
                <div className="p-5 space-y-5">
                  <div>
                    <h2 className="text-sm font-semibold text-white/80 truncate">{detailFile.data.name ?? "Untitled"}</h2>
                    <p className="text-[11px] text-white/30 font-mono mt-0.5">{detailFile.id}</p>
                  </div>

                  <div className="h-px bg-white/[0.04]" />

                  <dl className="space-y-4">
                    <InfoRow label="Type" value={detailFile.data.type ?? "—"} />
                    <InfoRow label="Format" value={formatType(detailFile.data.type)} />
                    {detailFile.data.width && detailFile.data.height ? (
                      <InfoRow label="Dimensions" value={`${detailFile.data.width} × ${detailFile.data.height}px`} />
                    ) : null}
                    <InfoRow label="Uploaded" value={formatDate(detailFile.createdAt)} />
                    <InfoRow label="Site ID" value={detailFile.siteId} mono />
                  </dl>

                  <div className="h-px bg-white/[0.04]" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25 mb-2">URL</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-[11px] text-white/40 bg-white/[0.03] rounded-lg px-3 py-2 truncate">{detailFile.data.url}</code>
                      <button onClick={() => copyUrl(detailFile.data.url)}
                        className={cn("h-8 w-8 flex items-center justify-center rounded-lg transition-colors", copied ? "bg-emerald-500/[0.10] text-emerald-400" : "text-white/30 hover:text-white/60 hover:bg-white/[0.04]")}>
                        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.04]" />

                  <div className="flex items-center gap-2">
                    <button onClick={() => { setEditingId(detailFile.id); setEditName(detailFile.data.name ?? ""); }}
                      className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] px-3 py-1.5 text-xs text-white/50 hover:text-white/80 transition-all">
                      <Pencil className="h-3 w-3" /> Rename
                    </button>
                    <button onClick={() => handleDeleteClick([detailFile.id])}
                      className="flex items-center gap-1.5 rounded-lg bg-red-500/[0.05] hover:bg-red-500/[0.10] border border-red-500/[0.08] px-3 py-1.5 text-xs text-red-400/70 transition-all">
                      <Trash2 className="h-3 w-3" /> Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={deleteModal !== null} onOpenChange={(o) => { if (!o) setDeleteModal(null); }}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete {deleteModal?.length ?? 0} file{deleteModal?.length !== 1 ? "s" : ""}?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Permanently delete from storage. This cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteModal(null)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function InfoRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/25 mb-1">{label}</dt>
      <dd className={cn("text-xs text-white/50", mono && "font-mono")}>{value}</dd>
    </div>
  );
}
