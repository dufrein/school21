"use server";

import { getStudentByEmail, signupUser2 } from "@api/student";
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

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const checkedStudent = await getStudentByEmail(validatedFields.data.email);

  // const responseData = await signupUser({ ...validatedFields.data });
  const responseData = await signupUser2({ ...validatedFields.data });
  console.log("responseDataresponseData", responseData?.error?.details?.errors);
  const objectErrors: { errors: SignupFormStateErrorsType } = { errors: {} };

  if (responseData?.error) {
    responseData?.error?.details?.errors.forEach((errorItem) => {
      const erroKeyName = errorItem.path[0] as keyof SignupFormStateErrorsType;
      if (erroKeyName === "email" && errorItem.message === "This attribute must be unique") {
        objectErrors.errors!["email"] = checkedStudent?.isActive
          ? ["Пользователь с такой почтой уже существует, выберите другую почту"]
          : [
              "Вам уже было отправлено письмо с ссылкой для завершения регистрации. Если нет, то напишите нам",
            ];
        return;
      }
      objectErrors.errors![erroKeyName] = [errorItem.message];
    });
    return { errors: objectErrors.errors };
  }

  if (!responseData.data) {
    return { errors: { email: ["Что-то пошло не так, напишите в техподдержку"] } };
  }

  sendVerifyLink(responseData?.data);

  return { data: responseData?.data, isUserCreated: true };
};
