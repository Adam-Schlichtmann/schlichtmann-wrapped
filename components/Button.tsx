import { Pressable, TextStyle, ViewStyle } from "react-native";
import { Text, useStyles, useThemeColor } from "./Themed";
import { Theme } from "@/constants/Colors";

type Styles = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.lightAccent,
    borderColor: theme.mediumAccent,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    minWidth: 80,
    padding: 8,
  },
  text: {
    color: theme.darkAccent,
    fontSize: 16,
  },
});

type Props = {
  onPress: () => void;
  text: string;
};
export default ({ onPress, text }: Props) => {
  const style = useStyles(styles);
  const mediumAccent = useThemeColor("mediumAccent");
  return (
    <Pressable
      onPress={onPress}
      style={({ hovered }) => [
        style.container,
        {
          backgroundColor: hovered ? mediumAccent : undefined,
        },
      ]}
    >
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
};
