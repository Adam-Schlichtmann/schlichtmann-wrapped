import { ViewStyle } from "react-native";

import { Text, useStyles, useTheme, View } from "@/components/Themed";
import { Theme } from "@/constants/Colors";
import { ALL_USERS } from "@/data";
import getColorForUser from "@/constants/getColorForUser";

type Styles = {
  container: ViewStyle;
  colorSwatch: ViewStyle;
  row: ViewStyle;
};

const styles = (theme: Theme): Styles => ({
  container: {
    justifyContent: "center",
  },
  colorSwatch: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginVertical: 8,
  },
});

export default () => {
  const style = useStyles(styles);
  const theme = useTheme();

  return (
    <View style={style.container}>
      {ALL_USERS.map((item) => (
        <View style={style.row} key={item}>
          <View
            style={[
              style.colorSwatch,
              { backgroundColor: getColorForUser(item, theme) },
            ]}
          />
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};
