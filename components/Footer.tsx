import { TextStyle, ViewStyle } from "react-native";

import { Text, useStyles, View } from "@/components/Themed";
import { Theme } from "@/constants/Colors";

type Styles = {
  disclaimer: TextStyle;
  footer: ViewStyle;
  content: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  content: {
    backgroundColor: theme.darkAccent,
    maxWidth: 800,
    flex: 1,
  },
  disclaimer: {
    color: theme.lightAccent,
    fontSize: 12,
    fontWeight: "200",
  },
  footer: {
    backgroundColor: theme.darkAccent,
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    width: "100%",
  },
});

export default () => {
  const style = useStyles(styles);

  return (
    <View style={style.footer}>
      <View style={style.content}>
        <Text style={style.disclaimer}>
          Statistics are based on events that occured from January 1st through
          December 1st. Data accuracy is directly proportional to the amount of
          effort put in to keeping track of it. There is no gaurantee of
          accuracy and data is provided as is.
        </Text>
      </View>
    </View>
  );
};
