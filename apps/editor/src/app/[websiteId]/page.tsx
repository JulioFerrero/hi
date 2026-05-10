"use client";

import { useEffect } from "react";
import { useEditorStore } from "@/stores";
import { useEditorActions } from "@/lib/editor-actions";
import { useParams } from "next/navigation";
import { EditorShell } from "@/components/editor/editor-shell";

export default function SiteEditorPage() {
  const params = useParams<{ websiteId: string }>();
  const activePageId = useEditorStore((s) => s.activePageId);
  const setActiveSite = useEditorStore((s) => s.setActiveSite);
  const setActivePage = useEditorStore((s) => s.setActivePage);
  const actions = useEditorActions();

  useEffect(() => {
    if (params.websiteId) {
      setActiveSite(params.websiteId);
      actions.loadPages(params.websiteId).then((pages) => {
        if (pages.length > 0 && !activePageId) {
          setActivePage(pages[0]!.id);
        }
      });
    }
  }, [params.websiteId]);

  return <EditorShell />;
}
