"use client";

import React from "react";
import styles from "./styles.module.scss";
import { SCHOOL_NAME } from "@constants";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © {year} Чувашская языковая школа &quot;{SCHOOL_NAME}&quot;. Все права
          защищены.
        </p>
      </div>
    </footer>
  );
};
