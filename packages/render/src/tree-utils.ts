/** Represents a node in the page element tree. */
export interface PageElement {
  id: string;
  type: string;
  data: Record<string, unknown>;
  styles: Record<string, string>;
  children: PageElement[];
}

/** Find an element by ID, returning the element, its parent, and its index. */
export function findById(tree: PageElement[], id: string): { element: PageElement; parent: PageElement | null; index: number } | null {
  for (let i = 0; i < tree.length; i++) {
    const el = tree[i]!;
    if (el.id === id) return { element: el, parent: null, index: i };
    const found = findInChildren(el.children, id, el);
    if (found) return found;
  }
  return null;
}

function findInChildren(children: PageElement[], id: string, parent: PageElement): { element: PageElement; parent: PageElement; index: number } | null {
  for (let i = 0; i < children.length; i++) {
    const child = children[i]!;
    if (child.id === id) return { element: child, parent, index: i };
    const found = findInChildren(child.children, id, child);
    if (found) return found;
  }
  return null;
}

/** Find and return an element by ID, or null if not found. */
export function findElementById(tree: PageElement[], id: string): PageElement | null {
  return findById(tree, id)?.element ?? null;
}

/** Insert a child element under a parent, optionally at a specific index. */
export function insertChild(tree: PageElement[], parentId: string, element: PageElement, index?: number): void {
  const result = findById(tree, parentId);
  if (!result) {
    if (index !== undefined) tree.splice(index, 0, element);
    else tree.push(element);
    return;
  }
  const children = result.element.children;
  if (index !== undefined && index >= 0 && index <= children.length) {
    children.splice(index, 0, element);
  } else {
    children.push(element);
  }
}

/** Remove an element by ID. Returns true if removed, false if not found. */
export function removeById(tree: PageElement[], id: string): boolean {
  const result = findById(tree, id);
  if (!result) return false;
  if (result.parent) {
    result.parent.children.splice(result.index, 1);
  } else {
    tree.splice(result.index, 1);
  }
  return true;
}

/** Update an element's data, styles, and/or type by ID. Returns true if found. */
export function updateById(tree: PageElement[], id: string, patch: { data?: Record<string, unknown>; styles?: Record<string, string>; type?: string }): boolean {
  const el = findElementById(tree, id);
  if (!el) return false;
  if (patch.data !== undefined) el.data = { ...el.data, ...patch.data };
  if (patch.styles !== undefined) el.styles = { ...el.styles, ...patch.styles };
  if (patch.type !== undefined) el.type = patch.type;
  return true;
}

/** Move an element to a new parent (or root) at an optional index. */
export function moveNode(tree: PageElement[], id: string, newParentId: string | null, index?: number): boolean {
  const result = findById(tree, id);
  if (!result) return false;

  const element = result.element;
  if (result.parent) {
    result.parent.children.splice(result.index, 1);
  } else {
    tree.splice(result.index, 1);
  }

  if (newParentId) {
    insertChild(tree, newParentId, element, index);
  } else {
    if (index !== undefined && index >= 0 && index <= tree.length) {
      tree.splice(index, 0, element);
    } else {
      tree.push(element);
    }
  }
  return true;
}

/** Duplicate an element (with a new ID) and insert it right after the original. */
export function duplicateNode(tree: PageElement[], id: string, newId: string): PageElement | null {
  const el = findElementById(tree, id);
  if (!el) return null;
  const clone = deepCloneElement(el, newId);
  const result = findById(tree, id);
  if (result) {
    if (result.parent) {
      result.parent.children.splice(result.index + 1, 0, clone);
    } else {
      tree.splice(result.index + 1, 0, clone);
    }
  }
  return clone;
}

function deepCloneElement(el: PageElement, newId?: string): PageElement {
  return {
    id: newId ?? crypto.randomUUID(),
    type: el.type,
    data: { ...el.data },
    styles: { ...el.styles },
    children: el.children.map((c) => deepCloneElement(c)),
  };
}

/** Deep-clone an element tree, preserving original IDs. */
export function cloneTree(tree: PageElement[]): PageElement[] {
  return tree.map((el) => deepCloneElement(el, el.id));
}

/** Walk the element tree depth-first, calling `fn` for each element. */
export function walkTree(tree: PageElement[], fn: (el: PageElement, depth: number) => void, depth = 0): void {
  for (const el of tree) {
    fn(el, depth);
    if (el.children.length > 0) walkTree(el.children, fn, depth + 1);
  }
}

/** Create a new page element with a generated UUID. */
export function createElement(type: string, data?: Record<string, unknown>, styles?: Record<string, string>, children?: PageElement[]): PageElement {
  return {
    id: crypto.randomUUID(),
    type,
    data: data ?? {},
    styles: styles ?? {},
    children: children ?? [],
  };
}

/** Generate a random unique ID (UUID v4). */
export function generateId(): string {
  try { return globalThis.crypto.randomUUID(); } catch { return Math.random().toString(36).slice(2, 11); }
}
