async function main() {
  const { db } = await import("./client");
  const { sites, pages, elements } = await import("./schema");
  const { nanoid } = await import("nanoid");

  const existing = await db.select().from(sites);
  if (existing.length > 0) {
    console.log("Database already seeded. Truncate first if you want to re-seed.");
    console.log(`SITE_ID=${existing[0]!.id}`);
    Deno.exit(0);
  }

  console.log("Seeding...");

  const siteId = nanoid();
  await db.insert(sites).values({
    id: siteId,
    slug: "my-site",
    data: { name: "My Site", domain: "localhost:3000" },
  });

  const homeId = nanoid();
  const aboutId = nanoid();
  const contactId = nanoid();

  await db.insert(pages).values([
    { id: homeId, siteId, slug: "", data: { title: "Home", path: "/", status: "published", order: 0 } },
    { id: aboutId, siteId, slug: "about", data: { title: "About", path: "/about", status: "published", parentId: homeId, order: 0 } },
    { id: contactId, siteId, slug: "contact", data: { title: "Contact", path: "/contact", status: "published", parentId: homeId, order: 1 } },
  ]);

  // ── HOME PAGE ──
  const heroSection = nanoid();
  const heroCol = nanoid();
  const featureSection = nanoid();
  const featGrid = nanoid();
  const ctaSection = nanoid();
  const ctaCol = nanoid();
  const footerSection = nanoid();
  const footerRow = nanoid();
  const footerLinks = nanoid();

  await db.insert(elements).values([
    // Hero Section
    { id: heroSection, pageId: homeId, parentId: null, type: "section", order: 0, data: {}, styles: { width: "full", padding: "32", paddingX: "6", backgroundColor: "#0a0a0a", textAlign: "center" } },
    { id: heroCol, pageId: homeId, parentId: heroSection, type: "column", order: 0, data: {}, styles: { display: "flex", flexDirection: "col", maxWidth: "3xl", margin: "auto", alignItems: "center", gap: "4" } },
    { id: nanoid(), pageId: homeId, parentId: heroCol, type: "heading", order: 0, data: { content: "Welcome to My Site", tagName: "h1" }, styles: { fontSize: "7xl", fontWeight: "extrabold", color: "#ffffff", lineHeight: "tight", letterSpacing: "tight" } },
    { id: nanoid(), pageId: homeId, parentId: heroCol, type: "text", order: 1, data: { content: "Built with Web Builder — a visual editor powered by PostgreSQL." }, styles: { fontSize: "lg", color: "#9ca3af", lineHeight: "relaxed" } },
    { id: nanoid(), pageId: homeId, parentId: heroCol, type: "button", order: 2, data: { content: "Learn More", href: "/about" }, styles: { padding: "3", paddingX: "9", fontSize: "base", fontWeight: "semibold", backgroundColor: "#ffffff", color: "#0a0a0a", borderRadius: "lg" } },

    // Features Section
    { id: featureSection, pageId: homeId, parentId: null, type: "section", order: 1, data: {}, styles: { width: "full", padding: "24", paddingX: "6" } },
    { id: nanoid(), pageId: homeId, parentId: featureSection, type: "heading", order: 0, data: { content: "Why Web Builder?", tagName: "h2" }, styles: { fontSize: "5xl", fontWeight: "bold", textAlign: "center", color: "#0a0a0a", marginY: "12" } },
    { id: featGrid, pageId: homeId, parentId: featureSection, type: "grid", order: 1, data: {}, styles: { display: "grid", gridTemplateColumns: "3", gap: "6", maxWidth: "6xl", margin: "auto" } },
    ...[
      { title: "Visual Editor", desc: "Build pages with atomic elements — headings, text, images, buttons." },
      { title: "Self-hosted", desc: "PostgreSQL + JSONB. No vendor lock-in, no third-party CMS." },
      { title: "Extensible", desc: "Add your own element types. Every property is editable." },
    ].flatMap((f, i) => {
      const cardId = nanoid();
      return [
        { id: cardId, pageId: homeId, parentId: featGrid, type: "column", order: i, data: {}, styles: { display: "flex", flexDirection: "col", padding: "8", gap: "3", borderRadius: "xl", borderWidth: "1", borderColor: "#e5e7eb", borderStyle: "solid" } },
        { id: nanoid(), pageId: homeId, parentId: cardId, type: "heading", order: 0, data: { content: f.title, tagName: "h3" }, styles: { fontSize: "xl", fontWeight: "semibold", color: "#0a0a0a" } },
        { id: nanoid(), pageId: homeId, parentId: cardId, type: "text", order: 1, data: { content: f.desc }, styles: { fontSize: "sm", color: "#6b7280", lineHeight: "relaxed" } },
      ];
    }),

    // CTA Section
    { id: ctaSection, pageId: homeId, parentId: null, type: "section", order: 2, data: {}, styles: { width: "full", padding: "20", paddingX: "6", backgroundColor: "#f9fafb" } },
    { id: ctaCol, pageId: homeId, parentId: ctaSection, type: "column", order: 0, data: {}, styles: { display: "flex", flexDirection: "col", maxWidth: "2xl", margin: "auto", textAlign: "center", alignItems: "center", gap: "4" } },
    { id: nanoid(), pageId: homeId, parentId: ctaCol, type: "heading", order: 0, data: { content: "Ready to get started?", tagName: "h2" }, styles: { fontSize: "5xl", fontWeight: "bold", color: "#0a0a0a" } },
    { id: nanoid(), pageId: homeId, parentId: ctaCol, type: "text", order: 1, data: { content: "Start building your website today with our open-source visual editor." }, styles: { fontSize: "base", color: "#6b7280" } },
    { id: nanoid(), pageId: homeId, parentId: ctaCol, type: "button", order: 2, data: { content: "Get Started", href: "/contact" }, styles: { padding: "3", paddingX: "9", fontSize: "base", fontWeight: "semibold", backgroundColor: "#0a0a0a", color: "#ffffff", borderRadius: "lg" } },

    // Footer
    { id: footerSection, pageId: homeId, parentId: null, type: "section", order: 3, data: {}, styles: { width: "full", padding: "8", paddingX: "6", borderWidth: "1", borderColor: "#e5e7eb", borderStyle: "solid" } },
    { id: footerRow, pageId: homeId, parentId: footerSection, type: "row", order: 0, data: {}, styles: { display: "flex", flexWrap: "wrap", justifyContent: "between", alignItems: "center", maxWidth: "6xl", margin: "auto" } },
    { id: nanoid(), pageId: homeId, parentId: footerRow, type: "text", order: 0, data: { content: "© 2026 Web Builder. All rights reserved." }, styles: { fontSize: "sm", color: "#9ca3af" } },
    { id: footerLinks, pageId: homeId, parentId: footerRow, type: "row", order: 1, data: {}, styles: { display: "flex", flexWrap: "wrap", gap: "6" } },
    { id: nanoid(), pageId: homeId, parentId: footerLinks, type: "link", order: 0, data: { content: "Home", href: "/" }, styles: { fontSize: "sm", color: "#9ca3af" } },
    { id: nanoid(), pageId: homeId, parentId: footerLinks, type: "link", order: 1, data: { content: "About", href: "/about" }, styles: { fontSize: "sm", color: "#9ca3af" } },
    { id: nanoid(), pageId: homeId, parentId: footerLinks, type: "link", order: 2, data: { content: "Contact", href: "/contact" }, styles: { fontSize: "sm", color: "#9ca3af" } },
  ].flat());

  // ── ABOUT PAGE ──
  const aboutHero = nanoid();
  const aboutCol = nanoid();
  const aboutSection2 = nanoid();
  const aboutGrid = nanoid();
  const aboutFooter = nanoid();

  await db.insert(elements).values([
    { id: aboutHero, pageId: aboutId, parentId: null, type: "section", order: 0, data: {}, styles: { width: "full", padding: "24", paddingX: "6" } },
    { id: aboutCol, pageId: aboutId, parentId: aboutHero, type: "column", order: 0, data: {}, styles: { display: "flex", flexDirection: "col", maxWidth: "3xl", margin: "auto", gap: "4" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutCol, type: "heading", order: 0, data: { content: "About Us", tagName: "h1" }, styles: { fontSize: "6xl", fontWeight: "bold", color: "#0a0a0a" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutCol, type: "text", order: 1, data: { content: "We are a team of passionate builders creating open-source tools for the modern web." }, styles: { fontSize: "lg", color: "#6b7280", lineHeight: "relaxed" } },

    { id: aboutSection2, pageId: aboutId, parentId: null, type: "section", order: 1, data: {}, styles: { width: "full", padding: "20", paddingX: "6", backgroundColor: "#f9fafb" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutSection2, type: "heading", order: 0, data: { content: "Our Values", tagName: "h2" }, styles: { fontSize: "5xl", fontWeight: "bold", textAlign: "center", marginY: "12", color: "#0a0a0a" } },
    { id: aboutGrid, pageId: aboutId, parentId: aboutSection2, type: "grid", order: 1, data: {}, styles: { display: "grid", gridTemplateColumns: "2", gap: "6", maxWidth: "5xl", margin: "auto" } },
    ...[
      { title: "Open Source", desc: "Everything we build is free and open source." },
      { title: "Developer First", desc: "Type-safe APIs, instant feedback, great DX." },
      { title: "Performance", desc: "Next.js 16 with Turbopack for fast builds." },
      { title: "Extensible", desc: "Create custom element types with zero config." },
    ].flatMap((v, i) => {
      const cardId = nanoid();
      return [
        { id: cardId, pageId: aboutId, parentId: aboutGrid, type: "column", order: i, data: {}, styles: { display: "flex", flexDirection: "col", padding: "6", gap: "2", backgroundColor: "#ffffff", borderRadius: "lg" } },
        { id: nanoid(), pageId: aboutId, parentId: cardId, type: "heading", order: 0, data: { content: v.title, tagName: "h3" }, styles: { fontSize: "lg", fontWeight: "semibold", color: "#0a0a0a" } },
        { id: nanoid(), pageId: aboutId, parentId: cardId, type: "text", order: 1, data: { content: v.desc }, styles: { fontSize: "sm", color: "#6b7280" } },
      ];
    }),

    // Footer
    { id: aboutFooter, pageId: aboutId, parentId: null, type: "section", order: 2, data: {}, styles: { width: "full", padding: "8", paddingX: "6", borderWidth: "1", borderColor: "#e5e7eb", borderStyle: "solid" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutFooter, type: "text", order: 0, data: { content: "© 2026 Web Builder" }, styles: { fontSize: "sm", color: "#9ca3af", textAlign: "center" } },
  ].flat());

  // ── CONTACT PAGE ──
  const contactHero = nanoid();
  const contactCol = nanoid();
  const contactFooter = nanoid();

  await db.insert(elements).values([
    { id: contactHero, pageId: contactId, parentId: null, type: "section", order: 0, data: {}, styles: { width: "full", padding: "24", paddingX: "6", textAlign: "center" } },
    { id: contactCol, pageId: contactId, parentId: contactHero, type: "column", order: 0, data: {}, styles: { display: "flex", flexDirection: "col", maxWidth: "2xl", margin: "auto", gap: "4", alignItems: "center" } },
    { id: nanoid(), pageId: contactId, parentId: contactCol, type: "heading", order: 0, data: { content: "Get in Touch", tagName: "h1" }, styles: { fontSize: "6xl", fontWeight: "bold", color: "#0a0a0a" } },
    { id: nanoid(), pageId: contactId, parentId: contactCol, type: "text", order: 1, data: { content: "Have questions? We'd love to hear from you. Email us at hello@webbuilder.dev" }, styles: { fontSize: "lg", color: "#6b7280" } },
    { id: nanoid(), pageId: contactId, parentId: contactCol, type: "button", order: 2, data: { content: "Send Email", href: "mailto:hello@webbuilder.dev" }, styles: { padding: "3", paddingX: "9", fontSize: "base", fontWeight: "semibold", backgroundColor: "#0a0a0a", color: "#ffffff", borderRadius: "lg" } },

    { id: contactFooter, pageId: contactId, parentId: null, type: "section", order: 1, data: {}, styles: { width: "full", padding: "8", paddingX: "6", borderWidth: "1", borderColor: "#e5e7eb", borderStyle: "solid" } },
    { id: nanoid(), pageId: contactId, parentId: contactFooter, type: "text", order: 0, data: { content: "© 2026 Web Builder" }, styles: { fontSize: "sm", color: "#9ca3af", textAlign: "center" } },
  ].flat());

  console.log("\nDone!");
  console.log(`  SITE_ID=${siteId}`);
  console.log("  Pages: Home (/), About (/about), Contact (/contact)");
  console.log("  Elements: ~50 atomic elements (sections, headings, text, buttons, grids, links)");
  console.log("\nAdd SITE_ID to your .env files.");
  Deno.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  Deno.exit(1);
});
