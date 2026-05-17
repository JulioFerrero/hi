import { App } from "fresh";
import { dev, build } from "fresh/dev";
import { staticFiles } from "fresh";
import { PageRenderer, type RenderElement } from "@hi/website";

const sampleElements: RenderElement[] = [
  { id: "s1", parentId: null, type: "section", order: 0, data: {}, styles: { width: "full", padding: "16", paddingX: "6" } },
  { id: "h1", parentId: "s1", type: "heading", order: 0, data: { content: "Hello from @hi/website", tagName: "h1" }, styles: { fontSize: "4xl", fontWeight: "bold" } },
  { id: "t1", parentId: "s1", type: "text", order: 1, data: { content: "This is a Fresh app consuming the @hi packages." }, styles: { fontSize: "lg", color: "#6b7280" } },
];

const app = new App()
  .use(staticFiles())
  .get("/", (ctx) => ctx.render(<PageRenderer elements={sampleElements} />))
  .notFound((ctx) => ctx.render(<h1>404</h1>));

if (Deno.args.includes("build")) {
  await build(app);
} else {
  await dev(app, { port: 4000 });
}
