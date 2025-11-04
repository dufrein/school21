import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { Article, StrapiPagination } from "@types";
import { fetchStrapiDocsList } from "@utils";

/**
 * Хелпер получения статьи по id
 * @param articleId - идентификатор статьи
 * @returns Promise<Article>
 */
export const getArticleById = async (articleId: string): Promise<Article> => {
  const { data } = await fetchApi<{ data: Article }>(ENDPOINTS.ArticleById(articleId), {
    params: { populate: "*" },
  });
  return data.data;
};

/**
 * Хелпер получения списка статей
 * @param populate - флаг для получения связанных данных
 * @returns Promise<Article[]>
 */
export const getArticles = async (
  populate?: boolean,
  pagination?: StrapiPagination
): Promise<Article[]> => {
  const { data } = await fetchStrapiDocsList<Article>(ENDPOINTS.Articles, populate, pagination);
  return data;
};
