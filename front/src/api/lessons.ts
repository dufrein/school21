import { Lesson } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { fetchStrapiDocsList } from "@utils";
import { GetDocsParams } from "./types";

/**
 * Хелпер получения уроков
 */
export const getAllLessons = async ({ populate, pagination }: GetDocsParams) => {
  return await fetchStrapiDocsList<Lesson>({
    url: ENDPOINTS.Lessons,
    populate,
    pagination,
  });
};

export const getLessonById = async (id: string) => {
  return await fetchApi<Lesson>(ENDPOINTS.LessonById(id), {
    params: { populate: "*" },
  });
};

export const getLessonByIdWithAnswers = async (id: string) => {
  return await fetchApi<Lesson>(ENDPOINTS.LessonById(id), {
    params: {  
      'populate[questions][populate][answers][populate]':'*'
     },
  });
};
