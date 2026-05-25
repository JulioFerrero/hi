import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { db, pages, elements, revisions } from "@hi/database";
import { eq, and, ne, asc, desc } from "drizzle-orm";
import { nanoid } from "nanoid";
import { getById, updateById, deleteById } from "./helpers";

export const pagesRoute = new Hono()
  .get("/", async (c) => {
    const siteId = c.req.query("siteId");
    if (!siteId) return c.json({ error: "siteId required" }, 400);
    const all = await db.select().from(pages).where(eq(pages.siteId, siteId)).orderBy(asc(pages.createdAt));
    return c.json(all);
  })
  .get("/:id", async (c) => {
    const row = await getById(pages, c.req.param("id"));
    if (!row) return c.json({ error: "Not found" }, 404);
    return c.json(row);
  })
  .get("/by-path/:path{.+}", async (c) => {
    const path = "/" + c.req.param("path");
    const siteId = c.req.query("siteId");
    if (!siteId) return c.json({ error: "siteId required" }, 400);
    const all = await db.select().from(pages).where(eq(pages.siteId, siteId));
    const match = all.find((p) => (p.data as Record<string, unknown>)?.path === path);
    if (!match) return c.json({ error: "Not found" }, 404);
    return c.json(match);
  })
  .post(
    "/",
    zValidator("json", z.object({
      siteId: z.string(),
      slug: z.string().min(1),
      data: z.record(z.unknown()).optional(),
    })),
    async (c) => {
      const body = c.req.valid("json");
      const [row] = await db.insert(pages).values({
        id: nanoid(),
        siteId: body.siteId,
        slug: body.slug,
        data: (body.data ?? { title: body.slug, path: "/" + body.slug, status: "draft" }) as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      }).returning();
      return c.json(row, 201);
    }
  )
  .patch(
    "/:id",
    zValidator("json", z.object({
      slug: z.string().min(1).optional(),
      data: z.record(z.unknown()).optional(),
    })),
    async (c) => {
      const body = c.req.valid("json");
      const row = await updateById(pages, c.req.param("id"), { slug: body.slug, data: body.data as any }); // eslint-disable-line @typescript-eslint/no-explicit-any
      if (!row) return c.json({ error: "Not found" }, 404);
      return c.json(row);
    }
  )
  .delete("/:id", async (c) => {
    const row = await deleteById(pages, c.req.param("id"));
    if (!row) return c.json({ error: "Not found" }, 404);
    return c.json({ ok: true });
  })
  .post("/:id/publish", zValidator("json", z.object({
    deletedElementIds: z.array(z.string()).optional(),
  })), async (c) => {
    const pageId = c.req.param("id");
    const { deletedElementIds = [] } = c.req.valid("json");
    const page = await getById(pages, pageId);
    if (!page) return c.json({ error: "Page not found" }, 404);

    const currentElements = await db.select().from(elements)
      .where(eq(elements.pageId, pageId))
      .orderBy(asc(elements.order));

    const snapshot = {
      elements: currentElements
        .filter((el) => el.status !== "draft")
        .map((el) => ({
          id: el.id,
          parentId: el.parentId,
          type: el.type,
          data: el.pubData ?? el.data,
          styles: el.pubStyles ?? el.styles,
          order: el.order,
        })),
      page: page.data,
    };

    await db.insert(revisions).values({
      id: nanoid(),
      pageId,
      snapshot: snapshot as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    });

    if (deletedElementIds.length > 0) {
      for (const id of deletedElementIds) {
        await db.delete(elements).where(eq(elements.id, id));
      }
    }

    await db.update(elements)
      .set({ pubData: elements.data as any, pubStyles: elements.styles as any, status: "published", updatedAt: new Date() }) // eslint-disable-line @typescript-eslint/no-explicit-any
      .where(eq(elements.pageId, pageId));

    await db.update(pages)
      .set({ data: { ...(page.data as Record<string, unknown>), status: "published" } as any, updatedAt: new Date() }) // eslint-disable-line @typescript-eslint/no-explicit-any
      .where(eq(pages.id, pageId));

    return c.json({ ok: true });
  })
  .post("/:id/discard-draft", async (c) => {
    const pageId = c.req.param("id");

    await db.delete(elements)
      .where(and(eq(elements.pageId, pageId), eq(elements.status, "draft")));

    await db.update(elements)
      .set({ data: elements.pubData as any, styles: elements.pubStyles as any, status: "published", updatedAt: new Date() }) // eslint-disable-line @typescript-eslint/no-explicit-any
      .where(and(eq(elements.pageId, pageId), ne(elements.status, "draft")));

    return c.json({ ok: true });
  })
  .get("/:id/revisions", async (c) => {
    const pageId = c.req.param("id");
    const all = await db.select({
      id: revisions.id,
      label: revisions.label,
      createdAt: revisions.createdAt,
    }).from(revisions)
      .where(eq(revisions.pageId, pageId))
      .orderBy(desc(revisions.createdAt));
    return c.json(all);
  })
  .get("/:id/revisions/:revId", async (c) => {
    const [rev] = await db.select().from(revisions)
      .where(eq(revisions.id, c.req.param("revId")));
    if (!rev) return c.json({ error: "Not found" }, 404);
    return c.json(rev);
  })
  .post("/:id/revisions/:revId/restore", async (c) => {
    const pageId = c.req.param("id");
    const [rev] = await db.select().from(revisions)
      .where(eq(revisions.id, c.req.param("revId")));
    if (!rev) return c.json({ error: "Revision not found" }, 404);

    const snapshot = rev.snapshot as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (!snapshot?.elements) return c.json({ error: "Invalid snapshot" }, 400);

    await db.delete(elements).where(eq(elements.pageId, pageId));

    const idMap = new Map<string, string>();
    for (const el of snapshot.elements as Array<Record<string, unknown>>) {
      idMap.set(el.id as string, nanoid());
    }

    for (const el of snapshot.elements as Array<Record<string, unknown>>) {
      const newId = idMap.get(el.id as string)!;
      const oldParentId = el.parentId as string | null;
      const elData = (el.data ?? {}) as Record<string, unknown>;
      const elStyles = (el.styles ?? {}) as Record<string, unknown>;
      await db.insert(elements).values({
        id: newId,
        pageId,
        parentId: oldParentId ? (idMap.get(oldParentId) ?? oldParentId) : null,
        type: el.type as string,
        data: elData,
        styles: elStyles,
        pubData: elData,
        pubStyles: elStyles,
        order: el.order as number ?? 0,
        status: "published",
      });
    }

    return c.json({ ok: true });
  })
  .get("/:id/diff", async (c) => {
    const pageId = c.req.param("id");

    const allEls = await db.select().from(elements)
      .where(eq(elements.pageId, pageId))
      .orderBy(asc(elements.order));

    const added = allEls.filter((el) => el.status === "draft");
    const modified = allEls.filter((el) => {
      if (el.status !== "modified") return false;
      return JSON.stringify(el.data) !== JSON.stringify(el.pubData) ||
        JSON.stringify(el.styles) !== JSON.stringify(el.pubStyles);
    });

    return c.json({
      draft: allEls.map((el) => ({ ...el, data: el.data, styles: el.styles })),
      published: allEls.map((el) => ({ ...el, data: el.pubData ?? el.data, styles: el.pubStyles ?? el.styles })),
      changes: { added: added.length, modified: modified.length, addedElements: added, modifiedElements: modified },
    });
  });
