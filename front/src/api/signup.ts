import { NewStudentType, SignupFormType, StudentType } from "@types";
import bcrypt from "bcryptjs";
import { strapiClient } from "@api/strapiClient";
import chalk from "chalk";

interface StrapiError {
  error: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

export const signupUser = async (signupFormData: SignupFormType) => {
  const studentsCollection = strapiClient.collection("students");

  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = bcrypt.hashSync(signupFormData.password, salt);

  const studentUser: NewStudentType = {
    ...signupFormData,
    name: signupFormData.name.trim(),
    surname: signupFormData.surname.trim(),
    email: signupFormData.email.trim(),
    isActive: false,
    level: null,
    finishedLessonsIds: [],
    verifyTimestamp: Date.now(),
    password: hashedPassword,
  };

  try {
    const response = await studentsCollection.create({ ...studentUser });

    const fullData = {
      data: response.data as unknown as StudentType,
      errors: null,
    };

    return fullData;
  } catch (error: unknown) {
    const strapiError = error as StrapiError;

    console.log(chalk.redBright("Ошибка при регистрации:"));
    console.log("error", error);
    console.log(chalk.yellow("Детали:"), JSON.stringify(strapiError.error.details, null, 2));
  }

  return {
    errors: [
      {
        path: ["email"],
        message: "Ошибка при регистрации",
      },
    ],
  };
};
