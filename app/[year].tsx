import { FlatList, ViewStyle } from "react-native";

import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { useStyles, View } from "@/components/Themed";
import STATS_BY_YEAR, { ALL_STATS } from "../data";
import StatCard from "@/components/StatCard";
import { Theme } from "@/constants/Colors";
import { useCallback } from "react";

export const generateStaticParams = (): Promise<{ year: string }[]> =>
  Promise.resolve(Object.keys(STATS_BY_YEAR).map((key) => ({ year: key })));

type Styles = {
  page: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  page: {
    backgroundColor: theme.background,
    flex: 1,
  },
});

export default function Year() {
  const { year } = useLocalSearchParams<{ year: string }>();
  const style = useStyles(styles);
  const router = useRouter();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (!Object.keys(STATS_BY_YEAR).includes(year)) {
        router.navigate("/");
      }
      navigation.setOptions({ title: `${year} Stats` });
    }, [])
  );

  return (
    <View style={style.page}>
      <FlatList
        data={ALL_STATS}
        contentContainerStyle={{ alignSelf: "center" }}
        renderItem={({ item }) => <StatCard stat={item} year={year} />}
      />
    </View>
  );
}
