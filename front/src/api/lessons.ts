import { Lesson } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

/**
 * Хелпер получения уроков
 * @returns Lesson[]
 */
export const getLessons = async () => {
  const { data } = await fetchApi<{ data: Lesson[] }>(ENDPOINTS.Lessons, {
    params: { populate: "*" }
  });
  return data.data;
};

export const getLessonById = async (id: string) => {
  const { data } = await fetchApi<{ data: Lesson }>(ENDPOINTS.LessonById(id), {
    params: { populate: "*" }
  });
  return data.data;
};
