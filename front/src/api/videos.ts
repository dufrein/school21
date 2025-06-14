import { VideoLesson } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

export const getVideos = async (populate?: string) => {
  const { data } = await fetchApi<{ data: VideoLesson[] }>(ENDPOINTS.Videos, {
    params: { populate },
  });
  return data.data;
};

export const getVideoById = async (id: string, populate?: string) => {
  const { data } = await fetchApi<{ data: VideoLesson }>(ENDPOINTS.VideoById(id), {
    params: { populate },
  });

  return data.data;
};
