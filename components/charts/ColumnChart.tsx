import { useState } from "react";
import { Pressable, View } from "react-native";

import { Text, useTheme } from "@/components/Themed";
import formatNumber, { formatFull } from "@/constants/formatNumber";

export type Column = {
  color: string;
  key: string;
  name: string;
  value: number;
};

export type ColumnGroup = {
  columns: Column[];
  label: string;
};

type Props = {
  groups: ColumnGroup[];
  height?: number;
};

const AXIS_WIDTH = 48;
const COLUMN_WIDTH = 24;
const TICK_COUNT = 4;

/** Rounds a raw step up to 1, 2, 2.5 or 5 times a power of ten. */
const niceStep = (raw: number) => {
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * pow;
};

/** Grouped column chart. Hover (or tap) a column to see its exact value. */
export default function ColumnChart({ groups, height = 260 }: Props) {
  const theme = useTheme();
  const [active, setActive] = useState<string>();

  const max = Math.max(...groups.flatMap((g) => g.columns.map((c) => c.value)));
  const step = niceStep(max / TICK_COUNT);
  const top = Math.ceil(max / step) * step;
  const ticks = Array.from(
    { length: Math.round(top / step) + 1 },
    (_, i) => i * step,
  );
  const y = (value: number) => (value / top) * height;

  return (
    <View>
      <View style={{ flexDirection: "row", height }}>
        <View style={{ width: AXIS_WIDTH }}>
          {ticks.map((tick) => (
            <Text
              key={tick}
              style={{
                bottom: y(tick) - 8,
                color: theme.textMuted,
                fontSize: 12,
                fontVariant: ["tabular-nums"],
                lineHeight: 16,
                position: "absolute",
                right: 12,
              }}
            >
              {formatNumber(tick)}
            </Text>
          ))}
        </View>
        <View style={{ flex: 1 }}>
          {ticks.map((tick) => (
            <View
              key={tick}
              style={{
                backgroundColor: tick === 0 ? theme.border : theme.gridline,
                bottom: y(tick),
                height: 1,
                left: 0,
                position: "absolute",
                right: 0,
              }}
            />
          ))}
          <View style={{ flex: 1, flexDirection: "row" }}>
            {groups.map((group) => (
              <View
                key={group.label}
                style={{
                  alignItems: "flex-end",
                  flex: 1,
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                {group.columns.map((column) => {
                  const isActive = active === column.key;
                  return (
                    <Pressable
                      key={column.key}
                      aria-label={`${column.name}, ${group.label}: ${formatFull(column.value)}`}
                      onHoverIn={() => setActive(column.key)}
                      onHoverOut={() => setActive(undefined)}
                      onPress={() =>
                        setActive(isActive ? undefined : column.key)
                      }
                      style={{
                        backgroundColor: column.color,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        height: Math.max(y(column.value), 2),
                        opacity: active && !isActive ? 0.45 : 1,
                        width: COLUMN_WIDTH,
                      }}
                    >
                      {isActive && (
                        <View
                          pointerEvents="none"
                          style={{
                            alignItems: "center",
                            bottom: "100%",
                            left: -80,
                            marginBottom: 8,
                            position: "absolute",
                            right: -80,
                            zIndex: 1,
                          }}
                        >
                          <View
                            style={{
                              backgroundColor: theme.surface,
                              borderColor: theme.border,
                              borderRadius: 8,
                              borderWidth: 1,
                              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                              paddingHorizontal: 10,
                              paddingVertical: 6,
                            }}
                          >
                            <Text
                              style={{ color: theme.textMuted, fontSize: 12 }}
                            >
                              {column.name} · {group.label}
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontVariant: ["tabular-nums"],
                                fontWeight: "600",
                              }}
                            >
                              {formatFull(column.value)}
                            </Text>
                          </View>
                        </View>
                      )}
                    </Pressable>
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginLeft: AXIS_WIDTH, marginTop: 10 }}
      >
        {groups.map((group) => (
          <Text
            key={group.label}
            style={{
              color: theme.textMuted,
              flex: 1,
              fontSize: 13,
              fontVariant: ["tabular-nums"],
              textAlign: "center",
            }}
          >
            {group.label}
          </Text>
        ))}
      </View>
    </View>
  );
}
