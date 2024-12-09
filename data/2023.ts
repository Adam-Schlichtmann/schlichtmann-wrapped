import {
  StatType,
  CompleteStat,
  DIAPERS_CHANGED,
  USER_UNKNOWN,
  GAME_NIGHTS,
  HOLES_GOLFED,
  USER_ADAM,
  MILES_DRIVEN,
  MILES_RAN,
  USER_LEAH,
  PHOTOS_TAKEN,
  PUZZLES_COMPLETED,
  STEPS,
  BOOKS_READ,
} from "./data.types";

export const STATS_2023: Record<StatType, CompleteStat> = {
  [DIAPERS_CHANGED]: {
    label: DIAPERS_CHANGED,
    values: [{ value: 0, user: USER_UNKNOWN }],
  },
  [GAME_NIGHTS]: {
    label: GAME_NIGHTS,
    values: [{ value: 38, user: USER_UNKNOWN }],
  },
  [HOLES_GOLFED]: {
    label: HOLES_GOLFED,
    values: [{ value: 504, user: USER_ADAM }],
  },
  [MILES_DRIVEN]: {
    label: MILES_DRIVEN,
    values: [{ value: 0, user: USER_UNKNOWN }],
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
    values: [{ value: 0, user: USER_UNKNOWN }],
  },
  [PUZZLES_COMPLETED]: {
    label: PUZZLES_COMPLETED,
    values: [{ value: 0, user: USER_UNKNOWN }],
  },
  [STEPS]: {
    label: STEPS,
    values: [
      {
        value: 0,
        user: USER_UNKNOWN,
      },
    ],
  },
  [BOOKS_READ]: {
    label: BOOKS_READ,
    values: [{ value: 2, user: USER_ADAM }],
  },
};
