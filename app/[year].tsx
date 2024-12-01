import { TextStyle, ViewStyle, ScrollView } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { Text, useStyles, View } from "@/components/Themed";
import STATS_BY_YEAR from "./DATA";
import StatCard from "@/components/StatCard";
import { Theme } from "@/constants/Colors";
import Footer from "@/components/Footer";

type Styles = {
  page: ViewStyle;
  scroll: ViewStyle;
  title: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  page: {
    backgroundColor: theme.background,
    flex: 1,
  },
  scroll: {
    backgroundColor: theme.background,
    flex: 1,
    paddingBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    margin: 16,
  },
});

export default function Stats() {
  const { year } = useLocalSearchParams<{ year: string }>();
  const style = useStyles(styles);

  return (
    <View style={style.page}>
      <Text style={style.title}>Stats {year}</Text>
      <ScrollView
        contentContainerStyle={{ alignSelf: "center" }}
        style={style.scroll}
      >
        {STATS_BY_YEAR[year].map((stat) => (
          <StatCard stat={stat} />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
}
