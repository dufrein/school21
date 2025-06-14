import { StudentType } from "@types";
import { PropsWithChildren } from "react";

export type UserContextProps = Pick<UserContextType, "user"> & PropsWithChildren;

export interface UserContextType {
  user: StudentType | null;
  saveStudent: (newStudentSettings: Partial<StudentType>) => Promise<void>;
  isLoading: boolean;
}
