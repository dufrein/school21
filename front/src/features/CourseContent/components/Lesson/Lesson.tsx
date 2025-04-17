import React from "react";
import { LessonProps } from "./types";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Lesson: React.FC<LessonProps> = (props) => {
  const { lesson, completedLessonsIds } = props;

  return (
    <li key={lesson.id} className={styles.lessonItem}>
      {completedLessonsIds.includes(lesson.id) ? (
        <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className={styles.clockIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <Link href={`/lesson/${lesson.documentId}`} className={styles.lessonLink}>
        {lesson.title}
      </Link>
    </li>
  );
};
