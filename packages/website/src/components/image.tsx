import type { ElementProps } from "@hi/render";

export function Image({ element, className, style, attrs }: ElementProps) {
  const d = element.data as { src?: string; alt?: string };
  return (
    <img
      {...attrs}
      src={d.src}
      alt={d.alt ?? ""}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}
