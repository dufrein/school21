"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ROUTES, SCHOOL_NAME } from "@constants";

/**
 * Секция с приветствием
 */
export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
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
      </div>
    </section>
  );
}
