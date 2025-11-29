import {
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
  USER_AMOS,
  Year,
  WEDDINGS,
  USER_AMYLYNN,
} from "./data.types";

export const STATS_2025: Year = {
  letter: require("../assets/letters/2025.md"),
  stats: {
    [BOOKS_READ]: {
      label: BOOKS_READ,
      values: [
        { value: 12, user: USER_ADAM },
        { value: 22, user: USER_LEAH },
      ],
    },
    [DIAPERS_CHANGED]: {
      label: DIAPERS_CHANGED,
      values: [
        { value: 1811, user: USER_AMOS },
        { value: 899, user: USER_AMYLYNN },
      ],
    },
    [GAME_NIGHTS]: {
      label: GAME_NIGHTS,
      values: [{ value: 17, user: USER_UNKNOWN }],
    },
    [HOLES_GOLFED]: {
      label: HOLES_GOLFED,
      values: [{ value: 27, user: USER_ADAM }],
    },
    [MILES_DRIVEN]: {
      label: MILES_DRIVEN,
      values: [],
    },
    [MILES_RAN]: {
      label: MILES_RAN,
      values: [],
    },
    [PHOTOS_TAKEN]: {
      label: PHOTOS_TAKEN,
      values: [],
    },
    [PUZZLES_COMPLETED]: {
      label: PUZZLES_COMPLETED,
      values: [{ value: 3, user: USER_UNKNOWN }],
    },
    [STEPS]: {
      label: STEPS,
      values: [],
    },
    [WEDDINGS]: {
      label: WEDDINGS,
      values: [{ value: 1, user: USER_UNKNOWN }],
    },
  },
};
