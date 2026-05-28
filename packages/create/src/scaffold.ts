import { join } from "@std/path";
import { ensureDir } from "@std/fs";
import type { PromptAnswers } from "./prompts.ts";
import {
  rootDenoJson,
  webDenoJson,
  webMainTs,
  webViteConfig,
  editorDenoJson,
  editorServerTs,
  editorViteConfig,
  websitePkgDenoJson,
  websitePkgIndex,
  websiteElementHero,
  websiteElementFeatures,
  websiteElementFooter,
  websiteComponentHero,
  websiteComponentFeatures,
  websiteComponentFooter,
  envFile,
  gitignore,
  seaweedfsConfig,
  dockerComposeFull,
  dockerComposeLocal,
  vercelJson,
  flyToml,
  railwayJson,
} from "./templates/index.ts";

export function listFiles(answers: PromptAnswers): string[] {
  const f = [
    "deno.json",
    ".env",
    ".gitignore",
    "apps/web/deno.json",
    "apps/web/main.ts",
    "apps/web/vite.config.ts",
    "apps/editor/deno.json",
    "apps/editor/server.ts",
    "apps/editor/vite.config.ts",
    "packages/website/deno.json",
    "packages/website/src/index.ts",
  ];
  if (answers.includeExamples) {
    f.push(
      "packages/website/src/elements/hero-section.ts",
      "packages/website/src/elements/features-section.ts",
      "packages/website/src/elements/footer-section.ts",
      "packages/website/src/components/hero-section.tsx",
      "packages/website/src/components/features-section.tsx",
      "packages/website/src/components/footer.tsx",
    );
  }
  if (answers.environment === "vps") {
    f.push("docker-compose.yml");
    if (answers.storage === "seaweedfs") f.push("seaweedfs/s3.json");
  } else if (answers.environment === "local") {
    f.push("docker-compose.yml");
  } else if (answers.cloudProvider === "vercel") {
    f.push("vercel.json");
  } else if (answers.cloudProvider === "fly") {
    f.push("fly.toml");
  } else if (answers.cloudProvider === "railway") {
    f.push("railway.json");
  }
  return f;
}

export async function scaffold(dir: string, answers: PromptAnswers): Promise<void> {
  const write = async (path: string, content: string) => {
    const fullPath = join(dir, path);
    await ensureDir(fullPath.substring(0, fullPath.lastIndexOf("/")));
    await Deno.writeTextFile(fullPath, content);
  };

  await write("deno.json", rootDenoJson(answers));
  await write(".env", envFile(answers));
  await write(".gitignore", gitignore());

  // apps/web
  await write("apps/web/deno.json", webDenoJson(answers));
  await write("apps/web/main.ts", webMainTs());
  await write("apps/web/vite.config.ts", webViteConfig());

  // apps/editor
  await write("apps/editor/deno.json", editorDenoJson(answers));
  await write("apps/editor/server.ts", editorServerTs());
  await write("apps/editor/vite.config.ts", editorViteConfig());

  // packages/website
  await write("packages/website/deno.json", websitePkgDenoJson());
  await write("packages/website/src/index.ts", websitePkgIndex(answers));

  if (answers.includeExamples) {
    await write("packages/website/src/elements/hero-section.ts", websiteElementHero(answers));
    await write("packages/website/src/elements/features-section.ts", websiteElementFeatures());
    await write("packages/website/src/elements/footer-section.ts", websiteElementFooter());
    await write("packages/website/src/components/hero-section.tsx", websiteComponentHero());
    await write("packages/website/src/components/features-section.tsx", websiteComponentFeatures());
    await write("packages/website/src/components/footer.tsx", websiteComponentFooter());
  }

  // deployment
  if (answers.environment === "vps") {
    await write("docker-compose.yml", dockerComposeFull(answers));
    if (answers.storage === "seaweedfs") {
      await write("seaweedfs/s3.json", seaweedfsConfig());
    }
  } else if (answers.environment === "local") {
    await write("docker-compose.yml", dockerComposeLocal());
  } else if (answers.cloudProvider === "vercel") {
    await write("vercel.json", vercelJson());
  } else if (answers.cloudProvider === "fly") {
    await write("fly.toml", flyToml());
  } else if (answers.cloudProvider === "railway") {
    await write("railway.json", railwayJson());
  }

  if (answers.initGit) {
    await new Deno.Command("git", { args: ["init", dir] }).output();
  }

  if (answers.startNow && answers.environment === "local") {
    console.log("\n  Starting PostgreSQL...");
    await new Deno.Command("docker", { args: ["compose", "-f", join(dir, "docker-compose.yml"), "up", "-d"] }).output();

    console.log("  Waiting for database...");
    await new Promise((r) => setTimeout(r, 5000));

    console.log("  Pushing schema...");
    await new Deno.Command("deno", { args: ["task", "db:push"], cwd: dir }).output();

    console.log("  Seeding database...");
    const seed = new Deno.Command("deno", { args: ["task", "db:seed"], cwd: dir, stdout: "piped" });
    const seedOutput = await seed.output();
    const seedText = new TextDecoder().decode(seedOutput.stdout);
    console.log(seedText);

    const idMatch = seedText.match(/WEBSITE_ID[=:]\s*([\w-]+)/);
    if (idMatch) {
      console.log(`\n  Set WEBSITE_ID=${idMatch[1]} in your .env file`);
    }
  }
}
