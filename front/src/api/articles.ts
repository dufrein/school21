import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { Article } from "@types";
import { fetchStrapiDocsList } from "@utils";
import { GetDocsParams } from "./types";

/**
 * Хелпер получения списка статей
 * @param populate - флаг для получения связанных данных
 * @returns Promise<Article[]>
 */
export const getArticles = async ({ populate, pagination, searchParams }: GetDocsParams) => {
  return await fetchStrapiDocsList<Article>({
    url: ENDPOINTS.Articles,
    populate,
    pagination,
    searchParams,
  });
};

/**
 * Хелпер получения статьи по id
 * @param articleId - идентификатор статьи
 * @returns Promise<Article>
 */
export const getArticleById = async (articleId: string) => {
  return await fetchApi<Article>(ENDPOINTS.ArticleById(articleId), {
    params: { populate: "*" },
  });
};
