import { Hono } from "hono";
import { db, user, account, session } from "@hi/database";
import { eq } from "drizzle-orm";
import { auth } from "@hi/auth";
import {
  authMiddleware,
  requireAuth,
  requireAdmin,
  type AuthVariables,
} from "@hi/auth/middleware";
import { uploadFile } from "../../lib/storage";

export const adminUsersRoute = new Hono<{ Variables: AuthVariables }>();

adminUsersRoute.use("*", authMiddleware);

adminUsersRoute.post("/me/photo", async (c) => {
  const sessionUser = c.get("user");
  if (!sessionUser?.id) return c.json({ error: "Unauthorized" }, 401);

  const formData = await c.req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return c.json({ error: "file required" }, 400);

  const uploaded = await uploadFile(file);

  await db.update(user).set({ image: uploaded.url } satisfies typeof user.$inferInsert).where(eq(user.id, sessionUser.id));

  return c.json({ url: uploaded.url });
});

adminUsersRoute.delete("/me", async (c) => {
  const sessionUser = c.get("user");
  if (!sessionUser?.id) return c.json({ error: "Unauthorized" }, 401);

  await db.delete(session).where(eq(session.userId, sessionUser.id));
  await db.delete(account).where(eq(account.userId, sessionUser.id));
  await db.delete(user).where(eq(user.id, sessionUser.id));

  return c.json({ ok: true });
});

adminUsersRoute.get("/", requireAdmin, async (c) => {
  const users = await db.select().from(user).orderBy(user.createdAt);
  const sanitized = users.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    emailVerified: u.emailVerified,
    image: u.image,
    role: u.role,
    createdAt: u.createdAt,
    updatedAt: u.updatedAt,
  }));
  return c.json(sanitized);
});

adminUsersRoute.post("/", requireAdmin, async (c) => {
  const body = await c.req.json();
  const { name, email, password, role } = body as {
    name: string;
    email: string;
    password: string;
    role?: string;
  };

  if (!name || !email || !password) {
    return c.json({ error: "name, email, and password are required" }, 400);
  }

  if (password.length < 8) {
    return c.json({ error: "Password must be at least 8 characters" }, 400);
  }

  const existing = await db.select().from(user).where(eq(user.email, email)).limit(1);
  if (existing.length > 0) {
    return c.json({ error: "A user with this email already exists" }, 409);
  }

  const result = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
    headers: c.req.raw.headers,
  });

  if (!result.user) {
    return c.json({ error: "Failed to create user" }, 500);
  }

  if (role) {
    await db.update(user).set({ role }).where(eq(user.id, result.user.id));
    (result.user as Record<string, unknown>).role = role;
  }

  return c.json(result.user, 201);
});

adminUsersRoute.patch("/:id", requireAdmin, async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  const { name, role } = body as { name?: string; role?: string };

  const [existing] = await db.select().from(user).where(eq(user.id, id)).limit(1);
  if (!existing) {
    return c.json({ error: "User not found" }, 404);
  }

  const updates: Record<string, unknown> = {};
  if (name !== undefined) updates.name = name;
  if (role !== undefined) updates.role = role;

  if (Object.keys(updates).length > 0) {
    await db.update(user).set(updates as typeof user.$inferInsert).where(eq(user.id, id));
  }

  const [updated] = await db.select().from(user).where(eq(user.id, id)).limit(1);

  return c.json({
    id: updated.id,
    name: updated.name,
    email: updated.email,
    emailVerified: updated.emailVerified,
    role: updated.role,
    createdAt: updated.createdAt,
  });
});

adminUsersRoute.delete("/:id", requireAdmin, async (c) => {
  const sessionUser = c.get("user");
  const id = c.req.param("id");

  if (sessionUser?.id === id) {
    return c.json({ error: "You cannot delete your own account" }, 400);
  }

  const [existing] = await db.select().from(user).where(eq(user.id, id)).limit(1);
  if (!existing) {
    return c.json({ error: "User not found" }, 404);
  }

  await db.delete(session).where(eq(session.userId, id));
  await db.delete(account).where(eq(account.userId, id));
  await db.delete(user).where(eq(user.id, id));

  return c.json({ ok: true });
});
