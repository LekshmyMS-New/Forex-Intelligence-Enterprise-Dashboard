export const getTheme = (mode) => {
  const dark = {
    background: "#0B0F19",
    surface: "#111827",
    card: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.08)",
    textPrimary: "#ffffff",
    textSecondary: "#94a3b8",
    accent: "#00F5C4",
    danger: "#ef4444",
    warning: "#facc15",
    success: "#22c55e",
  };

  const light = {
    background: "#f8fafc",
    surface: "#ffffff",
    card: "#ffffff",
    border: "#e2e8f0",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    accent: "#06b6d4",
    danger: "#ef4444",
    warning: "#facc15",
    success: "#22c55e",
  };

  return mode === "dark" ? dark : light;
};