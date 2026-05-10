# Web Builder

A self-hosted visual website builder. Design pages with a Framer-style editor, store everything in PostgreSQL with JSONB, and render sites through Next.js.

## Architecture

```
┌─────────────────────┐         ┌─────────────────────┐
│   Editor (port 3001) │         │   Website (port 3000) │
│                       │         │                       │
│  ┌──────┬──────┬────┐ │         │   Page renderer       │
│  │Left  │Canvas│Right│ │         │   /[...slug]          │
│  │Panel │      │Panel│ │         │                       │
│  │pages │ tld  │props│ │         │   Renders components  │
│  │layers│ raw  │edit │ │         │   from Postgres JSONB │
│  └──────┴──────┴────┘ │         │                       │
│           │            │         │           │           │
└───────────┼────────────┘         └───────────┼───────────┘
            │                                  │
            ▼                                  ▼
        ┌──────────────────────────────────────┐
        │          Hono REST API                │
        │   /api/websites, /pages, /components  │
        └──────────────────┬───────────────────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │   PostgreSQL      │
                 │   (JSONB props)   │
                 └──────────────────┘
```

### Monorepo Structure

```
web-builder/
├── apps/
│   ├── web/              Next.js 16 — renders published websites
│   └── editor/           Next.js 16 — visual builder UI
├── packages/
│   ├── types/            Shared TypeScript interfaces
│   ├── utils/            cn(), slugify(), buildPath()
│   ├── ui/               Base UI + Tailwind components (17 components)
│   ├── database/         Drizzle ORM schema, migrations, seed
│   ├── api/              Hono REST API with Zod validation
│   ├── website/          Component registry, PageRenderer, built-in sections
│   └── cms/              Collection schema builder, item validation
├── docker-compose.yml    Development Postgres
└── docker-compose.prod.yml  Production stack (Postgres + web + editor)
```

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (Turbopack, App Router, RSC) |
| Headless UI | Base UI (`@base-ui/react`) |
| Database | PostgreSQL 17 + Drizzle ORM |
| API | Hono (mounted as Next.js route handlers) |
| State Management | Zustand |
| Validation | Zod |
| Styling | Tailwind CSS v4 |
| Canvas | tldraw (planned) |
| Monorepo | pnpm workspaces + Turborepo |

### How it works

1. **Component Registry** — Each UI component (Hero, Features, CTA, Footer, etc.) registers itself with a Zod schema defining its props. The registry lives in `packages/website`.

2. **Postgres JSONB Storage** — Every component instance on a page is a row in the `components` table. Props, styles, and layout are stored as JSONB columns. This gives you Sanity-like structured content without a third-party CMS.

3. **Page Rendering** — The website app (`apps/web`) resolves the URL path, fetches the page and its ordered components from Postgres, validates each component's props against its Zod schema, and renders the React component.

4. **Visual Editor** — The editor app (`apps/editor`) provides a dashboard to manage websites, a page tree, a canvas with live component previews, and a property panel that auto-generates forms from the component's Zod schema.

5. **CMS Collections** — Separate from the page structure. Define collections (e.g., Blog Posts, Products) with typed schemas, then bind components to collection items for dynamic data.

## Getting Started

### Prerequisites

- Node.js 20.9+
- pnpm 10+
- Docker (for PostgreSQL)

### Setup

```bash
# Clone and install
git clone <repo-url> web-builder
cd web-builder
pnpm install

# Start PostgreSQL
pnpm docker:up

# Wait for Postgres to be healthy, then apply migrations
pnpm db:migrate

# Seed with sample data (a website with Home page + 4 sections)
pnpm db:seed
```

The seed script outputs a `WEBSITE_ID`. Copy it to your `.env`:

```bash
# .env (already has DATABASE_URL from .env.example)
WEBSITE_ID=<paste-id-here>
```

Copy `.env` to both app directories (Next.js loads `.env` per-app):

```bash
cp .env apps/web/.env
cp .env apps/editor/.env
```

### Run

```bash
# Both apps simultaneously
pnpm dev

# Or individually
pnpm dev:web       # → http://localhost:3000
pnpm dev:editor    # → http://localhost:3001
```

Open `http://localhost:3000` to see the rendered website. Open `http://localhost:3001/dashboard` to open the editor.

### Available Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start both apps in dev mode |
| `pnpm dev:web` | Website renderer only (port 3000) |
| `pnpm dev:editor` | Editor only (port 3001) |
| `pnpm build` | Production build for all packages |
| `pnpm typecheck` | TypeScript check across all packages |
| `pnpm docker:up` | Start Postgres container |
| `pnpm docker:down` | Stop Postgres container |
| `pnpm db:migrate` | Apply pending migrations |
| `pnpm db:generate` | Generate migration from schema changes |
| `pnpm db:seed` | Seed database with sample data |
| `pnpm db:studio` | Open Drizzle Studio (DB browser) |

## API Endpoints

All endpoints are mounted at `/api` on both apps.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/websites` | List all websites |
| POST | `/api/websites` | Create a website |
| GET | `/api/pages?websiteId=X` | List pages for a website |
| POST | `/api/pages` | Create a page |
| GET | `/api/components?pageId=X` | List components for a page |
| POST | `/api/components` | Add a component |
| PATCH | `/api/components/:id` | Update component props/styles |
| DELETE | `/api/components/:id` | Remove a component |
| GET | `/api/component-definitions` | List available component types |
| GET | `/api/cms/collections?websiteId=X` | List CMS collections |
| POST | `/api/cms/collections` | Create a collection |
| GET | `/api/cms/items?collectionId=X` | List items in a collection |
| POST | `/api/cms/items` | Create a CMS item |

## Database Schema

7 tables with JSONB columns for flexible content storage:

```
websites ──< pages ──< components
    │                      │
    ├──< cms_collections   │
    │         │            │
    │         └──< cms_items
    │
    └──< assets

component_definitions  (registry of available component types)
```

Migrations are version-controlled SQL files in `packages/database/drizzle/`. Modify the schema in `packages/database/src/schema.ts`, then run `pnpm db:generate` to create a new migration.

## Production Deployment

### Docker Compose (self-hosted)

```bash
cp .env.production.example .env.production
# Edit .env.production with your domain and secure passwords

docker compose -f docker-compose.prod.yml up -d
```

This starts three containers: PostgreSQL, the website app, and the editor app. Each Next.js app builds in standalone mode for minimal image size.

### Manual deployment

```bash
pnpm build
pnpm db:migrate   # against your production DATABASE_URL
```

Then run each app with `next start`. Set these environment variables:

- `DATABASE_URL` — PostgreSQL connection string
- `WEBSITE_ID` — which website to render (for the web app)

## Creating New Components

1. Create a file in `packages/website/src/components/`:

```tsx
import { z } from "zod";
import { registerComponent } from "../registry/index";

const myComponentSchema = z.object({
  title: z.string().default("Hello"),
});

function MyComponent({ title }: z.infer<typeof myComponentSchema>) {
  return <div>{title}</div>;
}

export { MyComponent };
export { myComponentSchema };

registerComponent({
  type: "my-component",
  name: "My Component",
  category: "section",
  schema: myComponentSchema,
  defaultProps: myComponentSchema.parse({}),
  defaultStyles: {},
  component: MyComponent,
});
```

2. Export it from `packages/website/src/components/index.ts`
3. It automatically appears in the editor's section picker and the page renderer

## License

MIT
