"use client";

import styles from "./styles.module.scss";

export function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContent}>
        <h2 className={styles.featureTitle}>Наши преимущества</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Интерактивные уроки</h3>
            <p className={styles.cardText}>
              Увлекательные уроки с интерактивными
              упражнениями.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Профессиональные преподаватели</h3>
            <p className={styles.cardText}>
              Дополнительные занятия у преподавателей с многолетним опытом.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Гибкое обучение</h3>
            <p className={styles.cardText}>
              Учитесь в своем темпе с круглосуточным доступом ко всем материалам.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
