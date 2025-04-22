import { NewStudentType, SignupFormType, StudentType } from "@types";
import { StrapiApiErrorType } from "@types";
import bcrypt from "bcryptjs";

export const signupUser = async (signupFormData: SignupFormType) => {
  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = bcrypt.hashSync(signupFormData.password, salt);

  const studentUser: NewStudentType = {
    ...signupFormData,
    isActive: false,
    tariff: null,
    finishedLessonsIds: [],
    verifyTimestamp: Date.now(),
    password: hashedPassword,
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/students`, {
      method: "POST",
      body: JSON.stringify({ data: studentUser }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const info: { data: StudentType; error: StrapiApiErrorType } = await response.json();
    const fullData = { data: info.data, errors: info.error?.details.errors };
    return fullData;
  } catch (err) {
    console.error("Ошибка при регистрации", err);
  }
};
