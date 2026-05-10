import { defineAction, textField, urlField } from "@wb/editor";
import { Square } from "lucide-react";

export const button = defineAction({
  type: "button",
  label: "Button",
  icon: Square,
  defaultStyles: {
    padding: "3",
    paddingX: "8",
    fontSize: "base",
    fontWeight: "semibold",
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
    borderRadius: "lg",
  },
  defaultData: { content: "Click me", href: "#" },
  fields: [
    textField({ name: "content", label: "Text" }),
    urlField({ name: "href", label: "Link URL" }),
  ],
});
