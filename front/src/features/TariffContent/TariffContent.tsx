"use client";

import React from "react";
import { TariffContentProps } from "./types";
import styles from "./styles.module.scss";
import { BuyTariff } from "@components";
import { ROUTES } from "@constants";
import { NavLink } from "@components";

/**
 * Компонент для отображения информации о тарифе
 * @param tariff: Tariff
 * @returns React.FC<TariffContentProps>
 */
export const TariffContent: React.FC<TariffContentProps> = (props) => {
  const { tariff } = props;

  return (
    <div className={styles.tariffContent}>
      <h2 className={styles.title}>{tariff.name}</h2>
      <p className={styles.description}>{tariff.description}</p>
      <p className={styles.price}>{tariff.price} рублей</p>
      <ul className={styles.featuresList}>
        {tariff.features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
      <p>Курсы входящие в тариф:</p>
      <div className={styles.priceDescription}>
        <ul className={styles.courseList}>
          {tariff.courses.map((courseItem) => (
            <li key={courseItem.id}>
              <NavLink
                href={`${ROUTES.COURSE_PREVIEW}/${courseItem.documentId}`}
                className={styles.courseItem}
              >
                {courseItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <BuyTariff>Купить</BuyTariff>
    </div>
  );
};
