import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { db } from "@wb/database";
import { sites } from "@wb/database";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export const sitesRoute = new Hono()
  .get("/", async (c) => {
    const all = await db.select().from(sites);
    return c.json(all);
  })
  .get("/:id", async (c) => {
    const [row] = await db.select().from(sites).where(eq(sites.id, c.req.param("id")));
    if (!row) return c.json({ error: "Not found" }, 404);
    return c.json(row);
  })
  .post(
    "/",
    zValidator("json", z.object({
      slug: z.string().min(1),
      data: z.record(z.unknown()).optional(),
    })),
    async (c) => {
      const body = c.req.valid("json");
      const [row] = await db.insert(sites).values({
        id: nanoid(),
        slug: body.slug,
        data: (body.data ?? { name: body.slug }) as any,
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
      const [row] = await db.update(sites)
        .set({ slug: body.slug, data: body.data as any, updatedAt: new Date() })
        .where(eq(sites.id, c.req.param("id")))
        .returning();
      if (!row) return c.json({ error: "Not found" }, 404);
      return c.json(row);
    }
  )
  .delete("/:id", async (c) => {
    const [row] = await db.delete(sites).where(eq(sites.id, c.req.param("id"))).returning();
    if (!row) return c.json({ error: "Not found" }, 404);
    return c.json({ ok: true });
  });
