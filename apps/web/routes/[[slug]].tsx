import { page } from "fresh";
import { define } from "../utils.ts";
import { PageRenderer, type RenderElement } from "@hi/website";
import { db } from "@hi/database";
import { pages } from "@hi/database";
import { eq } from "drizzle-orm";

type PageData = { error: string | null; content: RenderElement[] | null };

const fallbackContent: RenderElement[] = [
  { id: "s1", type: "section", data: {}, styles: { width: "full", padding: "16", paddingX: "6" }, children: [
    { id: "h1", type: "heading", data: { content: "@hi/web", tagName: "h1" }, styles: { fontSize: "4xl", fontWeight: "bold" }, children: [] },
    { id: "t1", type: "text", data: { content: "Configure SITE_ID and seed the database to render pages." }, styles: { fontSize: "lg", color: "#6b7280" }, children: [] },
  ]},
];

export const handler = define.handlers({
  async GET(ctx) {
    const siteId = Deno.env.get("SITE_ID");
    if (!siteId) {
      return page({ error: "SITE_ID not configured", content: null });
    }

    const slug = ctx.params.slug ?? "";
    const path = "/" + slug;
    const allPages = await db.select().from(pages).where(eq(pages.siteId, siteId));
    const found = allPages.find((p) => (p.data as Record<string, unknown>)?.path === (path ? "/" : ""));

    if (!found) {
      return page({ error: "Page not found: " + (path || "/"), content: null });
    }

    const status = (found.data as Record<string, unknown>)?.status as string | undefined;
    const content = (status === "published" ? found.pubContent : found.content) as RenderElement[] | undefined;

    return page({ error: null, content: content ?? [] });
  },
});

export default define.page<typeof handler>(({ data }: { data: PageData }) => {
  if (!data.content) {
    if (data.error) {
      return (
        <div class="flex min-h-screen items-center justify-center">
          <p class="text-lg text-gray-500">{data.error}</p>
        </div>
      );
    }
    return <PageRenderer content={fallbackContent} />;
  }

  return <PageRenderer content={data.content} />;
});
