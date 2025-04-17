import React, { useEffect, useState } from "react";
import { TopicProps } from "./types";
import styles from "./styles.module.scss";
import { Lesson as LessonItem } from "../Lesson";
import { Lesson } from "@types";
import { getTopic } from "@api/topics";

/**
 * Компонент темы
 * @param topic: Topic
 */
export const Topic: React.FC<TopicProps> = (props) => {
  const { topic } = props;
  const [completedLessonsIds, setCompletedLessonsIds] = useState<string[]>([]);
  const [lessons, setLessons] = useState<Lesson[] | null>(null);
  console.log("lessons", lessons);
  useEffect(() => {
    getTopic(topic.documentId).then((topic) => setLessons(topic.lessons));
    // getUserProgress().then((progress) => setCompletedLessonsIds(progress));
  }, [topic.documentId]);

  return (
    <div className={styles.lessonsSection}>
      <h3 className={styles.lessonsTitle}>{topic.name}</h3>
      <h4 >Уроки</h4>
      <ul className={styles.lessonsList}>
        {lessons?.map((lessonItem) => (
          <LessonItem
            completedLessonsIds={completedLessonsIds}
            lesson={lessonItem}
            key={lessonItem.id}
          />
        ))}
      </ul>
    </div>
  );
};
