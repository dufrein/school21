import { Course } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { getTopicById } from "./topics";
import { StrapiPagination } from "@types";
import { fetchStrapiDocsList } from "@utils";

/**
 * Хелпер получения курса по id
 * @param courseId - идентификатор курса
 * @returns Promise<Course>
 */
export const getCourseById = async (courseId: string): Promise<Course> => {
  const { data } = await fetchApi<{ data: Course }>(ENDPOINTS.CourseById(courseId), {
    params: { populate: "*" },
  });
  return data.data;
};

/**
 * Хелпер получения списка курсов
 * @param populate - флаг для получения связанных данных
 * @returns Promise<Course[]>
 */
export const getCourses = async (
  populate?: boolean,
  pagination?: StrapiPagination
): Promise<Course[]> => {
  const { data } = await fetchStrapiDocsList<Course>(ENDPOINTS.Courses, populate, pagination);

  const [...coursesInfo] = await Promise.all(
    data.map(async (courseItem) => {
      const topicsFull = await Promise.all(
        courseItem.topics.map(async (topic) => {
          const fullTopic = await getTopicById(topic.documentId);
          return fullTopic;
        })
      );
      return { ...courseItem, topics: topicsFull };
    })
  );

  return coursesInfo;
};

/**
 * Хелпер получения полной информации о курсе
 * @param courseId - идентификатор курса
 * @returns Promise<Course>
 */
export const getFullCourse = async (courseId: string): Promise<Course> => {
  const { data } = await fetchApi<{ data: Course }>(ENDPOINTS.CourseById(courseId), {
    params: { populate: "*" },
  });
  const course = data.data;
  const [...fullTopicsArray] = await Promise.all(
    course.topics.map(async (topic) => {
      const fullTopic = await getTopicById(topic.documentId);
      return fullTopic;
    })
  );
  course.topics = fullTopicsArray;

  return course;
};
