import { Lesson, StrapiPagination } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { fetchStrapiDocsList } from "@utils";

/**
 * Хелпер получения уроков
 */
export const getAllLessons = async (populate?: boolean, pagination?: StrapiPagination): Promise<Lesson[]> => {
  const { data } = await fetchStrapiDocsList<Lesson>(ENDPOINTS.Lessons, populate, pagination);
  return data;
};

export const getLessonById = async (id: string) => {
  const { data } = await fetchApi<{ data: Lesson }>(ENDPOINTS.LessonById(id), {
    params: { populate: "*" }
  });
  return data.data;
};
