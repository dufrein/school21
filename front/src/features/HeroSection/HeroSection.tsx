"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ROUTES, SCHOOL_NAME } from "@constants";
import { Badge } from "@components/Badge";

/**
 * Секция с приветствием
 */
export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Badge>
            <img src="book.svg" width={14} height={14} alt="книга иконка" /> чӑвашла вӗрентӗр
          </Badge>
          <h1 className={styles.title}>
            Изучайте чувашский язык в школе &quot;{SCHOOL_NAME}&quot;
          </h1>
          <p className={styles.subtitle}>
            Начните свой путь к свободному владению чувашским языком на нашем сайте, обучение
            бесплатное. Отдельно, по жалению, вы можете записаться на дополнительные занятия с
            преподователями, они оплачиваются преподавателю.
          </p>
          <div className={styles.ctaContainer}>
            <Link href={ROUTES.ALL_COURSES} className={styles.btnPrimary}>
              Посмотреть все курсы
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles["right-plate"]}>
            <img className={styles.iconBook} src="book.svg" width={150} height={150} alt="книга" />
            <div className={styles.success}>
              <img src="icon_ready.svg" width={24} height={24} alt="книга" />
              Урок завершен!
              <br />
              Тема освоена!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
