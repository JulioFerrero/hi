console.log("Generating migration files...");
try {
  const drizzleKit = await import("npm:drizzle-kit");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (drizzleKit as any).generate({})(Deno.env.get("DATABASE_URL")!);
  console.log("Done.");
} catch (e: unknown) {
  console.error("Generate failed:", (e as Error).message);
  Deno.exit(1);
}
