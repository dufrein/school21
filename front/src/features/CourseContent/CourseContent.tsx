"use client";

import styles from "./styles.module.scss";
import { Course } from "@types";
import { useEffect, useState } from "react";
import { getCourseById } from "@api";
import { useParams } from "next/navigation";
import { Topic as TopicItem } from "./components";

export function CourseContent() {
  const [course, setCourse] = useState<Course | null>(null);

  const { id } = useParams();

  useEffect(() => {
    getCourseById(id as string, true).then((course) => setCourse(course));
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
      <h3 className={styles.topicsTitle}>Темы курса</h3>
        {course.topics?.map((topicItem) => (
          <div key={topicItem.name} className={styles.topicCard}>
            <TopicItem topic={topicItem} />
          </div>
        ))}
      </div>
    </div>
  );
}
