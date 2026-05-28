import { parseArgs } from "@std/cli";
import { resolve } from "@std/path";
import { ensureDir } from "@std/fs";
import { prompt } from "./prompts.ts";
import { scaffold } from "./scaffold.ts";

const flags = parseArgs(Deno.args, {
  string: ["dir"],
  default: { dir: "." },
  alias: { d: "dir" },
});

console.log("Hi Editor — Project Scaffolder\n");

const answers = await prompt();
const targetDir = resolve(flags.dir, answers.projectName);

await ensureDir(targetDir);
await scaffold(targetDir, answers);

console.log(`\nDone! Your project is ready at ${targetDir}`);
console.log("\nNext steps:");
console.log(`  cd ${answers.projectName}`);
console.log("  Edit .env with your database URL");
console.log("  deno task dev");
