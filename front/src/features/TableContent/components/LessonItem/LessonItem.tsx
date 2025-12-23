import React, { useContext } from "react";
import { LessonItemProps } from "./types";
import { NavLink } from "@components";
import styles from "./styles.module.scss";
import { LearningContext } from "@context/LearningContext";
import { getClassList } from "@utils";

/**
 * Элемент строчка из содержания обучения
 */
export const LessonItem: React.FC<LessonItemProps> = (props) => {
  const { title, url, lessonItem } = props;
  const { openedLesson } = useContext(LearningContext);
  const isActiveLesson = lessonItem.documentId === openedLesson?.documentId;

  const classList = getClassList([isActiveLesson && styles["item_active"], styles.item]);

  return (
    <NavLink href={url} className={classList}>
      {title}
    </NavLink>
  );
};
