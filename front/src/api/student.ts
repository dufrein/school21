"use server";

import { StudentType } from "@types";
import { strapiClient } from "@utils/strapiClient/strapiClient";
const studentsCollection = strapiClient.collection("students");

export const getStudent = async (studentId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/students/${studentId}?populate=*`);
    if (!response.ok) {
      throw new Error("Failed to fetch student data");
    }
    const data: { data: StudentType } = await response.json();

    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getStudentByEmail = async (studentEmail: string): Promise<StudentType | undefined> => {
  try {
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

export const updateStudent = async (studentId: string, newStudent: StudentType) => {
  try {
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
      password: newStudent.password, //тут уже хэшированный пароль
    };
    console.log("updatedStudent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", updatedStudent);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/students/${studentId}`, {
      method: "PUT",
      body: JSON.stringify({ data: updatedStudent }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to update user data");
    }
    const data: { data: StudentType } = await response.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

/**
 * Хелпер получения инфы о поргресс прохождения круса пользователем
 * @param courseId: string
 * @returns Promise<string[]>
 */
export const getUserProgress = async (courseId: string): Promise<string[]> => {
  console.log("courseId", courseId);
  return [""];
};
