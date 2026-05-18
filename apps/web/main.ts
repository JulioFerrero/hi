import { App, staticFiles } from "fresh";

export const app: App = new App();

app.use(staticFiles());
app.fsRoutes();
