import { Course } from "@types";
import { PropsWithChildren, ReactElement } from "react";

export type AppContextProps = PropsWithChildren;

export interface AppContextType {
  userCourses: Course[] | null;
  tableContent: ReactElement | null;
}
