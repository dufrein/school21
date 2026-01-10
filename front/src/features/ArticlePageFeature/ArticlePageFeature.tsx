import React from "react";
import { ArticlePageFeatureProps } from "./types";
import { Article } from "@components/Article";

export const ArticlePageFeature: React.FC<ArticlePageFeatureProps> = (props) => {
  const { article } = props;
  
  if (!article) {
    return null;
  }

  return <Article article={article} />;
};
