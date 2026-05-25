"use client";

import { useState } from "react";
import { useEditorStore, type SaveStatus } from "../../stores";
import { useEditorContext } from "../../lib/context";
import { Button } from "@hi/ui/button";
import { Separator } from "@hi/ui/separator";
import { Badge } from "@hi/ui/badge";
import {
  Undo2,
  Redo2,
  Loader2,
  Check,
  Upload,
  History,
  Users,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "@hi/utils";
import { ReviewDialog } from "../review-dialog";
import { HistoryPanel } from "../history-panel";
import { ProfileDropdown } from "../profile-dropdown";
import { navigate } from "../../lib/navigate";

function DraftStatusBadge() {
  const hasActiveDraft = useEditorStore((s) => s.hasActiveDraft);
  const isDirty = useEditorStore((s) => s.isDirty);
  const saveStatus = useEditorStore((s) => s.saveStatus);

  if (saveStatus === "saving") {
    return (
      <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-xs">
        <Loader2 className="h-3 w-3 mr-1 animate-spin" />
        Saving...
      </Badge>
    );
  }

  if (saveStatus === "saved" && !isDirty) {
    return (
      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
        <Check className="h-3 w-3 mr-1" />
        Draft saved
      </Badge>
    );
  }

  if (isDirty || hasActiveDraft) {
    return (
      <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-xs">
        Unsaved draft
      </Badge>
    );
  }

  return (
    <Badge className="bg-white/5 text-white/40 border-white/10 text-xs">
      Published
    </Badge>
  );
}

function PublishButton() {
  const isDirty = useEditorStore((s) => s.isDirty);
  const hasActiveDraft = useEditorStore((s) => s.hasActiveDraft);
  const { actions } = useEditorContext();
  const [reviewOpen, setReviewOpen] = useState(false);

  const showPublish = isDirty || hasActiveDraft;

  return (
    <>
      <Button
        size="sm"
        variant={showPublish ? "default" : "outline"}
        onClick={() => setReviewOpen(true)}
        className={cn(
          "min-w-[100px] transition-all duration-200",
          !showPublish && "border-white/10 text-white/50",
        )}
      >
        <Upload className="mr-1.5 h-4 w-4" />
        Review & Publish
      </Button>

      <ReviewDialog
        open={reviewOpen}
        onOpenChange={setReviewOpen}
        onPublish={async () => {
          await actions.publishPage();
        }}
      />
    </>
  );
}

export function TopBar() {
  const activeSiteId = useEditorStore((s) => s.activeSiteId);
  const undo = useEditorStore((s) => s.undo);
  const redo = useEditorStore((s) => s.redo);
  const canUndo = useEditorStore((s) => s.canUndo);
  const canRedo = useEditorStore((s) => s.canRedo);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <div className="flex h-14 items-center px-4 bg-black/80 backdrop-blur-xl">
      <div className="flex items-center gap-2.5">
        <span className="text-base font-semibold text-white/90 tracking-tight">
          Web Builder
        </span>
        <Separator orientation="vertical" className="mx-1 h-6 bg-white/10" />
        <span className="text-sm text-white/40">{activeSiteId ?? "No site selected"}</span>
        <DraftStatusBadge />
      </div>
      <div className="flex items-center gap-1 ml-auto">
        <button
          type="button"
          className="flex h-9 items-center justify-center gap-1.5 rounded-xl px-3 text-sm text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white/80"
          onClick={() => setHistoryOpen(true)}
          title="Revision History"
        >
          <History className="h-4 w-4" />
          History
        </button>
        <button
          type="button"
          className="flex h-9 items-center justify-center gap-1.5 rounded-xl px-3 text-sm text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white/80"
          onClick={() => {
            const siteId = useEditorStore.getState().activeSiteId;
            if (siteId) navigate(`/content/${siteId}`);
          }}
          title="Content"
        >
          Content
        </button>
        <Separator orientation="vertical" className="mx-1 h-6 bg-white/10" />
        <button
          type="button"
          className="flex h-9 items-center justify-center gap-1.5 rounded-xl px-3 text-sm text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white/80"
          onClick={() => navigate("/admin/users")}
          title="User Management"
        >
          <Users className="h-4 w-4" />
          Users
        </button>
        <button
          type="button"
          className="flex h-9 items-center justify-center gap-1.5 rounded-xl px-3 text-sm text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white/80"
          onClick={() => navigate("/assets")}
          title="Assets"
        >
          <ImageIcon className="h-4 w-4" />
          Assets
        </button>
        <Separator orientation="vertical" className="mx-1 h-6 bg-white/10" />
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white/80 disabled:opacity-30 disabled:pointer-events-none"
          disabled={!canUndo()}
          onClick={undo}
          title="Undo"
        >
          <Undo2 className="h-4.5 w-4.5" />
        </button>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white/80 disabled:opacity-30 disabled:pointer-events-none"
          disabled={!canRedo()}
           onClick={redo}
          title="Redo"
        >
          <Redo2 className="h-4.5 w-4.5" />
        </button>
        <Separator orientation="vertical" className="mx-1.5 h-6 bg-white/10" />
        <ProfileDropdown />
        <Separator orientation="vertical" className="mx-1.5 h-6 bg-white/10" />
        <PublishButton />
      </div>

      <HistoryPanel open={historyOpen} onOpenChange={setHistoryOpen} />
    </div>
  );
}
