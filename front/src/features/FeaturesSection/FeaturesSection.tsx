'use client'

import styles from './styles.module.scss';

export function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContent}>
        <div className={styles.featuresGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Интерактивные уроки</h3>
            <p className={styles.cardText}>
              Увлекательные уроки с обратной связью в реальном времени и интерактивными упражнениями.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Профессиональные преподаватели</h3>
            <p className={styles.cardText}>
              Учитесь у сертифицированных преподавателей с многолетним опытом.
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
  )
} 