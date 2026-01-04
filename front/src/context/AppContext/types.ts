import { Course, FetchMeta } from "@types";
import { PropsWithChildren } from "react";

export type AppContextProps = PropsWithChildren & AppContextType;
export interface AppContextType {
  userCourses: Course[] | null;
  userCoursesMeta: FetchMeta | null;
}
