"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Lesson } from "@types";
import { Course } from "@types";
import { useEffect, useState } from "react";
import { getCourseById, getLessons, getUserProgress } from "@api";
import { useParams } from "next/navigation";

export function CourseContent() {
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const { id } = useParams();

  useEffect(() => {
    getCourseById(id as string).then((course) => setCourse(course));
    getLessons(id as string).then((lessons) => setLessons(lessons));
    getUserProgress().then((progress) => setCompletedLessons(progress));
  }, [id]);

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
        {course.topics.map((topic) => (
          <div key={topic.title} className={styles.topicCard}>
            <h2 className={styles.topicTitle}>{topic.title}</h2>
            <p className={styles.topicDescription}>{topic.description}</p>

            <div className={styles.lessonsSection}>
              <h3 className={styles.lessonsTitle}>Уроки</h3>
              <ul className={styles.lessonsList}>
                {lessons.map((lesson) => (
                  <li key={lesson.id} className={styles.lessonItem}>
                    {completedLessons.includes(lesson.id) ? (
                      <svg
                        className={styles.checkIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
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
                    )}
                    <Link href={`/lesson/${lesson.id}`} className={styles.lessonLink}>
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
