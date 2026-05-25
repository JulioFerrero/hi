import type { EditorApi } from "../types";

export function createApiFetch(basePath: string = "/api"): EditorApi {
  return {
    async fetch(path: string, init?: RequestInit) {
      const headers: Record<string, string> = {};

      if (!init?.body || init.body instanceof FormData === false) {
        headers["Content-Type"] = "application/json";
      }

      if (init?.headers) {
        Object.assign(headers, init.headers);
        delete init.headers;
      }

      const res = await fetch(`${basePath}${path}`, {
        ...init,
        headers,
        credentials: "include",
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      return res.json();
    },
  };
}
