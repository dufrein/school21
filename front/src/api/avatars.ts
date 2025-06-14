import { StrapiImage } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

export const getAvatars = async () => {
  const { data } = await fetchApi<{
    data: { avatarsWoman: StrapiImage[]; avatarsMan: StrapiImage[] };
  }>(ENDPOINTS.Avatars, {
    params: { populate: "*" },
  });
  return data.data;
};
