import type { EditorApi } from "../types";

export function createApiFetch(basePath: string = "/api"): EditorApi {
  return {
    async fetch(path: string, init?: RequestInit) {
      const res = await fetch(`${basePath}${path}`, {
        ...init,
        headers: {
          "Content-Type": "application/json",
          ...init?.headers,
        },
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      return res.json();
    },
  };
}
