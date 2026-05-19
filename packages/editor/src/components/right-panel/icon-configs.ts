import {
  Square, RectangleHorizontal, GalleryHorizontal, GalleryHorizontalEnd,
  GalleryVertical, GalleryVerticalEnd, Grid2x2, EyeOff,
  AlignHorizontalJustifyStart, AlignHorizontalJustifyEnd, AlignHorizontalJustifyCenter,
  AlignHorizontalSpaceBetween, AlignHorizontalSpaceAround, AlignHorizontalDistributeCenter,
  AlignVerticalJustifyStart, AlignVerticalJustifyEnd, AlignVerticalJustifyCenter,
  StretchVertical, Baseline,
  WrapText, ArrowRightLeft,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  ArrowUpDown, Eye, Scroll, PanelBottomClose,
  SquareDashed, SquareRoundCorner, Circle,
  Maximize, Maximize2, Minimize2,
  Minus, Spline, Ellipsis, Equal, Slash,
} from "lucide-react";
import type { IconItem } from "./utils";

export const DISPLAY_ICONS: IconItem[] = [
  { value: "block", icon: Square, label: "Block" },
  { value: "inline-block", icon: RectangleHorizontal, label: "Inline Block" },
  { value: "flex", icon: GalleryHorizontal, label: "Flex" },
  { value: "inline-flex", icon: GalleryHorizontal, label: "Inline Flex" },
  { value: "grid", icon: Grid2x2, label: "Grid" },
  { value: "hidden", icon: EyeOff, label: "Hidden" },
];

export const FLEX_DIR_ICONS: IconItem[] = [
  { value: "row", icon: GalleryHorizontal, label: "Row" },
  { value: "row-reverse", icon: GalleryHorizontalEnd, label: "Row Reverse" },
  { value: "col", icon: GalleryVertical, label: "Column" },
  { value: "col-reverse", icon: GalleryVerticalEnd, label: "Column Reverse" },
];

export const JUSTIFY_ICONS: IconItem[] = [
  { value: "start", icon: AlignHorizontalJustifyStart, label: "Start" },
  { value: "end", icon: AlignHorizontalJustifyEnd, label: "End" },
  { value: "center", icon: AlignHorizontalJustifyCenter, label: "Center" },
  { value: "between", icon: AlignHorizontalSpaceBetween, label: "Space Between" },
  { value: "around", icon: AlignHorizontalSpaceAround, label: "Space Around" },
  { value: "evenly", icon: AlignHorizontalDistributeCenter, label: "Space Evenly" },
];

export const ALIGN_ICONS: IconItem[] = [
  { value: "start", icon: AlignVerticalJustifyStart, label: "Start" },
  { value: "end", icon: AlignVerticalJustifyEnd, label: "End" },
  { value: "center", icon: AlignVerticalJustifyCenter, label: "Center" },
  { value: "stretch", icon: StretchVertical, label: "Stretch" },
  { value: "baseline", icon: Baseline, label: "Baseline" },
];

export const WRAP_ICONS: IconItem[] = [
  { value: "wrap", icon: WrapText, label: "Wrap" },
  { value: "nowrap", icon: ArrowRightLeft, label: "No Wrap" },
  { value: "reverse", icon: WrapText, label: "Wrap Reverse" },
];

export const TEXT_ALIGN_ICONS: IconItem[] = [
  { value: "left", icon: AlignLeft, label: "Left" },
  { value: "center", icon: AlignCenter, label: "Center" },
  { value: "right", icon: AlignRight, label: "Right" },
  { value: "justify", icon: AlignJustify, label: "Justify" },
];

export const OVERFLOW_ICONS: IconItem[] = [
  { value: "auto", icon: ArrowUpDown, label: "Auto" },
  { value: "hidden", icon: PanelBottomClose, label: "Hidden" },
  { value: "visible", icon: Eye, label: "Visible" },
  { value: "scroll", icon: Scroll, label: "Scroll" },
];

export const BORDER_RADIUS_ICONS: IconItem[] = [
  { value: "none", icon: Square, label: "None" },
  { value: "sm", icon: SquareDashed, label: "Small" },
  { value: "md", icon: SquareRoundCorner, label: "Medium" },
  { value: "lg", icon: SquareRoundCorner, label: "Large" },
  { value: "xl", icon: SquareRoundCorner, label: "Extra Large" },
  { value: "full", icon: Circle, label: "Full" },
];

export const BG_SIZE_ICONS: IconItem[] = [
  { value: "auto", icon: Maximize, label: "Auto" },
  { value: "cover", icon: Maximize2, label: "Cover" },
  { value: "contain", icon: Minimize2, label: "Contain" },
];

export const BORDER_STYLE_ICONS: IconItem[] = [
  { value: "solid", icon: Minus, label: "Solid" },
  { value: "dashed", icon: Spline, label: "Dashed" },
  { value: "dotted", icon: Ellipsis, label: "Dotted" },
  { value: "double", icon: Equal, label: "Double" },
  { value: "none", icon: Slash, label: "None" },
];

export const WEIGHT_LABELS: Record<string, string> = {
  thin: "100", extralight: "200", light: "300", normal: "400", medium: "500",
  semibold: "600", bold: "700", extrabold: "800", black: "900",
};

export const ICON_MAP: Record<string, IconItem[]> = {
  display: DISPLAY_ICONS,
  flexDirection: FLEX_DIR_ICONS,
  justifyContent: JUSTIFY_ICONS,
  alignItems: ALIGN_ICONS,
  flexWrap: WRAP_ICONS,
  textAlign: TEXT_ALIGN_ICONS,
  overflow: OVERFLOW_ICONS,
  borderRadius: BORDER_RADIUS_ICONS,
  backgroundSize: BG_SIZE_ICONS,
  borderStyle: BORDER_STYLE_ICONS,
};
