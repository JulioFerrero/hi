"use client";

import { useState, useEffect } from "react";
import { useEditorStore } from "../stores";
import { useEditorContext } from "../lib/context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@hi/ui/dialog";
import { Button } from "@hi/ui/button";
import { ScrollArea } from "@hi/ui/scroll-area";
import { Badge } from "@hi/ui/badge";
import { History, RotateCcw, Loader2, Clock } from "lucide-react";

interface RevisionItem {
  id: string;
  label: string | null;
  createdAt: string;
}

export function HistoryPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { actions } = useEditorContext();
  const activePageId = useEditorStore((s) => s.activePageId);
  const [revisions, setRevisions] = useState<RevisionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [restoringId, setRestoringId] = useState<string | null>(null);

  useEffect(() => {
    if (open && activePageId) {
      setLoading(true);
      actions.getRevisions(activePageId).then((data) => {
        setRevisions(data as RevisionItem[]);
        setLoading(false);
      });
    }
  }, [open, activePageId, actions]);

  const handleRestore = async (revId: string) => {
    if (!activePageId) return;
    setRestoringId(revId);
    await actions.restoreRevision(activePageId, revId);
    await actions.loadContent(activePageId);
    setRestoringId(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[520px] max-h-[80vh] bg-black border-white/10 text-white flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-white">Revision History</DialogTitle>
          <DialogDescription className="text-white/50">
            Published versions of this page
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-white/40" />
          </div>
        ) : revisions.length === 0 ? (
          <div className="text-center py-12 text-white/40">
            No published revisions yet
          </div>
        ) : (
          <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="space-y-1">
              {revisions.map((rev, i) => (
                <div
                  key={rev.id}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 flex-shrink-0">
                    <Clock className="h-3.5 w-3.5 text-white/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white/80">
                      {rev.label ?? `Revision ${revisions.length - i}`}
                    </div>
                    <div className="text-xs text-white/40">
                      {new Date(rev.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <Badge
                    className={i === 0 ? "bg-white/10 text-white/60 border-white/20" : "bg-transparent text-white/30 border-transparent"}
                  >
                    {i === 0 ? "Current" : `v${revisions.length - i}`}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2 opacity-0 group-hover:opacity-100 text-white/50 hover:text-white hover:bg-white/10"
                    onClick={() => handleRestore(rev.id)}
                    disabled={restoringId === rev.id}
                  >
                    {restoringId === rev.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <RotateCcw className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
