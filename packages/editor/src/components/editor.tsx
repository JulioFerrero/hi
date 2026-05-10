"use client";

import { useEffect } from "react";
import { useEditorStore } from "../stores";
import { EditorProvider, useEditorContext } from "../lib/context";
import { EditorShell } from "./editor-shell";
import type { EditorProps } from "../types";

function EditorInner({ siteId }: { siteId: string }) {
  const setActiveSite = useEditorStore((s) => s.setActiveSite);
  const { actions } = useEditorContext();

  useEffect(() => {
    setActiveSite(siteId);
  }, [siteId, setActiveSite]);

  useEffect(() => {
    actions.loadPages(siteId);
  }, [siteId, actions]);

  return <EditorShell />;
}

export function Editor({ siteId, schema, api }: EditorProps) {
  return (
    <EditorProvider schema={schema} api={api}>
      <EditorInner siteId={siteId} />
    </EditorProvider>
  );
}
