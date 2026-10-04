import { ReactNode, useState } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Href, Link } from "expo-router";

type Props = {
  children: ReactNode;
  hoverStyle?: StyleProp<ViewStyle>;
  href: Href;
  style?: StyleProp<ViewStyle>;
};

/**
 * A link that renders as a styled block with a hover state. `Link asChild`
 * drops Pressable's function-style and spreads style arrays into indexed
 * keys, so hover is tracked here and the style is flattened.
 */
export default function HoverLink({
  children,
  hoverStyle,
  href,
  style,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} asChild>
      <Pressable
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={StyleSheet.flatten([style, hovered && hoverStyle])}
      >
        {children}
      </Pressable>
    </Link>
  );
}
