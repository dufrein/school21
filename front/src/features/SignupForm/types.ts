import { StudentType } from "@types";

export type SignupFormState =
  | {
      errors?: SignupFormStateErrorsType;
      message?: string;
    }
  | undefined;

export type SignupFormStateErrorsType = {
  name?: string[];
  surname?: string[];
  email?: string[];
  password?: string[];
};

export interface SignupResult {
  errors?: SignupFormStateErrorsType;
  data?: StudentType;
  isUserCreated?: boolean;
}
