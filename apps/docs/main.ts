import { App, staticFiles } from "fresh";

export const app: App = new App();

app.use(staticFiles());
app.fsRoutes();

if (import.meta.main) {
  await app.listen({ port: 3002 });
}

export default app;
