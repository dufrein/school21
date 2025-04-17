import { Topic } from "@types";

/**
 * Хелпер для получения тем курса по courseId
 * @param topicId
 * @returns Topic[]
 */
export const getTopics = async (courseId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/topics?courseId=${courseId}&populate=*`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch course topics");
  }
  const data: { data: Topic[] } = await response.json();

  return data.data;
};

/**
 * Хелпер для получения темы по topicId
 * @param topicId
 * @returns Topic[]
 */
export const getTopic = async (topicId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/topics/${topicId}?populate=*`);
  if (!response.ok) {
    throw new Error("Failed to fetch course topics");
  }
  const data: { data: Topic } = await response.json();

  return data.data;
};
