import React from "react";
import { StrapiImageProps } from "./types";
import { getImageSrc } from "@helpers";

/**
 * Компонент для вывода изображения
 */
export const StrapiImage: React.FC<StrapiImageProps> = ({
  image,
  size,
  alt,
  className,
  width,
  height,
}) => {
  return (
    <img
      src={getImageSrc(image, size)}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};
