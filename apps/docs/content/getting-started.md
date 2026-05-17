---
title: Getting Started
description: Set up the web-builder development environment and run the editor and website apps locally.
order: 1
category: Getting Started
---

## Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Node.js | 20+ | Or Deno 2+ |
| pnpm | 10+ | Package manager |
| PostgreSQL | 17 | Run via Docker (recommended) |
| Docker | Any | For the Postgres container |

## Quick Start

### 1. Clone and install

```bash
git clone <repo-url> web-builder
cd web-builder
pnpm install
```

### 2. Start PostgreSQL

```bash
pnpm docker:up
```

This starts a Postgres container on `localhost:5432` with user/password `webbuilder`. Data is persisted in a Docker volume.

### 3. Migrate and seed

```bash
pnpm setup
```

`pnpm setup` is a convenience script that runs `docker compose up -d`, waits for Postgres to be healthy, applies migrations, and seeds the database with sample data.

To run each step individually:

```bash
pnpm docker:up
pnpm db:migrate
pnpm db:seed
```

The seed script outputs a `SITE_ID`:

```
Done!
  SITE_ID=abc123XYZ
  Pages: Home (/), About (/about), Contact (/contact)
```

### 4. Configure environment

Copy `.env.example` to `.env` and set the `SITE_ID`:

```bash
cp .env.example .env
```

```env
DATABASE_URL=postgresql://webbuilder:webbuilder@localhost:5432/webbuilder
SITE_ID=<paste-the-id-from-seed-output>
```

Then copy `.env` into each app directory:

```bash
cp .env apps/web/.env
cp .env apps/editor/.env
```

### 5. Run the dev servers

```bash
pnpm dev
```

| App | URL | Description |
|---|---|---|
| Website | http://localhost:3000 | Rendered site visitors see |
| Editor | http://localhost:3001 | Visual page builder |

Or start them individually:

```bash
pnpm dev:web       # Website only (port 3000)
pnpm dev:editor    # Editor only (port 3001)
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `SITE_ID` | Yes | Which site to render/manage (set after seeding) |

## Project Structure

```
web-builder/
├── apps/
│   ├── web/              Renders published websites (port 3000)
│   ├── editor/           Visual page builder (port 3001)
│   └── docs/             Documentation site
├── packages/
│   ├── types/            Shared TypeScript interfaces
│   ├── utils/            cn(), slugify(), buildPath()
│   ├── ui/               Base UI + Tailwind components
│   ├── database/         Drizzle ORM schema, migrations, seed
│   ├── api/              Hono REST API with Zod validation
│   ├── editor/           Editor store, builders, actions
│   ├── website/          Component registry, PageRenderer, elements
│   └── cms/              Collection schema builder
├── docker-compose.yml    Development Postgres
├── turbo.json            Turborepo pipeline config
└── pnpm-workspace.yaml   Workspace packages
```

## Available Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start both apps in dev mode |
| `pnpm dev:web` | Website renderer only |
| `pnpm dev:editor` | Editor only |
| `pnpm build` | Production build for all packages |
| `pnpm typecheck` | TypeScript check across all packages |
| `pnpm docker:up` | Start Postgres container |
| `pnpm docker:down` | Stop Postgres container |
| `pnpm db:migrate` | Apply pending migrations |
| `pnpm db:generate` | Generate migration from schema changes |
| `pnpm db:seed` | Seed database with sample data |
| `pnpm db:studio` | Open Drizzle Studio (DB browser) |

## Using Deno

If you prefer Deno over Node.js, the project includes a `deno.json` workspace config:

```bash
deno task dev:web
deno task dev:editor
deno task build
deno task check
```

| Deno Task | Equivalent |
|---|---|
| `deno task dev:web` | Run website dev server |
| `deno task dev:editor` | Run editor dev server |
| `deno task build` | Build both apps |
| `deno task check` | Type-check all packages |
