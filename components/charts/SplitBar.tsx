import { View } from "react-native";

import { useTheme } from "@/components/Themed";
import getColorForUser from "@/constants/getColorForUser";
import { UserType } from "@/data";

type Props = {
  values: { value: number; user: UserType }[];
};

/** A single stacked bar showing each person's share of a total. */
export default function SplitBar({ values }: Props) {
  const theme = useTheme();

  return (
    <View
      style={{
        borderRadius: 4,
        flexDirection: "row",
        gap: 2,
        height: 8,
        overflow: "hidden",
      }}
    >
      {values.map((v) => (
        <View
          key={v.user}
          style={{
            backgroundColor: getColorForUser(v.user, theme),
            flexGrow: v.value,
          }}
        />
      ))}
    </View>
  );
}
