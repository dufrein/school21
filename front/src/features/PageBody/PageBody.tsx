"use client";

import React from "react";
import { PageBodyProps } from "./types";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./page.module.scss";
import { useScreenSize } from "@hooks/useScreenSize/useScreenSize";
import { Spinner } from "@components";
/**
 * Компонент для отображения страницы
 */
export const PageBody: React.FC<PageBodyProps> = (props) => {
  const { userId, children } = props;
  const { screenSize } = useScreenSize();

  if (!screenSize) {
    return <Spinner />;
  }

  return (
    <>
      <Header userId={userId} />

      <main className={styles.main}>{children}</main>

      <Footer />
    </>
  );
};
