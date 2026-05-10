"use client";

import { TopBar } from "./top-bar/top-bar";
import { LeftPanel } from "./left-panel/left-panel";
import { RightPanel } from "./right-panel/right-panel";
import { Canvas } from "./canvas/canvas";

export function EditorShell({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <LeftPanel />
        <Canvas />
        <RightPanel />
      </div>
    </div>
  );
}
