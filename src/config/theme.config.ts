
export type Theme = "light" | "dark";

export const COLORS = {
  primary: "#2563eb",
  secondary: "#4f46e5",
  success: "#22c55e",
  danger: "#ef4444",
} as const;

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
} as const;