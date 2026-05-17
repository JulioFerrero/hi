import { defineContainer } from "@hi/editor";
import { Rows3 } from "lucide-react";

export const row = defineContainer({
  type: "row",
  label: "Row",
  icon: Rows3,
  defaultStyles: { display: "flex", flexWrap: "wrap", gap: "6" },
});
