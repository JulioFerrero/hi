import { define } from "../utils.ts";
import { tailwindHtmlMiddleware } from "@hi/website";
import { resolve, join } from "node:path";
import { readFile } from "node:fs/promises";

const mw = tailwindHtmlMiddleware({ fonts: true });

const ROOT = resolve(import.meta.dirname, "../../..");
const FONT_DIRS = [
  join(ROOT, "node_modules/@fontsource/fraunces/files"),
  join(ROOT, "node_modules/@fontsource/recursive/files"),
];

const MIME: Record<string, string> = { ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf" };

export default define.middleware(async (ctx) => {
  const url = new URL(ctx.req.url);

  if (url.pathname.startsWith("/files/")) {
    const name = url.pathname.slice(7);
    const ext = name.lastIndexOf(".");
    const ct = ext >= 0 ? MIME[name.slice(ext)] : undefined;
    if (!ct) return new Response("Not Found", { status: 404 });

    for (const dir of FONT_DIRS) {
      try {
        const data = await readFile(join(dir, name));
        return new Response(data, {
          headers: { "content-type": ct, "cache-control": "public, max-age=31536000, immutable" },
        });
      } catch { /* next dir */ }
    }
    return new Response("Not Found", { status: 404 });
  }

  return mw(ctx, () => ctx.next());
});
