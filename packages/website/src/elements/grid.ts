import { defineContainer, selectField } from "@hi/editor";
import { Grid3x3 } from "lucide-react";

export const grid = defineContainer({
  type: "grid",
  label: "Grid",
  icon: Grid3x3,
  defaultStyles: { display: "grid", gap: "6", gridTemplateColumns: "2" },
  fields: [
    selectField({ name: "columns", label: "Columns", options: ["1", "2", "3", "4"] }),
  ],
});
