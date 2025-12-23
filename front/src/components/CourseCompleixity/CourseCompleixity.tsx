import React from "react";
import { CourseCompleixityProps } from "./types";
import styles from "./styles.module.scss";
import { COMPLEXITY_LEVEL } from "@constants";

/**
 * Компонент для отображения сложности курса
 */
export const CourseCompleixity: React.FC<CourseCompleixityProps> = ({ course }) => {
  return (
    <div className={styles.wrapper}>Сложность курса: {COMPLEXITY_LEVEL[course.complexity]}</div>
  );
};
