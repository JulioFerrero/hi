"use client";

import { useEffect, useRef } from "react";
import { useEditorStore, type SaveStatus } from "../../stores";
import type { Viewport } from "../../types";
import { useEditorContext } from "../../lib/context";
import { Button } from "@hi/ui/button";
import { Separator } from "@hi/ui/separator";
import { Save, Undo2, Redo2, Monitor, Tablet, Smartphone, Loader2, Check } from "lucide-react";
import { cn } from "@hi/utils";

const viewports: { key: Viewport; icon: typeof Monitor; label: string }[] = [
  { key: "desktop", icon: Monitor, label: "Desktop" },
  { key: "tablet", icon: Tablet, label: "Tablet" },
  { key: "mobile", icon: Smartphone, label: "Mobile" },
];

function SaveButton() {
  const isDirty = useEditorStore((s) => s.isDirty);
  const saveStatus = useEditorStore((s) => s.saveStatus);
  const { actions } = useEditorContext();
  const savedTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (saveStatus === "saved" && !isDirty) {
      savedTimerRef.current = setTimeout(() => {
        useEditorStore.getState().setSaveStatus("idle");
      }, 2000);
      return () => clearTimeout(savedTimerRef.current);
    }
  }, [saveStatus, isDirty]);

  const label: Record<SaveStatus, string> = {
    idle: isDirty ? "Save" : "Saved",
    saving: "Saving...",
    saved: "Saved",
  };

  const icon = saveStatus === "saving"
    ? <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
    : saveStatus === "saved" && !isDirty
      ? <Check className="mr-1.5 h-3.5 w-3.5 text-emerald-500" />
      : <Save className="mr-1.5 h-3.5 w-3.5" />;

  return (
    <Button
      size="sm"
      variant={isDirty ? "default" : "outline"}
      disabled={!isDirty || saveStatus === "saving"}
      onClick={() => actions.saveAll()}
      className={cn(
        "min-w-[84px] transition-all duration-200",
        saveStatus === "saved" && !isDirty && "border-emerald-500/40 text-emerald-400 hover:text-emerald-400",
      )}
    >
      {icon}
      {label[saveStatus]}
    </Button>
  );
}

export function TopBar() {
  const activeSiteId = useEditorStore((s) => s.activeSiteId);
  const viewport = useEditorStore((s) => s.viewport);
  const setViewport = useEditorStore((s) => s.setViewport);
  const undo = useEditorStore((s) => s.undo);
  const redo = useEditorStore((s) => s.redo);
  const canUndo = useEditorStore((s) => s.canUndo);
  const canRedo = useEditorStore((s) => s.canRedo);

  return (
    <div className="flex h-12 items-center px-4 bg-sidebar/80 backdrop-blur-sm border-b border-sidebar-border/50">
      <div className="flex items-center gap-2.5">
        <span className="text-sm font-semibold text-foreground tracking-tight">
          Web Builder
        </span>
        <Separator orientation="vertical" className="mx-1 h-5 bg-border/60" />
        <span className="text-xs text-muted-foreground">{activeSiteId ?? "No site selected"}</span>
      </div>
      <div className="mx-auto flex items-center gap-0.5 rounded-2xl bg-muted/80 p-1">
        {viewports.map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            title={label}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-xl transition-all duration-200",
              viewport === key
                ? "bg-popover text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setViewport(key)}
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
      <div className="flex items-center gap-1">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:bg-accent/50 hover:text-foreground disabled:opacity-30 disabled:pointer-events-none"
          disabled={!canUndo()}
          onClick={undo}
          title="Undo"
        >
          <Undo2 className="h-4 w-4" />
        </button>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:bg-accent/50 hover:text-foreground disabled:opacity-30 disabled:pointer-events-none"
          disabled={!canRedo()}
          onClick={redo}
          title="Redo"
        >
          <Redo2 className="h-4 w-4" />
        </button>
        <Separator orientation="vertical" className="mx-1.5 h-5 bg-border/60" />
        <SaveButton />
      </div>
    </div>
  );
}
