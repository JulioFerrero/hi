import type React from "react";
import type { EditorApi, EditorSchema } from "../types";
import type { PreviewCaptureHandle } from "./context";
import { createElementActions } from "./element-actions";
import { createPageActions } from "./page-actions";
import { createSaveActions } from "./save-actions";

export function createEditorActions(
  api: EditorApi,
  schema: EditorSchema,
  captureRef?: React.RefObject<PreviewCaptureHandle | null>,
) {
  return {
    ...createPageActions(api),
    ...createElementActions(api, schema),
    ...createSaveActions(api, captureRef),
  };
}

export type EditorActions = ReturnType<typeof createEditorActions>;
