import { TextStyle, ViewStyle } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { Text, useStyles, View } from "@/components/Themed";
import { Theme } from "@/constants/Colors";

type Styles = {
  disclaimer: TextStyle;
  footer: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  disclaimer: {
    color: theme.lightAccent,
    fontSize: 12,
    fontWeight: "200",
  },
  footer: {
    backgroundColor: theme.darkAccent,
    padding: 16,
    width: "100%",
  },
});

export default () => {
  const { year } = useLocalSearchParams();
  const style = useStyles(styles);

  return (
    <View style={style.footer}>
      <Text style={style.disclaimer}>
        Statistics are based on events that occured from Jan 1st {year} through
        December 1st {year}. Data accuracy is directly proportional to the
        amount of effort put in to keeping track of it. There is no gaurantee of
        accuracy and data is provided as is.
      </Text>
    </View>
  );
};
