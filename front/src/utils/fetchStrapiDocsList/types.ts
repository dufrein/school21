import { FetchOptions, StrapiPagination } from "@types";

export type FetchStrapiDocsListParams = {
  url: string;
  populate?: string;
  pagination?: StrapiPagination;
  searchParams?: FetchOptions["params"];
};
