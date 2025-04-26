"use client";

import styles from "./styles.module.scss";
import { Course } from "@types";
import { Topic as TopicItem } from "./components";

/**
 * Контент курса
 */
export function CourseContent({ course }: { course: Course }) {
  if (!course) {
    return null;
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1 className={styles.title}>{course.name}</h1>
        <p className={styles.description}>{course.description}</p>
      </div>

      <div className={styles.topicsList}>
        <h3 className={styles.topicsTitle}>Темы курса</h3>
        {course.topics?.map((topicItem) => (
          <div key={topicItem.name} className={styles.topicCard}>
            <TopicItem topic={topicItem} courseId={course.documentId} />
          </div>
        ))}
      </div>
    </div>
  );
}
