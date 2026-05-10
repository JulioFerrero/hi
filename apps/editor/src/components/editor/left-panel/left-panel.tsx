"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useEditorStore } from "@/stores";
import { useEditorActions } from "@/lib/editor-actions";
import { buildTree, type RenderElement } from "@wb/website";
import { cn } from "@wb/utils";
import { Tree, type NodeRendererProps, type NodeApi } from "react-arborist";
import { Plus, Trash2, File, Pencil, ChevronRight, ChevronDown, Copy, ArrowUp, ArrowDown } from "lucide-react";
import { ELEMENT_TYPES, ELEMENT_ICON_MAP } from "@/lib/element-config";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@wb/ui/dialog";

type PageItem = {
  id: string;
  slug: string;
  data: { title: string; path: string; status: string; parentId?: string; order?: number };
};

interface PageTreeData {
  id: string;
  name: string;
  slug: string;
  isRoot: boolean;
  pageData: PageItem["data"];
  children?: PageTreeData[];
}

interface ElementTreeData {
  id: string;
  type: string;
  content: string;
  isContainer: boolean;
  children?: ElementTreeData[];
}

const CONTAINER_TYPES = new Set(["section", "row", "column", "grid"]);

function derivePath(slug: string, parentId: string | undefined, pages: PageItem[]): string {
  if (!parentId) return "/" + slug;
  const parent = pages.find((p) => p.id === parentId);
  if (!parent) return "/" + slug;
  return parent.data.path.replace(/\/$/, "") + "/" + slug;
}

function ActionBtn({ onClick, title, children, className }: {
  onClick: (e: React.MouseEvent) => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onClick={(e) => { e.stopPropagation(); e.preventDefault(); onClick(e); }}
      className={cn("p-0.5 text-gray-400", className)}
      title={title}
    >
      {children}
    </button>
  );
}

export function LeftPanel() {
  const pages = useEditorStore((s) => s.pages);
  const activePageId = useEditorStore((s) => s.activePageId);
  const activeSiteId = useEditorStore((s) => s.activeSiteId);
  const elements = useEditorStore((s) => s.elements);
  const selectedElementId = useEditorStore((s) => s.selectedElementId);
  const setActivePage = useEditorStore((s) => s.setActivePage);
  const selectElement = useEditorStore((s) => s.selectElement);
  const updatePageLocal = useEditorStore((s) => s.updatePageLocal);
  const moveElement = useEditorStore((s) => s.moveElement);
  const reorderElement = useEditorStore((s) => s.reorderElement);
  const actions = useEditorActions();

  const [addElementParentId, setAddElementParentId] = useState<string | null>(null);

  useEffect(() => {
    if (activeSiteId) actions.loadPages(activeSiteId);
  }, [activeSiteId]);

  useEffect(() => {
    if (activePageId) actions.loadElements(activePageId);
  }, [activePageId]);

  const rootPage = pages.find((p) => p.data.path === "/");

  const pageTreeData = useMemo<PageTreeData[]>(() => {
    function buildChildren(parentId: string): PageTreeData[] {
      return pages
        .filter((p) => p.data.parentId === parentId)
        .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0))
        .map((p) => ({
          id: p.id,
          name: p.data.title,
          slug: p.slug,
          isRoot: false,
          pageData: p.data,
          children: buildChildren(p.id),
        }));
    }

    if (!rootPage) return [];
    return [
      {
        id: rootPage.id,
        name: rootPage.data.title,
        slug: rootPage.slug,
        isRoot: true,
        pageData: rootPage.data,
        children: buildChildren(rootPage.id),
      },
    ];
  }, [pages, rootPage]);

  const elementTreeData = useMemo<ElementTreeData[]>(() => {
    const tree = buildTree(elements);
    function convert(els: RenderElement[]): ElementTreeData[] {
      return els.map((el) => ({
        id: el.id,
        type: el.type,
        content: el.data.content ? String(el.data.content).slice(0, 30) : "",
        isContainer: CONTAINER_TYPES.has(el.type),
        children: el.children?.length ? convert(el.children) : undefined,
      }));
    }
    return convert(tree);
  }, [elements]);

  const handlePageMove = useCallback(
    ({ dragIds, parentId, index }: { dragIds: string[]; parentId: string | null; index: number }) => {
      const dragId = dragIds[0];
      if (!dragId) return;
      const newParentId = parentId ?? undefined;
      const draggedPage = pages.find((p) => p.id === dragId);
      if (!draggedPage) return;
      const newPath = derivePath(draggedPage.slug, newParentId, pages);
      updatePageLocal(dragId, { data: { ...draggedPage.data, parentId: newParentId, path: newPath, order: index } });

      const siblings = pages.filter(
        (p) => p.data.parentId === newParentId && p.id !== dragId
      );
      siblings.forEach((sib, i) => {
        const order = i < index ? i : i + 1;
        updatePageLocal(sib.id, { data: { ...sib.data, order } });
      });
    },
    [pages, updatePageLocal]
  );

  const handlePageRename = useCallback(
    ({ id, name }: { id: string; name: string }) => {
      const page = pages.find((p) => p.id === id);
      if (!page) return;
      const newSlug = name.toLowerCase().replace(/\s+/g, "-");
      const newPath = derivePath(newSlug, page.data.parentId, pages);
      updatePageLocal(id, { slug: newSlug, data: { ...page.data, title: name, path: newPath } });
    },
    [pages, updatePageLocal]
  );

  const handlePageDelete = useCallback(
    ({ ids }: { ids: string[] }) => {
      for (const id of ids) {
        actions.deletePage(id);
      }
    },
    [actions]
  );

  const handlePageSelect = useCallback(
    (nodes: NodeApi<PageTreeData>[]) => {
      if (nodes.length > 0 && nodes[0]) {
        setActivePage(nodes[0].id);
      }
    },
    [setActivePage]
  );

  const pageVisibleCount = useMemo(() => {
    function count(nodes: PageTreeData[], open: boolean): number {
      let n = 0;
      for (const node of nodes) {
        n += 1;
        if (open && node.children?.length) {
          n += count(node.children, open);
        }
      }
      return n;
    }
    return count(pageTreeData, true);
  }, [pageTreeData]);

  const handleElementMove = useCallback(
    ({ dragIds, parentId, index }: { dragIds: string[]; parentId: string | null; index: number }) => {
      const dragId = dragIds[0];
      if (!dragId) return;
      moveElement(dragId, parentId, index);
    },
    [moveElement]
  );

  const handleElementSelect = useCallback(
    (nodes: NodeApi<ElementTreeData>[]) => {
      if (nodes.length > 0 && nodes[0]) {
        selectElement(nodes[0].id);
      }
    },
    [selectElement]
  );

  const elementVisibleCount = useMemo(() => {
    function count(nodes: ElementTreeData[], open: boolean): number {
      let n = 0;
      for (const node of nodes) {
        n += 1;
        if (open && node.children?.length) {
          n += count(node.children, open);
        }
      }
      return n;
    }
    return count(elementTreeData, true);
  }, [elementTreeData]);

  const handleAddElementToParent = useCallback(async (type: string) => {
    if (!activePageId) return;
    await actions.addElement(activePageId, type, addElementParentId);
    setAddElementParentId(null);
  }, [activePageId, addElementParentId, actions]);

  return (
    <div className="w-[280px] flex-shrink-0 border-r bg-white flex flex-col">
      <div className="border-b p-3">
        <h3 className="text-xs font-semibold uppercase text-gray-400">Pages</h3>
        <div className="mt-2">
          <Tree<PageTreeData>
            data={pageTreeData}
            width={252}
            height={Math.max(pageVisibleCount * 32, 80)}
            rowHeight={32}
            indent={20}
            openByDefault={false}
            selection={activePageId ?? undefined}
            onSelect={handlePageSelect}
            onMove={handlePageMove}
            onRename={handlePageRename}
            onDelete={handlePageDelete}
            disableDrag={(d: PageTreeData) => d.isRoot}
            disableDrop={({ dragNodes }) => dragNodes.some((n) => n.data.isRoot)}
          >
            {(props) => <PageNode {...props} />}
          </Tree>
        </div>
        {activeSiteId && (
          <button
            onClick={async () => {
              const title = prompt("Page title:");
              if (!title) return;
              const slug = title.toLowerCase().replace(/\s+/g, "-");
              const parentId = rootPage?.id ?? undefined;
              await actions.createPage(activeSiteId, title, slug, parentId);
            }}
            className="mt-2 flex w-full items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <Plus className="h-3 w-3" /> Add page
          </button>
        )}
      </div>

      <div className="flex-1 overflow-auto p-3">
        <h3 className="text-xs font-semibold uppercase text-gray-400">Elements</h3>
        {elementTreeData.length === 0 && (
          <p className="mt-2 text-xs text-gray-400">
            {activePageId ? "No elements yet. Use the toolbar to add." : "Select a page first."}
          </p>
        )}
        {elementTreeData.length > 0 && (
          <div className="mt-2">
            <Tree<ElementTreeData>
              data={elementTreeData}
              width={252}
              height={Math.max(elementVisibleCount * 28, 80)}
              rowHeight={28}
              indent={16}
              openByDefault={false}
              selection={selectedElementId ?? undefined}
              onSelect={handleElementSelect}
              onMove={handleElementMove}
              disableDrop={({ dragNodes }) => dragNodes.some((n) => !n.data.isContainer)}
            >
              {(props) => (
                <ElementNode
                  {...props}
                  onDelete={actions.deleteElement}
                  onDuplicate={actions.duplicateElement}
                  onReorder={reorderElement}
                  onAddChild={setAddElementParentId}
                />
              )}
            </Tree>
          </div>
        )}
      </div>

      <Dialog open={addElementParentId !== null} onOpenChange={(open) => { if (!open) setAddElementParentId(null); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Element</DialogTitle>
            <DialogDescription>Choose an element type to add inside the selected container.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-2 py-2">
            {ELEMENT_TYPES.map((et) => {
              const Icon = ELEMENT_ICON_MAP[et.icon];
              return (
                <button
                  key={et.type}
                  onClick={() => handleAddElementToParent(et.type)}
                  className="flex flex-col items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-3 text-xs text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span className="font-medium">{et.label}</span>
                </button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PageNode({ node, style, dragHandle }: NodeRendererProps<PageTreeData>) {
  const actions = useEditorActions();

  const handleAddSubPage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const store = useEditorStore.getState();
    const siteId = store.activeSiteId;
    if (!siteId) return;
    const title = prompt("Sub-page title:");
    if (!title) return;
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    actions.createPage(siteId, title, slug, node.id);
  }, [actions, node.id]);

  return (
    <div
      ref={dragHandle}
      style={style}
      className={cn(
        "group flex items-center gap-1 rounded-md pr-1 text-sm select-none cursor-pointer",
        node.state.isSelected && "bg-blue-50 font-medium text-blue-700",
        node.state.willReceiveDrop && "bg-blue-50 ring-2 ring-blue-400 ring-inset",
        node.state.isDragging && "opacity-40",
        !node.state.isSelected && !node.state.willReceiveDrop && "hover:bg-gray-50"
      )}
      onClick={(e) => node.handleClick(e as any)}
    >
      {node.data.children?.length ? (
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); node.toggle(); }}
          className="flex-shrink-0 flex items-center justify-center w-4 h-4"
        >
          {node.isOpen ? (
            <ChevronDown className="h-3 w-3 text-gray-400" />
          ) : (
            <ChevronRight className="h-3 w-3 text-gray-400" />
          )}
        </button>
      ) : (
        <span className="w-4 flex-shrink-0" />
      )}
      <File className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" />

      {node.state.isEditing ? (
        <input
          className="min-w-0 flex-1 rounded border border-blue-300 px-1 py-0 text-xs outline-none bg-white"
          defaultValue={node.data.name}
          autoFocus
          onBlur={(e) => node.submit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") node.submit((e.target as HTMLInputElement).value);
            if (e.key === "Escape") node.reset();
          }}
        />
      ) : (
        <span className="truncate">{node.data.name}</span>
      )}

      {node.data.isRoot && <span className="text-[10px] text-gray-400">/</span>}

      <div className="ml-auto flex-shrink-0 items-center gap-0.5 hidden group-hover:flex">
        <ActionBtn onClick={handleAddSubPage} title="Add sub-page" className="hover:text-green-500">
          <Plus className="h-3 w-3" />
        </ActionBtn>
        {!node.data.isRoot && (
          <>
            <ActionBtn onClick={() => node.edit()} title="Rename" className="hover:text-blue-500">
              <Pencil className="h-3 w-3" />
            </ActionBtn>
            <ActionBtn onClick={() => actions.deletePage(node.id)} title="Delete" className="hover:text-red-500">
              <Trash2 className="h-3 w-3" />
            </ActionBtn>
          </>
        )}
      </div>
    </div>
  );
}

function ElementNode({
  node,
  style,
  dragHandle,
  onDelete,
  onDuplicate,
  onReorder,
  onAddChild,
}: NodeRendererProps<ElementTreeData> & {
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => Promise<unknown>;
  onReorder: (id: string, direction: "up" | "down") => void;
  onAddChild: (parentId: string) => void;
}) {
  const isContainer = node.data.isContainer;

  return (
    <div
      ref={dragHandle}
      style={style}
      className={cn(
        "group flex items-center gap-1 rounded-md pr-1 text-xs select-none cursor-pointer",
        node.state.isSelected && "bg-blue-50 font-medium text-blue-700",
        node.state.willReceiveDrop && "bg-blue-50 ring-2 ring-blue-400 ring-inset",
        node.state.isDragging && "opacity-40",
        !node.state.isSelected && !node.state.willReceiveDrop && "hover:bg-gray-50"
      )}
      onClick={(e) => node.handleClick(e as any)}
    >
      {node.data.children?.length ? (
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); node.toggle(); }}
          className="flex-shrink-0 flex items-center justify-center w-3 h-3"
        >
          {node.isOpen ? (
            <ChevronDown className="h-3 w-3 text-gray-400" />
          ) : (
            <ChevronRight className="h-3 w-3 text-gray-400" />
          )}
        </button>
      ) : (
        <span className="w-3 flex-shrink-0" />
      )}
      <span className="truncate capitalize">{node.data.type}</span>
      {node.data.content && (
        <span className="ml-1 truncate text-[10px] text-gray-400">{node.data.content}</span>
      )}
      <div className="ml-auto flex-shrink-0 items-center gap-0.5 hidden group-hover:flex">
        {isContainer && (
          <ActionBtn onClick={() => onAddChild(node.id)} title="Add child" className="hover:text-green-500">
            <Plus className="h-3 w-3" />
          </ActionBtn>
        )}
        <ActionBtn onClick={() => onReorder(node.id, "up")} title="Move up" className="hover:text-gray-700">
          <ArrowUp className="h-3 w-3" />
        </ActionBtn>
        <ActionBtn onClick={() => onReorder(node.id, "down")} title="Move down" className="hover:text-gray-700">
          <ArrowDown className="h-3 w-3" />
        </ActionBtn>
        <ActionBtn onClick={() => onDuplicate(node.id)} title="Duplicate" className="hover:text-blue-500">
          <Copy className="h-3 w-3" />
        </ActionBtn>
        <ActionBtn onClick={() => onDelete(node.id)} title="Delete" className="hover:text-red-500">
          <Trash2 className="h-3 w-3" />
        </ActionBtn>
      </div>
    </div>
  );
}
