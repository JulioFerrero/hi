console.log("Pushing schema to database...");
try {
  const drizzleKit = await import("npm:drizzle-kit");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (drizzleKit as any).push({})(Deno.env.get("DATABASE_URL")!);
  console.log("Done.");
} catch (e: unknown) {
  console.error("Push failed:", (e as Error).message);
  Deno.exit(1);
}
