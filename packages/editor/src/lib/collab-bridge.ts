import { useEditorStore } from "../stores";

let sharedWs: WebSocket | null = null;

const pendingUpdates = new Map<
  string,
  {
    patch: { data?: Record<string, unknown>; styles?: Record<string, string> };
    timer: ReturnType<typeof setTimeout>;
  }
>();

function send(msg: object) {
  if (sharedWs?.readyState === WebSocket.OPEN) {
    sharedWs.send(JSON.stringify(msg));
  }
}

export function getCollabSocket() {
  return sharedWs;
}

export function setCollabSocket(ws: WebSocket | null) {
  if (!ws) {
    for (const [, entry] of pendingUpdates) {
      clearTimeout(entry.timer);
    }
    pendingUpdates.clear();
  }
  sharedWs = ws;
}

export function sendCursor(x: number, y: number) {
  send({ type: "cursor", x, y });
}

export function sendCollabUpdate(
  elementId: string,
  patch: { data?: Record<string, unknown>; styles?: Record<string, string> },
) {
  const existing = pendingUpdates.get(elementId);
  if (existing) {
    clearTimeout(existing.timer);
    if (patch.data) {
      existing.patch.data = { ...(existing.patch.data ?? {}), ...patch.data };
    }
    if (patch.styles) {
      existing.patch.styles = { ...(existing.patch.styles ?? {}), ...patch.styles };
    }
  } else {
    pendingUpdates.set(elementId, {
      patch: { ...patch },
      timer: setTimeout(() => {}, 0),
    });
  }

  const current = pendingUpdates.get(elementId)!;
  clearTimeout(current.timer);
  current.timer = setTimeout(() => {
    pendingUpdates.delete(elementId);
    send({ type: "update", elementId, patch: current.patch });
  }, 150);
}

export function handleCollabMessage(msg: Record<string, unknown>) {
  if (msg.type === "update") {
    const elementId = msg.elementId as string;
    const patch = msg.patch as { data?: Record<string, unknown>; styles?: Record<string, string> };
    if (elementId && patch) {
      useEditorStore.getState().applyRemoteUpdate(elementId, patch);
    }
  }
}
