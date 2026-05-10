import { apiFetch } from "./api-client";
import { useEditorStore } from "@/stores";
import type { RenderElement } from "@wb/website";
import { DEFAULT_ELEMENT_STYLES, DEFAULT_ELEMENT_DATA } from "./element-config";

export function useEditorActions() {
  const store = useEditorStore;

  async function loadSites() {
    return apiFetch<{ id: string; slug: string; data: { name: string } }[]>("/sites");
  }

  async function createSite(name: string, slug: string) {
    return apiFetch<{ id: string; slug: string; data: { name: string } }>("/sites", {
      method: "POST",
      body: JSON.stringify({ slug, data: { name } }),
    });
  }

  async function loadPages(siteId: string) {
    const pages = await apiFetch<{ id: string; slug: string; data: { title: string; path: string; status: string } }[]>(
      `/pages?siteId=${siteId}`
    );
    store.getState().setPages(pages);
    return pages;
  }

  async function createPage(siteId: string, title: string, slug: string, parentId?: string) {
    let resolvedParentId = parentId;
    if (!resolvedParentId) {
      const existing = store.getState().pages;
      const root = existing.find((p) => p.data.path === "/");
      if (root) resolvedParentId = root.id;
    }
    const path = resolvedParentId ? `/${slug}` : `/${slug}`;
    const page = await apiFetch("/pages", {
      method: "POST",
      body: JSON.stringify({ siteId, slug, data: { title, path, status: "draft", parentId: resolvedParentId } }),
    });
    await loadPages(siteId);
    return page;
  }

  async function updatePage(id: string, data: Record<string, unknown>) {
    const page = await apiFetch(`/pages/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data }),
    });
    const siteId = store.getState().activeSiteId;
    if (siteId) await loadPages(siteId);
    return page;
  }

  async function deletePage(id: string) {
    await apiFetch(`/pages/${id}`, { method: "DELETE" });
    const state = store.getState();
    if (state.activePageId === id) {
      const remaining = state.pages.filter((p) => p.id !== id);
      const next = remaining.length > 0 ? remaining[0]!.id : (null as string | null);
      if (next) store.getState().setActivePage(next);
      else store.getState().setActiveSite(store.getState().activeSiteId!);
    }
    const siteId = state.activeSiteId;
    if (siteId) await loadPages(siteId);
  }

  async function loadElements(pageId: string) {
    store.getState().setLoading(true);
    const elements = await apiFetch<RenderElement[]>(`/elements?pageId=${pageId}`);
    store.getState().setElements(elements);
    store.getState().setLoading(false);
    return elements;
  }

  async function addElement(pageId: string, type: string, parentId?: string | null) {
    const elements = store.getState().elements;
    const siblings = parentId
      ? elements.filter((e) => e.parentId === parentId)
      : elements.filter((e) => !e.parentId);
    const maxOrder = siblings.reduce((max, e) => Math.max(max, e.order), -1);

    const element = await apiFetch<RenderElement>("/elements", {
      method: "POST",
      body: JSON.stringify({
        pageId,
        type,
        parentId: parentId ?? null,
        data: DEFAULT_ELEMENT_DATA[type] ?? {},
        styles: DEFAULT_ELEMENT_STYLES[type] ?? {},
        order: maxOrder + 1,
      }),
    });

    store.getState().addElement(element);
    store.getState().selectElement(element.id);
    return element;
  }

  async function updateElementData(id: string, data: Record<string, unknown>) {
    await apiFetch(`/elements/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data }),
    });
    store.getState().updateElement(id, { data: data as any });
  }

  async function updateElementStyles(id: string, styles: Record<string, unknown>) {
    await apiFetch(`/elements/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ styles }),
    });
    store.getState().updateElement(id, { styles: styles as any });
  }

  async function deleteElement(id: string) {
    await apiFetch(`/elements/${id}`, { method: "DELETE" });
    store.getState().removeElement(id);
  }

  async function duplicateElement(id: string) {
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
      const created = await apiFetch<RenderElement>("/elements", {
        method: "POST",
        body: JSON.stringify({
          pageId,
          type: src.type,
          parentId: newParentId,
          data: { ...src.data },
          styles: { ...src.styles },
          order: isRoot ? maxOrder + 1 : src.order,
        }),
      });
      allClones.push(created);
      const children = state.elements.filter((e) => e.parentId === src.id);
      for (const child of children) {
        await cloneTree(child.id, created.id, false);
      }
    }

    await cloneTree(id, el.parentId ?? null, true);
    store.getState().insertElements(allClones);
    if (allClones.length > 0) store.getState().selectElement(allClones[0]!.id);
    return allClones;
  }

  async function saveAll() {
    const state = store.getState();
    for (const el of state.elements) {
      await apiFetch(`/elements/${el.id}`, {
        method: "PATCH",
        body: JSON.stringify({ data: el.data, styles: el.styles, order: el.order }),
      });
    }
    for (const pageId of state.dirtyPageIds) {
      const page = state.pages.find((p) => p.id === pageId);
      if (page) {
        await apiFetch(`/pages/${pageId}`, {
          method: "PATCH",
          body: JSON.stringify({ slug: page.slug, data: page.data }),
        });
      }
    }
    store.getState().setDirty(false);
    store.setState({ dirtyPageIds: new Set() });
  }

  return {
    loadSites, createSite, loadPages, createPage, updatePage, deletePage,
    loadElements, addElement, updateElementData,
    updateElementStyles, deleteElement, duplicateElement, saveAll,
  };
}
