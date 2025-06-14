import { Topic } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

/**
 * Хелпер для получения тем курса по courseId
 * @param topicId
 * @returns Topic[]
 */
export const getTopics = async (courseId: string) => {
  const { data } = await fetchApi<{ data: Topic[] }>(ENDPOINTS.Topics, {
    params: { courseId, populate: "*" }
  });
  return data.data;
};

/**
 * Хелпер для получения темы по topicId
 * @param topicId
 * @returns Topic[]
 */
export const getTopicById = async (topicId: string) => {
  const { data } = await fetchApi<{ data: Topic }>(ENDPOINTS.TopicById(topicId), {
    params: { populate: "*" }
  });
  return data.data;
};
