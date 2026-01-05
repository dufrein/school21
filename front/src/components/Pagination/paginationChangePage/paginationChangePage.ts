import { PaginationChangePageParams } from "./types";

/**
 * Хелпер для вывзова апи загрузки документов при переключении страницы пагинации
 */
export const paginationChangePage = <T>({
  pageNumber,
  activePageNumber,
  docsList,
  getDocsFetcher,
  setDocsDataHandler,
  setActivePageNumberHandler,
}: PaginationChangePageParams<T>) => {
  if (pageNumber === activePageNumber) {
    return false;
  }

  const pagination = docsList.meta?.pagination;
  const docsByPageLimit = pagination && "limit" in pagination && pagination.limit;
  const docsByPageSize = pagination && "pageSize" in pagination && pagination.pageSize;
  const docsByPageNumber = docsByPageLimit || docsByPageSize || 0;
  const startDocumentNumber = pageNumber * docsByPageNumber;

  getDocsFetcher({ start: startDocumentNumber }).then((docsLoaded) => {
    setDocsDataHandler(docsLoaded);
    setActivePageNumberHandler(pageNumber);
  });
};
