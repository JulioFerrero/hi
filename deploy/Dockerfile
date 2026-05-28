FROM denoland/deno:2-alpine AS base
WORKDIR /app

FROM base AS install
COPY deno.json deno.json
COPY apps/editor/deno.json apps/editor/deno.json
COPY apps/web/deno.json apps/web/deno.json
COPY packages/editor/deno.json packages/editor/deno.json
COPY packages/website/deno.json packages/website/deno.json
COPY packages/render/deno.json packages/render/deno.json
COPY packages/database/deno.json packages/database/deno.json
COPY packages/auth/deno.json packages/auth/deno.json
COPY packages/ui/deno.json packages/ui/deno.json
COPY packages/cms/deno.json packages/cms/deno.json
COPY packages/utils/deno.json packages/utils/deno.json
RUN deno install

FROM install AS build
COPY . .
RUN deno task build:editor

FROM base AS runner
RUN addgroup -S editor && adduser -S -G editor editor
COPY --from=build /app/apps/editor/dist ./apps/editor/dist
COPY --from=build /app/apps/editor/server.ts ./apps/editor/server.ts
COPY --from=build /app/apps/editor/deno.json ./apps/editor/deno.json
COPY --from=build /app/deno.json ./deno.json
COPY --from=build /app/packages ./packages

USER editor
EXPOSE 5173
ENV PORT=5173

CMD ["run", "-A", "--env", "apps/editor/server.ts"]
