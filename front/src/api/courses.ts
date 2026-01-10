import { Course, CourseFull } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { StrapiPagination } from "@types";
import { fetchStrapiDocsList } from "@utils";
import { FetchStrapiDocsListParams } from "@utils/fetchStrapiDocsList/types";

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

export type GetCoursesParams = {
  pagination?: StrapiPagination;
  populate?: FetchStrapiDocsListParams["populate"];
  searchParams?: FetchStrapiDocsListParams["searchParams"];
};

/**
 * Хелпер получения списка курсов
 * @param populate - флаг для получения связанных данных
 */
export const getCourses = async ({ populate, pagination, searchParams }: GetCoursesParams) => {
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
export const getCoursesFull = async ({ populate, pagination, searchParams }: GetCoursesParams) => {
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
