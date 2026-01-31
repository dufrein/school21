import React, { ChangeEvent } from "react";
import { QuestionProps } from "./types";
import { QuestionResult } from "../QuestionResult";
import styles from "./styles.module.scss";

export const Question: React.FC<QuestionProps> = (props) => {
  const { questionItem, isShownResult, onAnswerSelect, selectedAnswers, checkAnswer } =
    props;

  const isCorrect = checkAnswer(questionItem);

  return (
    <div key={questionItem.id} className={"question"}>
      <h4 className={"questionText"}>{questionItem.name}</h4>
      <p className={"questionText"}>{questionItem.text}</p>
      <div className={styles.optionsList}>
        {questionItem.answers.map((option) => {
          const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            onAnswerSelect({
              value: e.target.value,
              questionId: questionItem.documentId,
              isCorrect: option.isCorrect,
            });
          };

          return (
            <label key={option.text} className={styles.option}>
              <input
                type="radio"
                name={`question-${questionItem.documentId}`}
                disabled={isShownResult}
                value={option.text}
                checked={option.text === selectedAnswers[questionItem.documentId]}
                onChange={onInputChange}
                className={styles.radio}
              />
              <span className={styles.optionText}>{option.text}</span>
            </label>
          );
        })}
      </div>
      <QuestionResult isShownResults={isShownResult} isCorrect={isCorrect} />
    </div>
  );
};
