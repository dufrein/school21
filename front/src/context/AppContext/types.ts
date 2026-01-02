import { Course } from "@types";
import { PropsWithChildren } from "react";

export type AppContextProps = PropsWithChildren;

export interface AppContextType {
  userCourses: Course[] | null;
}
