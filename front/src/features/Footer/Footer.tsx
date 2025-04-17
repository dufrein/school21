import React from "react";
import styles from "./styles.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Чувашская языковая школа &quot;Хавал&quot;. Все права
          защищены.
        </p>
      </div>
    </footer>
  );
};
