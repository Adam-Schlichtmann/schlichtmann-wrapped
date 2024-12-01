export type Theme = {
  text: string;
  background: string;
  card: string;
  darkAccent: string;
  mediumAccent: string;
  lightAccent: string;
};

const defaultTheme: Record<"light" | "dark", Theme> = {
  light: {
    text: "#202124",
    background: "#F1F3F4",
    card: "#9AA0A6",
    darkAccent: "#0D652D",
    mediumAccent: "#34A853",
    lightAccent: "#CEEAD6",
  },
  dark: {
    text: "#F1F3F4",
    background: "#202124",
    card: "#9AA0A6",
    darkAccent: "#CEEAD6",
    mediumAccent: "#34A853",
    lightAccent: "#0D652D",
  },
};

export default defaultTheme;
