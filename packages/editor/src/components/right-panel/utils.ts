export function getVal(styles: Record<string, unknown>, name: string): string {
  return typeof styles[name] === "string" ? String(styles[name]) : "";
}

export type LucideIcon = React.FC<{ className?: string }>;
export type IconItem = { value: string; icon: LucideIcon; label: string };
