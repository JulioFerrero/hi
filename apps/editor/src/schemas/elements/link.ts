import { defineAction, textField, urlField } from "@wb/editor";
import { Link } from "lucide-react";

export const link = defineAction({
  type: "link",
  label: "Link",
  icon: Link,
  defaultStyles: { fontSize: "base", color: "#2563eb" },
  defaultData: { content: "Link text", href: "#" },
  fields: [
    textField({ name: "content", label: "Text" }),
    urlField({ name: "href", label: "Link URL" }),
  ],
});
