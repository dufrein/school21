"use server";

import { strapiClient } from "@api/strapiClient";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { NewStudentType, SignupFormType, StudentType } from "@types";
import bcrypt from "bcryptjs";
import chalk from "chalk";
import { fetchApiWithError } from "@utils/fetchApi/fetchApi";
import { StrapiError } from "@types";

/**
 * Хелпер получения студента по id
 * @param studentId - идентификатор студента
 * @returns Promise<StudentType | null>
 */
export const getStudent = async (studentId: string) => {
  return await fetchApi<StudentType>(ENDPOINTS.StudentById(studentId), {
    params: { populate: "*" },
  });
};

/**
 * Хелпер получения студента по email
 * @param studentEmail - email студента
 * @returns Promise<StudentType | undefined>
 */
export const getStudentByEmail = async (studentEmail: string) => {
  const students = await fetchApi<StudentType[]>(ENDPOINTS.Students, {
    params: { populate: "*", "filters[email][$eq]": `${studentEmail}` },
  });

  return students ? students[0] : null;
};

// export const createStudent = () => {};

/**
 * Хелпер обновления данных студента
 * @param studentId - идентификатор студента
 * @param newStudent - новые данные студента
 * @returns Promise<StudentType | undefined>
 */
export const updateStudent = async (
  studentId: string,
  newStudent: StudentType
): Promise<StudentType | undefined> => {
  try {
    const studentsCollection = strapiClient.collection("students");

    const updatedStudent = {
      name: newStudent.name,
      surname: newStudent.surname,
      email: newStudent.email,
      isActive: newStudent.isActive,
      finishedLessonsIds: newStudent.finishedLessonsIds || [],
      phone: newStudent.phone,
      verifyTimestamp: newStudent.verifyTimestamp,
      sex: newStudent.sex || null,
      avatarId: newStudent.avatarId || null,
      level: newStudent.level || null,
    };

    const response = await studentsCollection.update(
      studentId,
      {
        ...updatedStudent,
      },
      { populate: "*" }
    );
    return response.data as unknown as StudentType;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};


export const signupUser2 = async (signupFormData: SignupFormType) => {
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

    const response = await fetchApiWithError<StudentType>(ENDPOINTS.Students, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: studentUser }),
    });

    return response;
};

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
    console.log("error", error);
    const strapiError = error as StrapiError;

    console.log(chalk.redBright("Ошибка при регистрации:"));
    console.log(chalk.yellow("Детали:"), JSON.stringify(strapiError.error?.details, null, 2));
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
