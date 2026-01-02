"use client";

import React, { useContext } from "react";
import { ArticlesContext } from "@context/ArticlesContext";
import { Article } from "@components/Article";
import styles from "./styles.module.scss";

export const Articles: React.FC = () => {
  const { articles } = useContext(ArticlesContext);

  if (!articles) {
    return <div>No articles</div>;
  }
  return (
    <div className={styles.articles}>
      {[...articles]?.map((article) => (
        <Article key={article?.id} article={article} />
      ))}
    </div>
  );
};
