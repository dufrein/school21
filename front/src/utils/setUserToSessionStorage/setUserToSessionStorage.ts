import { User } from "@types";

export const setUserToSessionStorage = (user: User | null) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};
