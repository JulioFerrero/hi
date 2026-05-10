"use client";

import { useEffect, useState } from "react";
import { useEditorActions } from "@/lib/editor-actions";
import type { Site } from "@wb/types";
import { Button } from "@wb/ui/button";
import { Input } from "@wb/ui/input";
import { Card, CardHeader, CardTitle, CardDescription } from "@wb/ui/card";
import { Plus, Globe } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@wb/ui/dialog";
import React from "react";

export default function DashboardPage() {
  const [sites, setSites] = useState<{ id: string; slug: string; data: { name: string } }[]>([]);
  const [newName, setNewName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const actions = useEditorActions();

  useEffect(() => {
    actions.loadSites().then(setSites);
  }, []);

  async function handleCreate() {
    if (!newName.trim()) return;
    const slug = newName.trim().toLowerCase().replace(/\s+/g, "-");
    const site = await actions.createSite(newName.trim(), slug);
    setSites((prev) => [...prev, site as typeof prev[number]]);
    setNewName("");
    setDialogOpen(false);
    window.location.href = `/${site.id}`;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold">Web Builder</h1>
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
      <main className="mx-auto max-w-6xl p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <a key={site.id} href={`/${site.id}`}>
              <Card className="cursor-pointer transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                      <Globe className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{site.data.name}</CardTitle>
                      <CardDescription>{site.slug}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
          {sites.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-400">
              <Globe className="mx-auto mb-4 h-12 w-12" />
              <p className="text-lg">No sites yet</p>
              <p className="text-sm">Create your first site to get started</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
