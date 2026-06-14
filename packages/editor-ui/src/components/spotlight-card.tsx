"use client";

import { useRef, useState } from "react";
import { cn } from "@vitrea/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  hoverScale?: number;
  onClick?: () => void;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(255,255,255,0.06)",
  borderColor = "rgba(255,255,255,0.06)",
  hoverScale = 1.01,
  onClick,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden transition-transform duration-300 ease-out will-change-transform",
        onClick ? "cursor-pointer" : "",
        className,
      )}
      style={{
        borderColor,
        borderWidth: 1,
        borderStyle: "solid",
        transform: isHovered ? `scale(${hoverScale})` : "scale(1)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
