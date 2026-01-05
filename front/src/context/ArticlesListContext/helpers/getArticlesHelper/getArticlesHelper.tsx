import { getArticles } from "@api/articles";
import { ARTICLES_BY_PAGE } from "@constants";
import { StrapiPagination } from "@types";

/**
 * Хелпер получения статей по 10 штук в сортировке по дате публикации по убыванию
 */
export const getArticlesHelper = async ({ start }: StrapiPagination) =>
  await getArticles({
    pagination: { limit: ARTICLES_BY_PAGE, start },
    searchParams: { "sort[0]": "createdAt:desc" },
  });
