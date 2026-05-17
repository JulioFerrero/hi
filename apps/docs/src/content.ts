import gettingStartedRaw from "../content/getting-started.md?raw";
import architectureRaw from "../content/architecture.md?raw";
import elementsRaw from "../content/elements.md?raw";
import stylesRaw from "../content/styles.md?raw";
import editorStoreRaw from "../content/editor-store.md?raw";
import rendererRaw from "../content/renderer.md?raw";
import apiRaw from "../content/api.md?raw";
import customElementsRaw from "../content/custom-elements.md?raw";

interface DocPage {
  slug: string;
  title: string;
  description: string;
  order: number;
  category: string;
}

interface ParsedDoc {
  meta: Record<string, string>;
  body: string;
}

function parseFrontmatter(raw: string): ParsedDoc {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      meta[key] = val;
    }
  }
  return { meta, body: match[2] };
}

const FILES: Record<string, string> = {
  "getting-started": gettingStartedRaw,
  "architecture": architectureRaw,
  "elements": elementsRaw,
  "styles": stylesRaw,
  "editor-store": editorStoreRaw,
  "renderer": rendererRaw,
  "api": apiRaw,
  "custom-elements": customElementsRaw,
};

const ALL_PAGES: DocPage[] = Object.entries(FILES).map(([slug, raw]) => {
  const { meta } = parseFrontmatter(raw);
  return {
    slug,
    title: meta.title ?? slug,
    description: meta.description ?? "",
    order: Number(meta.order ?? 99),
    category: meta.category ?? "General",
  };
}).sort((a, b) => a.order - b.order);

export function getAllPages(): DocPage[] {
  return ALL_PAGES;
}

export function getPage(slug: string): ParsedDoc | null {
  const raw = FILES[slug];
  if (!raw) return null;
  return parseFrontmatter(raw);
}

export function getCategories(): { name: string; pages: DocPage[] }[] {
  const map = new Map<string, DocPage[]>();
  for (const p of ALL_PAGES) {
    const cat = p.category || "General";
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(p);
  }
  return Array.from(map.entries()).map(([name, pages]) => ({ name, pages }));
}
