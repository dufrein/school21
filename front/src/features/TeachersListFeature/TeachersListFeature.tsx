import React from "react";
import { TeachersListFeatureProps } from "./types";
import styles from "./styles.module.scss";
import { TeacherItem } from "./components";

export const TeachersListFeature: React.FC<TeachersListFeatureProps> = (props) => {
  const { teachers } = props;
  return (
    <>
      <h1 className={styles.title}>Учителя и репетиторы чувашского языка</h1>
      <p>
        Они обладают современным опытом преподования чувашского языка и помогут вам освоить язык
        быстрее. Вы можете записаться к ним за дополнительными занятиями в удобном для вас формате
      </p>
      <div className={styles.list}>
        {teachers?.map((teacherItem) => {
          return <TeacherItem key={teacherItem.fio} teacher={teacherItem} />;
        })}
      </div>
    </>
  );
};
