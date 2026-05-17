import { getCategories } from "@/src/content.ts";

export default function HomePage() {
  const categories = getCategories();

  return (
    <div class="docs-home">
      <div class="docs-home-inner">
        <h1 class="docs-home-h1">Web Builder Docs</h1>
        <p class="docs-home-desc">
          Self-hosted visual website builder. PostgreSQL + JSONB, atomic element system, real-time canvas editing.
        </p>
        <div class="docs-home-sections">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 class="docs-home-cat">{cat.name}</h2>
              <div class="docs-home-grid">
                {cat.pages.map((p) => (
                  <a key={p.slug} href={`/docs/${p.slug}`} class="docs-home-card">
                    <h3 class="docs-home-card-title">{p.title}</h3>
                    {p.description ? <p class="docs-home-card-desc">{p.description}</p> : null}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
