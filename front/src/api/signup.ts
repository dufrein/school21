import { NewStudentType, SignupFormType, StudentType } from "@types";
import bcrypt from "bcryptjs";
import { strapiClient } from "@api/strapiClient";

const studentsCollection = strapiClient.collection("students");

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
    const response = await studentsCollection.create({ ...studentUser });

    console.log("response", response);

    const fullData = {
      data: response.data as unknown as StudentType,
      errors: null,
    };

    return fullData;
  } catch (err) {
    console.error("Ошибка при регистрации", err);
    return {
      errors: [
        {
          path: ["email"],
          message: "Пользователь с такой почтой уже существует, выберите другую почту",
        },
      ],
    };
  }
};
