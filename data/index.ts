import { StatType, CompleteStat } from "./data.types";
import { STATS_2023 } from "./2023";
import { STATS_2024 } from "./2024";

export * from "./data.types";

const STATS_BY_YEAR: Record<string, Record<StatType, CompleteStat>> = {
  2023: STATS_2023,
  2024: STATS_2024,
};

export default STATS_BY_YEAR;
