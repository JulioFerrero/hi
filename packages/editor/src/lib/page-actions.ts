import { useEditorStore } from "../stores";
import type { EditorApi, PageItem } from "../types";

export function createPageActions(api: EditorApi) {
  const store = useEditorStore;

  return {
    loadSites(): Promise<unknown> {
      return api.fetch("/sites");
    },

    createSite(name: string, slug: string): Promise<unknown> {
      return api.fetch("/sites", {
        method: "POST",
        body: JSON.stringify({ slug, data: { name } }),
      });
    },

    async loadPages(siteId: string) {
      const pages = (await api.fetch(`/pages?siteId=${siteId}`)) as PageItem[];
      store.getState().setPages(pages);
      return pages;
    },

    async createPage(siteId: string, title: string, slug: string, parentId?: string) {
      let resolvedParentId = parentId;
      if (!resolvedParentId) {
        const existing = store.getState().pages;
        const root = existing.find((p) => p.data.path === "/");
        if (root) resolvedParentId = root.id;
      }
      const path = `/${slug}`;
      const page = await api.fetch("/pages", {
        method: "POST",
        body: JSON.stringify({ siteId, slug, data: { title, path, status: "draft", parentId: resolvedParentId } }),
      });
      await this.loadPages(siteId);
      return page;
    },

    async deletePage(id: string) {
      await api.fetch(`/pages/${id}`, { method: "DELETE" });
      const state = store.getState();
      if (state.activePageId === id) {
        const remaining = state.pages.filter((p) => p.id !== id);
        const next = remaining.length > 0 ? remaining[0]!.id : null;
        if (next) store.getState().setActivePage(next);
        else store.getState().setActiveSite(store.getState().activeSiteId!);
      }
      const siteId = state.activeSiteId;
      if (siteId) await this.loadPages(siteId);
    },
  };
}
