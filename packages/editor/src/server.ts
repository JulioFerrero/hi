import { app as apiApp } from "./api/index";
import { join } from "node:path";
import { readFile, stat } from "node:fs/promises";

type ClientInfo = { userId: string; name: string; color: string; siteId: string; pageId: string };

const rooms = new Map<string, Map<WebSocket, ClientInfo>>();

function getRoom(key: string) {
  let room = rooms.get(key);
  if (!room) { room = new Map(); rooms.set(key, room); }
  return room;
}

function roomKey(siteId: string, pageId: string) {
  return `${siteId}:${pageId}`;
}

function broadcast(key: string, from: WebSocket, msg: object) {
  const room = rooms.get(key);
  if (!room) return;
  const data = JSON.stringify(msg);
  for (const [ws] of room) {
    if (ws !== from && ws.readyState === WebSocket.OPEN) {
      ws.send(data);
    }
  }
}

function handleMessage(ws: WebSocket, raw: string) {
  let msg: Record<string, unknown>;
  try { msg = JSON.parse(raw); } catch { return; }

  if (msg.type === "join") {
    const { userId, name, color, siteId, pageId } = msg as Record<string, string>;
    if (!userId || !siteId || !pageId) return;

    console.log("[ws] join:", name, userId, "room:", siteId, pageId);

    for (const [key, existing] of rooms) {
      if (existing.delete(ws)) {
        console.log("[ws] removed from previous room:", key);
      }
    }

    const key = roomKey(siteId, pageId);
    const room = getRoom(key);
    for (const [, info] of room) {
      ws.send(JSON.stringify({ type: "join", userId: info.userId, name: info.name, color: info.color }));
    }
    room.set(ws, { userId, name, color, siteId, pageId });
    broadcast(key, ws, { type: "join", userId, name, color });
  }

  if (msg.type === "cursor") {
    const info = findClient(ws);
    if (!info) return;
    const key = roomKey(info.siteId, info.pageId);
    const room = rooms.get(key);
    if (room) console.log("[ws] cursor from", info.name, "room:", key, "members:", room.size);
    broadcast(key, ws, { type: "cursor", userId: info.userId, x: msg.x, y: msg.y });
  }
}

function findClient(ws: WebSocket): ClientInfo | undefined {
  for (const [, room] of rooms) {
    const info = room.get(ws);
    if (info) return info;
  }
  return undefined;
}

function handleDisconnect(ws: WebSocket) {
  for (const [key, room] of rooms) {
    const info = room.get(ws);
    if (info) {
      console.log("[ws] disconnect:", info.name, "room:", key);
      room.delete(ws);
      broadcast(key, ws, { type: "leave", userId: info.userId });
      if (room.size === 0) rooms.delete(key);
      return;
    }
  }
}

interface CreateServerOptions {
  port?: number;
  hostname?: string;
  distDir: string;
  tailwindCSS?: (classes: string[]) => Promise<string>;
  iframeBaseCSS?: () => Promise<string>;
  fontFileHandler?: (urlPathname: string) => Promise<Response | null>;
}

const mimeTypes: Record<string, string> = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

function getMimeType(path: string): string {
  const ext = path.lastIndexOf(".");
  return ext >= 0 ? mimeTypes[path.slice(ext)] ?? "application/octet-stream" : "application/octet-stream";
}

export function createServer(options: CreateServerOptions) {
  const { port = 5173, hostname = "0.0.0.0", distDir, tailwindCSS, iframeBaseCSS, fontFileHandler } = options;

  Deno.serve({ port, hostname }, async (req: Request) => {
    const url = new URL(req.url);

    if (url.pathname === "/ws" && req.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(req);
      console.log("[ws] new connection from", req.headers.get("host"));
      socket.onopen = () => {};
      socket.onmessage = (ev) => handleMessage(socket, ev.data as string);
      socket.onclose = () => handleDisconnect(socket);
      socket.onerror = () => handleDisconnect(socket);
      return response;
    }

    if (url.pathname === "/api/tailwind" && req.method === "POST" && tailwindCSS) {
      const body = await req.json();
      const css = await tailwindCSS(body.classes ?? []);
      return new Response(css, { headers: { "content-type": "text/css" } });
    }

    if (url.pathname === "/api/iframe-base" && iframeBaseCSS) {
      const css = await iframeBaseCSS();
      return new Response(css, { headers: { "content-type": "text/css", "cache-control": "public, max-age=60" } });
    }

    if (url.pathname.startsWith("/fonts/") && fontFileHandler) {
      const response = await fontFileHandler(url.pathname);
      if (response) return response;
    }

    if (url.pathname.startsWith("/api/")) {
      const path = url.pathname.slice(4) || "/";
      const newUrl = new URL(path + url.search, url.origin);
      const newReq = new Request(newUrl, req);
      return apiApp.fetch(newReq);
    }

    let filePath = join(distDir, url.pathname === "/" ? "index.html" : url.pathname);
    try {
      await stat(filePath);
    } catch {
      filePath = join(distDir, "index.html");
    }

    try {
      const content = await readFile(filePath);
      return new Response(new Uint8Array(content), { headers: { "content-type": getMimeType(filePath) } });
    } catch {
      return new Response("Not Found", { status: 404 });
    }
  });
}
