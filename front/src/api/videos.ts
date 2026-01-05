import { VideoLesson } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { fetchStrapiDocsList } from "@utils";
import { GetDocsParams } from "./types";

export const getVideos = async ({
  populate,
  pagination,
  searchParams
}: GetDocsParams) => {
  return await fetchStrapiDocsList<VideoLesson>({
    url: ENDPOINTS.Videos,
    populate,
    pagination,
    searchParams,
  });
};

export const getVideoById = async (id: string, populate?: string) => {
  return await fetchApi<{ data: VideoLesson }>(ENDPOINTS.VideoById(id), {
    params: { populate },
  });
};
