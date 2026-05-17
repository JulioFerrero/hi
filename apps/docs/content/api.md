---
title: API Reference
description: Complete reference for the REST API routes, request/response formats, and database schema.
order: 7
category: Reference
---

The API is a Hono application mounted at `/api` in both the web and editor apps. All routes validate input with Zod and return JSON.

## Sites

| Method | Route | Description | Body / Query |
|---|---|---|---|
| `GET` | `/api/sites` | List all sites | — |
| `GET` | `/api/sites/:id` | Get a site by ID | — |
| `POST` | `/api/sites` | Create a site | `{ slug, data? }` |
| `PATCH` | `/api/sites/:id` | Update a site | `{ slug?, data? }` |
| `DELETE` | `/api/sites/:id` | Delete a site | — |

### POST /api/sites

```json
{
  "slug": "my-site",
  "data": { "name": "My Site", "domain": "example.com" }
}
```

Response (201):

```json
{
  "id": "V1StGXR8_Z5jdHi6B-myT",
  "slug": "my-site",
  "data": { "name": "My Site", "domain": "example.com" },
  "createdAt": "2026-01-15T10:00:00.000Z",
  "updatedAt": "2026-01-15T10:00:00.000Z"
}
```

### PATCH /api/sites/:id

```json
{
  "slug": "my-updated-site",
  "data": { "name": "Updated Name" }
}
```

## Pages

| Method | Route | Description | Body / Query |
|---|---|---|---|
| `GET` | `/api/pages?siteId=X` | List pages for a site | Query: `siteId` (required) |
| `GET` | `/api/pages/:id` | Get a page by ID | — |
| `GET` | `/api/pages/by-path/:path?siteId=X` | Get a page by path | Query: `siteId` (required) |
| `POST` | `/api/pages` | Create a page | `{ siteId, slug, data? }` |
| `PATCH` | `/api/pages/:id` | Update a page | `{ slug?, data? }` |
| `DELETE` | `/api/pages/:id` | Delete a page | — |

### POST /api/pages

```json
{
  "siteId": "V1StGXR8_Z5jdHi6B-myT",
  "slug": "about",
  "data": { "title": "About", "path": "/about", "status": "draft" }
}
```

Response (201):

```json
{
  "id": "page-id-123",
  "siteId": "V1StGXR8_Z5jdHi6B-myT",
  "slug": "about",
  "data": { "title": "About", "path": "/about", "status": "draft" },
  "createdAt": "2026-01-15T10:00:00.000Z",
  "updatedAt": "2026-01-15T10:00:00.000Z"
}
```

### PageData JSONB

```ts
type PageData = {
  title: string;
  path: string;
  status: "draft" | "published";
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
    noIndex?: boolean;
  };
  parentId?: string;
};
```

## Elements

| Method | Route | Description | Body / Query |
|---|---|---|---|
| `GET` | `/api/elements?pageId=X` | List elements for a page | Query: `pageId` (required) |
| `GET` | `/api/elements/:id` | Get an element by ID | — |
| `GET` | `/api/elements/children/:parentId` | Get child elements | — |
| `POST` | `/api/elements` | Create an element | `{ pageId, type, parentId?, data?, styles?, order? }` |
| `PATCH` | `/api/elements/:id` | Update an element | `{ type?, data?, styles?, order?, parentId? }` |
| `PATCH` | `/api/elements/reorder` | Batch reorder elements | `{ items: [{ id, order }] }` |
| `DELETE` | `/api/elements/:id` | Delete an element | — |

### POST /api/elements

```json
{
  "pageId": "page-id-123",
  "type": "heading",
  "parentId": "section-id-456",
  "data": { "content": "Hello World", "tagName": "h2" },
  "styles": { "fontSize": "5xl", "fontWeight": "bold", "color": "#0a0a0a" },
  "order": 0
}
```

Response (201):

```json
{
  "id": "el-id-789",
  "pageId": "page-id-123",
  "parentId": "section-id-456",
  "type": "heading",
  "data": { "content": "Hello World", "tagName": "h2" },
  "styles": { "fontSize": "5xl", "fontWeight": "bold", "color": "#0a0a0a" },
  "order": 0,
  "createdAt": "2026-01-15T10:00:00.000Z",
  "updatedAt": "2026-01-15T10:00:00.000Z"
}
```

### PATCH /api/elements/reorder

Batch-update the order of multiple elements:

```json
{
  "items": [
    { "id": "el-1", "order": 0 },
    { "id": "el-2", "order": 1 },
    { "id": "el-3", "order": 2 }
  ]
}
```

## Files

| Method | Route | Description | Body / Query |
|---|---|---|---|
| `GET` | `/api/files?siteId=X` | List files for a site | Query: `siteId` (required) |
| `POST` | `/api/files` | Create a file record | `{ siteId, data }` |
| `DELETE` | `/api/files/:id` | Delete a file | — |

### POST /api/files

```json
{
  "siteId": "V1StGXR8_Z5jdHi6B-myT",
  "data": {
    "url": "https://cdn.example.com/image.png",
    "name": "hero.png",
    "type": "image/png",
    "width": 1200,
    "height": 600,
    "alt": "Hero image"
  }
}
```

## Health Check

| Method | Route | Description |
|---|---|---|
| `GET` | `/api/health` | Returns `{ status: "ok" }` |

## Error Responses

All routes return consistent error objects:

```json
{ "error": "Not found" }
```

With appropriate HTTP status codes:
- `400` — Missing required query parameter
- `404` — Resource not found
- `422` — Zod validation failure (automatic from `@hono/zod-validator`)

## Database Schema

### Tables

#### `sites`

| Column | Type | Constraints |
|---|---|---|
| `id` | `varchar(21)` | Primary key |
| `slug` | `varchar(255)` | Not null, unique |
| `data` | `jsonb` | Not null, default `{}` |
| `created_at` | `timestamp` | Not null, default `now()` |
| `updated_at` | `timestamp` | Not null, default `now()` |

#### `pages`

| Column | Type | Constraints |
|---|---|---|
| `id` | `varchar(21)` | Primary key |
| `site_id` | `varchar(21)` | Not null, FK → `sites.id` (cascade delete) |
| `slug` | `varchar(255)` | Not null |
| `data` | `jsonb` | Not null, default `{}` |
| `created_at` | `timestamp` | Not null, default `now()` |
| `updated_at` | `timestamp` | Not null, default `now()` |

#### `elements`

| Column | Type | Constraints |
|---|---|---|
| `id` | `varchar(21)` | Primary key |
| `page_id` | `varchar(21)` | Not null, FK → `pages.id` (cascade delete) |
| `parent_id` | `varchar(21)` | Nullable (self-referential FK → `elements.id`) |
| `type` | `varchar(100)` | Not null |
| `data` | `jsonb` | Not null, default `{}` |
| `styles` | `jsonb` | Not null, default `{}` |
| `order` | `integer` | Not null, default `0` |
| `created_at` | `timestamp` | Not null, default `now()` |
| `updated_at` | `timestamp` | Not null, default `now()` |

Indexes: `elements_page_id_idx` on `page_id`, `elements_parent_id_idx` on `parent_id`

#### `files`

| Column | Type | Constraints |
|---|---|---|
| `id` | `varchar(21)` | Primary key |
| `site_id` | `varchar(21)` | Not null, FK → `sites.id` (cascade delete) |
| `data` | `jsonb` | Not null, default `{}` |
| `created_at` | `timestamp` | Not null, default `now()` |

### Relations

```
sites ──1:N──> pages ──1:N──> elements
  │                           │
  │                    self-referential
  │                    parent_id → elements.id
  │                           │
  └──1:N──> files              └──1:N children
```

```
sites
  ├── pages        (site has many pages)
  └── files        (site has many files)

pages
  ├── site         (page belongs to site)
  └── elements     (page has many elements)

elements
  ├── page         (element belongs to page)
  ├── parent       (element belongs to parent element, self-referential)
  └── children     (element has many child elements)

files
  └── site         (file belongs to site)
```

All foreign keys use `ON DELETE CASCADE` — deleting a site removes all its pages, elements, and files.

## Migrations

Migrations are version-controlled SQL files in `packages/database/drizzle/`. To modify the schema:

1. Edit `packages/database/src/schema.ts`
2. Generate a migration: `pnpm db:generate`
3. Apply the migration: `pnpm db:migrate`
