import { StudentType } from "@types";
import { PropsWithChildren } from "react";

export type UserContextProps = UserContextType & PropsWithChildren;

export interface UserContextType {
  user: StudentType | null;
  saveStudent: (student: StudentType, newStudentSettings: Partial<StudentType>) => Promise<void>;
  isLoading: boolean;
}
