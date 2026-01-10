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


export type LearningStat = {
  progress: number;
  remaining: number;
  ready: number;
  allLessonsCount: number;
};
