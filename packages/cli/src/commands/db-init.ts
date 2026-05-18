console.log("Running database migrations + seed...");

await import("@hi/database/client");

try {
  const drizzleKit = await import("npm:drizzle-kit");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (drizzleKit as any).push({})(Deno.env.get("DATABASE_URL")!);
  console.log("Migrations applied.");
} catch (e: unknown) {
  console.error("Migration failed:", (e as Error).message);
}

await import("@hi/database/seed");
