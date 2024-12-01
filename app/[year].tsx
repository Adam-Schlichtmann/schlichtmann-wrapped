import { StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function Stats() {
  const { year } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats {year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
