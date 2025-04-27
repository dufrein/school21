"use server";

import { getStudentByEmail } from "@api/student";
import { loginFormSchema } from "../schema";
import bcrypt from "bcryptjs";
import { createSession } from "@actions/session";
import { redirect } from "next/navigation";

export const login = async (state: unknown, formData: FormData) => {
  try {
    const validatedFields = loginFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const checkedStudent = await getStudentByEmail(validatedFields.data.email);

    if (!checkedStudent) {
      return {
        errors: {
          email: "Пользователя с таким email нет",
          password: "",
        },
      };
    }

    if (!checkedStudent.isActive) {
      return {
        errors: {
          email: "Пользователь не прошел верификацию по ссылке в почте",
          password: "",
        },
      };
    }


    const result = await bcrypt.compare(validatedFields.data.password, checkedStudent.password);

    if (result) {
      await createSession(checkedStudent.documentId);
    } else {
      return {
        errors: {
          password: "Неверный пароль",
        },
      };
    }
  } catch (err) {
    console.error(err);
  }
  redirect("/learning");
};
