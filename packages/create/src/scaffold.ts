import { join } from "@std/path";
import { ensureDir } from "@std/fs";
import type { PromptAnswers } from "./prompts.ts";
import {
  hiConfig,
  denoJson,
  envFile,
  gitignore,
  dockerCompose,
  dockerComposeCoolify,
  exampleHero,
  exampleFeatures,
  exampleFooter,
} from "./templates/index.ts";

export async function scaffold(dir: string, answers: PromptAnswers): Promise<void> {
  const write = async (path: string, content: string) => {
    const fullPath = join(dir, path);
    await ensureDir(fullPath.substring(0, fullPath.lastIndexOf("/")));
    await Deno.writeTextFile(fullPath, content);
  };

  await write("hi.config.ts", hiConfig(answers));
  await write("deno.json", denoJson(answers));
  await write(".env", envFile(answers));
  await write(".gitignore", gitignore());

  if (answers.includeExamples) {
    await write("components/hero-section.tsx", exampleHero());
    await write("components/features-section.tsx", exampleFeatures());
    await write("components/footer.tsx", exampleFooter());
  }

  if (answers.deployment === "docker" || answers.deployment === "coolify") {
    await write("deploy/docker-compose.yml", dockerCompose(answers));
    if (answers.deployment === "coolify") {
      await write("deploy/docker-compose.coolify.yml", dockerComposeCoolify(answers));
    }
    await write("deploy/seaweedfs/s3.json", JSON.stringify({
      identities: [
        { name: "admin", credentials: [{ accessKey: "admin", secretKey: "secret" }], actions: ["Admin", "Read", "Write"] },
        { name: "anonymous", actions: ["Read"] },
      ],
    }, null, 2));
  }

  if (answers.initGit) {
    const p = new Deno.Command("git", { args: ["init", dir] });
    await p.output();
  }
}
