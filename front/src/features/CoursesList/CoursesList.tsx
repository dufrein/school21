"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCourses, getUserProgress } from "../../api";
import { Course } from "../../types/course";
import { UserLessonsProgress } from "../../types/user";
import styles from "./styles.module.scss";
import { Lesson } from "@types";

interface CourseWithProgress extends Course {
  progress: number;
}

export function CoursesList() {
  const [courses, setCourses] = useState<CourseWithProgress[]>([]);

  useEffect(() => {
    Promise.all([getCourses(true), getUserProgress()]).then(
      ([courses, progress]: [Course[], UserLessonsProgress]) => {
        console.log("courses", courses);
        const coursesWithProgress = courses.map((course: Course) => ({
          ...course,
          progress: Math.round(
            (course.lessons.filter((lesson: Lesson) => progress.includes(lesson.id)).length /
              course.lessons.length) *
              100
          ),
        }));
        setCourses(coursesWithProgress);
      }
    );
  }, []);

  return (
    <div className={styles.coursesSection}>
      <h2 className={styles.coursesTitle}>Мои курсы</h2>
      <div className={styles.coursesList}>
        {courses.map((course) => (
          <Link key={course.id} href={`/course/${course.documentId}`} className={styles.courseCard}>
            <div className={styles.courseHeader}>
              <h3 className={styles.courseTitle}>{course.name}</h3>
              <div className={styles.progressText}>Прогресс: {course.progress}%</div>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${course.progress}%` }}></div>
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
        ))}
      </div>
    </div>
  );
}
