'use client'

import Link from 'next/link'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { Tariff } from '@types'
import { getTariffs } from '@api'  


export function PricingPlans() {
  const [tariffs, setTariffs] = useState<Tariff[]>([])

  useEffect(() => {
    getTariffs().then((tariffs) => setTariffs(tariffs))
  }, [])

  return (
    <div className={styles.plansGrid}>
      {tariffs.map((tariff) => (
        <div key={tariff.name} className={styles.card}>
          <h3 className={styles.cardTitle}>{tariff.name}</h3>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{tariff.price}</span>
          </div>
          <ul className={styles.featuresList}>
            {tariff.features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <svg
                  className={styles.checkIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/dashboard"
            className={  styles.btnPrimary }
          >
            {'Выбрать'}
          </Link>
        </div>
      ))}
    </div>
  )
} 