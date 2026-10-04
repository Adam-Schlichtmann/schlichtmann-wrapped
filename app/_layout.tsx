import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";
import { useTheme } from "@/components/Themed";
import SiteHeader from "@/components/SiteHeader";

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
      <SiteHeader />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{ title: "Schlichtmann Wrapped" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
