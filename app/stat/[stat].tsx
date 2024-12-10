import { ViewStyle } from "react-native";

import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { useStyles, useTheme, View } from "@/components/Themed";
import STATS_BY_YEAR, { ALL_STATS, StatType } from "../../data";
import { Theme } from "@/constants/Colors";
import { BarChart, BarChartPropsType } from "react-native-gifted-charts";
import { useMemo } from "react";
import getColorForUser from "@/constants/getColorForUser";
import ColorKey from "@/components/ColorKey";

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
  const theme = useTheme();
  const router = useRouter();
  const navigation = useNavigation();
  useFocusEffect(() => {
    if (!ALL_STATS.includes(stat as StatType)) {
      router.navigate("/");
    }
    navigation.setOptions({ title: stat });
  });

  const data = useMemo<BarChartPropsType["stackData"]>(() => {
    const d: BarChartPropsType["stackData"] = [];
    for (const year of Object.keys(STATS_BY_YEAR)) {
      if (
        year in STATS_BY_YEAR &&
        stat in STATS_BY_YEAR[year] &&
        STATS_BY_YEAR[year][stat].values.some((v) => v.value > 0)
      ) {
        d.push({
          label: year,
          stacks: STATS_BY_YEAR[year][stat]!.values.map((item) => ({
            value: item.value,
            color: getColorForUser(item.user, theme),
          })),
        });
      }
    }
    return d;
  }, []);

  return (
    <View style={style.page}>
      <BarChart stackData={data} />
      <ColorKey />
    </View>
  );
}
