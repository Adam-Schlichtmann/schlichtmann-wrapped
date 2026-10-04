import { TextStyle, View, ViewStyle } from "react-native";

import HoverLink from "@/components/HoverLink";
import Page from "@/components/Page";
import { Text, useStyles } from "@/components/Themed";
import TileGrid from "@/components/TileGrid";
import { Theme } from "@/constants/Colors";
import { SERIF } from "@/constants/Fonts";
import formatNumber from "@/constants/formatNumber";
import { BOOKS_READ, MILES_DRIVEN, STEPS, StatType } from "@/data";
import { getTotal, hasLetter, hasStats, YEARS } from "@/data/selectors";

const PREVIEW_STATS: StatType[] = [STEPS, MILES_DRIVEN, BOOKS_READ];

type Styles = {
  arrow: TextStyle;
  card: ViewStyle;
  cardHovered: ViewStyle;
  cardTop: ViewStyle;
  preview: ViewStyle;
  previewLabel: TextStyle;
  previewValue: TextStyle;
  status: TextStyle;
  year: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  arrow: {
    color: theme.accent,
    fontSize: 22,
  },
  card: {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    borderRadius: 16,
    borderWidth: 1,
    flexBasis: 300,
    flexGrow: 1,
    padding: 24,
    transitionDuration: "150ms",
    transitionProperty: "border-color, box-shadow",
  } as ViewStyle,
  cardHovered: {
    borderColor: theme.accent,
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  },
  cardTop: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  preview: {
    borderTopColor: theme.border,
    borderTopWidth: 1,
    flexDirection: "row",
    gap: 16,
    marginTop: 20,
    paddingTop: 16,
  },
  previewLabel: {
    color: theme.textMuted,
    fontSize: 12,
  },
  previewValue: {
    fontSize: 17,
    fontVariant: ["tabular-nums"],
    fontWeight: "600",
    marginTop: 2,
  },
  status: {
    color: theme.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
  year: {
    fontFamily: SERIF,
    fontSize: 48,
    fontVariant: ["tabular-nums"],
    fontWeight: "500",
    letterSpacing: -1,
  },
});

const getStatus = (year: string) => {
  if (!hasStats(year)) return "In progress — check back at Christmas";
  return hasLetter(year)
    ? "Christmas letter & stats"
    : "Stats only — before the tradition started";
};

export default function Home() {
  const style = useStyles(styles);

  return (
    <Page
      eyebrow="Merry Christmas from the Schlichtmanns"
      title="Our years, by the numbers"
      lede="Each year we keep track of the little things — miles, books, puzzles and more — and share them alongside our Christmas letter. Pick a year to read the letter and see how it all added up."
    >
      <TileGrid minTileWidth={300}>
        {[...YEARS].reverse().map((year) => {
          const preview = PREVIEW_STATS.filter((s) => getTotal(year, s) > 0);
          return (
            <HoverLink
              key={year}
              href={`/${year}`}
              style={style.card}
              hoverStyle={style.cardHovered}
            >
              <View style={style.cardTop}>
                <Text style={style.year}>{year}</Text>
                <Text style={style.arrow}>→</Text>
              </View>
              <Text style={style.status}>{getStatus(year)}</Text>
              {preview.length > 0 && (
                <View style={style.preview}>
                  {preview.map((stat) => (
                    <View key={stat}>
                      <Text style={style.previewLabel}>{stat}</Text>
                      <Text style={style.previewValue}>
                        {formatNumber(getTotal(year, stat))}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </HoverLink>
          );
        })}
      </TileGrid>
    </Page>
  );
}
