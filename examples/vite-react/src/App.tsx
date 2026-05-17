import { PageRenderer, type RenderElement } from "@hi/website";

const sampleElements: RenderElement[] = [
  {
    id: "section-1",
    parentId: null,
    type: "section",
    order: 0,
    data: {},
    styles: { width: "full", padding: "16", paddingX: "6" },
  },
  {
    id: "heading-1",
    parentId: "section-1",
    type: "heading",
    order: 0,
    data: { content: "Hello from @hi/website", tagName: "h1" },
    styles: { fontSize: "4xl", fontWeight: "bold" },
  },
  {
    id: "text-1",
    parentId: "section-1",
    type: "text",
    order: 1,
    data: { content: "This is a Vite + React app consuming the @hi packages." },
    styles: { fontSize: "lg", color: "#6b7280" },
  },
];

export default function App() {
  return (
    <div>
      <PageRenderer elements={sampleElements} />
    </div>
  );
}
