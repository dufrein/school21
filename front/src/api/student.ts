import { StudentType } from "@types";

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
  }
};

export const getStudentByEmail = async (studentEmail: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/students?email=${studentEmail}?populate=*`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch student data by email");
    }
    const data: { data: StudentType[] } = await response.json();

    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateStudent = async (studentId: string, newStudent: StudentType) => {
  try {
    const { tariff } = newStudent;
    const tariffInfo = tariff
      ? {
          name: tariff?.name,
          description: tariff?.description,
          price: tariff?.price,
          features: tariff?.features,
        }
      : null;
    const updatedStudent = {
      name: newStudent.name,
      surname: newStudent.surname,
      email: newStudent.email,
      isActive: newStudent.isActive,
      finishedLessonsIds: [],
      tariff: tariffInfo,
      phone: newStudent.phone,
      verifyTimestamp: newStudent.verifyTimestamp,
      password: newStudent.password, //тут уже хэшированный пароль
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/students/${studentId}`, {
      method: "PUT",
      body: JSON.stringify({ data: updatedStudent }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response!", response);
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
