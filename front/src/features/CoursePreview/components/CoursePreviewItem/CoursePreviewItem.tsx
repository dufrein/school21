"use client";

import React, { useEffect, useState } from "react";
import { CoursePreviewItemProps } from "./types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "./styles.module.scss";
import { Course } from "@types";
import { Accordeon } from "@components/Accordeon";
import { getFullCourse } from "@api/courses";

/**
 * Компонент для отображения превью курса
 */
export const CoursePreviewItem: React.FC<CoursePreviewItemProps> = (props) => {
  const { course } = props;
  const [fullCourse, setFullCourse] = useState<Course | null>(null);

  useEffect(() => {
    getFullCourse(course.documentId).then((course) => {
      setFullCourse(course);
    });
  }, [course]);

  if (!fullCourse) {
    return null;
  }

  return (
    <div className={styles.topics}>
      <h3 className={styles.topicsTitle}>Темы курса:</h3>
      <ul className={styles.topicsList}>
        {fullCourse.topics?.map((topic) => {
          return (
            <li key={topic.id} className={styles.topicItem}>
              <h3 className={styles.topicName}>{topic.name}</h3>
              <BlocksRenderer content={topic.description} />
              <Accordeon
                title="Уроки:"
                className={styles.lessonsAccordion}
                content={
                  <div className={styles.lessonsList}>
                    {topic.lessons?.map((lesson) => (
                      <p className={styles.lessonName} key={lesson.id}>
                        {lesson.title}
                      </p>
                    ))}
                  </div>
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
