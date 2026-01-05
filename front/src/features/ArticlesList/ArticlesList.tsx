"use client";

import React, { useContext } from "react";
import { ArticlesListContext } from "@context/ArticlesListContext";
import { Article } from "@components/Article";
import styles from "./styles.module.scss";
import { PaginationFeature } from "@features/PaginationFeature";

export const ArticlesList: React.FC = () => {
  const { articles, meta, activePageNumber, activePageNumberHandler } =
    useContext(ArticlesListContext);

  if (!articles) {
    return <div>No articles</div>;
  }

  return (
    <div className={styles.articlesPage}>
      <PaginationFeature
        meta={meta}
        activePageNumber={activePageNumber}
        activePageNumberHandler={activePageNumberHandler}
      />
      <div className={styles.articles}>
        {articles.map((article) => (
          <Article key={article?.id} article={article} isShortVersion />
        ))}
      </div>
    </div>
  );
};
