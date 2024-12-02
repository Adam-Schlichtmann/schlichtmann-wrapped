import { FlatList, ViewStyle } from "react-native";

import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { useStyles, View } from "@/components/Themed";
import STATS_BY_YEAR from "./DATA";
import StatCard from "@/components/StatCard";
import { Theme } from "@/constants/Colors";

type Styles = {
  page: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  page: {
    backgroundColor: theme.background,
    flex: 1,
  },
});

export default function Stats() {
  const { year } = useLocalSearchParams<{ year: string }>();
  const style = useStyles(styles);
  const router = useRouter();
  const navigation = useNavigation();
  useFocusEffect(() => {
    if (!Object.keys(STATS_BY_YEAR).includes(year)) {
      router.replace("/");
    }
    navigation.setOptions({ title: `${year} Stats` });
  });

  return (
    <View style={style.page}>
      <FlatList
        data={STATS_BY_YEAR[year] ?? []}
        contentContainerStyle={{ alignSelf: "center" }}
        renderItem={({ item }) => <StatCard stat={item} />}
      />
    </View>
  );
}
