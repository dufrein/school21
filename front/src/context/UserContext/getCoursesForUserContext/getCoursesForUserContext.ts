import { getCoursesFull } from "@api/courses";
import { StudentType } from "@types";

/**
 * Хелпнр для запроса курсов для UserContext
 */
export const getCoursesForUserContext = async (user: StudentType | null) =>
  await getCoursesFull({
    populate: "topics",
    searchParams: { "filters[complexity][$eq]": `${user?.level as string}` },
  });
