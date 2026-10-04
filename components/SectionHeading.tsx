import { TextStyle, View, ViewStyle } from "react-native";

import { Text, useStyles } from "@/components/Themed";
import { Theme } from "@/constants/Colors";
import { SERIF } from "@/constants/Fonts";

type Styles = {
  container: ViewStyle;
  subtitle: TextStyle;
  title: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  container: {
    marginBottom: 24,
  },
  subtitle: {
    color: theme.textMuted,
    fontSize: 15,
    marginTop: 6,
  },
  title: {
    fontFamily: SERIF,
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: -0.5,
  },
});

type Props = {
  subtitle?: string;
  title: string;
};

export default function SectionHeading({ subtitle, title }: Props) {
  const style = useStyles(styles);

  return (
    <View style={style.container}>
      <Text role="heading" aria-level={2} style={style.title}>
        {title}
      </Text>
      {subtitle && <Text style={style.subtitle}>{subtitle}</Text>}
    </View>
  );
}
