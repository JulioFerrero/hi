import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../../../.env") });

async function main() {
  const { db } = await import("./client");
  const { sites, pages, elements } = await import("./schema");
  const { nanoid } = await import("nanoid");

  const existing = await db.select().from(sites);
  if (existing.length > 0) {
    console.log("Database already seeded. Truncate first if you want to re-seed.");
    console.log(`SITE_ID=${existing[0]!.id}`);
    process.exit(0);
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
  const heroRow = nanoid();
  const heroCol = nanoid();
  const featureSection = nanoid();
  const featGrid = nanoid();
  const ctaSection = nanoid();
  const ctaCol = nanoid();
  const footerSection = nanoid();
  const footerRow = nanoid();

  await db.insert(elements).values([
    // Hero Section
    { id: heroSection, pageId: homeId, parentId: null, type: "section", order: 0, data: {}, styles: { width: "100%", padding: "120px 24px", backgroundColor: "#0a0a0a", textAlign: "center" } },
    { id: heroRow, pageId: homeId, parentId: heroSection, type: "column", order: 0, data: {}, styles: { maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" } },
    { id: nanoid(), pageId: homeId, parentId: heroRow, type: "heading", order: 0, data: { content: "Welcome to My Site", tagName: "h1" }, styles: { fontSize: "64px", fontWeight: "800", color: "#ffffff", lineHeight: "1.05", letterSpacing: "-0.02em" } },
    { id: nanoid(), pageId: homeId, parentId: heroRow, type: "text", order: 1, data: { content: "Built with Web Builder — a visual editor powered by PostgreSQL." }, styles: { fontSize: "18px", color: "#9ca3af", lineHeight: "1.6" } },
    { id: nanoid(), pageId: homeId, parentId: heroRow, type: "button", order: 2, data: { content: "Learn More", href: "/about" }, styles: { padding: "14px 36px", fontSize: "16px", fontWeight: "600", backgroundColor: "#ffffff", color: "#0a0a0a", borderRadius: "8px" } },

    // Features Section
    { id: featureSection, pageId: homeId, parentId: null, type: "section", order: 1, data: {}, styles: { width: "100%", padding: "100px 24px" } },
    { id: nanoid(), pageId: homeId, parentId: featureSection, type: "heading", order: 0, data: { content: "Why Web Builder?", tagName: "h2" }, styles: { fontSize: "40px", fontWeight: "700", textAlign: "center", color: "#0a0a0a", marginBottom: "48px" } },
    { id: featGrid, pageId: homeId, parentId: featureSection, type: "grid", order: 1, data: {}, styles: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "1100px", margin: "0 auto" } },
    ...[
      { title: "Visual Editor", desc: "Build pages with atomic elements — headings, text, images, buttons.", icon: "▣" },
      { title: "Self-hosted", desc: "PostgreSQL + JSONB. No vendor lock-in, no third-party CMS.", icon: "🗄" },
      { title: "Extensible", desc: "Add your own element types. Every property is editable.", icon: "⚡" },
    ].flatMap((f, i) => {
      const cardId = nanoid();
      return [
        { id: cardId, pageId: homeId, parentId: featGrid, type: "column", order: i, data: {}, styles: { padding: "32px", borderRadius: "12px", borderWidth: "1px", borderColor: "#e5e7eb", borderStyle: "solid", display: "flex", flexDirection: "column", gap: "12px" } },
        { id: nanoid(), pageId: homeId, parentId: cardId, type: "heading", order: 0, data: { content: f.title, tagName: "h3" }, styles: { fontSize: "20px", fontWeight: "600", color: "#0a0a0a" } },
        { id: nanoid(), pageId: homeId, parentId: cardId, type: "text", order: 1, data: { content: f.desc }, styles: { fontSize: "15px", color: "#6b7280", lineHeight: "1.6" } },
      ];
    }),

    // CTA Section
    { id: ctaSection, pageId: homeId, parentId: null, type: "section", order: 2, data: {}, styles: { width: "100%", padding: "80px 24px", backgroundColor: "#f9fafb" } },
    { id: ctaCol, pageId: homeId, parentId: ctaSection, type: "column", order: 0, data: {}, styles: { alignItems: "center", gap: "16px", maxWidth: "600px", margin: "0 auto", textAlign: "center" } },
    { id: nanoid(), pageId: homeId, parentId: ctaCol, type: "heading", order: 0, data: { content: "Ready to get started?", tagName: "h2" }, styles: { fontSize: "36px", fontWeight: "700", color: "#0a0a0a" } },
    { id: nanoid(), pageId: homeId, parentId: ctaCol, type: "text", order: 1, data: { content: "Start building your website today with our open-source visual editor." }, styles: { fontSize: "16px", color: "#6b7280" } },
    { id: nanoid(), pageId: homeId, parentId: ctaCol, type: "button", order: 2, data: { content: "Get Started", href: "/contact" }, styles: { padding: "14px 36px", fontSize: "16px", fontWeight: "600", backgroundColor: "#0a0a0a", color: "#ffffff", borderRadius: "8px" } },

    // Footer
    { id: footerSection, pageId: homeId, parentId: null, type: "section", order: 3, data: {}, styles: { width: "100%", padding: "32px 24px", borderWidth: "1px", borderColor: "#e5e7eb", borderStyle: "solid", borderTop: "1px" } },
    { id: footerRow, pageId: homeId, parentId: footerSection, type: "row", order: 0, data: {}, styles: { justifyContent: "space-between", alignItems: "center", maxWidth: "1100px", margin: "0 auto" } },
    { id: nanoid(), pageId: homeId, parentId: footerRow, type: "text", order: 0, data: { content: "© 2026 Web Builder. All rights reserved." }, styles: { fontSize: "14px", color: "#9ca3af" } },
    { id: nanoid(), pageId: homeId, parentId: footerRow, type: "row", order: 1, data: {}, styles: { gap: "24px" } },
    { id: nanoid(), pageId: homeId, parentId: footerRow, type: "link", order: 2, data: { content: "Home", href: "/" }, styles: { fontSize: "14px", color: "#9ca3af" } },
    { id: nanoid(), pageId: homeId, parentId: footerRow, type: "link", order: 3, data: { content: "About", href: "/about" }, styles: { fontSize: "14px", color: "#9ca3af" } },
    { id: nanoid(), pageId: homeId, parentId: footerRow, type: "link", order: 4, data: { content: "Contact", href: "/contact" }, styles: { fontSize: "14px", color: "#9ca3af" } },
  ].flat());

  // ── ABOUT PAGE ──
  const aboutHero = nanoid();
  const aboutCol = nanoid();
  const aboutSection2 = nanoid();
  const aboutGrid = nanoid();
  const aboutFooter = nanoid();

  await db.insert(elements).values([
    { id: aboutHero, pageId: aboutId, parentId: null, type: "section", order: 0, data: {}, styles: { width: "100%", padding: "100px 24px" } },
    { id: aboutCol, pageId: aboutId, parentId: aboutHero, type: "column", order: 0, data: {}, styles: { maxWidth: "800px", margin: "0 auto", gap: "16px" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutCol, type: "heading", order: 0, data: { content: "About Us", tagName: "h1" }, styles: { fontSize: "48px", fontWeight: "700", color: "#0a0a0a" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutCol, type: "text", order: 1, data: { content: "We are a team of passionate builders creating open-source tools for the modern web." }, styles: { fontSize: "18px", color: "#6b7280", lineHeight: "1.6" } },

    { id: aboutSection2, pageId: aboutId, parentId: null, type: "section", order: 1, data: {}, styles: { width: "100%", padding: "80px 24px", backgroundColor: "#f9fafb" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutSection2, type: "heading", order: 0, data: { content: "Our Values", tagName: "h2" }, styles: { fontSize: "36px", fontWeight: "700", textAlign: "center", marginBottom: "48px", color: "#0a0a0a" } },
    { id: aboutGrid, pageId: aboutId, parentId: aboutSection2, type: "grid", order: 1, data: {}, styles: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", maxWidth: "900px", margin: "0 auto" } },
    ...[
      { title: "Open Source", desc: "Everything we build is free and open source." },
      { title: "Developer First", desc: "Type-safe APIs, instant feedback, great DX." },
      { title: "Performance", desc: "Next.js 16 with Turbopack for fast builds." },
      { title: "Extensible", desc: "Create custom element types with zero config." },
    ].flatMap((v, i) => {
      const cardId = nanoid();
      return [
        { id: cardId, pageId: aboutId, parentId: aboutGrid, type: "column", order: i, data: {}, styles: { padding: "24px", gap: "8px", backgroundColor: "#ffffff", borderRadius: "8px" } },
        { id: nanoid(), pageId: aboutId, parentId: cardId, type: "heading", order: 0, data: { content: v.title, tagName: "h3" }, styles: { fontSize: "18px", fontWeight: "600", color: "#0a0a0a" } },
        { id: nanoid(), pageId: aboutId, parentId: cardId, type: "text", order: 1, data: { content: v.desc }, styles: { fontSize: "14px", color: "#6b7280" } },
      ];
    }),

    // Footer (reused)
    { id: aboutFooter, pageId: aboutId, parentId: null, type: "section", order: 2, data: {}, styles: { width: "100%", padding: "32px 24px", borderWidth: "1px", borderColor: "#e5e7eb", borderStyle: "solid" } },
    { id: nanoid(), pageId: aboutId, parentId: aboutFooter, type: "text", order: 0, data: { content: "© 2026 Web Builder" }, styles: { fontSize: "14px", color: "#9ca3af", textAlign: "center" } },
  ].flat());

  // ── CONTACT PAGE ──
  const contactHero = nanoid();
  const contactCol = nanoid();
  const contactFooter = nanoid();

  await db.insert(elements).values([
    { id: contactHero, pageId: contactId, parentId: null, type: "section", order: 0, data: {}, styles: { width: "100%", padding: "100px 24px", textAlign: "center" } },
    { id: contactCol, pageId: contactId, parentId: contactHero, type: "column", order: 0, data: {}, styles: { maxWidth: "600px", margin: "0 auto", gap: "16px", alignItems: "center" } },
    { id: nanoid(), pageId: contactId, parentId: contactCol, type: "heading", order: 0, data: { content: "Get in Touch", tagName: "h1" }, styles: { fontSize: "48px", fontWeight: "700", color: "#0a0a0a" } },
    { id: nanoid(), pageId: contactId, parentId: contactCol, type: "text", order: 1, data: { content: "Have questions? We'd love to hear from you. Email us at hello@webbuilder.dev" }, styles: { fontSize: "18px", color: "#6b7280" } },
    { id: nanoid(), pageId: contactId, parentId: contactCol, type: "button", order: 2, data: { content: "Send Email", href: "mailto:hello@webbuilder.dev" }, styles: { padding: "14px 36px", fontSize: "16px", fontWeight: "600", backgroundColor: "#0a0a0a", color: "#ffffff", borderRadius: "8px" } },

    { id: contactFooter, pageId: contactId, parentId: null, type: "section", order: 1, data: {}, styles: { width: "100%", padding: "32px 24px", borderWidth: "1px", borderColor: "#e5e7eb", borderStyle: "solid" } },
    { id: nanoid(), pageId: contactId, parentId: contactFooter, type: "text", order: 0, data: { content: "© 2026 Web Builder" }, styles: { fontSize: "14px", color: "#9ca3af", textAlign: "center" } },
  ].flat());

  console.log("\nDone!");
  console.log(`  SITE_ID=${siteId}`);
  console.log("  Pages: Home (/), About (/about), Contact (/contact)");
  console.log("  Elements: ~50 atomic elements (sections, headings, text, buttons, grids, links)");
  console.log("\nAdd SITE_ID to your .env files.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
