import { VIDEOS_BY_PAGE } from "@constants";
import { getVideos } from "@api";
import { StrapiPagination } from "@types";

/**
 * Хелпер получения видеоуроков по 20 штук в сортировке по дате публикации по убыванию
 */
export const getVideosHelper = async ({ start }: StrapiPagination) =>
  await getVideos({
    pagination: { limit: VIDEOS_BY_PAGE, start },
    searchParams: { "sort[0]": "createdAt:desc" },
    populate: '*'
  });
