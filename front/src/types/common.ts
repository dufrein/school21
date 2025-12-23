import { PropsWithChildren } from "react";

export interface CommonComponentProps extends PropsWithChildren {
  className?: string;
  styles?: React.CSSProperties;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormatType;
    small?: StrapiImageFormatType;
    medium?: StrapiImageFormatType;
    large?: StrapiImageFormatType;
  };
}

export interface StrapiImageFormatType {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiApiErrorType {
  status: number;
  name: string;
  message: "string";
  details: {
    errors: ErrorDetailType[];
  };
}

export interface ErrorDetailType {
  path: string[];
  name: string;
  message: string;
  value: unknown;
}

/**
 * Параметры пагинации
 * @param limit?: number - количество элементов на странице
 * @param start?: number - номер первого элемента
 * @param withCount?: boolean - флаг для включения подсчета общего количества элементов в ответе
 */
export interface StrapiPagination {
  limit?: number;
  start?: number;
  withCount?: boolean;
}