import { Link, Stack } from "expo-router";
import { TextStyle, ViewStyle } from "react-native";

import { Text, useStyles, View } from "@/components/Themed";
import { Theme } from "@/constants/Colors";

type Styles = {
  container: ViewStyle;
  link: TextStyle;
  linkText: TextStyle;
  title: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: theme.accent,
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default function NotFoundScreen() {
  const style = useStyles(styles);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={style.container}>
        <Text style={style.title}>This screen doesn't exist.</Text>

        <Link href="/" style={style.link}>
          <Text style={style.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
