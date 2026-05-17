import { page } from "fresh";
import { define } from "@/utils.ts";
import { marked } from "marked";
import { getPage, getAllPages } from "@/src/content.ts";

export const handler = define.handlers({
  GET(ctx) {
    const slug = ctx.params.slug;
    const doc = getPage(slug);
    if (!doc) return new Response("Not Found", { status: 404 });
    const html = marked.parse(doc.body) as string;
    return page({ slug, meta: doc.meta, html });
  },
});

export default define.page<typeof handler>(({ data }) => {
  const { slug, meta, html } = data;
  const title = meta.title ?? slug;

  return (
    <div class="docs-layout">
      <title>{title} — Web Builder Docs</title>
      <nav class="docs-nav">
        <a href="/" class="docs-nav-title">Web Builder</a>
        <div class="docs-nav-links">
          {getAllPages().map((p) => (
            <a
              key={p.slug}
              href={`/docs/${p.slug}`}
              class={`docs-nav-link ${p.slug === slug ? "active" : ""}`}
            >
              {p.title}
            </a>
          ))}
        </div>
      </nav>
      <main class="docs-main">
        <div class="docs-content markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  );
});
