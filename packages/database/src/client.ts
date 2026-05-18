import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

const connectionString: string = Deno.env.get("DATABASE_URL")!;

const queryClient = postgres(connectionString);
export const db: ReturnType<typeof drizzle> = drizzle(queryClient, { schema });
export type Database = typeof db;
