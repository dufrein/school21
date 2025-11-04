import React, { useContext } from "react";
import { TableContentProps } from "./types";
import { Accordeon } from "@components/Accordeon";
import { Course, Lesson, Topic } from "@types";
import { TableItem } from "..";
import { ROUTES } from "@constants";
import styles from "./styles.module.scss";
import { UserContext } from "@context/UserContext";

//todo: добавить стрелки переключения между уроками, сделать доступным открытие урока только если предыдущий пройден,
const iconChecked = (
  <span style={{ color: "green", fontWeight: "bold", marginRight: "5px" }}>&#10004;</span>
);

const getTitle = ({ name, isCheckShown }: { name: string; isCheckShown: boolean }) => {
  return (
    <>
      {isCheckShown && iconChecked}
      {name}
    </>
  );
};

export const TableContent: React.FC<TableContentProps> = ({ userCourses }) => {
  const { user } = useContext(UserContext);
  if (!userCourses || !user?.finishedLessonsIds) {
    return null;
  }

  const getTopics = (topics: Topic[], courseId: string) => {
    return (
      <div className={styles.lessons}>
        {topics?.map((topicItem) => {
          const topicLessonIds = topicItem.lessons.map((lessonItem) => lessonItem.documentId);
          const isTopicFinished = user?.finishedLessonsIds.every((lessonId) =>
            topicLessonIds.includes(lessonId)
          );
          const title = getTitle({ isCheckShown: isTopicFinished, name: topicItem.name });
          return (
            <Accordeon
              title={title}
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
        {lessons?.map((lessonItem) => {
          const isLessonFinished = user?.finishedLessonsIds.includes(lessonItem.documentId);
          const title = getTitle({ isCheckShown: isLessonFinished, name: lessonItem.title });

          return (
            <TableItem
              key={lessonItem.id}
              title={title}
              url={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topicId}/${ROUTES.LESSON}/${lessonItem.documentId}`}
            />
          );
        })}
      </div>
    );
  };

  const checkCourseReady = (course: Course) => {
    const courseLessonsIds = course.topics.reduce((allLessonIds: string[], currentTopic) => {
      return [...allLessonIds, ...currentTopic.lessons.map((lessonItem) => lessonItem.documentId)];
    }, []);
    return courseLessonsIds.every((lessonId) => user.finishedLessonsIds.includes(lessonId));
  };

  return (
    <>
      <h4>Структура курсов</h4>
      {userCourses?.map((courseItem) => {
        const isCourseFinished = checkCourseReady(courseItem);
        const title = getTitle({ isCheckShown: isCourseFinished, name: courseItem.name });

        return (
          <Accordeon
            title={title}
            url={`${ROUTES.COURSE}/${courseItem.documentId}`}
            content={getTopics(courseItem.topics, courseItem.documentId)}
            key={courseItem.id}
          />
        );
      })}
    </>
  );
};
