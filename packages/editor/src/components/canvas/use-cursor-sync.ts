import { useState, useEffect, useRef, useCallback } from "react";
import { useEditorStore } from "../../stores";

export interface RemoteCursor {
  userId: string;
  name: string;
  color: string;
  x: number;
  y: number;
  lastSeen: number;
}

type CursorMap = Map<string, RemoteCursor>;

export function useCursorSync(
  userId: string,
  userName: string,
  userColor: string,
) {
  const cursorsRef = useRef<CursorMap>(new Map());
  const listenersRef = useRef<Set<() => void>>(new Set());
  const wsRef = useRef<WebSocket | null>(null);
  const joinedRef = useRef(false);

  const activeSiteId = useEditorStore((s) => s.activeSiteId);
  const activePageId = useEditorStore((s) => s.activePageId);

  const subscribe = useCallback((listener: () => void) => {
    listenersRef.current.add(listener);
    return () => { listenersRef.current.delete(listener); };
  }, []);

  const getSnap = useCallback(() => cursorsRef.current, []);

  const notify = useCallback(() => {
    for (const l of listenersRef.current) l();
  }, []);

  useEffect(() => {
    if (!activeSiteId || !activePageId || !userId) return;

    const proto = globalThis.location.protocol === "https:" ? "wss:" : "ws:";
    const ws = new WebSocket(`${proto}//${globalThis.location.host}/ws`);
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join", userId, name: userName, color: userColor, siteId: activeSiteId, pageId: activePageId }));
      joinedRef.current = true;
    };

    ws.onmessage = (ev) => {
      let msg: Record<string, unknown>;
      try { msg = JSON.parse(ev.data as string); } catch { return; }

      if (msg.type === "join") {
        cursorsRef.current.set(msg.userId as string, {
          userId: msg.userId as string,
          name: msg.name as string,
          color: msg.color as string,
          x: -100,
          y: -100,
          lastSeen: Date.now(),
        });
        notify();
      }

      if (msg.type === "cursor") {
        const existing = cursorsRef.current.get(msg.userId as string);
        if (existing) {
          existing.x = msg.x as number;
          existing.y = msg.y as number;
          existing.lastSeen = Date.now();
        }
        notify();
      }

      if (msg.type === "leave") {
        cursorsRef.current.delete(msg.userId as string);
        notify();
      }
    };

    ws.onclose = () => { wsRef.current = null; joinedRef.current = false; };
    ws.onerror = () => { wsRef.current = null; joinedRef.current = false; };

    return () => {
      ws.close();
      wsRef.current = null;
      joinedRef.current = false;
      cursorsRef.current.clear();
    };
  }, [userId, userName, userColor, activeSiteId, activePageId, notify]);

  const sendCursor = useCallback((x: number, y: number) => {
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "cursor", x, y }));
    }
  }, []);

  const rejoin = useCallback((newPageId: string) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN || !activeSiteId) return;
    cursorsRef.current.clear();
    notify();
    ws.send(JSON.stringify({ type: "join", userId, name: userName, color: userColor, siteId: activeSiteId, pageId: newPageId }));
  }, [userId, userName, userColor, activeSiteId, notify]);

  return { subscribe, getSnap, sendCursor, rejoin };
}

export function useRemoteCursors(
  subscribe: (listener: () => void) => () => void,
  getSnap: () => Map<string, RemoteCursor>,
  ownUserId: string,
) {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    return subscribe(() => forceUpdate((n) => n + 1));
  }, [subscribe]);

  const staleThreshold = Date.now() - 30000;
  const cursors = getSnap();
  const active: RemoteCursor[] = [];
  for (const [, c] of cursors) {
    if (c.userId === ownUserId) continue;
    if (c.lastSeen > staleThreshold || c.x > -100) active.push(c);
  }
  return active;
}
