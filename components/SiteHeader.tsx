import { ScrollView, TextStyle, View, ViewStyle } from "react-native";
import { Link, usePathname } from "expo-router";

import HoverLink from "@/components/HoverLink";
import { Text, useStyles } from "@/components/Themed";
import { Theme } from "@/constants/Colors";
import { SERIF } from "@/constants/Fonts";
import { YEARS } from "@/data/selectors";

type Styles = {
  bar: ViewStyle;
  inner: ViewStyle;
  wordmark: TextStyle;
  wordmarkAccent: TextStyle;
  years: ViewStyle;
  yearsContent: ViewStyle;
  yearLink: ViewStyle;
  yearLinkActive: ViewStyle;
  yearText: TextStyle;
  yearTextActive: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  bar: {
    backgroundColor: theme.background,
    borderBottomColor: theme.border,
    borderBottomWidth: 1,
  },
  inner: {
    alignItems: "center",
    alignSelf: "center",
    columnGap: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: 1040,
    paddingHorizontal: 20,
    paddingVertical: 14,
    rowGap: 8,
    width: "100%",
  },
  wordmark: {
    fontFamily: SERIF,
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: -0.3,
  },
  wordmarkAccent: {
    color: theme.accent,
    fontStyle: "italic",
    fontWeight: "400",
  },
  years: {
    flexGrow: 0,
    flexShrink: 1,
    maxWidth: "100%",
  },
  yearsContent: {
    gap: 4,
  },
  yearLink: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  yearLinkActive: {
    backgroundColor: theme.accentSoft,
  },
  yearText: {
    color: theme.textMuted,
    fontSize: 14,
    fontVariant: ["tabular-nums"],
    fontWeight: "500",
  },
  yearTextActive: {
    color: theme.accent,
  },
});

export default function SiteHeader() {
  const style = useStyles(styles);
  const pathname = usePathname();

  return (
    <View style={style.bar}>
      <View style={style.inner}>
        <Link href="/">
          <Text style={style.wordmark}>
            Schlichtmann <Text style={style.wordmarkAccent}>Wrapped</Text>
          </Text>
        </Link>
        {/* Newest first, and scrollable once there are too many to fit. */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={style.years}
          contentContainerStyle={style.yearsContent}
        >
          {[...YEARS].reverse().map((year) => {
            const active = pathname === `/${year}`;
            return (
              <HoverLink
                key={year}
                href={`/${year}`}
                style={[style.yearLink, active && style.yearLinkActive]}
                hoverStyle={style.yearLinkActive}
              >
                <Text style={[style.yearText, active && style.yearTextActive]}>
                  {year}
                </Text>
              </HoverLink>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
