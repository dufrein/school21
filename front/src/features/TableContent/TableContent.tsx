import React, { useContext } from "react";
import { TableContentProps } from "./types";
import { Accordeon } from "@components/Accordeon";
import { Lesson, Topic } from "@types";
import { ROUTES } from "@constants";
import styles from "./styles.module.scss";
import { UserContext } from "@context/UserContext";
import { LessonItem } from "./components/LessonItem";
import { LearningContext } from "@context/LearningContext";
import { TableItemTitle } from "./components/TableItemTitle";
import { useGetCheckCourseFinished } from "@hooks/useGetCheckCourseFinished";
import { useGetCheckLessonFinished } from "@hooks/useGetCheckLessonFinished";

export const TableContent: React.FC<TableContentProps> = ({ userCourses }) => {
  const { user } = useContext(UserContext);
  const { openedCourse, openedTopic } = useContext(LearningContext);
  const getIsCourseFinished = useGetCheckCourseFinished();
  const getIsLessonFinished = useGetCheckLessonFinished();

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

          return (
            <Accordeon
              title={
                <TableItemTitle
                  isCheckShown={isTopicFinished}
                  name={topicItem.name}
                  isActive={openedTopic?.documentId === topicItem.documentId}
                />
              }
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
          const isLessonFinished = getIsLessonFinished(lessonItem.documentId);

          return (
            <LessonItem
              key={lessonItem.id}
              title={<TableItemTitle name={lessonItem.title} isCheckShown={isLessonFinished} />}
              lessonItem={lessonItem}
              url={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topicId}/${ROUTES.LESSON}/${lessonItem.documentId}`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      <h4>Структура курсов</h4>
      {userCourses?.map((courseItem) => {
        const isCourseFinished = getIsCourseFinished(courseItem);

        return (
          <Accordeon
            title={
              <TableItemTitle
                name={courseItem.name}
                isCheckShown={isCourseFinished}
                isActive={openedCourse?.documentId === courseItem.documentId}
              />
            }
            url={`${ROUTES.COURSE}/${courseItem.documentId}`}
            content={getTopics(courseItem.topics, courseItem.documentId)}
            key={courseItem.id}
          />
        );
      })}
    </>
  );
};
