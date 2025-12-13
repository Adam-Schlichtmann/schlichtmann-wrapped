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
      values: [
        { value: 6704, user: USER_ADAM },
        { value: 8480, user: USER_LEAH },
      ],
    },
    [MILES_RAN]: {
      label: MILES_RAN,
      values: [
        { value: 87.99, user: USER_ADAM },
        { value: 174.8, user: USER_LEAH },
      ],
    },
    [PHOTOS_TAKEN]: {
      label: PHOTOS_TAKEN,
      values: [
        { value: 338, user: USER_ADAM },
        { value: 886, user: USER_LEAH },
      ],
    },
    [PUZZLES_COMPLETED]: {
      label: PUZZLES_COMPLETED,
      values: [{ value: 3, user: USER_UNKNOWN }],
    },
    [SPOTIFY_MINUTES]: {
      label: SPOTIFY_MINUTES,
      values: [
        { value: 24816, user: USER_ADAM },
        { value: 10477, user: USER_LEAH },
      ],
    },
    [STEPS]: {
      label: STEPS,
      values: [
        { value: 2284309, user: USER_ADAM },
        { value: 2375675, user: USER_LEAH },
      ],
    },
    [WEDDINGS]: {
      label: WEDDINGS,
      values: [{ value: 1, user: USER_UNKNOWN }],
    },
  },
};
