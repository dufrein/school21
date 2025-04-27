import { StrapiImage } from "@types";

export const getImageSrc = (
  image: StrapiImage,
  size: "small" | "medium" | "large" | "thumbnail" = "thumbnail"
) => {
  return `${process.env.NEXT_PUBLIC_URL}${image.formats[size]?.url}`;
};
