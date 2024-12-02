import { ViewStyle, FlatList } from "react-native";
import { useRouter } from "expo-router";

import { useStyles, View } from "@/components/Themed";
import { Theme } from "@/constants/Colors";
import Button from "@/components/Button";
import STATS_BY_YEAR from "@/constants/DATA";

type Styles = {
  page: ViewStyle;
  scroll: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  page: {
    alignSelf: "center",
    backgroundColor: theme.background,
    flex: 1,
    paddingVertical: 16,
  },
  scroll: {
    backgroundColor: theme.background,
    flex: 1,
    paddingBottom: 48,
  },
});

export default () => {
  const style = useStyles(styles);
  const years = Object.keys(STATS_BY_YEAR);
  const router = useRouter();

  return (
    <View style={style.page}>
      <FlatList
        data={years}
        renderItem={({ item }) => (
          <Button onPress={() => router.navigate(`/${item}`)} text={item} />
        )}
      />
    </View>
  );
};
