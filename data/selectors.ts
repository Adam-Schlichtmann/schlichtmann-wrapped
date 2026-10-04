import STATS_BY_YEAR, { ALL_STATS, ALL_USERS, StatType } from "./index";

export const YEARS = Object.keys(STATS_BY_YEAR).sort();

export const isYear = (year: string) => year in STATS_BY_YEAR;

/** Per-person values, skipping anything that wasn't tracked (zero). */
export const getValues = (year: string, stat: StatType) =>
  STATS_BY_YEAR[year]?.stats[stat]?.values.filter((v) => v.value > 0) ?? [];

export const getTotal = (year: string, stat: StatType) =>
  getValues(year, stat).reduce((acc, v) => acc + v.value, 0);

/** Fractional change from the previous year, when both years were tracked. */
export const getChange = (year: string, stat: StatType) => {
  const total = getTotal(year, stat);
  const prevTotal = getTotal(String(Number(year) - 1), stat);
  if (!total || !prevTotal) return undefined;
  return (total - prevTotal) / prevTotal;
};

export const hasStats = (year: string) =>
  ALL_STATS.some((stat) => getTotal(year, stat) > 0);

export const hasLetter = (year: string) => !!STATS_BY_YEAR[year]?.letter;

/** Everyone with a value for this stat in any year, in a stable order. */
export const getUsersForStat = (stat: StatType) =>
  ALL_USERS.filter((user) =>
    YEARS.some((year) => getValues(year, stat).some((v) => v.user === user)),
  );
