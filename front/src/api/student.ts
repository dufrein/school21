"use server";

import { strapiClient } from "@api/strapiClient";
import { StudentType } from "@types";

const studentsCollection = strapiClient.collection("students");

export const getStudent = async (studentId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students/${studentId}?populate=*`);
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
      sex: newStudent.sex || null,
      avatarId: newStudent.avatarId || null,
    };

    console.log("updatedStudent", updatedStudent);
    const response = await studentsCollection.update(studentId, {
      ...updatedStudent,
    });

    return response.data as unknown as StudentType;
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
