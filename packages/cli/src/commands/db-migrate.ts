console.log("Running Drizzle migrations...");
try {
  const drizzleKit = await import("npm:drizzle-kit");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (drizzleKit as any).migrate({})(Deno.env.get("DATABASE_URL")!);
  console.log("Done.");
} catch (e: unknown) {
  console.error("Migration failed:", (e as Error).message);
  Deno.exit(1);
}
