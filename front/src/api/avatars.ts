import { StrapiImage } from "@types";

export const getAvatars = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/avatar?populate=*`);
  if (!response.ok) {
    throw new Error("Failed to fetch avatars");
  }
  const data: { data: { avatarsWoman: StrapiImage[]; avatarsMan: StrapiImage[] } } =
    await response.json();

  return data.data;
};
