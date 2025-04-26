import React, { useContext } from "react";
import { TariffProps } from "./types";
import styles from "./styles.module.scss";
import Link from "next/link";
import { UserContext } from "@context/UserContext";
import { getClassList } from "@utils";
import { ROUTES } from "@constants";

export const Tariff: React.FC<TariffProps> = (props) => {
  const { tariff } = props;
  const { user } = useContext(UserContext);

  const currentTariffClassList = getClassList(["button btnPrimary", styles.btnStub]);
  return (
    <div key={tariff.name} className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{tariff.name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{tariff.price} рублей</span>
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
      </div>
      <div className={styles.btnContainer}>
        {user?.tariff?.id === tariff.id ? (
          <Link href={`${ROUTES.PRICING}/${tariff.documentId}`} className={currentTariffClassList}>
            Ваш тариф
          </Link>
        ) : (
          <Link href={`${ROUTES.PRICING}/${tariff.documentId}`} className={"button btnPrimary"}>
            Выбрать
          </Link>
        )}
      </div>
    </div>
  );
};
