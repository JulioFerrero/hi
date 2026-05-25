# S3-Compatible Image Storage

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│  Your Server (docker-compose.prod.yml)                       │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │ postgres │  │  editor   │  │   web    │  │ seaweedfs  │  │
│  │  :5432  │  │  :3001   │  │  :3000   │  │   :8333    │  │
│  └──────────┘  └────┬─────┘  └──────────┘  └─────┬──────┘  │
│                     │                             │          │
│                     │   S3 API (AWS SDK)          │          │
│                     ├────────────────────────────►│          │
│                     │                             │          │
│                     │   Store file bytes          │          │
│                     │   Return URL                │          │
│                     │                             │          │
│              ┌──────┴──────┐              ┌──────┴──────┐   │
│              │  PostgreSQL │              │  /data vol  │   │
│              │  (metadata) │              │  (binaries) │   │
│              └─────────────┘              └─────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

## Technology Choices

### Storage: SeaweedFS (default self-hosted, swappable)

MinIO's GitHub repo was archived in April 2026. SeaweedFS is the best open-source alternative.
The implementation uses the S3 protocol via `@aws-sdk/client-s3`, so **any S3-compatible
provider can replace SeaweedFS** by changing environment variables.

| Feature | SeaweedFS |
|---|---|
| License | Apache 2.0 |
| Stars | 32.5k |
| S3 API | Full compatibility |
| Docker | `chrislusf/seaweedfs` |
| Startup | Single binary, single command |
| Memory | <1 GB |
| Small files | O(1) disk reads |

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `S3_REGION` | Yes | Region (e.g. `us-east-1`, `hel1`, `auto`) |
| `S3_BUCKET` | Yes | Bucket name |
| `S3_ACCESS_KEY` | Non-AWS only | Access key (leave empty for AWS IAM roles) |
| `S3_SECRET_KEY` | Non-AWS only | Secret key (leave empty for AWS IAM roles) |
| `S3_ENDPOINT` | Non-AWS only | S3-compatible endpoint URL |
| `S3_FORCE_PATH_STYLE` | No (default: `false`) | Set `true` for Hetzner, SeaweedFS, R2 |
| `ASSET_BASE_URL` | No | Optional CDN URL prefix |

## Provider Configuration

### Self-Hosted SeaweedFS (default)

```env
S3_ENDPOINT=http://seaweedfs:8333
S3_REGION=us-east-1
S3_BUCKET=images
S3_ACCESS_KEY=admin
S3_SECRET_KEY=secret
S3_FORCE_PATH_STYLE=true
```

### AWS S3

```env
S3_REGION=us-east-1
S3_BUCKET=my-bucket
S3_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE
S3_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

If running on EC2/ECS, omit `S3_ACCESS_KEY` and `S3_SECRET_KEY` to use IAM roles.

### Hetzner Object Storage

```env
S3_ENDPOINT=https://hel1.your-objectstorage.com
S3_REGION=hel1
S3_BUCKET=my-bucket
S3_ACCESS_KEY=your-hetzner-key
S3_SECRET_KEY=your-hetzner-secret
S3_FORCE_PATH_STYLE=true
```

### Cloudflare R2

```env
S3_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
S3_REGION=auto
S3_BUCKET=my-bucket
S3_ACCESS_KEY=your-r2-key
S3_SECRET_KEY=your-r2-secret
S3_FORCE_PATH_STYLE=true
```

### Backblaze B2

```env
S3_ENDPOINT=https://s3.us-west-004.backblazeb2.com
S3_REGION=us-west-004
S3_BUCKET=my-bucket
S3_ACCESS_KEY=your-b2-key
S3_SECRET_KEY=your-b2-secret
S3_FORCE_PATH_STYLE=true
```

## CDN Integration (Optional)

Point any CDN at your storage endpoint:

```
                    ┌──────────────┐
                    │   CDN PoPs    │
                    │  (Cloudflare, │
                    │   BunnyCDN,   │
                    │   CloudFront) │
                    └──────┬───────┘
                           │
              ┌────────────▽────────────┐
              │  S3-Compatible Storage  │
              │  (SeaweedFS/AWS/Hetzner)│
              └────────────────────────┘
```

Set `ASSET_BASE_URL=https://cdn.yourdomain.com` to rewrite stored URLs
to the CDN domain.

## Implementation Files

| File | Purpose |
|---|---|
| `packages/editor/src/lib/storage.ts` | S3 upload/delete/URL service |
| `packages/editor/src/api/routes/files.ts` | `POST /api/files/upload` (multipart) |
| `packages/editor/src/components/media-library.tsx` | Media Library modal (upload + browse) |
| `packages/editor/src/components/right-panel/content-field.tsx` | Media picker for URL fields |
| `packages/editor/src/components/cms/document-editor.tsx` | Media picker for CMS image fields |
| `docker-compose.prod.yml` | SeaweedFS service + editor env vars |
| `docker/seaweedfs/s3.json` | SeaweedFS S3 credentials |

## How It Works

1. **Upload**: Drop/select an image in the editor → `POST /api/files/upload` → S3-compatible storage → metadata in `files` table
2. **Browse**: Media Library modal fetches from `GET /api/files?siteId=...`, shows grid of images
3. **Insert**: Click any image in the grid → "Insert Selected" → URL set in element's `src` field
4. **URL format**: Automatically adapts between path-style (`endpoint/bucket/key`) and virtual-hosted-style (`bucket.s3.region.amazonaws.com/key`) based on whether `S3_ENDPOINT` is set
