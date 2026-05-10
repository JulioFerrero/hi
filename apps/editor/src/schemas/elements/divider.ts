import { defineUtility } from "@wb/editor";
import { Minus } from "lucide-react";

export const divider = defineUtility({
  type: "divider",
  label: "Divider",
  icon: Minus,
  defaultStyles: { marginY: "6" },
});
