import { TextStyle, View, ViewStyle } from "react-native";

import HoverLink from "@/components/HoverLink";
import SplitBar from "@/components/charts/SplitBar";
import { Text, useStyles, useTheme } from "@/components/Themed";
import { Theme } from "@/constants/Colors";
import formatNumber, { formatChange } from "@/constants/formatNumber";
import getColorForUser from "@/constants/getColorForUser";
import { StatType, USER_UNKNOWN } from "@/data";
import { getChange, getTotal, getValues } from "@/data/selectors";

type Styles = {
  breakdown: ViewStyle;
  change: TextStyle;
  dot: ViewStyle;
  label: TextStyle;
  person: TextStyle;
  personRow: ViewStyle;
  personValue: TextStyle;
  tile: ViewStyle;
  tileHovered: ViewStyle;
  value: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  breakdown: {
    gap: 8,
    marginTop: 20,
  },
  change: {
    color: theme.textMuted,
    fontSize: 13,
    fontVariant: ["tabular-nums"],
    marginTop: 4,
  },
  dot: {
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  label: {
    color: theme.textMuted,
    fontSize: 14,
    fontWeight: "500",
  },
  person: {
    color: theme.textMuted,
    flex: 1,
    fontSize: 13,
  },
  personRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  personValue: {
    fontSize: 13,
    fontVariant: ["tabular-nums"],
    fontWeight: "500",
  },
  tile: {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    borderRadius: 12,
    borderWidth: 1,
    flexBasis: 280,
    flexGrow: 1,
    padding: 20,
    transitionDuration: "150ms",
    transitionProperty: "border-color, box-shadow",
  } as ViewStyle,
  tileHovered: {
    borderColor: theme.accent,
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  },
  value: {
    fontSize: 36,
    fontVariant: ["tabular-nums"],
    fontWeight: "600",
    letterSpacing: -0.8,
    marginTop: 6,
  },
});

type Props = {
  stat: StatType;
  year: string;
};

export default function StatTile({ stat, year }: Props) {
  const style = useStyles(styles);
  const theme = useTheme();

  const values = getValues(year, stat);
  const total = getTotal(year, stat);
  const change = getChange(year, stat);
  const showBreakdown = values.some((v) => v.user !== USER_UNKNOWN);

  return (
    <HoverLink
      href={`/stat/${stat}`}
      style={style.tile}
      hoverStyle={style.tileHovered}
    >
      <Text style={style.label}>{stat}</Text>
      <Text style={style.value}>{total ? formatNumber(total) : "—"}</Text>
      <Text style={style.change}>
        {!total
          ? "Not tracked this year"
          : change === undefined
            ? " "
            : `${formatChange(change, "▲ ", "▼ ")} vs ${Number(year) - 1}`}
      </Text>
      {showBreakdown && (
        <View style={style.breakdown}>
          {values.length > 1 && <SplitBar values={values} />}
          {values.map((v) => (
            <View key={v.user} style={style.personRow}>
              <View
                style={[
                  style.dot,
                  { backgroundColor: getColorForUser(v.user, theme) },
                ]}
              />
              <Text style={style.person}>{v.user}</Text>
              <Text style={style.personValue}>{formatNumber(v.value)}</Text>
            </View>
          ))}
        </View>
      )}
    </HoverLink>
  );
}
