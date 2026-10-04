import STATS_BY_YEAR from "@/data";
import { useStyles } from "./Themed";
import { TextStyle, View, ViewStyle } from "react-native";
import Markdown from "react-native-markdown-display";
import { useEffect, useState } from "react";
import { Theme } from "@/constants/Colors";
import { SANS, SERIF } from "@/constants/Fonts";

type Styles = {
  container: ViewStyle;
  text: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  container: {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 64,
    // Web-only CSS values: tighter padding on narrow screens.
    paddingHorizontal: "clamp(20px, 5vw, 48px)" as unknown as number,
    paddingVertical: "clamp(24px, 5vw, 40px)" as unknown as number,
  },
  // The card matches the stats grid; the text keeps a readable line length.
  text: {
    alignSelf: "center",
    maxWidth: 680,
    width: "100%",
  },
});

/**
 * You can view available styles on the docs
 * https://github.com/iamacup/react-native-markdown-display/?tab=readme-ov-file#rules-and-styles
 */
type MDStyles = {
  body: TextStyle;
  em: TextStyle;
  heading1: TextStyle;
  heading2: TextStyle;
  heading3: TextStyle;
  link: TextStyle;
  paragraph: TextStyle;
  strong: TextStyle;
};

const markdownStyles = (theme: Theme): MDStyles => {
  const heading: TextStyle = {
    color: theme.text,
    fontFamily: SERIF,
    fontWeight: "500",
    letterSpacing: -0.4,
  };
  return {
    body: {
      color: theme.text,
      fontFamily: SANS,
      fontSize: 17,
      lineHeight: 29,
    },
    em: {
      fontStyle: "italic",
    },
    heading1: {
      ...heading,
      fontSize: 34,
      lineHeight: 42,
      marginBottom: 8,
      marginTop: 8,
    },
    heading2: {
      ...heading,
      fontSize: 24,
      lineHeight: 32,
      marginTop: 24,
    },
    heading3: {
      ...heading,
      fontSize: 20,
      lineHeight: 28,
      marginTop: 20,
    },
    link: {
      color: theme.accent,
    },
    paragraph: {
      marginBottom: 12,
      marginTop: 4,
    },
    strong: {
      fontWeight: "600",
    },
  };
};

type Props = {
  year: string;
};

const Letter = ({ year }: Props) => {
  const style = useStyles(styles);
  const mdStyles = useStyles(markdownStyles);
  const [text, setText] = useState("");
  useEffect(() => {
    if (STATS_BY_YEAR[year]?.letter) {
      fetch(STATS_BY_YEAR[year].letter)
        .then((f) => f.text())
        .then((t) => setText(t));
    }
  }, [year]);

  if (!STATS_BY_YEAR[year]?.letter) return null;

  return (
    <View style={style.container}>
      <View style={style.text}>
        <Markdown style={mdStyles}>{text}</Markdown>
      </View>
    </View>
  );
};

export default Letter;
