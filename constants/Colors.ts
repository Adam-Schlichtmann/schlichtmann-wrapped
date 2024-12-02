export type Theme = {
  adam: string;
  amos: string;
  background: string;
  card: string;
  darkAccent: string;
  leah: string;
  lightAccent: string;
  mediumAccent: string;
  text: string;
};

const defaultTheme: Record<"light" | "dark", Theme> = {
  dark: {
    adam: "#FA8072",
    amos: "#6495ED",
    background: "#202124",
    card: "#9AA0A6",
    darkAccent: "#CEEAD6",
    leah: "#E0B0FF",
    lightAccent: "#0D652D",
    mediumAccent: "#34A853",
    text: "#F1F3F4",
  },
  light: {
    adam: "#FA8072",
    amos: "#6495ED",
    background: "#F1F3F4",
    card: "#ffffff",
    darkAccent: "#0D652D",
    leah: "#E0B0FF",
    lightAccent: "#CEEAD6",
    mediumAccent: "#34A853",
    text: "#202124",
  },
};

export default defaultTheme;
