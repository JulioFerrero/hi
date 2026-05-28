export interface PromptAnswers {
  projectName: string;
  deployment: "docker" | "coolify" | "manual";
  storage: "seaweedfs" | "s3" | "skip";
  includeExamples: boolean;
  initGit: boolean;
}

const readLine = (prompt: string): Promise<string> => {
  const buf = new Uint8Array(1024);
  return new Promise((resolve) => {
    Deno.stdout.write(new TextEncoder().encode(prompt));
    const n = Deno.stdin.readSync(buf);
    resolve(new TextDecoder().decode(buf.subarray(0, n ?? 0)).trim());
  });
};

const select = async (prompt: string, options: string[], defaultIdx: number): Promise<number> => {
  console.log(`\n${prompt}`);
  options.forEach((opt, i) => console.log(`  ${i + 1}) ${opt}${i === defaultIdx ? " (default)" : ""}`));
  const answer = await readLine("  > ");
  if (!answer) return defaultIdx;
  const idx = parseInt(answer, 10) - 1;
  return idx >= 0 && idx < options.length ? idx : defaultIdx;
};

export async function prompt(): Promise<PromptAnswers> {
  const projectName = (await readLine("Project name: ")) || "my-site";

  const deploymentIdx = await select(
    "Deployment target:",
    ["Docker Compose", "Coolify", "Manual"],
    0,
  );
  const deploymentMap = ["docker", "coolify", "manual"] as const;

  const storageIdx = await select(
    "File storage:",
    ["SeaweedFS (self-hosted S3)", "External S3 (AWS/R2/etc)", "Skip (configure later)"],
    0,
  );
  const storageMap = ["seaweedfs", "s3", "skip"] as const;

  const includeAnswer = (await readLine("Include example components? (Y/n): ")).toLowerCase();
  const includeExamples = includeAnswer !== "n";

  const gitAnswer = (await readLine("Initialize git? (Y/n): ")).toLowerCase();
  const initGit = gitAnswer !== "n";

  const deployment = deploymentMap[deploymentIdx] ?? "docker";
  const storage = storageMap[storageIdx] ?? "seaweedfs";

  return {
    projectName,
    deployment,
    storage,
    includeExamples,
    initGit,
  };
}
