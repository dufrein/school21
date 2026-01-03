import { StrapiImage } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

export const getAvatars = async () => {
  return await fetchApi<{ avatarsWoman: StrapiImage[]; avatarsMan: StrapiImage[] }>(ENDPOINTS.Avatars, {
    params: { populate: "*" },
  });
};
