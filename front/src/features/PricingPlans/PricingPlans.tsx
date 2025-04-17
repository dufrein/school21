"use client";

import styles from "./styles.module.scss";
import { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { Tariff } from "./components";

export function PricingPlans() {
  const { tariffs } = useContext(AppContext);
  return (
    <div className={styles.plansGrid}>
      {tariffs.map((tariff) => (
        <Tariff tariff={tariff} key={tariff.id} />
      ))}
    </div>
  );
}
