import { TextStyle, View, ViewStyle } from "react-native";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";

import Letter from "@/components/Letter";
import Page from "@/components/Page";
import SectionHeading from "@/components/SectionHeading";
import StatTile from "@/components/StatTile";
import { Text, useStyles } from "@/components/Themed";
import TileGrid from "@/components/TileGrid";
import { Theme } from "@/constants/Colors";
import STATS_BY_YEAR, { ALL_STATS } from "@/data";
import { getTotal, isYear } from "@/data/selectors";

export const generateStaticParams = (): Promise<{ year: string }[]> =>
  Promise.resolve(Object.keys(STATS_BY_YEAR).map((key) => ({ year: key })));

type Styles = {
  empty: ViewStyle;
  emptyText: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  empty: {
    backgroundColor: theme.surfaceMuted,
    borderRadius: 12,
    padding: 24,
  },
  emptyText: {
    color: theme.textMuted,
    fontSize: 15,
  },
});

export default function Year() {
  const { year } = useLocalSearchParams<{ year: string }>();
  const style = useStyles(styles);

  if (!isYear(year)) return <Redirect href="/" />;

  const stats = ALL_STATS.filter((stat) => getTotal(year, stat) > 0);

  return (
    <Page eyebrow="Our year in review" title={year}>
      <Stack.Screen options={{ title: `${year} · Schlichtmann Wrapped` }} />
      <Letter year={year} />
      <SectionHeading
        title="By the numbers"
        subtitle="Select a stat to see how it compares across years."
      />
      {stats.length ? (
        <TileGrid>
          {stats.map((stat) => (
            <StatTile key={stat} stat={stat} year={year} />
          ))}
        </TileGrid>
      ) : (
        <View style={style.empty}>
          <Text style={style.emptyText}>
            We're still counting. The {year} stats will be added at Christmas.
          </Text>
        </View>
      )}
    </Page>
  );
}
