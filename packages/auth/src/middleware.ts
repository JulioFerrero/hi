import type { Context, Next } from "hono";
import { auth } from "./auth";

export interface AuthVariables {
  user:
    | {
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image?: string | null;
        role?: string | null;
        createdAt: Date;
        updatedAt: Date;
      }
    | null;
  session:
    | {
        id: string;
        userId: string;
        token: string;
        expiresAt: Date;
        ipAddress?: string | null;
        userAgent?: string | null;
        createdAt: Date;
        updatedAt: Date;
      }
    | null;
}

export async function authMiddleware(c: Context<{ Variables: AuthVariables }>, next: Next) {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  c.set("user", session.user as AuthVariables["user"]);
  c.set("session", session.session as AuthVariables["session"]);
  return next();
}

export async function requireAuth(c: Context<{ Variables: AuthVariables }>, next: Next) {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  return next();
}

export async function requireAdmin(c: Context<{ Variables: AuthVariables }>, next: Next) {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  if (user.role !== "admin") {
    return c.json({ error: "Forbidden: admin access required" }, 403);
  }
  return next();
}
