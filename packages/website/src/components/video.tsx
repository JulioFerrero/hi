import React from "react";
import type { ElementProps } from "@hi/render";

function VideoInner({ element, className, style, attrs }: ElementProps) {
  const d = element.data as { src?: string; autoPlay?: boolean; loop?: boolean };
  return (
    <video
      {...attrs}
      src={d.src}
      controls
      autoPlay={d.autoPlay}
      loop={d.loop}
      className={className}
      style={style}
    />
  );
}

export const Video = React.memo(VideoInner);
