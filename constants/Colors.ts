export type Theme = {
  accent: string;
  accentSoft: string;
  background: string;
  border: string;
  gridline: string;
  surface: string;
  surfaceMuted: string;
  text: string;
  textMuted: string;
  // Person colors are a validated categorical palette (colorblind-safe in
  // both modes); keep Adam/Leah and Amos/AmyLynn adjacent when reordering.
  adam: string;
  leah: string;
  amos: string;
  amylynn: string;
  general: string;
};

const defaultTheme: Record<"light" | "dark", Theme> = {
  light: {
    accent: "#1F5C3F",
    accentSoft: "#E4EFE8",
    background: "#FAF9F6",
    border: "#E7E4DD",
    gridline: "#EEEBE5",
    surface: "#FFFFFF",
    surfaceMuted: "#F3F1EC",
    text: "#1A1A18",
    textMuted: "#6B6862",
    adam: "#2A78D6",
    leah: "#EB6834",
    amos: "#1BAF7A",
    amylynn: "#4A3AA7",
    general: "#8B8A85",
  },
  dark: {
    accent: "#8CC9A5",
    accentSoft: "#1E3329",
    background: "#121211",
    border: "#33322E",
    gridline: "#2A2A27",
    surface: "#1C1C1A",
    surfaceMuted: "#252522",
    text: "#F2F0EB",
    textMuted: "#A5A29B",
    adam: "#3987E5",
    leah: "#D95926",
    amos: "#199E70",
    amylynn: "#9085E9",
    general: "#8F8E88",
  },
};

export default defaultTheme;
