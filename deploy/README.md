# Hi Editor - Self-Hosted Deployment

## Quick Start (Docker Compose)

```bash
cp .env.example .env
# Edit .env with your secrets

# Start editor only (default)
docker compose -f deploy/docker-compose.yml up -d

# Start editor + website
docker compose -f deploy/docker-compose.yml --profile web up -d

# Initialize database
docker compose -f deploy/docker-compose.yml exec editor deno task db:push
docker compose -f deploy/docker-compose.yml exec editor deno task db:seed
```

## Coolify

1. Add as a Docker Compose service in Coolify
2. Use `deploy/docker-compose.coolify.yml` as the compose file
3. Set required environment variables:
   - `BETTER_AUTH_SECRET` - random secret key
   - `BETTER_AUTH_URL` - your public editor URL
4. Deploy

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `POSTGRES_USER` | `hi` | PostgreSQL user |
| `POSTGRES_PASSWORD` | `hi` | PostgreSQL password |
| `POSTGRES_DB` | `hi` | PostgreSQL database |
| `EDITOR_PORT` | `3000` | Editor host port |
| `WEB_PORT` | `8000` | Website host port |
| `S3_ENDPOINT` | `http://seaweedfs:8333` | S3 storage endpoint |
| `S3_ACCESS_KEY` | `admin` | S3 access key |
| `S3_SECRET_KEY` | `secret` | S3 secret key |
| `S3_BUCKET` | `images` | S3 bucket name |
| `BETTER_AUTH_SECRET` | - | Required. Auth secret key |
| `BETTER_AUTH_URL` | - | Required. Public editor URL |
| `WEBSITE_ID` | - | Website ID (from db:seed) |

## Ports

- **Editor**: 5173 (internal) → mapped to `EDITOR_PORT` (default 3000)
- **Web**: 8000 (internal) → mapped to `WEB_PORT` (default 8000)
- **PostgreSQL**: 5432 (internal only)
- **SeaweedFS S3**: 8333 (internal only)
