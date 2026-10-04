import {
  Text as DefaultText,
  View as DefaultView,
  ImageStyle,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";

import Colors, { Theme } from "@/constants/Colors";
import { SANS } from "@/constants/Fonts";
import { useColorScheme } from "./useColorScheme";

export type TextProps = DefaultText["props"];
export type ViewProps = DefaultView["props"];

export type Style = Record<string, ViewStyle | ImageStyle | TextStyle>;

export const useTheme = (): Theme => Colors[useColorScheme()];

export const useStyles = <Object extends Style>(
  styleFN: (theme: Theme) => Object,
) => StyleSheet.create(styleFN(useTheme()));

export const useThemeColor = (colorName: keyof Theme) => useTheme()[colorName];

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const color = useThemeColor("text");

  return (
    <DefaultText style={[{ color, fontFamily: SANS }, style]} {...otherProps} />
  );
};

export const View = (props: ViewProps) => {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor("background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
