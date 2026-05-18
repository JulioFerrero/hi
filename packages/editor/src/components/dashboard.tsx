"use client";

import { useEffect, useState } from "react";
import { Button } from "@hi/ui/button";
import { Input } from "@hi/ui/input";
import { Card, CardHeader, CardTitle, CardDescription } from "@hi/ui/card";
import { Plus, Globe } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@hi/ui/dialog";
import type React from "react";
import type { EditorApi } from "../types";

interface DashboardProps {
  api: EditorApi;
  onSelectSite: (siteId: string) => void;
}

export function Dashboard({ api, onSelectSite }: DashboardProps) {
  const [sites, setSites] = useState<{ id: string; slug: string; data: { name: string } }[]>([]);
  const [newName, setNewName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    api.fetch("/sites").then((data) => setSites(data as typeof sites));
  }, [api]);

  async function handleCreate() {
    if (!newName.trim()) return;
    const slug = newName.trim().toLowerCase().replace(/\s+/g, "-");
    const site = (await api.fetch("/sites", {
      method: "POST",
      body: JSON.stringify({ slug, data: { name: newName.trim() } }),
    })) as typeof sites[number];
    setSites((prev) => [...prev, site]);
    setNewName("");
    setDialogOpen(false);
    onSelectSite(site.id);
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-foreground">Web Builder</h1>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger render={<Button />}>
              <Plus className="mr-2 h-4 w-4" />
              New Site
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Site</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Site name"
                value={newName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleCreate()}
              />
              <DialogFooter>
                <Button onClick={handleCreate}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <button
              type="button"
              key={site.id}
              onClick={() => onSelectSite(site.id)}
              className="text-left"
            >
              <Card className="cursor-pointer rounded-2xl border-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{site.data.name}</CardTitle>
                      <CardDescription>{site.slug}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </button>
          ))}
          {sites.length === 0 && (
            <div className="col-span-full py-24 text-center text-muted-foreground">
              <Globe className="mx-auto mb-4 h-12 w-12 opacity-30" />
              <p className="text-lg font-medium text-foreground/60">No sites yet</p>
              <p className="mt-1 text-sm">Create your first site to get started</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
