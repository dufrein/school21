import { PropsWithChildren } from "react";
import { Tariff } from "./tariff";

export interface HomePageProps {
  tariffs: Tariff[];
  activeTariff: Tariff;
}

export interface CommonComponent extends PropsWithChildren {
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
