"use client";

import React, { useContext } from "react";
import { ArticlesContext } from "@context/ArticlesContext";
import { Article } from "@components/Article";
import styles from "./styles.module.scss";
import { Pagination } from "@components/Pagination";

export const Articles: React.FC = () => {
  const { articles, meta, activePageNumber, activePageNumberHandler } = useContext(ArticlesContext);

  if (!articles) {
    return <div>No articles</div>;
  }

  const { pagination } = meta || { pagination: null };

  const setPageNumber = (pageNumber: number) => {
    activePageNumberHandler(pageNumber);
  };

  let pagesCount;

  if (pagination && "limit" in pagination) {
    pagesCount = Math.ceil(pagination.total / pagination.limit);
  }

  return (
    <div className={styles.articlesPage}>
      {pagesCount && (
        <Pagination
          pagesCount={pagesCount}
          setPageHandler={setPageNumber}
          activePageNumber={activePageNumber || 0}
          isFixed
        />
      )}
      <div className={styles.articles}>
        {articles.map((article) => (
          <Article key={article?.id} article={article} isShortVersion />
        ))}
      </div>
    </div>
  );
};
