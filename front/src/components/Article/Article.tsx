import React from "react";
import { ArticleProps } from "./types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "./styles.module.scss";

export const Article: React.FC<ArticleProps> = (props) => {
  const { article } = props;
  
  const { title, subtitle, content } = article;
  console.log("content", content);
  return (
    <div className={styles.article}>
      <h3 className={styles.header}>{title}</h3>
      {subtitle && <h5>{subtitle}</h5>}
      {content && <BlocksRenderer content={content} />}
    </div>
  );
};
