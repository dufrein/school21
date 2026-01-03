"use client";

import React, { useContext } from "react";
import { useScreenSize } from "@hooks";
import styles from "./styles.module.scss";
import { AppContext } from "@context/AppContext";
import { TableContent } from "@features/TableContent";

/**
 * Панель левой колонки с содержанием курсов
 */
export const CoursesStructure: React.FC = () => {
  const { isMobile, isTabletPortrait } = useScreenSize();
  const { userCourses } = useContext(AppContext);

  if (isMobile || isTabletPortrait) {
    return null;
  }

  return <div className={styles.tabel}><TableContent userCourses={userCourses} /></div>;
};
