"use client";

import { useEffect, useState } from "react";
import { getCourses } from "../../api";
import styles from "./styles.module.scss";
import type { Course } from "@types";
import { Course as CourseItem } from "./components";

export function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses(true).then((courses: Course[]) => setCourses(courses));
  }, []);

  return (
    <div className={styles.coursesSection}>
      <h2 className={styles.coursesTitle}>Мои курсы</h2>
      <div className={styles.coursesList}>
        {courses.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
