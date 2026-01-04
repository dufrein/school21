import { FetchStrapiDocsListParams } from "./types";
import { fetchApiWithMeta } from "@utils/fetchApi/fetchApi";

/**
 * Хелпер для получения списка документов из Strapi
 */
export const fetchStrapiDocsList = async <T>({
  url,
  populate,
  pagination,
  searchParams,
}: FetchStrapiDocsListParams) => {
  const response = await fetchApiWithMeta<T>(url, {
    params: {
      ...(pagination
        ? {
            "pagination[limit]": pagination.limit,
            "pagination[start]": pagination.start,
            "pagination[withCount]": pagination.withCount,
          }
        : {}),
      ...searchParams,
      populate,
    },
  });

  return response;
};
