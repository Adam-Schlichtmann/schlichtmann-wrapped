export const BOOKS_READ = "Books Read";
export const DIAPERS_CHANGED = "Diapers Changed";
export const GAME_NIGHTS = "Game Nights";
export const HOLES_GOLFED = "Holes Golfed";
export const MILES_DRIVEN = "Miles Driven";
export const MILES_RAN = "Miles Ran";
export const PHOTOS_TAKEN = "Photos Taken";
export const PUZZLES_COMPLETED = "Puzzles Completed";
export const STEPS = "Steps";
export const WEDDINGS = "Weddings";

export type StatType =
  | typeof BOOKS_READ
  | typeof DIAPERS_CHANGED
  | typeof GAME_NIGHTS
  | typeof HOLES_GOLFED
  | typeof MILES_DRIVEN
  | typeof MILES_RAN
  | typeof PHOTOS_TAKEN
  | typeof PUZZLES_COMPLETED
  | typeof STEPS
  | typeof WEDDINGS;

export const ALL_STATS: StatType[] = [
  BOOKS_READ,
  DIAPERS_CHANGED,
  GAME_NIGHTS,
  HOLES_GOLFED,
  MILES_DRIVEN,
  MILES_RAN,
  PHOTOS_TAKEN,
  PUZZLES_COMPLETED,
  STEPS,
  WEDDINGS,
];

export const USER_ADAM = "Adam";
export const USER_LEAH = "Leah";
export const USER_AMOS = "Amos";
export const USER_UNKNOWN = "General";

export type UserType =
  | typeof USER_ADAM
  | typeof USER_LEAH
  | typeof USER_AMOS
  | typeof USER_UNKNOWN;

export const ALL_USERS: UserType[] = [
  USER_ADAM,
  USER_LEAH,
  USER_AMOS,
  USER_UNKNOWN,
];

export type CompleteStat = {
  label: StatType;
  values: { value: number; user: UserType }[];
};

export type Year = {
  letter: string;
  stats: Record<StatType, CompleteStat>;
};
