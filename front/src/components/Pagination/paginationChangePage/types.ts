import { FetchFullResponse, FetchMeta, StrapiPagination } from "@types";

export type PaginationChangePageParams<T> = {
  pageNumber: number;
  activePageNumber: number;
  docsList: DocsListType<T>;
  getDocsFetcher: (params: StrapiPagination) => Promise<FetchFullResponse<T>>;
  setDocsDataHandler: (pageNumber: FetchFullResponse<T>) => void;
  setActivePageNumberHandler: (pageNumber: number) => void;
};

export type DocsListType<T> = {
  data: Array<T> | null;
  meta: FetchMeta | null;
};
