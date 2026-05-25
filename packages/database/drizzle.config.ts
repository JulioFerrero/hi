import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./packages/database/src/schema.ts",
  out: "./packages/database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: Deno.env.get("DATABASE_URL")!,
  },
});
