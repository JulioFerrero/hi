import { db } from "@hi/database";
import { pages, elements } from "@hi/database";
import { eq, asc } from "drizzle-orm";
import { PageRenderer, type RenderElement } from "@hi/website";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const path = "/" + (slug?.join("/") ?? "");
  const siteId = Deno.env.get("SITE_ID");

  if (!siteId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">SITE_ID not configured</p>
      </div>
    );
  }

  const allPages = await db.select().from(pages).where(eq(pages.siteId, siteId));
  const page = allPages.find((p) => (p.data as Record<string, unknown>)?.path === (path === "" ? "/" : path));

  if (!page) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Page not found: {path || "/"}</p>
      </div>
    );
  }

  const pageElements = await db.select().from(elements)
    .where(eq(elements.pageId, page.id))
    .orderBy(asc(elements.order));

  const renderElements: RenderElement[] = pageElements.map((e) => ({
    id: e.id,
    parentId: e.parentId,
    type: e.type,
    data: e.data ?? {},
    styles: e.styles ?? {},
    order: e.order,
  }));

  return <PageRenderer elements={renderElements} />;
}

export const dynamic = "force-dynamic";
