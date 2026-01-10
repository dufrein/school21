import { CourseFull, FetchMeta, StudentType } from "@types";
import { PropsWithChildren } from "react";

export type UserContextProps = Omit<UserContextType, "saveStudent" | "isLoading"> &
  PropsWithChildren;

export interface UserContextType {
  user: StudentType | null;
  saveStudent: (newStudentSettings: Partial<StudentType>) => Promise<void>;
  isLoading: boolean;
  userCourses: CourseFull[] | null;
  userCoursesMeta: FetchMeta | null;
}
