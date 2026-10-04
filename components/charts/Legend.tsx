import { View } from "react-native";

import { Text, useTheme } from "@/components/Themed";
import getColorForUser from "@/constants/getColorForUser";
import { UserType } from "@/data";

type Props = {
  users: UserType[];
};

export default function Legend({ users }: Props) {
  const theme = useTheme();

  return (
    <View style={{ columnGap: 20, flexDirection: "row", flexWrap: "wrap" }}>
      {users.map((user) => (
        <View
          key={user}
          style={{ alignItems: "center", flexDirection: "row", gap: 8 }}
        >
          <View
            style={{
              backgroundColor: getColorForUser(user, theme),
              borderRadius: 5,
              height: 10,
              width: 10,
            }}
          />
          <Text style={{ color: theme.textMuted, fontSize: 14 }}>{user}</Text>
        </View>
      ))}
    </View>
  );
}
