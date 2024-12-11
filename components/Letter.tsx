import STATS_BY_YEAR from "@/data";
import { Text, useStyles, View } from "./Themed";
import { StyleSheet, TextStyle } from "react-native";
import Markdown from "react-native-markdown-display";
import { useEffect, useState } from "react";
import { ViewStyle } from "react-native";
import { Theme } from "@/constants/Colors";

type Styles = {
  container: ViewStyle;
  divider: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  container: {
    flex: 1,
    margin: 24,
    marginBottom: 0,
    maxWidth: 800,
  },
  divider: {
    backgroundColor: theme.darkAccent,
    height: 1,
    marginVertical: 8,
  },
});

/**
 * You can view available styles on the docs
 * https://github.com/iamacup/react-native-markdown-display/?tab=readme-ov-file#rules-and-styles
 */
type MDStyles = {
  heading1: TextStyle;
  heading2: TextStyle;
  heading3: TextStyle;
  heading4: TextStyle;
  heading5: TextStyle;
  heading6: TextStyle;
  link: TextStyle;
  strong: TextStyle;
};

const markdownStyles = (theme: Theme): MDStyles => ({
  heading1: {
    color: theme.darkAccent,
    fontSize: 32,
  },
  heading2: {
    color: theme.darkAccent,
    fontSize: 24,
  },
  heading3: {
    color: theme.darkAccent,
    fontSize: 18,
  },
  heading4: {
    color: theme.darkAccent,
    fontSize: 16,
  },
  heading5: {
    color: theme.darkAccent,
    fontSize: 13,
  },
  heading6: {
    color: theme.darkAccent,
    fontSize: 11,
  },
  link: {
    color: theme.darkAccent,
  },
  strong: {
    color: theme.darkAccent,
  },
});

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
  }, []);

  if (STATS_BY_YEAR[year]?.letter) {
    return (
      <View style={style.container}>
        <Markdown style={mdStyles}>{text}</Markdown>
        <View style={style.divider} />
      </View>
    );
  }
  return null;
};

export default Letter;
