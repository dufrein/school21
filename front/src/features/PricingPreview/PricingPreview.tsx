"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { AppContext } from "@context/AppContext";

export function PricingPreview() {
  const { tariffs } = useContext(AppContext);
  console.log("tariffs", tariffs);
  return (
    <section className={styles.pricing}>
      <div className={styles.pricingContent}>
        <h2 className={styles.pricingTitle}>Выберите свой тариф</h2>
        <div className={styles.pricingGrid}>
          {tariffs.map((tariffItem) => {
            return (
              <div className={styles.card} key={tariffItem.documentId}>
                <h3 className={styles.cardTitle}>{tariffItem.name}</h3>
                <p className={styles.cardText}>{tariffItem.description}</p>
                <p className={styles.cardText}>{tariffItem.price} рублей в год</p>
                <Link href="/pricing" className={styles.btnPrimary}>
                  Узнать больше
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
