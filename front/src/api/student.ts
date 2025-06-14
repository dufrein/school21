"use server";

import { strapiClient } from "@api/strapiClient";
import { StudentType } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

/**
 * Хелпер получения студента по id
 * @param studentId - идентификатор студента
 * @returns Promise<StudentType | null>
 */
export const getStudent = async (studentId: string): Promise<StudentType | null> => {
  try {
    const { data } = await fetchApi<{ data: StudentType }>(ENDPOINTS.StudentById(studentId), {
      params: { populate: "*" },
    });
    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

/**
 * Хелпер получения студента по email
 * @param studentEmail - email студента
 * @returns Promise<StudentType | undefined>
 */
export const getStudentByEmail = async (studentEmail: string): Promise<StudentType | undefined> => {
  try {
    const studentsCollection = strapiClient.collection("students");

    const students = await studentsCollection.find({
      filters: {
        email: {
          $eq: studentEmail,
        },
      },
    });

    return students.data[0] as unknown as StudentType;
  } catch (err) {
    console.error(err);
  }
};

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

    const { tariff } = newStudent;

    const updatedStudent = {
      name: newStudent.name,
      surname: newStudent.surname,
      email: newStudent.email,
      isActive: newStudent.isActive,
      finishedLessonsIds: [],
      tariff: tariff ? tariff.documentId : null,
      phone: newStudent.phone,
      verifyTimestamp: newStudent.verifyTimestamp,
      sex: newStudent.sex || null,
      avatarId: newStudent.avatarId || null,
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

/**
 * Хелпер получения информации о прогрессе прохождения курса пользователем
 * @param courseId - идентификатор курса
 * @returns Promise<string[]>
 */
export const getUserProgress = async (courseId: string): Promise<string[]> => {
  console.log("courseId", courseId);
  return [""];
};
