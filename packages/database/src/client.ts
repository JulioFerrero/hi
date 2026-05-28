import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

function env(key: string): string {
  const value = Deno.env.get(key);
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

const connectionString: string = env("DATABASE_URL");

const queryClient = postgres(connectionString);
export const db: ReturnType<typeof drizzle> = drizzle(queryClient, { schema });
export type Database = typeof db;
