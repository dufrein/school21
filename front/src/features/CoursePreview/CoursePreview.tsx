import React from "react";
import { CoursePreviewProps } from "./types";
import styles from "./styles.module.scss";
import { CourseTariffs } from "@components/CourseTariffs";
import { CoursePreviewItem } from "./components";

/**
 * Компонент для отображения курса
 * @param {CoursePreviewProps} props - Пропсы компонента
 * @returns {React.ReactNode} - JSX элемент
 */
export const CoursePreview: React.FC<CoursePreviewProps> = ({ course }) => {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.description}>
        <h2 className={styles.title}>{course.name}</h2>
        <p className={styles.text}>{course.description}</p>
        <CourseTariffs course={course} />
      </div>

      <CoursePreviewItem course={course} />
    </div>
  );
};
