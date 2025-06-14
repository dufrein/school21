"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { BreadCrumbsProps } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { LearningContext } from "@context/LearningContext";
import { ROUTES } from "@constants";

/**
 * Компонент хлебных крошек
 */
export const BreadCrumbs: React.FC<BreadCrumbsProps> = (props) => {
  const { items: itemsInitial, className } = props;
  const items = itemsInitial || [];
  const { openedCourse, openedTopic, openedLesson } = useContext(LearningContext);
  console.log("openedLesson", openedLesson);

  if (!items.length) {
    if (openedCourse) {
      items.push({
        label: "Курс",
        path: `${ROUTES.COURSE}/${openedCourse.documentId}`,
      });
    }

    if (openedTopic) {
      items.push({
        label: "Тема",
        path: `${ROUTES.TOPIC}/${openedTopic.documentId}`,
      });
    }

    if (openedLesson) {
      const updatedDate = openedLesson.updatedAt
        ? `, ${new Date(openedLesson.updatedAt).toLocaleDateString()}`
        : "";

      items.push({
        label: "Урок" + updatedDate,
        path: `${ROUTES.LESSON}/${openedLesson.documentId}`,
      });
    }
  }

  return (
    <nav className={classNames(styles.breadcrumbs, className)} aria-label="Хлебные крошки">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={item.path}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <span className={styles.separator}>/</span>}
            <Link
              href={item.path}
              itemProp="item"
              className={classNames(styles.breadcrumbItem, {
                [styles.active]: index === items.length - 1,
              })}
            >
              <span itemProp="name">{item.label}</span>
            </Link>
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};
