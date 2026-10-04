import { useEffect, useState } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";

// Static rendering always produces the light theme, so the first client render
// must match it to hydrate cleanly. After that, follow the system setting.
export function useColorScheme(): "light" | "dark" {
  const colorScheme = useRNColorScheme();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return hydrated && colorScheme === "dark" ? "dark" : "light";
}
