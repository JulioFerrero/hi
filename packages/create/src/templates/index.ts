import type { PromptAnswers } from "../prompts.ts";

export function hiConfig(_answers: PromptAnswers): string {
  return `import { defineConfig } from "@hi/website";

export default defineConfig({
  site: {
    name: "${_answers.projectName}",
    url: "http://localhost:8000",
  },
});
`;
}

export function denoJson(answers: PromptAnswers): string {
  const tasks = {
    dev: "deno run -A --env npm:vite",
    build: "vite build",
    start: answers.deployment === "manual"
      ? "deno serve -A --env _fresh/server.js"
      : "deno serve -A --env _fresh/server.js",
    "db:push": "deno run -A --env npm:drizzle-kit push",
    "db:seed": "deno run -A --env jsr:@hi/database/seed",
  };

  return JSON.stringify({
    tasks,
    imports: {
      "fresh": "jsr:@fresh/core@^2.3.3",
      "fresh/dev": "jsr:@fresh/core@^2.3.3/dev",
      "@fresh/plugin-tailwind": "jsr:@fresh/plugin-tailwind@^1.0.0",
      "@fresh/plugin-vite": "jsr:@fresh/plugin-vite@^1.1.2",
      "preact": "npm:preact@^10.29.1",
      "react": "npm:preact@^10.29.1/compat",
      "react-dom": "npm:preact@^10.29.1/compat",
      "react/jsx-runtime": "npm:preact@^10.29.1/jsx-runtime",
      "@tailwindcss/vite": "npm:@tailwindcss/vite@^4.1.0",
      "tailwindcss": "npm:tailwindcss@^4.1.0",
      "vite": "npm:vite@^7.1.3",
      "@hi/editor": "jsr:@hi/editor@^0.1.0",
      "@hi/render": "jsr:@hi/render@^0.1.0",
      "@hi/website": "jsr:@hi/website@^0.1.0",
      "@hi/database": "jsr:@hi/database@^0.1.0",
      "@hi/utils": "jsr:@hi/utils@^0.1.0",
    },
    compilerOptions: {
      lib: ["dom", "dom.asynciterable", "dom.iterable", "deno.ns"],
      jsx: "precompile",
      jsxImportSource: "preact",
      jsxPrecompileSkipElements: ["a", "img", "source", "body", "html", "head", "title", "meta", "script", "link", "style", "base", "noscript", "template"],
      types: ["vite/client"],
    },
    exclude: ["**/_fresh/*"],
  }, null, 2);
}

export function envFile(answers: PromptAnswers): string {
  let env = `DATABASE_URL=postgresql://hi:hi@localhost:5432/${answers.projectName}\n`;
  env += `BETTER_AUTH_SECRET=change-me-to-a-random-secret\n`;
  env += `BETTER_AUTH_URL=http://localhost:8000\n`;
  if (answers.storage === "seaweedfs") {
    env += `\nS3_ENDPOINT=http://localhost:8333\n`;
    env += `S3_REGION=us-east-1\n`;
    env += `S3_BUCKET=images\n`;
    env += `S3_ACCESS_KEY=admin\n`;
    env += `S3_SECRET_KEY=secret\n`;
    env += `S3_FORCE_PATH_STYLE=true\n`;
  }
  return env;
}

export function gitignore(): string {
  return `_fresh/
dist/
.env
.Denoisson/
node_modules/
*.local
`;
}

export function dockerCompose(answers: PromptAnswers): string {
  const s3Block = answers.storage === "seaweedfs" ? `
  seaweedfs:
    image: chrislusf/seaweedfs
    restart: unless-stopped
    command: server -s3 -s3.config=/config/s3.json -dir=/data -ip.bind=0.0.0.0
    volumes:
      - seaweed_data:/data
      - ./seaweedfs/s3.json:/config/s3.json
    networks:
      - internal
` : "";

  const s3Env = answers.storage === "seaweedfs"
    ? `
      S3_ENDPOINT: http://seaweedfs:8333
      S3_REGION: us-east-1
      S3_BUCKET: images
      S3_ACCESS_KEY: admin
      S3_SECRET_KEY: secret
      S3_FORCE_PATH_STYLE: "true"`
    : "";

  const s3Depends = answers.storage === "seaweedfs"
    ? `
      seaweedfs:
        condition: service_started`
    : "";

  const s3Volumes = answers.storage === "seaweedfs"
    ? `  seaweed_data:\n`
    : "";

  return `services:
  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: \${POSTGRES_USER:-hi}
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD:-hi}
      POSTGRES_DB: \${POSTGRES_DB:-hi}
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U \${POSTGRES_USER:-hi} -d \${POSTGRES_DB:-hi}"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - internal
${s3Block}
  editor:
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - "\${EDITOR_PORT:-3000}:5173"
    environment:
      DATABASE_URL: postgresql://\${POSTGRES_USER:-hi}:\${POSTGRES_PASSWORD:-hi}@postgres:5432/\${POSTGRES_DB:-hi}${s3Env}
      ASSET_BASE_URL: \${ASSET_BASE_URL:-}
      BETTER_AUTH_SECRET: \${BETTER_AUTH_SECRET:-}
      BETTER_AUTH_URL: \${BETTER_AUTH_URL:-}
    depends_on:
      postgres:
        condition: service_healthy${s3Depends}
    networks:
      - internal

volumes:
  pgdata:
${s3Volumes}
networks:
  internal:
`;
}

export function dockerComposeCoolify(answers: PromptAnswers): string {
  return dockerCompose(answers).replace(
    "ports:\n      - \"${EDITOR_PORT:-3000}:5173\"",
    "environment:\n      SERVICE_FQDN_EDITOR: ${SERVICE_FQDN_EDITOR:-}",
  );
}

export function exampleHero(): string {
  return `export function HeroSection() {
  return (
    <section class="py-24 text-center">
      <h1 class="text-5xl font-bold">Welcome to My Site</h1>
      <p class="mt-4 text-lg text-gray-600">Built with Hi Editor</p>
    </section>
  );
}
`;
}

export function exampleFeatures(): string {
  return `export function FeaturesSection() {
  return (
    <section class="py-24">
      <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
      <div class="grid grid-cols-3 gap-8">
        <div class="p-6 border rounded-lg">
          <h3 class="font-semibold mb-2">Fast</h3>
          <p class="text-sm text-gray-600">Deno-powered performance</p>
        </div>
        <div class="p-6 border rounded-lg">
          <h3 class="font-semibold mb-2">Self-Hosted</h3>
          <p class="text-sm text-gray-600">Full control of your data</p>
        </div>
        <div class="p-6 border rounded-lg">
          <h3 class="font-semibold mb-2">Open Source</h3>
          <p class="text-sm text-gray-600">MIT licensed</p>
        </div>
      </div>
    </section>
  );
}
`;
}

export function exampleFooter(): string {
  return `export function Footer() {
  return (
    <footer class="py-8 border-t text-center text-sm text-gray-500">
      <p>Built with Hi Editor</p>
    </footer>
  );
}
`;
}
