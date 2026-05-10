import { defineContainer } from "@wb/editor";
import { Columns3 } from "lucide-react";

export const column = defineContainer({
  type: "column",
  label: "Column",
  icon: Columns3,
  defaultStyles: { display: "flex", flexDirection: "col", gap: "2" },
});
