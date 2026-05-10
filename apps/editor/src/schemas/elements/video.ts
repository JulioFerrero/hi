import { defineMedia, urlField } from "@wb/editor";
import { Play } from "lucide-react";

export const video = defineMedia({
  type: "video",
  label: "Video",
  icon: Play,
  defaultStyles: { maxWidth: "full" },
  defaultData: { src: "" },
  fields: [
    urlField({ name: "src", label: "Video URL" }),
  ],
});
