import React, { useContext } from "react";
import { LearningContext } from "@context/LearningContext";
import Link from "next/link";
import { ROUTES } from "@constants";
import styles from "./styles.module.scss";
import { getClassList } from "@utils";
import { NextLessonButtonProps } from "./types";

export const NextLessonButton: React.FC<NextLessonButtonProps> = (props) => {
  const { isDisabled, onClickHandler } = props;
  const { openedCourse, openedTopic, nextLesson, nextTopic } = useContext(LearningContext);
  const classList = getClassList([styles.button, isDisabled && styles["button_disabled"]]);

  if (nextLesson) {
    return (
      <Link
        onClick={onClickHandler}
        className={classList}
        href={`${ROUTES.COURSE}/${openedCourse?.documentId}/${ROUTES.TOPIC}/${openedTopic?.documentId}/${ROUTES.LESSON}/${nextLesson?.documentId}`}
      >
        Следующий урок
      </Link>
    );
  }

  if (!nextLesson && nextTopic) {
    return (
      <Link
        onClick={onClickHandler}
        className={classList}
        href={`${ROUTES.COURSE}/${openedCourse?.documentId}/${ROUTES.TOPIC}/${nextTopic?.documentId}`}
      >
        Следующая тема
      </Link>
    );
  }

    if (!nextLesson && !nextTopic) {
    return (
      <Link
        onClick={onClickHandler}
        className={classList}
        href={`${ROUTES.LEARNING}`}
      >
        Закрыть курс
      </Link>
    );
  }


  return null;
};
