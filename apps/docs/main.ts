import { App, staticFiles } from "fresh";
import { define } from "./utils.ts";

export const app = new App();

app.use(staticFiles());
app.fsRoutes();

if (import.meta.main) {
  await app.listen({ port: 3002 });
}

export default app;
