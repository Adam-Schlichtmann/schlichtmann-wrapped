import { Pressable, TextStyle, ViewStyle } from "react-native";

import { Text, useStyles, useThemeColor } from "@/components/Themed";
import STATS_BY_YEAR, { StatType } from "@/constants/DATA";
import { Theme } from "@/constants/Colors";
import formatNumber from "@/constants/formatNumber";

type Styles = {
  card: ViewStyle;
  label: TextStyle;
  value: TextStyle;
};

const styles = (theme: Theme): Styles => ({
  card: {
    backgroundColor: theme.lightAccent,
    borderColor: theme.mediumAccent,
    borderRadius: 16,
    borderWidth: 1,
    elevation: 3,
    flex: 1,
    margin: 16,
    maxWidth: 400,
    padding: 16,
    shadowColor: theme.text,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.4,
  },
  label: {
    color: theme.text,
    fontSize: 24,
    fontWeight: 200,
    marginBottom: 8,
  },
  value: {
    color: theme.text,
    fontSize: 24,
  },
});

type Props = { year: string; stat: StatType };

export default ({ stat, year }: Props) => {
  const style = useStyles(styles);
  const accent = useThemeColor("mediumAccent");
  const data = STATS_BY_YEAR[year][stat];
  const total = data.values.reduce((acc, item) => acc + item.value, 0);

  return (
    <Pressable
      style={({ hovered }) => [
        style.card,
        {
          backgroundColor: hovered ? accent : undefined,
        },
      ]}
    >
      <Text style={style.label}>{data.label}</Text>
      <Text style={style.value}>{formatNumber(total)}</Text>
    </Pressable>
  );
};
