"use client";

import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { Accordeon } from "@components/Accordeon";
import { Lesson, Topic } from "@types";
import styles from "./styles.module.scss";
import { TableItem } from "./components";
import { ROUTES } from "@constants";

/**
 * Панель с содержанием плана обучения
 * @returns React.FC
 */
export const LearningTabel: React.FC = () => {
  const { userCourses } = useContext(AppContext);

  if (!userCourses) {
    return null;
  }

  const getTopics = (topics: Topic[]) => {
    return (
      <div className={styles.lessons}>
        {topics?.map((topicItem) => {
          return (
            <Accordeon
              title={topicItem.name}
              url={`${ROUTES.TOPIC}/${topicItem.documentId}`}
              content={getLessons(topicItem.lessons)}
              key={topicItem.id}
            />
          );
        })}
      </div>
    );
  };

  const getLessons = (lessons: Lesson[]) => {
    return (
      <div className={styles.lessons}>
        {lessons?.map((lessonItem) => (
          <TableItem
            key={lessonItem.id}
            title={lessonItem.title}
            url={`${ROUTES.LESSON}/${lessonItem.documentId}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.tabel}>
      <h4>Учебный план</h4>
      {userCourses?.map((courseItem) => {
        return (
          <Accordeon
            title={courseItem.name}
            url={`${ROUTES.COURSE}/${courseItem.documentId}`}
            content={getTopics(courseItem.topics)}
            key={courseItem.id}
          />
        );
      })}
    </div>
  );
};
