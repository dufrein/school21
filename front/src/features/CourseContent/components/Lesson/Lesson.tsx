import React, { useContext } from "react";
import { LessonProps } from "./types";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ROUTES } from "@constants";
import { CheckIcon } from "@components/CheckIcon";
import { checkLessonFinished } from "@helpers/checkLessonFinished";
import { UserContext } from "@context/UserContext";

export const Lesson: React.FC<LessonProps> = (props) => {
  const { user } = useContext(UserContext);
  const { lesson, courseId, topicId } = props;
  const isLessonFinished = checkLessonFinished(user, lesson.documentId);

  return (
    <li key={lesson.id} className={styles.lessonItem}>
      <Link
        href={`${ROUTES.COURSE}/${courseId}/${ROUTES.TOPIC}/${topicId}/${ROUTES.LESSON}/${lesson.documentId}`}
        className={styles.lessonLink}
      >
        {lesson.title} {isLessonFinished && <CheckIcon />}
      </Link>
    </li>
  );
};
