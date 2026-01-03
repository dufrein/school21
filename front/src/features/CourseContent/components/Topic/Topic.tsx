import React, { useContext, useEffect, useState } from "react";
import { TopicProps } from "./types";
import styles from "./styles.module.scss";
import { Lesson as LessonItem } from "../Lesson";
import { Lesson } from "@types";
import { getTopicById } from "@api/topics";
import { NavLink } from "@components";
import { ROUTES } from "@constants";
import { CheckIcon } from "@components/CheckIcon";
import { checkTopicFinished } from "@helpers/checkTopicFinished";
import { UserContext } from "@context/UserContext";

/**
 * Компонент темы
 */
export const Topic: React.FC<TopicProps> = (props) => {
  const { topic, courseId } = props;
  const { user } = useContext(UserContext);
  const [lessons, setLessons] = useState<Lesson[] | null>(null);
  const isTopicFinished = checkTopicFinished(topic, user);

  useEffect(() => {
    getTopicById(topic.documentId).then((topic) => setLessons(topic?.lessons || null));
  }, [topic.documentId]);

  return (
    <div className={styles.lessonsSection}>
      <NavLink href={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topic.documentId}`}>
        <h4>
          {topic.name} {isTopicFinished && <CheckIcon />}
        </h4>
      </NavLink>
      <p>Уроки</p>
      <ul className={styles.lessonsList}>
        {lessons?.map((lessonItem) => (
          <LessonItem
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
