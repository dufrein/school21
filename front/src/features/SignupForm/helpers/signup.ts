'use server';

import { signupUser } from "@api/signup";
import { signupFormSchema } from "../schema";
import { SignupFormStateErrorsType, SignupResult } from "../types";
import { sendVerifyLink } from "./sendVerifyLink";

export const signup = async (state: unknown, formData: FormData): Promise<SignupResult> => {
  const validatedFields = signupFormSchema.safeParse({
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const responseData = await signupUser({ ...validatedFields.data });
  const objectErrors: { errors: SignupFormStateErrorsType } = { errors: {} };

  if (responseData?.errors) {
    responseData?.errors?.forEach((errorItem) => {
      const erroKeyName = errorItem.path[0] as keyof SignupFormStateErrorsType;
      if (erroKeyName === "email" && errorItem.message === "This attribute must be unique") {
        objectErrors.errors!["email"] = [
          "Пользователь с такой почтой уже существует, выберите другую почту",
        ];
        return;
      }
      objectErrors.errors![erroKeyName] = [errorItem.message];
    });
    return { errors: objectErrors.errors };
  }
  
  sendVerifyLink(responseData?.data);

  return { data: responseData?.data, isUserCreated: true };
};
