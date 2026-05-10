import { createContext, useContext, useMemo } from "react";
import type { EditorSchema, EditorApi } from "../types";
import type { EditorActions } from "../lib/actions";
import { createEditorActions } from "../lib/actions";

const EditorContext = createContext<{
  schema: EditorSchema;
  api: EditorApi;
  actions: EditorActions;
} | null>(null);

export function EditorProvider({
  schema,
  api,
  children,
}: {
  schema: EditorSchema;
  api: EditorApi;
  children: React.ReactNode;
}) {
  const actions = useMemo(() => createEditorActions(api, schema), [api, schema]);

  return (
    <EditorContext.Provider value={{ schema, api, actions }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorContext() {
  const ctx = useContext(EditorContext);
  if (!ctx) throw new Error("useEditorContext must be used within EditorProvider");
  return ctx;
}
