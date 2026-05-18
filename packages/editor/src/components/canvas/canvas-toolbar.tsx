import { useEditorStore } from "../../stores";
import { useEditorContext } from "../../lib/context";
import { getIcon } from "../../icons";

function ElementToolbar({ pageId, containerSet }: { pageId: string | null; containerSet: Set<string> }) {
  const { schema, actions } = useEditorContext();
  const selectedElementId = useEditorStore((s) => s.selectedElementId);
  const elements = useEditorStore((s) => s.elements);
  if (!pageId) return null;

  const selected = selectedElementId ? elements.find((e) => e.id === selectedElementId) : null;
  const parentId = selected && containerSet.has(selected.type) ? selected.id : null;

  return (
    <>
      {schema.elementTypes.map((et) => {
        const Icon = getIcon(et.icon);
        if (!Icon) return null;
        return (
          <button
            type="button"
            key={et.type}
            onClick={() => actions.addElement(pageId, et.type, parentId)}
            className="flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors duration-150"
            title={parentId ? `Add ${et.label} inside ${selected!.type}` : `Add ${et.label}`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{et.label}</span>
          </button>
        );
      })}
    </>
  );
}

export function CanvasToolbar({
  pageId,
  containerSet,
  zoom,
  onZoomIn,
  onZoomOut,
  onFitScreen,
}: {
  pageId: string | null;
  containerSet: Set<string>;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitScreen: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-editor-canvas">
      <div className="flex items-center gap-0.5 rounded-2xl bg-popover/80 backdrop-blur-sm p-1 shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
        <ElementToolbar pageId={pageId} containerSet={containerSet} />
      </div>
      <div className="flex items-center gap-0.5 rounded-2xl bg-popover/80 backdrop-blur-sm px-3 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
        <button type="button" onClick={onZoomOut} className="rounded-lg px-2 py-0.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">−</button>
        <span className="text-xs text-muted-foreground tabular-nums min-w-[36px] text-center">{zoom}%</span>
        <button type="button" onClick={onZoomIn} className="rounded-lg px-2 py-0.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">+</button>
        <div className="w-px h-3 bg-border/60 mx-1" />
        <button type="button" onClick={onFitScreen} className="rounded-lg px-2 py-0.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">Fit</button>
      </div>
    </div>
  );
}
