import { StrapiPagination, VideoLesson } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";
import { fetchStrapiDocsList } from "@utils";

export const getVideos = async (populate?: boolean, pagination?: StrapiPagination): Promise<VideoLesson[]> => {
  const { data } = await fetchStrapiDocsList<VideoLesson>(ENDPOINTS.Videos, populate, pagination);
  return data;
};

export const getVideoById = async (id: string, populate?: string) => {
  const { data } = await fetchApi<{ data: VideoLesson }>(ENDPOINTS.VideoById(id), {
    params: { populate },
  });

  return data.data;
};
