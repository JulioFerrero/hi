"use client";

import { useEditorStore } from "../../stores";
import type { Viewport } from "../../types";
import { useEditorContext } from "../../lib/context";
import { Button } from "@wb/ui/button";
import { Separator } from "@wb/ui/separator";
import { Save, Undo2, Redo2, Monitor, Tablet, Smartphone } from "lucide-react";
import { cn } from "@wb/utils";

const viewports: { key: Viewport; icon: typeof Monitor; label: string }[] = [
  { key: "desktop", icon: Monitor, label: "Desktop" },
  { key: "tablet", icon: Tablet, label: "Tablet" },
  { key: "mobile", icon: Smartphone, label: "Mobile" },
];

export function TopBar() {
  const isDirty = useEditorStore((s) => s.isDirty);
  const activeSiteId = useEditorStore((s) => s.activeSiteId);
  const viewport = useEditorStore((s) => s.viewport);
  const setViewport = useEditorStore((s) => s.setViewport);
  const undo = useEditorStore((s) => s.undo);
  const redo = useEditorStore((s) => s.redo);
  const canUndo = useEditorStore((s) => s.canUndo);
  const canRedo = useEditorStore((s) => s.canRedo);
  const { actions } = useEditorContext();

  return (
    <div className="flex h-12 items-center border-b px-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-600">
          Web Builder
        </span>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <span className="text-xs text-gray-400">{activeSiteId ?? "No site selected"}</span>
      </div>
      <div className="mx-auto flex items-center gap-1 rounded-md border p-0.5">
        {viewports.map(({ key, icon: Icon, label }) => (
          <Button
            key={key}
            variant="ghost"
            size="icon"
            title={label}
            className={cn(
              "h-7 w-7",
              viewport === key && "bg-gray-100 text-gray-900"
            )}
            onClick={() => setViewport(key)}
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" disabled={!canUndo()} onClick={undo} title="Undo"><Undo2 className="h-4 w-4" /></Button>
        <Button variant="ghost" size="icon" disabled={!canRedo()} onClick={redo} title="Redo"><Redo2 className="h-4 w-4" /></Button>
        <Separator orientation="vertical" className="mx-1 h-6" />
        <Button size="sm" disabled={!isDirty} onClick={() => actions.saveAll()}>
          <Save className="mr-1 h-3 w-3" /> Save
        </Button>
      </div>
    </div>
  );
}
