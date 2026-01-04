import React from "react";
import { ArticleProps } from "./types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "./styles.module.scss";
import { checkIsSomeDay } from "@helpers/checkIsSomeDay";
import { getDateFormatted } from "@helpers/getDateFormatted";
import { ROUTES } from "@constants";
import { getClassList } from "@utils";

export const Article: React.FC<ArticleProps> = (props) => {
  const { article, isShortVersion } = props;

  const { title, subtitle, content, createdAt, updatedAt } = article;
  const createdDateString = getDateFormatted(createdAt);
  const updatedDateString = getDateFormatted(updatedAt);
  const isUpdatedAtSomeDay = checkIsSomeDay(createdAt, updatedAt);
  const contentClassList = getClassList([
    styles.content,
    isShortVersion && styles["content_short"],
  ]);

  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </div>
      <div className={contentClassList}>{content && <BlocksRenderer content={content} />}</div>
      <div className={styles.meta}>
        {createdDateString && <p>Опубликовано: {createdDateString}</p>}
        {!isUpdatedAtSomeDay && <p>Обновлено: {updatedDateString}</p>}
        {isShortVersion && (
          <a className={styles.readMore} href={ROUTES.ARTICLES + `/${article.documentId}`}>
            Читать далее
          </a>
        )}
      </div>
    </div>
  );
};
