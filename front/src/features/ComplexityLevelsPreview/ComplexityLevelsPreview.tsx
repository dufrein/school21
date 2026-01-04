"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Complexity, COMPLEXITY_LEVEL, ROUTES } from "@constants";

type ComplexityLevel = {
  complexity: Complexity;
  title: string;
  description: string;
};

const complexityLevels: ComplexityLevel[] = [
  {
    complexity: Complexity.BASIC,
    title: COMPLEXITY_LEVEL[Complexity.BASIC],
    description: "Начните изучение чувашского языка с основ. Идеально для начинающих.",
  },
  {
    complexity: Complexity.MEDIUM,
    title: COMPLEXITY_LEVEL[Complexity.MEDIUM],
    description: "Углубите свои знания и улучшите навыки общения на чувашском языке.",
  },
  {
    complexity: Complexity.ADVANCED,
    title: COMPLEXITY_LEVEL[Complexity.ADVANCED],
    description: "Освойте продвинутые темы и достигните высокого уровня владения языком.",
  },
];

export function ComplexityLevelsPreview() {
  return (
    <section className={styles.complexityLevels}>
      <div className={styles.complexityLevelsContent}>
        <h2 className={styles.complexityLevelsTitle}>Выберите свой уровень знаний</h2>
        <div className={styles.complexityLevelsContainer}>
          {complexityLevels.map((level) => {
            return (
              <Link
                key={level.complexity}
                href={`${ROUTES.ALL_COURSES}?complexity=${level.complexity}`}
                className={styles.card}
              >
                <h3 className={styles.cardTitle}>{level.title}</h3>
                <p className={styles.cardText}>{level.description}</p>
                  <div className={"button btnPrimary"}>Посмотреть курсы</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
