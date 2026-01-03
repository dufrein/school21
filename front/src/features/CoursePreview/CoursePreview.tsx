import React from "react";
import { CoursePreviewProps } from "./types";
import styles from "./styles.module.scss";
import { CourseCompleixity } from "@components/CourseCompleixity";
import { CoursePreviewItem } from "./components";
import { NavLink } from "@components";
import { MessagePlate } from "@components/MessagePlateProps";
import { ROUTES } from "@constants";

/**
 * Компонент для отображения курса
 * @param {CoursePreviewProps} props - Пропсы компонента
 * @returns {React.ReactNode} - JSX элемент
 */
export const CoursePreview: React.FC<CoursePreviewProps> = ({ course }) => {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.description}>
        <MessagePlate bgColor="#90ebbdff" isClosing>
          Чтобы начать учиться перейдите в раздел <NavLink href={ROUTES.LEARNING}>учиться</NavLink>
        </MessagePlate>
        <h2 className={styles.title}>{course.name}</h2>
        <p className={styles.text}>{course.description}</p>
        <CourseCompleixity course={course} />
      </div>

      <CoursePreviewItem course={course} />
    </div>
  );
};
