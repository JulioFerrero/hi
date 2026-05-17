import { defineContainer } from "@hi/editor";
import { LayoutDashboard } from "lucide-react";

export const section = defineContainer({
  type: "section",
  label: "Section",
  icon: LayoutDashboard,
  defaultStyles: { width: "full", padding: "20", paddingX: "6" },
});
