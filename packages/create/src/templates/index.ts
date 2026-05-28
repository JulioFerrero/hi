import type { PromptAnswers } from "../prompts.ts";

export function rootDenoJson(answers: PromptAnswers): string {
  return JSON.stringify({
    workspace: ["apps/*", "packages/*"],
    tasks: {
      "dev:web": "cd apps/web && deno task dev",
      "dev:editor": "cd apps/editor && deno task dev",
      "dev": "deno task dev:editor & deno task dev:web",
      "build:web": "cd apps/web && deno task build",
      "build:editor": "cd apps/editor && deno task build",
      "build": "deno task build:web && deno task build:editor",
      "db:push": "deno run -A --env npm:drizzle-kit push",
      "db:seed": "deno run -A --env jsr:@hi/database/seed",
    },
    compilerOptions: {
      "lib": ["ES2022", "DOM", "DOM.Iterable", "deno.ns"],
      "jsx": "react-jsx",
      "jsxImportSource": "preact",
    },
    lint: {
      rules: {
        exclude: ["no-sloppy-imports", "no-import-prefix", "no-unversioned-import", "no-slow-types", "no-explicit-any"],
      },
    },
    unstable: ["bare-node-builtins", "detect-cjs", "node-globals", "sloppy-imports"],
    nodeModulesDir: "auto",
  }, null, 2);
}

export function webDenoJson(answers: PromptAnswers): string {
  return JSON.stringify({
    tasks: {
      dev: "deno run -A --env=../../.env npm:vite",
      build: "vite build",
      start: "deno serve -A --env=../../.env _fresh/server.js",
    },
    imports: {
      "@/": "./",
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
      "@hi/render": "jsr:@hi/render@^0.1.0",
      "@hi/database": "jsr:@hi/database@^0.1.0",
      "@hi/utils": "jsr:@hi/utils@^0.1.0",
      "@hi/website": "../../packages/website/src/index.ts",
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

export function webMainTs(): string {
  return `import { App, staticFiles } from "fresh";

export const app: App = new App();

app.use(staticFiles());
app.fsRoutes();
`;
}

export function webViteConfig(): string {
  return `import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [fresh(), tailwindcss()],
  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "@hi/website": resolve(import.meta.dirname, "../../packages/website/src"),
    },
  },
});
`;
}

export function webRoutesIndex(answers: PromptAnswers): string {
  if (answers.includeExamples) {
    return `import { App } from "fresh";
import { type PageProps } from "fresh";
import { HeroSection } from "../../packages/website/src/components/hero-section.tsx";
import { FeaturesSection } from "../../packages/website/src/components/features-section.tsx";
import { Footer } from "../../packages/website/src/components/footer.tsx";

export default function Page(props: PageProps) {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
`;
  }
  return `import { type PageProps } from "fresh";

export default function Page(props: PageProps) {
  return (
    <main>
      <h1>Welcome to ${answers.projectName}</h1>
    </main>
  );
}
`;
}

export function editorDenoJson(answers: PromptAnswers): string {
  return JSON.stringify({
    tasks: {
      dev: "deno run -A --env=../../.env npm:vite",
      build: "vite build",
      start: "deno run -A --env=../../.env server.ts",
    },
    imports: {
      "@/": "./",
      "preact": "npm:preact@^10.29.1",
      "preact/compat": "npm:preact@^10.29.1/compat",
      "preact/jsx-runtime": "npm:preact@^10.29.1/jsx-runtime",
      "react": "npm:preact@^10.29.1/compat",
      "react-dom": "npm:preact@^10.29.1/compat",
      "react/jsx-runtime": "npm:preact@^10.29.1/jsx-runtime",
      "zustand": "npm:zustand@^5.0.0",
      "lucide-react": "npm:lucide-preact@^0.509.0",
      "lucide-preact": "npm:lucide-preact@^0.509.0",
      "@tailwindcss/vite": "npm:@tailwindcss/vite@^4.1.0",
      "tailwindcss": "npm:tailwindcss@^4.1.0",
      "vite": "npm:vite@^7.1.3",
      "hono": "jsr:@hono/hono@^4.12.21",
      "@hi/editor": "jsr:@hi/editor@^0.1.0",
      "@hi/editor/server": "jsr:@hi/editor@^0.1.0/server",
      "@hi/render": "jsr:@hi/render@^0.1.0",
      "@hi/website": "../../packages/website/src/index.ts",
      "@hi/database": "jsr:@hi/database@^0.1.0",
      "@hi/utils": "jsr:@hi/utils@^0.1.0",
      "@hi/website-pkg": "../../packages/website/src/index.ts",
    },
    compilerOptions: {
      lib: ["dom", "dom.asynciterable", "dom.iterable", "deno.ns"],
      jsx: "precompile",
      jsxImportSource: "preact",
      jsxPrecompileSkipElements: ["a", "img", "source", "body", "html", "head", "title", "meta", "script", "link", "style", "base", "noscript", "template"],
      types: ["vite/client"],
    },
    exclude: ["dist"],
  }, null, 2);
}

export function editorServerTs(): string {
  return `import { createServer } from "@hi/editor/server";
import { tailwindCssResponse, iframeBaseCSS, fontCSSWithAbsoluteURLs } from "@hi/website";
import { join } from "node:path";
import { readFile, stat } from "node:fs/promises";

let cachedFontCSS = "";
let cachedFontDirs = new Map<string, string>();

async function initFonts() {
  const result = await fontCSSWithAbsoluteURLs();
  cachedFontCSS = result.css;
  cachedFontDirs = result.fontDirs;
}

initFonts();

const FONT_MIME: Record<string, string> = {
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

createServer({
  distDir: join(import.meta.dirname!, "dist"),
  tailwindCSS: (classes) => tailwindCssResponse(classes),
  iframeBaseCSS: async () => {
    const base = await iframeBaseCSS();
    return [base, cachedFontCSS].filter(Boolean).join("\\n");
  },
  fontFileHandler: async (urlPathname: string) => {
    const match = urlPathname.match(/^\\/fonts\\/([^/]+)\\/files\\/(.+)$/);
    if (!match) return null;
    const [, pkgBaseName, fileName] = match;
    const dir = cachedFontDirs.get(pkgBaseName!);
    if (!dir) return null;
    const filePath = join(dir, fileName!);
    try {
      await stat(filePath);
      const ext = fileName!.lastIndexOf(".") >= 0 ? fileName!.slice(fileName!.lastIndexOf(".")) : "";
      const contentType = FONT_MIME[ext] ?? "application/octet-stream";
      const content = await readFile(filePath);
      return new Response(new Uint8Array(content), {
        headers: { "content-type": contentType, "cache-control": "public, max-age=31536000, immutable" },
      });
    } catch {
      return null;
    }
  },
});
`;
}

export function editorViteConfig(): string {
  return `import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");

export default defineConfig({
  esbuild: {
    jsxImportSource: "preact",
    jsx: "automatic",
  },
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "react/jsx-runtime": "preact/jsx-runtime",
      "react-dom": "preact/compat",
      "react": "preact/compat",
      "lucide-react": resolve(root, "node_modules/lucide-preact/dist/esm/lucide-preact.js"),
      "@hi/website": resolve(root, "packages/website/src"),
    },
  },
});
`;
}

export function websitePkgDenoJson(): string {
  return JSON.stringify({
    name: "@local/website",
    version: "0.1.0",
    exports: {
      ".": "./src/index.ts",
    },
    imports: {
      "preact": "npm:preact@^10.29.1",
      "react": "npm:preact@^10.29.1/compat",
      "react/jsx-runtime": "npm:preact@^10.29.1/jsx-runtime",
      "tailwindcss": "npm:tailwindcss@^4.1.0",
      "@hi/render": "jsr:@hi/render@^0.1.0",
      "@hi/database": "jsr:@hi/database@^0.1.0",
      "@hi/utils": "jsr:@hi/utils@^0.1.0",
    },
    compilerOptions: {
      lib: ["dom", "dom.asynciterable", "dom.iterable", "deno.ns"],
      jsx: "precompile",
      jsxImportSource: "preact",
    },
  }, null, 2);
}

export function websitePkgIndex(answers: PromptAnswers): string {
  const elements = answers.includeExamples
    ? `export { heroSection } from "./elements/hero-section.ts";
export { featuresSection } from "./elements/features-section.ts";
export { footer } from "./elements/footer-section.ts";
`
    : "";

  const components = answers.includeExamples
    ? `export { HeroSection } from "./components/hero-section.tsx";
export { FeaturesSection } from "./components/features-section.tsx";
export { Footer } from "./components/footer.tsx";
`
    : "";

  return `/** @local/website — Your website components and elements. */

${elements}
${components}
`;
}

export function websiteElementHero(answers: PromptAnswers): string {
  return `import { defineElement, textField } from "@hi/editor";

export const heroSection = defineElement({
  type: "hero-section",
  name: "Hero Section",
  icon: "sparkles",
  category: "section",
  fields: {
    heading: textField("Heading"),
    subtitle: textField("Subtitle"),
  },
  defaultProps: {
    heading: "Welcome to ${answers.projectName}",
    subtitle: "Built with Hi Editor",
  },
});
`;
}

export function websiteElementFeatures(): string {
  return `import { defineElement, textField } from "@hi/editor";

export const featuresSection = defineElement({
  type: "features-section",
  name: "Features",
  icon: "layout-grid",
  category: "section",
  fields: {
    title: textField("Title"),
  },
  defaultProps: {
    title: "Features",
  },
});
`;
}

export function websiteElementFooter(): string {
  return `import { defineElement, textField } from "@hi/editor";

export const footerSection = defineElement({
  type: "footer-section",
  name: "Footer",
  icon: "panel-bottom",
  category: "section",
  fields: {
    text: textField("Text"),
  },
  defaultProps: {
    text: "Built with Hi Editor",
  },
});
`;
}

export function websiteComponentHero(): string {
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

export function websiteComponentFeatures(): string {
  return `export function FeaturesSection() {
  return (
    <section class="py-24">
      <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
      <div class="grid grid-cols-3 gap-8">
        <div class="p-6 border rounded-lg">
          <h3 class="font-semibold mb-2">Fast</h3>
          <p class="text-sm text-gray-600">Deno-powered</p>
        </div>
        <div class="p-6 border rounded-lg">
          <h3 class="font-semibold mb-2">Self-Hosted</h3>
          <p class="text-sm text-gray-600">Full control</p>
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

export function websiteComponentFooter(): string {
  return `export function Footer() {
  return (
    <footer class="py-8 border-t text-center text-sm text-gray-500">
      <p>Built with Hi Editor</p>
    </footer>
  );
}
`;
}

export function envFile(answers: PromptAnswers): string {
  const dbHost = answers.environment === "vps" ? "postgres" : "localhost";
  let env = `DATABASE_URL=postgresql://hi:hi@${dbHost}:5432/${answers.projectName}\n`;
  env += `BETTER_AUTH_SECRET=change-me\n`;
  env += `BETTER_AUTH_URL=http://localhost:5173\n`;
  if (answers.storage === "seaweedfs") {
    env += `\nS3_ENDPOINT=http://seaweedfs:8333\n`;
    env += `S3_REGION=us-east-1\n`;
    env += `S3_BUCKET=images\n`;
    env += `S3_ACCESS_KEY=admin\n`;
    env += `S3_SECRET_KEY=secret\n`;
    env += `S3_FORCE_PATH_STYLE=true\n`;
  }
  env += `\nWEBSITE_ID=\n`;
  return env;
}

export function gitignore(): string {
  return `_fresh/
dist/
node_modules/
.env
*.local
.Denoisson/
`;
}

export function seaweedfsConfig(): string {
  return JSON.stringify({
    identities: [
      { name: "admin", credentials: [{ accessKey: "admin", secretKey: "secret" }], actions: ["Admin", "Read", "Write"] },
      { name: "anonymous", actions: ["Read"] },
    ],
  }, null, 2);
}

export function dockerComposeFull(answers: PromptAnswers): string {
  const s3Service = answers.storage === "seaweedfs" ? `
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
      POSTGRES_DB: \${POSTGRES_DB:-${answers.projectName}}
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U \${POSTGRES_USER:-hi} -d \${POSTGRES_DB:-${answers.projectName}}"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - internal
${s3Service}
  editor:
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - "\${EDITOR_PORT:-3000}:5173"
    environment:
      DATABASE_URL: postgresql://\${POSTGRES_USER:-hi}:\${POSTGRES_PASSWORD:-hi}@postgres:5432/\${POSTGRES_DB:-${answers.projectName}}${s3Env}
      ASSET_BASE_URL: \${ASSET_BASE_URL:-}
      BETTER_AUTH_SECRET: \${BETTER_AUTH_SECRET:-}
      BETTER_AUTH_URL: \${BETTER_AUTH_URL:-}
    depends_on:
      postgres:
        condition: service_healthy${s3Depends}
    networks:
      - internal

  web:
    build:
      context: .
      dockerfile: Dockerfile.web
    restart: unless-stopped
    ports:
      - "\${WEB_PORT:-8000}:8000"
    environment:
      DATABASE_URL: postgresql://\${POSTGRES_USER:-hi}:\${POSTGRES_PASSWORD:-hi}@postgres:5432/\${POSTGRES_DB:-${answers.projectName}}
      WEBSITE_ID: \${WEBSITE_ID:-}
    depends_on:
      postgres:
        condition: service_healthy
    networks:
      - internal

volumes:
  pgdata:
${s3Volumes}
networks:
  internal:
`;
}

export function dockerComposeLocal(): string {
  return `services:
  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: hi
      POSTGRES_PASSWORD: hi
      POSTGRES_DB: hi
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U hi -d hi"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  pgdata:
`;
}

export function vercelJson(): string {
  return JSON.stringify({
    buildCommand: "deno task build",
    outputDirectory: "apps/web/_fresh",
    installCommand: "deno install",
  }, null, 2);
}

export function flyToml(): string {
  return `app = "hi-editor"
primary_region = "sjc"

[build]
  dockerfile = "Dockerfile"

[env]
  PORT = "5173"

[http_service]
  internal_port = 5173
  force_https = true
  auto_stop_machines = "stop"
  auto_start_machines = true
  min_machines_running = 0
`;
}

export function railwayJson(): string {
  return JSON.stringify({
    "$schema": "https://railway.app/railway.schema.json",
    build: { builder: "DOCKERFILE", dockerfilePath: "Dockerfile" },
    deploy: { restartPolicyType: "ON_FAILURE" },
  }, null, 2);
}
