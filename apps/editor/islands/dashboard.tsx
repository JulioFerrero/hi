import { IS_BROWSER } from "fresh/runtime";
import { Dashboard, createApiFetch } from "@hi/editor";

export default function DashboardIsland() {
  if (!IS_BROWSER) {
    return (
      <div style="display:flex;height:100vh;width:100vw;align-items:center;justify-content:center;background:#0c0c0c;">
        <div style="color:#71717a;font-size:14px;">Loading dashboard…</div>
      </div>
    );
  }

  const api = createApiFetch();

  return <Dashboard api={api} onSelectSite={(siteId: string) => { window.location.href = `/${siteId}`; }} />;
}
