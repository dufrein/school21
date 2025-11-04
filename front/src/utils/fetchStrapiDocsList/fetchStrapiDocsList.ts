import { StrapiPagination } from "@types";
import { fetchApi } from "@utils/fetchApi";

/**
 * Хелпер для получения списка документов из Strapi
 * @param url - url для запроса
 * @param populate - флаг для получения связанных данных
 * @param pagination - параметры пагинации
 * @returns Promise<T[]>
 */
export const fetchStrapiDocsList = async <T>(url: string, populate?: boolean, pagination?: StrapiPagination) => {
  const response = await fetchApi<{ data: T[] }>(url, {
    params: {
      ...(pagination ? pagination : { limit: "*" }),
      populate: populate ? "*" : undefined,
    },
  });
  
  return response.data;
};