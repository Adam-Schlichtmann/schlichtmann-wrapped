export type Stat = {
  value: number;
  label: string;
};

const STATS_2024 = [
  {
    label: "Diapers Changed",
    value: 1218,
  },
  {
    label: "Games Nights",
    value: 31,
  },
  {
    label: "Holes Golfed",
    value: 54,
  },
  {
    label: "Miles Driven Leah Car",
    value: 8866,
  },
  {
    label: "Miles Driven Adams Car",
    value: 100,
  },
  {
    label: "Miles Ran Adam",
    value: 426.03,
  },
  {
    label: "Miles Ran Leah",
    value: 276.3,
  },
  {
    label: "Photos Taken",
    value: 0,
  },
  {
    label: "Puzzles Completed",
    value: 8,
  },
  {
    label: "Steps Adam",
    value: 2912535,
  },
  {
    label: "Steps Leah",
    value: 2684414,
  },
  {
    label: "Books read Adam",
    value: 8,
  },
  {
    label: "Books read Leah",
    value: 23,
  },
];

const STATS_BY_YEAR: Record<string, Stat[]> = {
  2024: STATS_2024,
};

export default STATS_BY_YEAR;
