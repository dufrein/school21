import { User } from "../types/user";

export const getUser = async (): Promise<User> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};

/**
 * Хелпер получения инфы о поргресс прохождения круса пользователем
 * @param courseId: string
 * @returns Promise<string[]>
 */
export const getUserProgress = async (courseId: string): Promise<string[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/progress`);

  return [""];

  if (!response.ok) {
    throw new Error("Failed to fetch user progress");
  }
  return response.json();
};
