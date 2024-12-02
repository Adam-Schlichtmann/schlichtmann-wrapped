export const DIAPERS_CHANGED = "Diapers Changed";
export const GAME_NIGHTS = "Game Nights";
export const HOLES_GOLFED = "Holes Golfed";
export const MILES_DRIVEN = "Miles Driven";
export const MILES_RAN = "Miles Ran";
export const PHOTOS_TAKEN = "Photos Taken";
export const PUZZLES_COMPLETED = "Puzzles Completed";
export const STEPS = "Steps";
export const BOOKS_READ = "Books Read";

export type StatType =
  | typeof DIAPERS_CHANGED
  | typeof GAME_NIGHTS
  | typeof HOLES_GOLFED
  | typeof MILES_DRIVEN
  | typeof MILES_RAN
  | typeof PHOTOS_TAKEN
  | typeof PUZZLES_COMPLETED
  | typeof STEPS
  | typeof BOOKS_READ;

export const ALL_STATS: StatType[] = [
  DIAPERS_CHANGED,
  GAME_NIGHTS,
  HOLES_GOLFED,
  MILES_DRIVEN,
  MILES_RAN,
  PHOTOS_TAKEN,
  PUZZLES_COMPLETED,
  STEPS,
  BOOKS_READ,
];

export const USER_ADAM = "Adam";
export const USER_LEAH = "Leah";
export const USER_AMOS = "Amos";
export const USER_UNKNOWN = "";

export type UserType =
  | typeof USER_ADAM
  | typeof USER_LEAH
  | typeof USER_AMOS
  | typeof USER_UNKNOWN;

export type CompleteStat = {
  label: StatType;
  values: { value: number; user: UserType }[];
};

const STATS_2024: Record<StatType, CompleteStat> = {
  [DIAPERS_CHANGED]: {
    label: DIAPERS_CHANGED,
    values: [{ value: 1218, user: USER_UNKNOWN }],
  },
  [GAME_NIGHTS]: {
    label: GAME_NIGHTS,
    values: [{ value: 31, user: USER_UNKNOWN }],
  },
  [HOLES_GOLFED]: {
    label: HOLES_GOLFED,
    values: [{ value: 54, user: USER_ADAM }],
  },
  [MILES_DRIVEN]: {
    label: MILES_DRIVEN,
    values: [
      { value: 100, user: USER_ADAM },
      { value: 8866, user: USER_LEAH },
    ],
  },
  [MILES_RAN]: {
    label: MILES_RAN,
    values: [
      { value: 426.03, user: USER_ADAM },
      { value: 276.3, user: USER_LEAH },
    ],
  },
  [PHOTOS_TAKEN]: {
    label: PHOTOS_TAKEN,
    values: [
      { value: 179, user: USER_ADAM },
      { value: 456, user: USER_LEAH },
    ],
  },
  [PUZZLES_COMPLETED]: {
    label: PUZZLES_COMPLETED,
    values: [{ value: 8, user: USER_UNKNOWN }],
  },
  [STEPS]: {
    label: STEPS,
    values: [
      {
        value: 2912535,
        user: USER_ADAM,
      },
      { value: 2684414, user: USER_LEAH },
    ],
  },
  [BOOKS_READ]: {
    label: BOOKS_READ,
    values: [
      { value: 8, user: USER_ADAM },
      { value: 23, user: USER_LEAH },
    ],
  },
};

const STATS_BY_YEAR: Record<string, Record<StatType, CompleteStat>> = {
  2024: STATS_2024,
};

export default STATS_BY_YEAR;
