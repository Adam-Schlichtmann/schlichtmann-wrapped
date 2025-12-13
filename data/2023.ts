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
  USER_LEAH,
  USER_UNKNOWN,
  WEDDINGS,
  Year,
} from "./data.types";

export const STATS_2023: Year = {
  letter: "",
  stats: {
    [BOOKS_READ]: {
      label: BOOKS_READ,
      values: [{ value: 2, user: USER_ADAM }],
    },
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
        { value: 114.04, user: USER_ADAM },
        { value: 90.6, user: USER_LEAH },
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
    [SPOTIFY_MINUTES]: {
      label: SPOTIFY_MINUTES,
      values: [],
    },
    [STEPS]: {
      label: STEPS,
      values: [
        {
          value: 2625939,
          user: USER_ADAM,
        },
        {
          value: 2615025,
          user: USER_LEAH,
        },
      ],
    },
    [WEDDINGS]: {
      label: WEDDINGS,
      values: [{ value: 3, user: USER_UNKNOWN }],
    },
  },
};
