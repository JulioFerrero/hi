import { App, staticFiles } from "fresh";
import { app as apiApp } from "@hi/api";
import { define } from "./utils.ts";

export const app = new App();

app.use(staticFiles());
app.all("/api/*", (ctx) => {
  const url = new URL(ctx.req.url);
  const path = url.pathname.slice(4) || "/";
  const newUrl = new URL(path + url.search, url.origin);
  const newReq = new Request(newUrl, ctx.req);
  return apiApp.fetch(newReq);
});
app.fsRoutes();
