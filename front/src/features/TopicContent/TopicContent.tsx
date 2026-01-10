import React from "react";
import { TopicContentProps } from "./types";
import styles from "./styles.module.scss";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { NavLink } from "@components";
import { ROUTES } from "@constants";
import { BreadCrumbs } from "@components/BreadCrumbs";
import { LevelIcon } from "@components/LevelIcon";

/**
 * Содержание темы
 */
export const TopicContent: React.FC<TopicContentProps> = ({ topic, courseId }) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <BreadCrumbs />
        <h1 className={styles.title}>{topic.name}</h1>
        <div className={styles.description}>
          <BlocksRenderer content={topic.description} />
        </div>
      </div>

      {topic.lessons && topic.lessons.length > 0 && (
        <div className={styles.materialsList}>
          <h3 className={styles.materialsTitle}>Уроки темы</h3>
          {topic.lessons.map((lesson) => (
            <NavLink
              key={lesson.id}
              href={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topic.documentId}/${ROUTES.LESSON}/${lesson.documentId}`}
              className={styles.materialCard}
            >
              {lesson.title}
              <LevelIcon complexity={lesson.complexity} />
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
