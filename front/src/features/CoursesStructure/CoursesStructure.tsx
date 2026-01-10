"use client";

import React, { useContext } from "react";
import { useScreenSize } from "@hooks";
import styles from "./styles.module.scss";
import { TableContent } from "@features/TableContent";
import { UserContext } from "@context/UserContext";

/**
 * Панель левой колонки с содержанием курсов
 */
export const CoursesStructure: React.FC = () => {
  const { isMobile, isTabletPortrait } = useScreenSize();
  const { userCourses } = useContext(UserContext);

  if (isMobile || isTabletPortrait) {
    return null;
  }

  return <div className={styles.tabel}><TableContent userCourses={userCourses} /></div>;
};
