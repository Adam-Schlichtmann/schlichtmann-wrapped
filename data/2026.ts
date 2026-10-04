import {
  BOOKS_READ,
  DIAPERS_CHANGED,
  GAME_NIGHTS,
  HOLES_GOLFED,
  MILES_DRIVEN,
  MILES_RAN,
  PHOTOS_TAKEN,
  PUZZLES_COMPLETED,
  SPOTIFY_MINUTES,
  STEPS,
  USER_ADAM,
  USER_AMOS,
  USER_AMYLYNN,
  USER_LEAH,
  USER_UNKNOWN,
  WEDDINGS,
  Year,
} from "./data.types";

export const STATS_2026: Year = {
  letter: require("../assets/letters/2026.md"),
  stats: {
    [BOOKS_READ]: {
      label: BOOKS_READ,
      values: [
        { value: 0, user: USER_ADAM },
        { value: 0, user: USER_LEAH },
      ],
    },
    [DIAPERS_CHANGED]: {
      label: DIAPERS_CHANGED,
      values: [
        { value: 0, user: USER_AMOS },
        { value: 0, user: USER_AMYLYNN },
      ],
    },
    [GAME_NIGHTS]: {
      label: GAME_NIGHTS,
      values: [{ value: 0, user: USER_UNKNOWN }],
    },
    [HOLES_GOLFED]: {
      label: HOLES_GOLFED,
      values: [{ value: 0, user: USER_ADAM }],
    },
    [MILES_DRIVEN]: {
      label: MILES_DRIVEN,
      values: [
        { value: 0, user: USER_ADAM },
        { value: 0, user: USER_LEAH },
      ],
    },
    [MILES_RAN]: {
      label: MILES_RAN,
      values: [
        { value: 0, user: USER_ADAM },
        { value: 0, user: USER_LEAH },
      ],
    },
    [PHOTOS_TAKEN]: {
      label: PHOTOS_TAKEN,
      values: [
        { value: 0, user: USER_ADAM },
        { value: 0, user: USER_LEAH },
      ],
    },
    [PUZZLES_COMPLETED]: {
      label: PUZZLES_COMPLETED,
      values: [{ value: 0, user: USER_UNKNOWN }],
    },
    [SPOTIFY_MINUTES]: {
      label: SPOTIFY_MINUTES,
      values: [
        { value: 0, user: USER_ADAM },
        { value: 0, user: USER_LEAH },
      ],
    },
    [STEPS]: {
      label: STEPS,
      values: [
        { value: 0, user: USER_ADAM },
        { value: 0, user: USER_LEAH },
      ],
    },
    [WEDDINGS]: {
      label: WEDDINGS,
      values: [{ value: 0, user: USER_UNKNOWN }],
    },
  },
};
