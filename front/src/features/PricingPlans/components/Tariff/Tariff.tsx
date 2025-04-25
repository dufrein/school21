import React from "react";
import { TariffProps } from "./types";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Tariff: React.FC<TariffProps> = (props) => {
  const { tariff } = props;

  return (
    <div key={tariff.name} className={styles.card}>
      <h3 className={styles.cardTitle}>{tariff.name}</h3>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{tariff.price} рублей</span>
      </div>
      <ul className={styles.featuresList}>
        {tariff.features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <Link href="/dashboard" className={styles.btnPrimary}>
        Выбрать
      </Link>
    </div>
  );
};
