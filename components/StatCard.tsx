import { Pressable, TextStyle, ViewStyle, View } from "react-native";

import { Text, useStyles, useTheme } from "@/components/Themed";
import STATS_BY_YEAR, { StatType, USER_UNKNOWN } from "@/data";
import { Theme } from "@/constants/Colors";
import formatNumber from "@/constants/formatNumber";
import { PieChart } from "react-native-gifted-charts";
import getColorForUser from "@/constants/getColorForUser";
import { useRouter } from "expo-router";

type Styles = {
  card: ViewStyle;
  chartContainer: ViewStyle;
  deltaTextDown: TextStyle;
  deltaTextUp: TextStyle;
  label: TextStyle;
  topRow: ViewStyle;
  value: TextStyle;
};

const styles = (theme: Theme): Styles => {
  const deltaText: TextStyle = {
    fontSize: 16,
    fontWeight: 200,
  };
  return {
    card: {
      alignSelf: "center",
      backgroundColor: theme.card,
      borderRadius: 8,
      elevation: 3,
      flex: 1,
      margin: 16,
      maxWidth: 320,
      padding: 16,
      shadowColor: theme.text,
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.4,
      width: "100%",
    },
    chartContainer: {
      alignItems: "center",
      padding: 8,
    },
    deltaTextDown: {
      ...deltaText,
      color: theme.error,
    },
    deltaTextUp: {
      ...deltaText,
      color: theme.success,
    },
    label: {
      color: theme.text,
      fontSize: 24,
      fontWeight: 200,
      marginBottom: 8,
    },
    topRow: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    value: {
      color: theme.text,
      fontSize: 24,
    },
  };
};

type Props = {
  stat: StatType;
  year: string;
};

export default ({ stat, year }: Props) => {
  const style = useStyles(styles);
  const theme = useTheme();

  if (!STATS_BY_YEAR[year] || !STATS_BY_YEAR[year]?.stats[stat]) return null;

  const data = STATS_BY_YEAR[year]?.stats[stat];
  const prevData = STATS_BY_YEAR[Number.parseInt(year) - 1]?.stats[stat] ?? {
    label: stat,
    values: [],
  };
  const total = data.values.reduce((acc, item) => acc + item.value, 0);
  const prevTotal = prevData.values.reduce((acc, item) => acc + item.value, 0);
  const showDelta =
    !!prevData.values.length && prevTotal !== total && prevTotal > 0;

  const showChart =
    data.values.filter((v) => v.user !== USER_UNKNOWN).length > 0;

  const router = useRouter();
  const onPress = () => router.navigate(`/stat/${stat}`);
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered }) => [
        style.card,
        {
          backgroundColor: hovered ? theme.lightAccent : undefined,
        },
      ]}
    >
      <Text style={style.label}>{data.label}</Text>
      <View style={style.topRow}>
        <Text style={style.value}>{formatNumber(total)}</Text>
        {showDelta && (
          <Text
            style={total > prevTotal ? style.deltaTextUp : style.deltaTextDown}
          >
            {total > prevTotal ? "+" : "-"}{" "}
            {formatNumber((Math.abs(prevTotal - total) / prevTotal) * 100)}%
          </Text>
        )}
      </View>
      {showChart && (
        <View style={style.chartContainer}>
          <PieChart
            data={data.values.map((v) => ({
              value: v.value,
              text: v.user,
              color: getColorForUser(v.user, theme),
            }))}
            donut
            showText
            textColor="black"
            textSize={16}
          />
        </View>
      )}
    </Pressable>
  );
};
