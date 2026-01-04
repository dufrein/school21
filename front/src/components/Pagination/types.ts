export interface PaginationProps {
  pagesCount: number;
  setPageHandler: (pageNumber: number) => void;
  activePageNumber: number;
  isFixed?: boolean;
}
