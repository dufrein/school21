"use client";

import { useContext } from "react";
import styles from "./styles.module.scss";
import { Course as CourseItem } from "./components";
import { AppContext } from "@context/AppContext/AppContext";

/**
 * Список курсов
 */
export function CoursesList() {
  const { userCourses } = useContext(AppContext);

  return (
    <div className={styles.coursesSection}>
      <h2 className={styles.coursesTitle}>Мои курсы</h2>
      <div className={styles.coursesList}>
        {userCourses?.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
