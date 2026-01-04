"use client";

import { createContext, useState } from "react";
import { ArticlesContextProps, ArticlesContextType } from "./types";
import { getArticlesHelper } from "./helpers";

export const ArticlesContext = createContext<ArticlesContextType>({
  articles: [],
  meta: null,
  activePageNumber: 0,
  activePageNumberHandler: () => {},
});

export const ArticlesContextProvider: React.FC<ArticlesContextProps> = (props) => {
  const { children, articlesData: articlesDataInitial } = props;

  const [articlesData, setArticlesData] = useState(articlesDataInitial);
  const [activePageNumber, setActivePageNumber] = useState(0);

  const activePageNumberHandler = (pageNumber: number) => {
    if (pageNumber === activePageNumber) {
      return false;
    }
    const pagination = articlesData.meta?.pagination;
    const articlesByPageLimit = pagination && "limit" in pagination && pagination.limit;
    const articlesByPageSize = pagination && "pageSize" in pagination && pagination.pageSize;
    const articlesByPageNumber = articlesByPageLimit || articlesByPageSize || 0;
    const newStartArticlesNumber = pageNumber * articlesByPageNumber;

    getArticlesHelper({ start: newStartArticlesNumber }).then((articlesLoaded) => {
      setArticlesData(articlesLoaded);
      setActivePageNumber(pageNumber);
    });

    window.scrollTo(0, 0);
  };

  console.log("111");

  return (
    <ArticlesContext.Provider
      value={{
        articles: articlesData.data || [],
        meta: articlesData.meta,
        activePageNumber,
        activePageNumberHandler,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
