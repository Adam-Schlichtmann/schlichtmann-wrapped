import { ReactNode } from "react";
import { View } from "react-native";

const SPACERS = 3;

type Props = {
  children: ReactNode;
  minTileWidth?: number;
};

/**
 * Wrapping grid of equal-width tiles. Children should use
 * `flexBasis: minTileWidth, flexGrow: 1`; the invisible spacers keep tiles on
 * the last row from stretching wider than the rest.
 */
export default function TileGrid({ children, minTileWidth = 280 }: Props) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
      {children}
      {Array.from({ length: SPACERS }, (_, i) => (
        <View
          key={i}
          aria-hidden
          style={{ flexBasis: minTileWidth, flexGrow: 1, height: 0 }}
        />
      ))}
    </View>
  );
}
