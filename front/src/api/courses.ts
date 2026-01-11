import { Course, CourseFull } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { fetchStrapiDocsList } from "@utils";
import { GetDocsParams } from "./types";

/**
 * Хелпер получения курса по id
 * @param courseId - идентификатор курса
 * @returns Promise<Course>
 */
export const getCourseById = async (courseId: string) => {
  return await fetchApi<Course>(ENDPOINTS.CourseById(courseId), {
    params: { populate: "*" },
  });
};

/**
 * Хелпер получения списка курсов
 * @param populate - флаг для получения связанных данных
 */
export const getCourses = async ({ populate, pagination, searchParams }: GetDocsParams) => {
  return await fetchStrapiDocsList<Course>({
    url: ENDPOINTS.Courses,
    populate,
    pagination,
    searchParams,
  });
};

/**
 * Хелпер получения списка курсов
 * @param populate - флаг для получения связанных данных
 */
export const getCoursesFull = async ({ populate, pagination, searchParams }: GetDocsParams) => {
  return await fetchStrapiDocsList<CourseFull>({
    url: ENDPOINTS.CoursesFull,
    populate,
    pagination,
    searchParams,
  });
};

/**
 * Хелпер получения полной информации о курсе
 * @param courseId - идентификатор курса
 */
export const getFullCourse = async (courseId: string) => {
  return await fetchApi<CourseFull>(ENDPOINTS.CourseFullById(courseId), {
    params: { populate: "topics" },
  });
};
