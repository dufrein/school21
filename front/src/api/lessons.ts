import { Lesson } from "@types";

/**
 * Хелпер получения уроков
 * @returns Lesson[]
 */
export const getLessons = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/lessons?populate=*`);

  if (!response.ok) {
    throw new Error("Failed to fetch course lessons");
  }
  const data: { data: Lesson[] } = await response.json();

  return data.data;
};

export const getLessonById = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/lessons/${id}?populate=*`);
  const data: { data: Lesson } = await response.json();
  return data.data;
};
