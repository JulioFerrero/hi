import { defineUtility } from "@hi/editor";
import { MoveVertical } from "lucide-react";

export const spacer = defineUtility({
  type: "spacer",
  label: "Spacer",
  icon: MoveVertical,
  defaultStyles: { height: "10" },
});
