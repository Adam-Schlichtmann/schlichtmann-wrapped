import {
  StatType,
  CompleteStat,
  DIAPERS_CHANGED,
  USER_UNKNOWN,
  GAME_NIGHTS,
  HOLES_GOLFED,
  USER_ADAM,
  MILES_DRIVEN,
  USER_LEAH,
  MILES_RAN,
  PHOTOS_TAKEN,
  PUZZLES_COMPLETED,
  STEPS,
  BOOKS_READ,
} from "./data.types";

export const STATS_2024: Record<StatType, CompleteStat> = {
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
