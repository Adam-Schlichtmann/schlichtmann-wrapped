import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";
import { useTheme } from "@/components/Themed";
import Footer from "@/components/Footer";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const navigationTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider
      value={{
        ...navigationTheme,
        colors: { ...navigationTheme.colors, background: theme.background },
      }}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitleAlign: "center",
            title: "All Years",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="[year]"
          options={{ headerTitleAlign: "center", headerBackVisible: false }}
        />
        <Stack.Screen
          name="stat/[stat]"
          options={{ headerTitleAlign: "center", headerBackVisible: false }}
        />
      </Stack>
      <Footer />
    </ThemeProvider>
  );
}
