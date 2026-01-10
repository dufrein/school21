import React from "react";
import { CourseProps } from "./types";
import Link from "next/link";
import styles from "./styles.module.scss";
import { UserContext } from "@context/UserContext";
import { useContext } from "react";
import { ROUTES } from "@constants";
import { getCourseProgress } from "@helpers/getCourseProgress";
import { ProgressBar } from "@components/ProgressBar";

/**
 * Компонент карточка списка курсов пользователя
 */
export const Course: React.FC<CourseProps> = (props) => {
  const { course } = props;
  const { user } = useContext(UserContext);

  const { progress, remaining, ready } = getCourseProgress(course, user) || 0;

  return (
    <Link
      key={course.id}
      href={`${ROUTES.COURSE}/${course.documentId}`}
      className={styles.courseCard}
    >
      <div className={styles.courseHeader}>
        <h3 className={styles.courseTitle}>{course.name}</h3>
      </div>
      {user && <ProgressBar progress={progress} remaining={remaining} ready={ready} />}
      <div className={styles.topicsSection}>
        <h4 className={styles.topicsTitle}>Темы</h4>
        <ul className={styles.topicsList}>
          {course.topics?.map((topicItem) => (
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
