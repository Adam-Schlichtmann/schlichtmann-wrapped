import { ViewStyle } from "react-native";

import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { useStyles, View } from "@/components/Themed";
import STATS_BY_YEAR, { ALL_STATS, StatType } from "../../data";
import { Theme } from "@/constants/Colors";
import { BarChart, BarChartPropsType } from "react-native-gifted-charts";
import { useMemo } from "react";

export const generateStaticParams = (): Promise<{ stat: string }[]> =>
  Promise.resolve(ALL_STATS.map((s) => ({ stat: s })));

type Styles = {
  page: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  page: {
    backgroundColor: theme.background,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default function Year() {
  const { stat } = useLocalSearchParams<{ stat: StatType }>();
  const style = useStyles(styles);
  const router = useRouter();
  const navigation = useNavigation();
  useFocusEffect(() => {
    if (!ALL_STATS.includes(stat as StatType)) {
      router.navigate("/");
    }
    navigation.setOptions({ title: stat });
  });

  const data = useMemo<BarChartPropsType["data"]>(() => {
    const d: BarChartPropsType["data"] = [];
    for (const year of Object.keys(STATS_BY_YEAR)) {
      if (year in STATS_BY_YEAR) {
        if (stat in STATS_BY_YEAR[year]) {
          d.push({
            label: year,
            value: STATS_BY_YEAR[year][stat]!.values.reduce(
              (acc, item) => acc + item.value,
              0
            ),
          });
        }
      }
    }
    return d;
  }, []);

  return (
    <View style={style.page}>
      <BarChart data={data} />
    </View>
  );
}
