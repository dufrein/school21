"use client";

import React, { useState } from "react";
import { Accordeon } from "@components/Accordeon";
import { Lesson, Topic } from "@types";
import styles from "./styles.module.scss";
import { TableItem } from "./components";
import { ROUTES } from "@constants";
import { useScreenSize } from "@hooks";
import { Modal } from "@components/Modal";
import { CoursesStructureProps } from "./types";


/**
 * Панель левой колонки с содержанием курсов
 * @returns React.FC
 */
export const CoursesStructure: React.FC<CoursesStructureProps> = ({ courses }) => {
  const { isMobile, isTabletPortrait } = useScreenSize();
  const [isOpened, setIsOpened] = useState(false);
  const onToggle = () => setIsOpened(!isOpened);

  if (!courses) {
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

  const tableContent = (
    <>
      <h4>Структура курсов</h4>
      {courses?.map((courseItem) => {
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

  if (isMobile || isTabletPortrait) {
    return (
      <div className={styles.tableMobile}>
        <button onClick={onToggle} className={"button btnSecondary"}>
          Посмотреть структуру курсов
        </button>
        <Modal isOpened={isOpened} className={styles.tableModal} onClose={onToggle}>
          {tableContent}
        </Modal>
      </div>
    );
  }

  return <div className={styles.tabel}>{tableContent}</div>;
};
