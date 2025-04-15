import { Lesson } from "@types";

export const getLessons = async (courseId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/lessons?courseId=${courseId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch course lessons');
  }
  const data: { data: Lesson[] } = await response.json();

  return data.data;
}; 