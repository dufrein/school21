"use client";

import { createContext, useState } from "react";
import { ArticlesListContextProps, ArticlesListContextType } from "./types";
import { getArticlesHelper } from "./helpers";
import { paginationChangePage } from "@components/Pagination/paginationChangePage";
import { Article, FetchFullResponse } from "@types";

export const ArticlesListContext = createContext<ArticlesListContextType>({
  articles: [],
  meta: null,
  activePageNumber: 0,
  activePageNumberHandler: () => {},
});

export const ArticlesListContextProvider: React.FC<ArticlesListContextProps> = (props) => {
  const { children, articlesData: articlesDataInitial } = props;

  const [articlesData, setArticlesData] = useState(articlesDataInitial);
  const [activePageNumber, setActivePageNumber] = useState(0);

  const setArticlesDataHandler = (videosDataArg: FetchFullResponse<Article>) => {
    setArticlesData(videosDataArg);
  };

  const setActivePageNumberHandler = (activePageNumberArg: number) => {
    setActivePageNumber(activePageNumberArg);
  };

  const activePageNumberHandler = (pageNumber: number) => {
    paginationChangePage<Article>({
      pageNumber,
      docsList: articlesData,
      activePageNumber,
      getDocsFetcher: getArticlesHelper,
      setDocsDataHandler: setArticlesDataHandler,
      setActivePageNumberHandler,
    });
  };

  return (
    <ArticlesListContext.Provider
      value={{
        articles: articlesData.data || [],
        meta: articlesData.meta,
        activePageNumber,
        activePageNumberHandler,
      }}
    >
      {children}
    </ArticlesListContext.Provider>
  );
};
