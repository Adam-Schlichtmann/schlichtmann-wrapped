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
} from "./data.types";

export const STATS_2025: Year = {
  letter: require("../assets/letters/2025.md"),
  stats: {
    [BOOKS_READ]: {
      label: BOOKS_READ,
      values: [],
    },
    [DIAPERS_CHANGED]: {
      label: DIAPERS_CHANGED,
      values: [],
    },
    [GAME_NIGHTS]: {
      label: GAME_NIGHTS,
      values: [],
    },
    [HOLES_GOLFED]: {
      label: HOLES_GOLFED,
      values: [],
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
      values: [],
    },
    [STEPS]: {
      label: STEPS,
      values: [],
    },
    [WEDDINGS]: {
      label: WEDDINGS,
      values: [],
    },
  },
};
