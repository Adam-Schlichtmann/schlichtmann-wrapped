import { ReactNode } from "react";
import { ScrollView, TextStyle, View, ViewStyle } from "react-native";

import Footer from "@/components/Footer";
import { Text, useStyles } from "@/components/Themed";
import { Theme } from "@/constants/Colors";
import { SERIF } from "@/constants/Fonts";

type Styles = {
  column: ViewStyle;
  eyebrow: TextStyle;
  hero: ViewStyle;
  lede: TextStyle;
  scroll: ViewStyle;
  title: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  column: {
    alignSelf: "center",
    maxWidth: 1040,
    paddingHorizontal: 20,
    width: "100%",
  },
  eyebrow: {
    color: theme.accent,
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1.2,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  hero: {
    paddingBottom: 40,
    paddingTop: 56,
  },
  lede: {
    color: theme.textMuted,
    fontSize: 18,
    lineHeight: 28,
    marginTop: 16,
    maxWidth: 640,
  },
  scroll: {
    backgroundColor: theme.background,
    flex: 1,
  },
  title: {
    fontFamily: SERIF,
    // Web-only CSS values: scale the heading down on narrow screens.
    fontSize: "clamp(40px, 9vw, 56px)" as unknown as number,
    fontWeight: "500",
    letterSpacing: -1.5,
    lineHeight: "1.1" as unknown as number,
  },
});

type Props = {
  children: ReactNode;
  eyebrow?: string;
  lede?: string;
  title: string;
};

/** Scrollable page with a hero heading, a centered content column and the footer. */
export default function Page({ children, eyebrow, lede, title }: Props) {
  const style = useStyles(styles);

  return (
    <ScrollView style={style.scroll}>
      <View style={style.column}>
        <View style={style.hero}>
          {eyebrow && <Text style={style.eyebrow}>{eyebrow}</Text>}
          <Text role="heading" aria-level={1} style={style.title}>
            {title}
          </Text>
          {lede && <Text style={style.lede}>{lede}</Text>}
        </View>
        {children}
      </View>
      <Footer />
    </ScrollView>
  );
}
