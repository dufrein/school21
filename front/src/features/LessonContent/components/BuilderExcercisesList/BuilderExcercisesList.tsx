import React from "react";
import { BuilderExcercisesListProps } from "./types";
import { BuilderExcercise } from "../BuilderExcercise";
import styles from "./styles.module.scss";

export const BuilderExcercisesList: React.FC<BuilderExcercisesListProps> = (props) => {
  const { builders } = props;

  if (!builders?.length) {
    return null;
  }

  return (
    <div className="lessonCard">
      <div className="lessonCardTitle">Практические упражнения</div>
      <div>
        <p className={styles.containerTitle}>
          В этих управжнениях вам надо составить из слов фразы, для этого перетащите слова в нужном
          порядке в поле в рамках.
        </p>

        {builders.map((builderItem) => (
          <BuilderExcercise key={builderItem.id} builderExcercise={builderItem} />
        ))}
      </div>
    </div>
  );
};
