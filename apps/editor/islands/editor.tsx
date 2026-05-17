import { IS_BROWSER } from "fresh/runtime";
import { Editor, createApiFetch } from "@hi/editor";
import { schema, websiteRenderer } from "@hi/website";

export default function EditorIsland({ siteId }: { siteId: string }) {
  if (!IS_BROWSER) {
    return (
      <div style="display:flex;height:100vh;width:100vw;align-items:center;justify-content:center;background:#0c0c0c;">
        <div style="color:#71717a;font-size:14px;">Loading editor…</div>
      </div>
    );
  }

  const api = createApiFetch();
  return <Editor siteId={siteId} schema={schema} api={api} renderer={websiteRenderer} />;
}
