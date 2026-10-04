import { TextStyle, View, ViewStyle } from "react-native";

import { Text, useStyles } from "@/components/Themed";
import { Theme } from "@/constants/Colors";

type Styles = {
  disclaimer: TextStyle;
  footer: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  disclaimer: {
    color: theme.textMuted,
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
  },
  footer: {
    alignSelf: "center",
    borderTopColor: theme.border,
    borderTopWidth: 1,
    marginTop: 64,
    maxWidth: 1040,
    paddingHorizontal: 20,
    paddingVertical: 32,
    width: "100%",
  },
});

export default () => {
  const style = useStyles(styles);

  return (
    <View style={style.footer}>
      <Text style={style.disclaimer}>
        Statistics are based on events that occurred from January 1st through
        December 1st. Data accuracy is directly proportional to the amount of
        effort put in to keeping track of it. There is no guarantee of accuracy
        and data is provided as is.
      </Text>
    </View>
  );
};
