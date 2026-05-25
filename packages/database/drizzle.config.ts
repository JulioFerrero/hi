import { defineConfig } from "drizzle-kit";

const connectionString = (() => {
  try { return Deno.env.get("DATABASE_URL"); } catch { /* deno not available */ }
  return process.env.DATABASE_URL;
})();

export default defineConfig({
  schema: "./packages/database/src/schema.ts",
  out: "./packages/database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString!,
  },
});
