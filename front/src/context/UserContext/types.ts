import { StudentType } from "@types";
import { PropsWithChildren } from "react";

export type UserContextProps = {
  user: StudentType | null;
} & PropsWithChildren;

export interface UserContextType {
  user: StudentType | null;
}
