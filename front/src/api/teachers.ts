import { ENDPOINTS } from "./constants";
import { fetchStrapiDocsList } from "@utils";
import { GetDocsParams } from "./types";
import { Teacher } from "@types";

/**
 * Хелпер получения списка статей
 * @param populate - флаг для получения связанных данных
 */
export const getTeachers = async ({ populate, pagination, searchParams }: GetDocsParams) => {
  return await fetchStrapiDocsList<Teacher>({
    url: ENDPOINTS.Teachers,
    populate,
    pagination,
    searchParams,
  });
};
