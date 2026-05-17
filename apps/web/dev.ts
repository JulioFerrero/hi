import { App } from "fresh";
import { dev, build } from "fresh/dev";
import { tailwind } from "@fresh/plugin-tailwind";
import { staticFiles } from "fresh";

const app = new App()
  .use(staticFiles())
  .fsRoutes();

tailwind(app);

if (Deno.args.includes("build")) {
  await build(app);
} else {
  await dev(app, { port: 3000 });
}
