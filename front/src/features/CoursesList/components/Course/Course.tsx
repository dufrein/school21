import React, { useEffect, useState } from "react";
import { CourseProps } from "./types";
import Link from "next/link";
import styles from "./styles.module.scss";
import { getUserProgress } from "@api";

export const Course: React.FC<CourseProps> = (props) => {
  const { course } = props;
  const [readyLessonsIds, setReadyLessonsIds] = useState<string[] | null>(null);

  useEffect(() => {
    getUserProgress(course.documentId).then((lessonsIds) => setReadyLessonsIds(lessonsIds));
  }, []);

  const progress = Math.floor(
    (readyLessonsIds ? readyLessonsIds.length : 0) / course.topics.length
  );
  
  return (
    <Link key={course.id} href={`/course/${course.documentId}`} className={styles.courseCard}>
      <div className={styles.courseHeader}>
        <h3 className={styles.courseTitle}>{course.name}</h3>
        <div className={styles.progressText}>Прогресс: {progress}%</div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={styles.topicsSection}>
        <h4 className={styles.topicsTitle}>Темы</h4>
        <ul className={styles.topicsList}>
          {course.topics.map((topicItem) => (
            <li key={topicItem.name} className={styles.topicItem}>
              <svg
                className={styles.clockIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className={styles.topicText}>
                <b>{topicItem.name}</b>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
