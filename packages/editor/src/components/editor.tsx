"use client";

import { useEffect } from "react";
import { useEditorStore } from "../stores";
import { EditorProvider, useEditorContext } from "../lib/context";
import { EditorShell } from "./editor-shell";
import type { EditorProps } from "../types";

function useParams() {
  const setActivePage = useEditorStore((s) => s.setActivePage);
  const selectElement = useEditorStore((s) => s.selectElement);
  const activePageId = useEditorStore((s) => s.activePageId);
  const selectedElementId = useEditorStore((s) => s.selectedElementId);
  const pages = useEditorStore((s) => s.pages);
  const { actions } = useEditorContext();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageId = params.get("page");
    const elementId = params.get("element");
    if (pageId) setActivePage(pageId);
    if (elementId) selectElement(elementId);
  }, [setActivePage, selectElement]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        const state = useEditorStore.getState();
        if (state.isDirty && state.saveStatus !== "saving") {
          actions.saveAll();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [actions]);

  useEffect(() => {
    if (pages.length === 0) return;
    const params = new URLSearchParams(window.location.search);
    const pageId = params.get("page");
    if (pageId && !pages.find((p) => p.id === pageId)) {
      setActivePage(pages[0]!.id);
    }
  }, [pages]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const current = new URLSearchParams(window.location.search);
    if (activePageId) {
      params.set("page", activePageId);
    } else {
      params.delete("page");
    }
    if (selectedElementId) {
      params.set("element", selectedElementId);
    } else {
      params.delete("element");
    }
    const qs = params.toString();
    const newUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    if (window.location.pathname + window.location.search !== newUrl) {
      window.history.replaceState(null, "", newUrl);
    }
  }, [activePageId, selectedElementId]);
}

function EditorInner({ siteId }: { siteId: string }) {
  const setActiveSite = useEditorStore((s) => s.setActiveSite);
  const { actions } = useEditorContext();

  useEffect(() => {
    setActiveSite(siteId);
  }, [siteId, setActiveSite]);

  useEffect(() => {
    actions.loadPages(siteId);
  }, [siteId, actions]);

  useParams();

  return <EditorShell />;
}

export function Editor({ siteId, schema, api, renderer }: EditorProps) {
  return (
    <EditorProvider schema={schema} api={api} renderer={renderer}>
      <EditorInner siteId={siteId} />
    </EditorProvider>
  );
}
