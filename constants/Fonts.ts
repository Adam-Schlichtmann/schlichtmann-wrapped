import { Platform } from "react-native";

// Loaded from Google Fonts in app/+html.tsx. The site is web-only, so native
// falls back to the system font.
export const SERIF = Platform.select({
  web: "Fraunces, Georgia, 'Times New Roman', serif",
});
export const SANS = Platform.select({
  web: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif",
});
