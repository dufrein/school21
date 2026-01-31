import React, { useEffect, useState } from "react";
import { BuilderExcercisesListProps } from "./types";
import { BuilderExcercise } from "../BuilderExcercise";
import styles from "./styles.module.scss";
import { BuilderExcerciseType } from "@types";

/**
 * Компонент списка упражнений 
 */
export const BuilderExcercisesList: React.FC<BuilderExcercisesListProps> = (props) => {
  const { builders, setFinished } = props;
  const buildersReults: Record<string, boolean> = {};

  (builders || []).forEach((builderItem) => {
    buildersReults[builderItem.documentId] = false;
  });

  const [excercisesList, setExcercisesList] = useState(buildersReults);

  useEffect(() => {
    console.log("excercisesList", excercisesList);
    const isAllFinished = Object.values(excercisesList).every((item) => !!item);

    setFinished(isAllFinished);
  }, [excercisesList, setFinished]);

  if (!builders?.length) {
    return null;
  }

  const onCheckResult = (builderItem: BuilderExcerciseType) => (isCorrect: boolean) => {
    const newBuildersReults = { ...excercisesList };

    newBuildersReults[builderItem.documentId] = isCorrect;
    setExcercisesList(newBuildersReults);
  };

  return (
    <div className="lessonCard">
      <div className="lessonCardTitle">Практические упражнения</div>
      <div>
        <details className={styles.instruction}>
          <summary>
            <span className={styles.helpIcon} title="Нажмите для получения инструкции">
              Инструкция
            </span>
          </summary>
          <p className={styles.containerTitle}>
            В этих управжнениях вам надо составить из слов фразы, для этого перетащите слова в
            нужном порядке в поле в рамках. Можно перетащить слово на друго слово или в область
            между словами или в область перед первым словом, всякий раз при этом вы увидите
            выделение рамками цели перетаскивания - серый квадрат с оранжевой рамкой. При наведении
            на него во время перетаскивания слова вы увидите как эти рамки увеличатся в размере -
            это значит вы целитесь в данное место.
          </p>
        </details>
        <div className={styles.excercisesList}>
          {builders.map((builderItem) => (
            <BuilderExcercise
              key={builderItem.id}
              builderExcercise={builderItem}
              onCheckResult={onCheckResult(builderItem)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
