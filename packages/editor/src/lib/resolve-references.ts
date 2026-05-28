import { useRef, useEffect, useMemo, useState } from "react";
import { useCmsStore } from "../stores/cms-store";
import type { EditorSchema, EditorApi, PageElement } from "../types";
import { createCmsActions } from "./cms-actions";

function collectReferenceFields(schema: EditorSchema): Record<string, { field: string; collection: string; multiple: boolean }[]> {
  const map: Record<string, { field: string; collection: string; multiple: boolean }[]> = {};
  for (const et of schema.elementTypes) {
    const refs = et.fields
      .filter((f) => f.type === "reference")
      .map((f) => ({ field: f.name, collection: f.collection ?? "", multiple: f.multiple ?? false }));
    if (refs.length > 0) {
      map[et.type] = refs;
    }
  }
  return map;
}

function collectAllReferenceIds(
  content: PageElement[],
  refMap: Record<string, { field: string; collection: string; multiple: boolean }[]>,
): Set<string> {
  const ids = new Set<string>();
  function walk(nodes: PageElement[]) {
    for (const el of nodes) {
      const refs = refMap[el.type];
      if (refs) {
        for (const ref of refs) {
          const value = el.data[ref.field];
          if (!value) continue;
          if (Array.isArray(value)) {
            for (const v of value) {
              if (typeof v === "string") ids.add(v);
            }
          } else if (typeof value === "string") {
            ids.add(value);
          }
        }
      }
      if (el.children.length > 0) walk(el.children);
    }
  }
  walk(content);
  return ids;
}

function resolveElements(
  content: PageElement[],
  refMap: Record<string, { field: string; collection: string; multiple: boolean }[]>,
  cache: Map<string, unknown>,
): PageElement[] {
  let anyChanged = false;
  const resolved = content.map((el) => {
    const refs = refMap[el.type];
    let dataChanged = false;
    const resolvedData = { ...el.data };

    if (refs) {
      for (const ref of refs) {
        const value = el.data[ref.field];
        if (!value) continue;

        if (ref.multiple && Array.isArray(value)) {
          const newResolved = value
            .map((id) => cache.get(String(id)) ?? null)
            .filter(Boolean);
          const prev = el.data[ref.field] as unknown[];
          if (!Array.isArray(prev) || prev.length !== newResolved.length || !prev.every((v, i) => v === newResolved[i])) {
            resolvedData[ref.field] = newResolved;
            dataChanged = true;
          }
        } else if (typeof value === "string") {
          const resolved = cache.get(value);
          if (resolved !== el.data[ref.field]) {
            resolvedData[ref.field] = resolved;
            dataChanged = true;
          }
        }
      }
    }

    const resolvedChildren = resolveElements(el.children, refMap, cache);
    const childrenChanged = resolvedChildren !== el.children;

    if (!dataChanged && !childrenChanged) {
      return el;
    }

    anyChanged = true;
    return {
      ...el,
      data: dataChanged ? resolvedData : el.data,
      children: resolvedChildren,
    };
  });

  if (!anyChanged) {
    return content;
  }
  return resolved;
}

export function useResolvedElements(
  content: PageElement[],
  schema: EditorSchema,
  api: EditorApi,
  _siteId: string,
): PageElement[] {
  const refMap = useMemo(() => collectReferenceFields(schema), [schema]);
  const cacheRef = useRef<Map<string, unknown>>(new Map());
  const [resolved, setResolved] = useState<PageElement[]>(() =>
    resolveElements(content, refMap, cacheRef.current),
  );

  useEffect(() => {
    const allIds = collectAllReferenceIds(content, refMap);
    const missingIds = [...allIds].filter((id) => !cacheRef.current.has(id));

    if (missingIds.length === 0) {
      setResolved(resolveElements(content, refMap, cacheRef.current));
      return;
    }

    let cancelled = false;

    async function fetchMissing() {
      const cmsStore = useCmsStore.getState();
      const storeCached = missingIds.filter((id) => cmsStore.documentCache.has(id));
      const toFetch = missingIds.filter((id) => !cmsStore.documentCache.has(id));

      for (const id of storeCached) {
        cacheRef.current.set(id, cmsStore.documentCache.get(id));
      }

      if (toFetch.length > 0) {
        try {
          const actions = createCmsActions(api);
          const docs = await actions.loadDocumentsByIds(toFetch);
          for (const doc of docs) {
            cacheRef.current.set(doc.id, doc);
          }
        } catch { /* ignore */ }
      }

      if (cancelled) return;
      setResolved(resolveElements(content, refMap, cacheRef.current));
    }

    fetchMissing();
    return () => { cancelled = true; };
  }, [content, api, refMap]);

  useEffect(() => {
    const unsub = useCmsStore.subscribe(() => {
      const currentCache = useCmsStore.getState().documentCache;
      for (const [id, doc] of currentCache) {
        cacheRef.current.set(id, doc);
      }
      setResolved(resolveElements(content, refMap, cacheRef.current));
    });
    return unsub;
  }, [content, refMap]);

  return resolved;
}
