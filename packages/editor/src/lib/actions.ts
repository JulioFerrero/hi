import type { EditorApi, EditorSchema } from "../types";
import { createElementActions } from "./element-actions";
import { createPageActions } from "./page-actions";
import { createSaveActions } from "./save-actions";

export function createEditorActions(api: EditorApi, schema: EditorSchema) {
  return {
    ...createPageActions(api),
    ...createElementActions(api, schema),
    ...createSaveActions(api),
  };
}

export type EditorActions = ReturnType<typeof createEditorActions>;
