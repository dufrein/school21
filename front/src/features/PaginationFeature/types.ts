import { FetchMeta } from "@types";

export interface PaginationFeatureProps {
  meta: FetchMeta | null;
  activePageNumber: number | null;
  activePageNumberHandler: (pageNumber: number) => void;
}
