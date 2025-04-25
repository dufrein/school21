import React from "react";
import { TopicContentProps } from "./types";
import styles from "./styles.module.scss";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { NavLink } from "@components";
import { ROUTES } from "@constants";

export const TopicContent: React.FC<TopicContentProps> = ({ topic }) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1 className={styles.title}>{topic.name}</h1>
        <div className={styles.description}>
          <BlocksRenderer content={topic.description} />
        </div>
      </div>

      {topic.lessons && topic.lessons.length > 0 && (
        <div className={styles.materialsList}>
          <h3 className={styles.materialsTitle}>Уроки темы</h3>
          {topic.lessons.map((lesson) => (
            <NavLink key={lesson.id} href={`${ROUTES.LESSON}/${lesson.documentId}`} className={styles.materialCard}>
              {lesson.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
