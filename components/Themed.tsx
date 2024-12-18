/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  ImageStyle,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "./useColorScheme";

export type TextProps = DefaultText["props"];
export type ViewProps = DefaultView["props"];

export type Style = Record<string, ViewStyle | ImageStyle | TextStyle>;

export const useStyles = <Object extends Style>(
  styleFN: (theme: typeof Colors.light) => Object
) => {
  return StyleSheet.create(styleFN(Colors[useColorScheme() ?? "light"]));
};

export const useTheme = () => {
  return Colors[useColorScheme() ?? "light"];
};

export const useThemeColor = (
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) => {
  const theme = useColorScheme() ?? "light";
  return Colors[theme][colorName];
};

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const color = useThemeColor("text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = (props: ViewProps) => {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor("background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
