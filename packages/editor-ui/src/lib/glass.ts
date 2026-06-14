// Shared glassmorphism style definitions — single source of truth
// Used across TopBar, LeftPanel, RightPanel, CanvasToolbar, modals, dropdowns

export const glassStyle: React.CSSProperties = {
  backgroundColor: "rgba(22,22,22,0.78)",
  border: "1px solid #343434",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
};

export const glassDarkStyle: React.CSSProperties = {
  backgroundColor: "rgba(22,22,22,0.92)",
  border: "1px solid #343434",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
};

export const glassPanelClass = "rounded-2xl backdrop-blur-[10px]";

export const overlayStyle: React.CSSProperties = {
  backgroundColor: "rgba(0,0,0,0.55)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
};

export const tooltipStyle: React.CSSProperties = {
  background: "rgba(0,0,0,0.78)",
  backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)",
  boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.12), 0px 3px 6px 0px rgba(0,0,0,0.19), inset 0px 0.75px 0.25px 0px rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
};
