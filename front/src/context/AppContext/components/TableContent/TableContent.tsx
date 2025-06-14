import React from "react";
import { TableContentProps } from "./types";
import { Accordeon } from "@components/Accordeon";
import { Lesson, Topic } from "@types";
import { TableItem } from "..";
import { ROUTES } from "@constants";
import styles from "./styles.module.scss";

export const TableContent: React.FC<TableContentProps> = ({ userCourses }) => {
  if (!userCourses) {
    return null;
  }

  const getTopics = (topics: Topic[], courseId: string) => {
    return (
      <div className={styles.lessons}>
        {topics?.map((topicItem) => {
          return (
            <Accordeon
              title={topicItem.name}
              url={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topicItem.documentId}`}
              content={getLessons(topicItem.lessons, courseId, topicItem.documentId)}
              key={topicItem.id}
            />
          );
        })}
      </div>
    );
  };

  const getLessons = (lessons: Lesson[], courseId: string, topicId: string) => {
    return (
      <div className={styles.lessons}>
        {lessons?.map((lessonItem) => (
          <TableItem
            key={lessonItem.id}
            title={lessonItem.title}
            url={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topicId}/${ROUTES.LESSON}/${lessonItem.documentId}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <h4>Структура курсов</h4>
      {userCourses?.map((courseItem) => {
        return (
          <Accordeon
            title={courseItem.name}
            url={`${ROUTES.COURSE}/${courseItem.documentId}`}
            content={getTopics(courseItem.topics, courseItem.documentId)}
            key={courseItem.id}
          />
        );
      })}
    </>
  );
};
