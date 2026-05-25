interface RenderElement {
  id: string;
  type: string;
  data: Record<string, unknown>;
  styles: Record<string, unknown>;
  children: RenderElement[];
}

interface ResolveOptions {
  references: Record<string, string>;
  getDocuments: (collection: string, ids: string[]) => Promise<Record<string, unknown>[]>;
}

function walkElements(elements: RenderElement[], fn: (el: RenderElement) => void) {
  for (const el of elements) {
    fn(el);
    if (el.children.length > 0) walkElements(el.children, fn);
  }
}

export async function resolveDocumentReferences(
  elements: RenderElement[],
  options: ResolveOptions,
): Promise<RenderElement[]> {
  const collectionIds = new Map<string, Set<string>>();

  walkElements(elements, (el) => {
    for (const [key, collection] of Object.entries(options.references)) {
      const value = el.data[key];
      if (!value) continue;
      let ids = Array.isArray(value) ? value.map(String) : [String(value)];
      ids = ids.filter((id) => id.length > 0);
      if (ids.length > 0) {
        if (!collectionIds.has(collection)) collectionIds.set(collection, new Set());
        const s = collectionIds.get(collection)!;
        ids.forEach((id) => s.add(id));
      }
    }
  });

  const cache = new Map<string, Record<string, unknown>>();
  for (const [collection, ids] of collectionIds) {
    const docs = await options.getDocuments(collection, [...ids]);
    for (const doc of docs) {
      cache.set((doc.id ?? doc._id) as string, doc);
    }
  }

  return resolveElements(elements, options.references, cache);
}

function resolveElements(
  elements: RenderElement[],
  references: Record<string, string>,
  cache: Map<string, Record<string, unknown>>,
): RenderElement[] {
  return elements.map((el) => {
    let changed = false;
    const resolvedData = { ...el.data };
    for (const [key] of Object.entries(references)) {
      const value = el.data[key];
      if (!value) continue;
      if (Array.isArray(value)) {
        resolvedData[key] = value.map((id) => cache.get(String(id)) ?? null).filter(Boolean);
        changed = true;
      } else if (typeof value === "string") {
        const doc = cache.get(value);
        if (doc) { resolvedData[key] = doc; changed = true; }
      }
    }
    return {
      ...el,
      data: changed ? resolvedData : el.data,
      children: resolveElements(el.children, references, cache),
    };
  });
}
