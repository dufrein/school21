import React from "react";
import { TeacherItemProps } from "./types";
import styles from "./teacher.module.scss";
import { StrapiImage } from "@components/StrapiImage";

/**
 * Компонент вывода карточки учителя
 */
export const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  const { teacher } = props;

  return (
    <div className={styles.card}>
      <div className={styles.fio}>{teacher.fio}</div>
      <div>{teacher.description}</div>
      <StrapiImage
        image={teacher.photo[0]}
        size={"small"}
        alt={teacher.fio}
        width={200}
        className={styles.photo}
      />
    </div>
  );
};
