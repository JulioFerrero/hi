import { defineText, textareaField } from "@wb/editor";
import { Type } from "lucide-react";

export const text = defineText({
  type: "text",
  label: "Text",
  icon: Type,
  defaultStyles: { fontSize: "base", lineHeight: "relaxed", color: "#374151" },
  defaultData: { content: "Write your text here." },
  fields: [
    textareaField({ name: "content", label: "Text", rows: 3 }),
  ],
});
