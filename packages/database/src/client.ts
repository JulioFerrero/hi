import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

function env(key: string): string {
  try { return Deno.env.get(key)!; } catch { /* not deno */ }
  return process.env[key]!;
}

const connectionString: string = env("DATABASE_URL");

const queryClient = postgres(connectionString);
export const db: ReturnType<typeof drizzle> = drizzle(queryClient, { schema });
export type Database = typeof db;
