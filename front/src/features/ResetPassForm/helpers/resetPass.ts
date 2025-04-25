"use server";

import { getStudentByEmail, updateStudent } from "@api/student";
import { resetPassFormSchema } from "../schema";
import bcrypt from "bcryptjs";
import { sendVerifyLink } from "./sendVerifyLink";

export const resetPass = async (state: unknown, formData: FormData) => {
  try {
    const validatedFields = resetPassFormSchema.safeParse({
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
        },
      };
    }

    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = bcrypt.hashSync(validatedFields.data.password, salt);

    const updatedStudent = await updateStudent(checkedStudent.documentId, {
      ...checkedStudent,
      password: hashedPassword,
      isActive: false,
      verifyTimestamp: Date.now()
    });

    if (!updatedStudent) {
      return {
        errors: {
          password: "Ошибка при обновлении пароля",
        },
      };
    }

    sendVerifyLink(updatedStudent);

    return { data: updatedStudent, isPassReseted: true };
  } catch (err) {
    console.error(err);
  }
};
