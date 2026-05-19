import { useEditorStore } from "../stores";
import type { EditorApi } from "../types";

export function createSaveActions(api: EditorApi) {
  const store = useEditorStore;

  return {
    async saveAll() {
      const state = store.getState();
      store.getState().setSaveStatus("saving");
      try {
        for (const id of state.dirtyElementIds) {
          const el = state.elements.find((e) => e.id === id);
          if (el) {
            await api.fetch(`/elements/${el.id}`, {
              method: "PATCH",
              body: JSON.stringify({ data: el.data, styles: el.styles, order: el.order }),
            });
          }
        }
        for (const pageId of state.dirtyPageIds) {
          const page = state.pages.find((p) => p.id === pageId);
          if (page) {
            await api.fetch(`/pages/${pageId}`, {
              method: "PATCH",
              body: JSON.stringify({ slug: page.slug, data: page.data }),
            });
          }
        }
        store.getState().setDirty(false);
        store.setState({ dirtyPageIds: new Set(), dirtyElementIds: new Set() });
        store.getState().setSaveStatus("saved");
      } catch {
        store.getState().setSaveStatus("idle");
      }
    },
  };
}
