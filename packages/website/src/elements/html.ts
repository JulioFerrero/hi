import { defineElement, textareaField } from "@hi/editor";
import { Code } from "lucide-react";

export const html = defineElement({
  type: "html",
  label: "HTML",
  icon: Code,
  category: "advanced",
  isContainer: false,
  defaultStyles: {},
  defaultData: { content: "<p>Custom HTML</p>" },
  fields: [
    textareaField({ name: "content", label: "HTML", rows: 5 }),
  ],
});
