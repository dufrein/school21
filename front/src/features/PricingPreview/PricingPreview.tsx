'use client'

import Link from 'next/link'
import styles from './styles.module.scss'

export function PricingPreview() {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricingContent}>
        <h2 className={styles.pricingTitle}>Выберите свой тариф</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Бесплатный</h3>
            <p className={styles.cardText}>Базовый доступ к языковым курсам</p>
            <Link href="/pricing" className={styles.btnSecondary}>
              Узнать больше
            </Link>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Простой</h3>
            <p className={styles.cardText}>Доступ ко всем курсам и базовая поддержка</p>
            <Link href="/pricing" className={styles.btnPrimary}>
              Узнать больше
            </Link>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Профессиональный</h3>
            <p className={styles.cardText}>Полный доступ с поддержкой личного преподавателя</p>
            <Link href="/pricing" className={styles.btnPrimary}>
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 