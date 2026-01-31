import React from "react";
import { QuestionResultProps } from "./types";
import styles from "./questionResult.module.scss";

export const QuestionResult: React.FC<QuestionResultProps> = (props) => {
  const { isShownResults, isCorrect } = props;

  return (
    <div>
      {isShownResults && (
        <div className={`${styles.result} ${isCorrect ? styles.correct : styles.incorrect}`}>
          {isCorrect ? "Правильно!" : "Неправильно"}
        </div>
      )}
    </div>
  );
};
