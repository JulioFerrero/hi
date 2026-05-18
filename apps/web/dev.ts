import { App, staticFiles } from "fresh";
import { Builder } from "fresh/dev";
import { tailwind } from "@fresh/plugin-tailwind";

const app = new App()
  .use(staticFiles())
  .fsRoutes();

const builder = new Builder();
tailwind(builder, {});

if (Deno.args.includes("build")) {
  const applySnapshot = await builder.build();
  applySnapshot(app);
} else {
  await builder.listen(() => Promise.resolve(app), { port: 3000 });
}
