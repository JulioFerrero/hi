import { defineText, selectField, textareaField } from "@wb/editor";
import { Heading } from "lucide-react";

export const heading = defineText({
  type: "heading",
  label: "Heading",
  icon: Heading,
  defaultStyles: { fontSize: "5xl", fontWeight: "bold", lineHeight: "tight", color: "#0a0a0a" },
  defaultData: { content: "Heading", tagName: "h2" },
  fields: [
    selectField({ name: "tagName", label: "Tag", options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"] }),
    textareaField({ name: "content", label: "Text", rows: 3 }),
  ],
});
