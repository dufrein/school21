import { fetchApi } from "@utils/fetchApi";
import { FetchStrapiDocsListParams } from "./types";

/**
 * Хелпер для получения списка документов из Strapi
 */
export const fetchStrapiDocsList = async <T>({
  url,
  populate,
  pagination,
  searchParams,
}: FetchStrapiDocsListParams) => {
  const response = await fetchApi<T[]>(url, {
    params: {
      ...(pagination ? pagination : { limit: "*" }),
      ...searchParams,
      populate,
    },
  });

  return response;
};
