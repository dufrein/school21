import { getStudentByEmail } from "@api/student";
import { loginFormSchema } from "../schema";

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

    const students = await getStudentByEmail(validatedFields.data.email);
    const checkedStudent = students && students[0];

    console.log("checkedStudent", checkedStudent);

    if (!checkedStudent) {
      return {
        errors: {
          email: "Пользователя с таким email нет",
          password: "",
        },
      };
    }

    return { data: checkedStudent };
  } catch (err) {
    console.error(err);
  }
};
