import React from "react";
import { PaginationFeatureProps } from "./types";
import { Pagination } from "@components/Pagination";
import { IS_SSR } from "@constants";

/**
 * Фича для вывода пагинцаии в страницы документов, имплементирует логику установки страниц для списков доков
 */
export const PaginationFeature: React.FC<PaginationFeatureProps> = (props) => {
  const { meta, activePageNumber, activePageNumberHandler } = props;

  const { pagination } = meta || { pagination: null };

  if (!pagination) {
    return;
  }

  const setPageNumber = (pageNumber: number) => {
    activePageNumberHandler(pageNumber);

    if (!IS_SSR) {
      window.scrollTo(0,0)
    }
  };

  let pagesCount;

  if (pagination && "limit" in pagination) {
    pagesCount = Math.ceil(pagination.total / pagination.limit);
  }

  return (
    <Pagination
      pagesCount={pagesCount || 0}
      setPageHandler={setPageNumber}
      activePageNumber={activePageNumber || 0}
      isFixed
    />
  );
};
