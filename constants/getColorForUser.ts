import { Theme } from "./Colors";
import { USER_ADAM, USER_AMOS, USER_LEAH, UserType } from "@/data";

export default (user: UserType, theme: Theme): string => {
  switch (user) {
    case USER_ADAM:
      return theme.adam;
    case USER_AMOS:
      return theme.amos;
    case USER_LEAH:
      return theme.leah;
    default:
      return "gray";
  }
};
