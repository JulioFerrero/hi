import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { db } from "@wb/database";
import { pages } from "@wb/database";
import { eq, asc } from "drizzle-orm";
import { nanoid } from "nanoid";

export const pagesRoute = new Hono()
  .get("/", async (c) => {
    const siteId = c.req.query("siteId");
    if (!siteId) return c.json({ error: "siteId required" }, 400);
    const all = await db.select().from(pages).where(eq(pages.siteId, siteId)).orderBy(asc(pages.createdAt));
    return c.json(all);
  })
  .get("/:id", async (c) => {
    const [row] = await db.select().from(pages).where(eq(pages.id, c.req.param("id")));
    if (!row) return c.json({ error: "Not found" }, 404);
    return c.json(row);
  })
  .get("/by-path/:path{.+}", async (c) => {
    const path = "/" + c.req.param("path");
    const siteId = c.req.query("siteId");
    if (!siteId) return c.json({ error: "siteId required" }, 400);
    const all = await db.select().from(pages).where(eq(pages.siteId, siteId));
    const match = all.find((p) => (p.data as any)?.path === path);
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
        data: (body.data ?? { title: body.slug, path: "/" + body.slug, status: "draft" }) as any,
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
      const [row] = await db.update(pages)
        .set({ slug: body.slug, data: body.data as any, updatedAt: new Date() })
        .where(eq(pages.id, c.req.param("id")))
        .returning();
      if (!row) return c.json({ error: "Not found" }, 404);
      return c.json(row);
    }
  )
  .delete("/:id", async (c) => {
    const [row] = await db.delete(pages).where(eq(pages.id, c.req.param("id"))).returning();
    if (!row) return c.json({ error: "Not found" }, 404);
    return c.json({ ok: true });
  });
