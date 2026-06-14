"use client";

import { cn } from "@vitrea/utils";
import { glassPanelClass, glassStyle, glassDarkStyle } from "../lib/glass";

export function Panel({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark";
}) {
  return (
    <div
      className={cn(glassPanelClass, className)}
      style={variant === "dark" ? glassDarkStyle : glassStyle}
    >
      {children}
    </div>
  );
}
