"use client";

import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { Accordeon } from "@components/Accordeon";
import { Lesson, Topic } from "@types";
import styles from "./styles.module.scss";
import { NavLink } from "@components";

/**
 * Панель с содержанием плана обучения
 * @returns React.FC
 */
export const LearningTabel: React.FC = () => {
  const { userCourses } = useContext(AppContext);
  console.log("userCourses!!!!!!!", userCourses);

  if (!userCourses) {
    return null;
  }

  const getTopics = (topics: Topic[]) => {
    console.log("topics", topics);
    return (
      <div className={styles.lessons}>
        {topics?.map((topicItem) => (
          <Accordeon
            title={topicItem.name}
            content={getLessons(topicItem.lessons)}
            key={topicItem.id}
          />
        ))}
      </div>
    );
  };
  const getLessons = (lessons: Lesson[]) => {
    return (
      <div className={styles.lessons}>
        {lessons?.map((lessonItem) => (
          <NavLink key={lessonItem.id} href={`/lesson/${lessonItem.documentId}`}>
            {lessonItem.title}
          </NavLink>
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
            title={<NavLink href={`/course/${courseItem.documentId}`}>{courseItem.name}</NavLink>}
            content={getTopics(courseItem.topics)}
            key={courseItem.id}
          />
        );
      })}
    </div>
  );
};
