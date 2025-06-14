import React, { useEffect, useState } from "react";
import { TopicProps } from "./types";
import styles from "./styles.module.scss";
import { Lesson as LessonItem } from "../Lesson";
import { Lesson } from "@types";
import { getTopicById } from "@api/topics";
import { NavLink } from "@components";
import { ROUTES } from "@constants";

/**
 * Компонент темы
 * @param topic: Topic
 */
export const Topic: React.FC<TopicProps> = (props) => {
  const { topic, courseId } = props;
  const [completedLessonsIds, setCompletedLessonsIds] = useState<string[]>([]);
  const [lessons, setLessons] = useState<Lesson[] | null>(null);
  useEffect(() => {
    getTopicById(topic.documentId).then((topic) => setLessons(topic.lessons));
    // getUserProgress().then((progress) => setCompletedLessonsIds(progress));
  }, [topic.documentId]);

  return (
    <div className={styles.lessonsSection}>
      <NavLink href={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topic.documentId}`}>
        <h4>{topic.name}</h4>
      </NavLink>
      <p>Уроки</p>
      <ul className={styles.lessonsList}>
        {lessons?.map((lessonItem) => (
          <LessonItem
            completedLessonsIds={completedLessonsIds}
            lesson={lessonItem}
            courseId={courseId}
            topicId={topic.documentId}
            key={lessonItem.id}
          />
        ))}
      </ul>
    </div>
  );
};
