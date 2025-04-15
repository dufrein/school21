import { Question } from "@types";

export const getQuestionsByLessonId = async (lessonId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/lesson/${lessonId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }
  const data: { data: Question[] } = await response.json();

  return data.data;
};
 
