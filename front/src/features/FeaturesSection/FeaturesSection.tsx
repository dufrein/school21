"use client";

import { getClassList } from "@utils";
import styles from "./styles.module.scss";

export function FeaturesSection() {
  const contentClassList = getClassList(["main-section-content", styles.features]);

  return (
    <section className={"main-section"}>
      <div className={contentClassList}>
        <h2 className={"main-section-title"}>Наши преимущества</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.card}>
            <img
              src="/bookBlue.svg"
              width={24}
              className={styles["card-icon"]}
              alt="иконка разговор"
            />
            <h3 className={styles.cardTitle}>Обучение бесплатное</h3>
            <p className={styles.cardText}>
              Сайт сделан не для заработка денег, а для обучения языку
            </p>
          </div>
          <div className={styles.card}>
            <img src="/lamp.svg" width={24} className={styles["card-icon"]} alt="иконка лампочка" />
            <h3 className={styles.cardTitle}>Интерактивные уроки</h3>
            <p className={styles.cardText}>Увлекательные уроки с интерактивными упражнениями</p>
          </div>

          <div className={styles.card}>
            <img src="/timer.svg" width={24} className={styles["card-icon"]} alt="иконка часы" />
            <h3 className={styles.cardTitle}>Гибкое обучение</h3>
            <p className={styles.cardText}>
              Учитесь в своем темпе с круглосуточным доступом ко всем материалам
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="/progress.svg"
              width={24}
              className={styles["card-icon"]}
              alt="иконка диаграмма прогресса"
            />
            <h3 className={styles.cardTitle}>Отслеживание прогресса</h3>
            <p className={styles.cardText}>
              Знайте сколько уроков осталось до конца обучения на курсе
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="/listen.svg"
              width={24}
              className={styles["card-icon"]}
              alt="иконка наушники"
            />
            <h3 className={styles.cardTitle}>Медиа материалы</h3>
            <p className={styles.cardText}>Слушайте и смотрите аудио и видео уроки на чувашском</p>
          </div>
          <div className={styles.card}>
            <img src="/talk.svg" width={24} className={styles["card-icon"]} alt="иконка разговор" />
            <h3 className={styles.cardTitle}>Разговорная практика</h3>
            <p className={styles.cardText}>
              Вы можете записаться на дополнительные занятия к преподавателям
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
