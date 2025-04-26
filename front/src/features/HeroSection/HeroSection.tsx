'use client'
import Link from 'next/link'
import styles from './styles.module.scss'
import { ROUTES } from '@constants'

/**
 * Секция с приветствием и ссылкой на тарифы
 * @returns React.FC
 */
export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Изучайте чувашский язык с уверенностью в школе &quot;School&quot;
          </h1>
          <p className={styles.subtitle}>
            Присоединяйтесь к нашей языковой школе и начните свой путь к свободному владению чувашским языком с профессиональными преподавателями и интерактивными курсами.
          </p>
          <div className={styles.ctaContainer}>
            <Link href={ROUTES.ALL_COURSES} className={styles.btnPrimary}>
              Посмотреть курсы
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 