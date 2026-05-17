import { defineMedia, urlField, textField } from "@hi/editor";
import { Image } from "lucide-react";

export const image = defineMedia({
  type: "image",
  label: "Image",
  icon: Image,
  defaultStyles: { maxWidth: "full", objectFit: "cover" },
  defaultData: { src: "https://placehold.co/800x400/e5e5e5/999?text=Image", alt: "Image" },
  fields: [
    urlField({ name: "src", label: "Image URL" }),
    textField({ name: "alt", label: "Alt text" }),
  ],
});
