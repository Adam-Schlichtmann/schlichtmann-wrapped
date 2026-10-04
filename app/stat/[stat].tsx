import { ScrollView, TextStyle, View, ViewStyle } from "react-native";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";

import ColumnChart, { ColumnGroup } from "@/components/charts/ColumnChart";
import Legend from "@/components/charts/Legend";
import HoverLink from "@/components/HoverLink";
import Page from "@/components/Page";
import SectionHeading from "@/components/SectionHeading";
import { Text, useStyles, useTheme } from "@/components/Themed";
import { Theme } from "@/constants/Colors";
import { formatChange, formatFull } from "@/constants/formatNumber";
import getColorForUser from "@/constants/getColorForUser";
import { ALL_STATS, StatType, USER_UNKNOWN } from "@/data";
import {
  getChange,
  getTotal,
  getUsersForStat,
  getValues,
  YEARS,
} from "@/data/selectors";

export const generateStaticParams = (): Promise<{ stat: string }[]> =>
  Promise.resolve(ALL_STATS.map((s) => ({ stat: s })));

type Styles = {
  card: ViewStyle;
  cell: TextStyle;
  chip: ViewStyle;
  chipHovered: ViewStyle;
  chipText: TextStyle;
  chips: ViewStyle;
  headerCell: TextStyle;
  row: ViewStyle;
  section: ViewStyle;
  yearCell: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  card: {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    borderRadius: 16,
    borderWidth: 1,
    gap: 28,
    padding: 24,
  },
  cell: {
    flex: 1,
    fontSize: 15,
    fontVariant: ["tabular-nums"],
    textAlign: "right",
  },
  chip: {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipHovered: {
    borderColor: theme.accent,
  },
  chipText: {
    fontSize: 14,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  headerCell: {
    color: theme.textMuted,
    flex: 1,
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
  },
  row: {
    minWidth: "100%",
    borderBottomColor: theme.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 12,
    paddingVertical: 12,
  },
  section: {
    marginTop: 56,
  },
  yearCell: {
    flex: 1,
    fontSize: 15,
    fontVariant: ["tabular-nums"],
    fontWeight: "500",
  },
});

export default function Stat() {
  const { stat } = useLocalSearchParams<{ stat: StatType }>();
  const style = useStyles(styles);
  const theme = useTheme();

  if (!ALL_STATS.includes(stat)) return <Redirect href="/" />;

  const users = getUsersForStat(stat);
  const years = YEARS.filter((year) => getTotal(year, stat) > 0);
  const showPeople = users.some((user) => user !== USER_UNKNOWN);
  const showTotal = users.length > 1;

  const groups: ColumnGroup[] = years.map((year) => ({
    label: year,
    shortLabel: `’${year.slice(-2)}`,
    columns: getValues(year, stat).map((v) => ({
      color: getColorForUser(v.user, theme),
      key: `${year}-${v.user}`,
      name: v.user,
      value: v.value,
    })),
  }));

  return (
    <Page eyebrow="Year over year" title={stat}>
      <Stack.Screen options={{ title: `${stat} · Schlichtmann Wrapped` }} />
      <View style={style.card}>
        {showPeople && <Legend users={users} />}
        <ColumnChart groups={groups} />
      </View>

      <View style={style.section}>
        <SectionHeading title="Every year" />
        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flexGrow: 1, minWidth: (users.length + 3) * 96 }}>
            <View style={style.row}>
              <Text style={[style.headerCell, { textAlign: "left" }]}>
                Year
              </Text>
              {showPeople &&
                users.map((user) => (
                  <Text key={user} style={style.headerCell}>
                    {user}
                  </Text>
                ))}
              {(showTotal || !showPeople) && (
                <Text style={style.headerCell}>Total</Text>
              )}
              <Text style={style.headerCell}>Change</Text>
            </View>
            {years.map((year) => {
              const values = getValues(year, stat);
              const change = getChange(year, stat);
              return (
                <View key={year} style={style.row}>
                  <Text style={style.yearCell}>{year}</Text>
                  {showPeople &&
                    users.map((user) => {
                      const value = values.find((v) => v.user === user)?.value;
                      return (
                        <Text key={user} style={style.cell}>
                          {value ? formatFull(value) : "—"}
                        </Text>
                      );
                    })}
                  {(showTotal || !showPeople) && (
                    <Text style={[style.cell, { fontWeight: "600" }]}>
                      {formatFull(getTotal(year, stat))}
                    </Text>
                  )}
                  <Text style={[style.cell, { color: theme.textMuted }]}>
                    {change === undefined ? "—" : formatChange(change)}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={style.section}>
        <SectionHeading title="More stats" />
        <View style={style.chips}>
          {ALL_STATS.filter((s) => s !== stat).map((s) => (
            <HoverLink
              key={s}
              href={`/stat/${s}`}
              style={style.chip}
              hoverStyle={style.chipHovered}
            >
              <Text style={style.chipText}>{s}</Text>
            </HoverLink>
          ))}
        </View>
      </View>
    </Page>
  );
}
