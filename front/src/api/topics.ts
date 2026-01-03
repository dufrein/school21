import { Topic } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

/**
 * Хелпер для получения темы по topicId
 */
export const getTopicById = async (topicId: string) => {
  return await fetchApi<Topic>(ENDPOINTS.TopicById(topicId), {
    params: { populate: "*" },
  });
};
