import { useEditorStore } from "../stores";
import type { EditorApi, EditorSchema, RenderElement } from "../types";

export function createElementActions(api: EditorApi, schema: EditorSchema) {
  const store = useEditorStore;

  function getTypeConfig(type: string) {
    return schema.elementTypes.find((t) => t.type === type);
  }

  return {
    async loadElements(pageId: string) {
      store.getState().setLoading(true);
      const elements = (await api.fetch(`/elements?pageId=${pageId}`)) as RenderElement[];
      const hasPendingChanges = elements.some((el) => el.status === "modified" || el.status === "draft");
      store.getState().setElements(elements);
      store.getState().setHasActiveDraft(hasPendingChanges);
      store.getState().setLoading(false);
      return elements;
    },

    async addElement(pageId: string, type: string, parentId?: string | null) {
      const state = store.getState();
      const siblings = parentId
        ? state.elements.filter((e) => e.parentId === parentId)
        : state.elements.filter((e) => !e.parentId);
      const maxOrder = siblings.reduce((max, e) => Math.max(max, e.order), -1);
      const config = getTypeConfig(type);

      const element = (await api.fetch("/elements", {
        method: "POST",
        body: JSON.stringify({
          pageId,
          type,
          parentId: parentId ?? null,
          data: config?.defaultData ?? {},
          styles: config?.defaultStyles ?? {},
          order: maxOrder + 1,
          status: "draft",
        }),
      })) as RenderElement;

      store.setState((s) => ({
        elements: [...s.elements, element],
        dirtyElementIds: new Set([...s.dirtyElementIds, element.id]),
        isDirty: true,
        hasActiveDraft: true,
        selectedElementId: element.id,
      }));
      return element;
    },

    updateElementData(id: string, data: Record<string, unknown>) {
      store.getState().updateElement(id, { data: data as Record<string, unknown> });
    },

    updateElementStyles(id: string, styles: Record<string, unknown>) {
      store.getState().updateElement(id, { styles: styles as Record<string, unknown> });
    },

    async deleteElement(id: string) {
      const state = store.getState();
      const el = state.elements.find((e) => e.id === id);
      if (!el) return;

      if (el.status === "draft") {
        try {
          await api.fetch(`/elements/${id}`, { method: "DELETE" });
        } catch { /* may not exist yet */ }
      }

      store.getState().removeElement(id);
    },

    async duplicateElement(id: string) {
      const state = store.getState();
      const el = state.elements.find((e) => e.id === id);
      if (!el) return;
      const siblings = el.parentId
        ? state.elements.filter((e) => e.parentId === el.parentId)
        : state.elements.filter((e) => !e.parentId);
      const maxOrder = siblings.reduce((max, e) => Math.max(max, e.order), -1);
      const pageId = state.activePageId!;

      const allClones: RenderElement[] = [];

      async function cloneTree(elementId: string, newParentId: string | null, isRoot: boolean): Promise<void> {
        const src = state.elements.find((e) => e.id === elementId);
        if (!src) return;
        const created = (await api.fetch("/elements", {
          method: "POST",
          body: JSON.stringify({
            pageId, type: src.type, parentId: newParentId,
            data: { ...src.data }, styles: { ...src.styles },
            order: isRoot ? maxOrder + 1 : src.order, status: "draft",
          }),
        })) as RenderElement;
        allClones.push(created);
        for (const child of state.elements) {
          if (child.parentId === src.id) await cloneTree(child.id, created.id, false);
        }
      }

      await cloneTree(id, el.parentId ?? null, true);
      store.setState((s) => ({
        elements: [...s.elements, ...allClones],
        dirtyElementIds: new Set([...s.dirtyElementIds, ...allClones.map((e) => e.id)]),
        isDirty: true, hasActiveDraft: true,
        selectedElementId: allClones[0]?.id ?? s.selectedElementId,
      }));
      return allClones;
    },
  };
}