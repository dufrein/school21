import React, { ChangeEvent } from "react";
import { QuestionProps } from "./types";
import styles from "./styles.module.scss";

export const Question: React.FC<QuestionProps> = (props) => {
  const { text, isCorrect, isChecked, isShownResults, questionId, onAnswerSelect } = props;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAnswerSelect({
      value: e.target.value,
      questionId: questionId,
      isCorrect: isCorrect,
    });
  };

  return (
    <label key={text} className={styles.option}>
      <input
        type="radio"
        name={`question-${questionId}`}
        disabled={isShownResults}
        value={text}
        checked={isChecked}
        onChange={onInputChange}
        className={styles.radio}
      />
      <span className={styles.optionText}>{text}</span>
    </label>
  );
};
