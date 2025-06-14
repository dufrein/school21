"use client";

import React, { useContext } from "react";
import { useScreenSize } from "@hooks";
import { CoursesStructureProps } from "./types";
import styles from "./styles.module.scss";
import { AppContext } from "@context/AppContext";

/**
 * Панель левой колонки с содержанием курсов
 */
export const CoursesStructure: React.FC<CoursesStructureProps> = () => {
  const { isMobile, isTabletPortrait } = useScreenSize();
  const { tableContent } = useContext(AppContext);

  if (isMobile || isTabletPortrait) {
    return null;
  }

  return <div className={styles.tabel}>{tableContent}</div>;
};
