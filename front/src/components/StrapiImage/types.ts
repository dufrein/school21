import { StrapiImage } from "@types";

export interface StrapiImageProps extends Partial<HTMLImageElement> {
  image: StrapiImage;
  size: "small" | "medium" | "large" | "thumbnail";
}
