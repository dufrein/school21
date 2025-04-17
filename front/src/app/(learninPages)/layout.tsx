import type { Metadata } from "next";
import styles from "./layout.module.scss";
import { LearningTabel } from "@features/LearningTabel";

export const metadata: Metadata = {
  title: "Языковая школа",
  description: "Изучайте языки с нашими профессиональными курсами",
};

export default function LearningPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.twoColumn}>
      <LearningTabel />
      {children}
    </div>
  );
}
