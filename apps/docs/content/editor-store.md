---
title: Editor Store
description: The Zustand-based editor store manages page state, element selection, undo/redo history, and save status.
order: 5
category: Building
---

The editor store is a Zustand store that holds all editor state and provides synchronous and asynchronous actions. It lives in `@hi/editor`.

## Import

```ts
import { useEditorStore } from "@hi/editor";
```

## State Fields

| Field | Type | Default | Description |
|---|---|---|---|
| `activeSiteId` | `string \| null` | `null` | Currently active site ID. |
| `activePageId` | `string \| null` | `null` | Currently active page ID. |
| `selectedElementId` | `string \| null` | `null` | Currently selected element on the canvas. |
| `hoveredElementId` | `string \| null` | `null` | Element under the cursor (for hover highlights). |
| `viewport` | `"desktop" \| "tablet" \| "mobile"` | `"desktop"` | Current viewport preview mode. |
| `pages` | `PageItem[]` | `[]` | All pages for the active site. |
| `dirtyPageIds` | `Set<string>` | `new Set()` | Page IDs with unsaved local changes. |
| `elements` | `RenderElement[]` | `[]` | Flat list of all elements on the active page. |
| `isDirty` | `boolean` | `false` | Whether there are unsaved changes. |
| `isLoading` | `boolean` | `false` | Whether elements are being fetched. |
| `saveStatus` | `"idle" \| "saving" \| "saved"` | `"idle"` | Current save operation status. |

## Sync Actions

These actions update state immediately without API calls:

| Action | Signature | Description |
|---|---|---|
| `setActiveSite` | `(id: string) => void` | Sets the active site, resets page selection and history. |
| `setActivePage` | `(id: string) => void` | Sets the active page, clears element selection. |
| `setViewport` | `(viewport: Viewport) => void` | Switches between desktop/tablet/mobile preview. |
| `setPages` | `(pages: PageItem[]) => void` | Replaces the pages list, clears dirty flags. |
| `updatePageLocal` | `(id: string, updates: { data?, slug? }) => void` | Updates a page locally (marks dirty). |
| `setElements` | `(elements: RenderElement[]) => void` | Replaces the element list, clears dirty flag. |
| `selectElement` | `(id: string \| null) => void` | Selects an element on the canvas. |
| `setHoveredElement` | `(id: string \| null) => void` | Sets the hovered element for visual feedback. |
| `updateElement` | `(id: string, updates: Partial<RenderElement>) => void` | Updates element data/styles by ID (marks dirty). |
| `addElement` | `(element: RenderElement) => void` | Appends a new element to the list. |
| `removeElement` | `(id: string) => void` | Removes an element and all its children. |
| `insertElements` | `(elements: RenderElement[]) => void` | Appends multiple elements (used by duplicate). |
| `reorderElement` | `(id: string, direction: "up" \| "down") => void` | Swaps order with adjacent sibling. Records history. |
| `moveElement` | `(id: string, newParentId: string \| null, index: number) => void` | Moves element to a new parent at a given index. Records history. |
| `setDirty` | `(dirty: boolean) => void` | Manually set the dirty flag. |
| `setLoading` | `(loading: boolean) => void` | Manually set the loading flag. |
| `setSaveStatus` | `(status: SaveStatus) => void` | Updates the save status indicator. |

## Async Actions

Created via `createEditorActions(api, schema)`. These handle API communication:

| Action | Signature | API Call | Description |
|---|---|---|---|
| `loadSites` | `() => Promise<Site[]>` | `GET /api/sites` | Fetches all sites. |
| `createSite` | `(name, slug) => Promise<Site>` | `POST /api/sites` | Creates a new site. |
| `loadPages` | `(siteId) => Promise<PageItem[]>` | `GET /api/pages?siteId=X` | Fetches pages for a site, updates store. |
| `createPage` | `(siteId, title, slug, parentId?) => Promise<Page>` | `POST /api/pages` | Creates a new page, reloads page list. |
| `deletePage` | `(id) => Promise<void>` | `DELETE /api/pages/:id` | Deletes a page, switches to next available. |
| `loadElements` | `(pageId) => Promise<RenderElement[]>` | `GET /api/elements?pageId=X` | Fetches elements for a page, updates store. |
| `addElement` | `(pageId, type, parentId?) => Promise<RenderElement>` | `POST /api/elements` | Creates an element via API, adds to store, selects it. |
| `updateElementData` | `(id, data) => void` | None (local only) | Updates element data in store. Call `saveAll()` to persist. |
| `updateElementStyles` | `(id, styles) => void` | None (local only) | Updates element styles in store. Call `saveAll()` to persist. |
| `deleteElement` | `(id) => Promise<void>` | `DELETE /api/elements/:id` | Deletes via API, removes from store. |
| `duplicateElement` | `(id) => Promise<RenderElement[]>` | `POST /api/elements` (per clone) | Deep-clones an element tree via API, inserts into store. |
| `saveAll` | `() => Promise<void>` | `PATCH /api/elements/:id` (per element) | Persists all dirty elements and pages to the API. |

## Undo/Redo

The store maintains a history stack (max 50 entries) for element and page state:

| Action | Description |
|---|---|
| `undo()` | Restores the previous history entry (decrements `_historyIndex`). |
| `redo()` | Restores the next history entry (increments `_historyIndex`). |
| `canUndo()` | Returns `true` if `_historyIndex >= 0`. |
| `canRedo()` | Returns `true` if `_historyIndex + 1 < _history.length`. |

History is recorded automatically by `reorderElement` and `moveElement`. Other mutations (like `updateElement`) update state directly without history entries.

## Usage Examples

### Basic store access

```ts
import { useEditorStore } from "@hi/editor";

function MyComponent() {
  const selectedId = useEditorStore((s) => s.selectedElementId);
  const elements = useEditorStore((s) => s.elements);
  const selectElement = useEditorStore((s) => s.selectElement);

  return (
    <div>
      <p>Selected: {selectedId ?? "none"}</p>
      <p>Elements: {elements.length}</p>
      <button onClick={() => selectElement(null)}>Deselect</button>
    </div>
  );
}
```

### Using async actions

```ts
import { useEditorContext } from "@hi/editor";

function PagePanel() {
  const { actions } = useEditorContext();
  const activePageId = useEditorStore((s) => s.activePageId);

  async function handleAddHeading() {
    if (!activePageId) return;
    await actions.addElement(activePageId, "heading");
  }

  return <button onClick={handleAddHeading}>Add Heading</button>;
}
```

### Save flow

```ts
const saveStatus = useEditorStore((s) => s.saveStatus);
const isDirty = useEditorStore((s) => s.isDirty);
const { actions } = useEditorContext();

async function handleSave() {
  await actions.saveAll();
}

// saveStatus: "idle" → "saving" → "saved"
```

### Undo/Redo with keyboard shortcuts

```ts
function useKeyboardShortcuts() {
  const undo = useEditorStore((s) => s.undo);
  const redo = useEditorStore((s) => s.redo);
  const canUndo = useEditorStore((s) => s.canUndo);
  const canRedo = useEditorStore((s) => s.canRedo);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey && canRedo()) redo();
        else if (canUndo()) undo();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo, canUndo, canRedo]);
}
```

## EditorContext

The `EditorProvider` wraps the store, API, schema, and actions together:

```tsx
import { EditorProvider, createApiFetch } from "@hi/editor";
import { schema, websiteRenderer } from "@hi/website";

function App({ siteId }: { siteId: string }) {
  return (
    <EditorProvider
      schema={schema}
      api={createApiFetch("/api")}
      renderer={websiteRenderer}
    >
      <Editor siteId={siteId} />
    </EditorProvider>
  );
}
```

Inside any child component:

```ts
const { schema, api, renderer, actions } = useEditorContext();
```
