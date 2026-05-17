import { define } from "../utils.ts";
import DashboardIsland from "../islands/dashboard.tsx";
import EditorIsland from "../islands/editor.tsx";

export default define.page(function EditorCatchAll({ url }) {
  const segments = url.pathname.split("/").filter(Boolean);
  const siteId = segments[0];

  if (!siteId) {
    return <DashboardIsland />;
  }

  return <EditorIsland siteId={siteId} />;
});
