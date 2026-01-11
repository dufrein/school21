import React from "react";
import { QuestionsListProps } from "./types";
import styles from "./styles.module.scss";
import type { QuestionType } from "@types";
import { Question } from "../Question";
import { OnAnswerSelectParams } from "../Question/types";

export const QuestionsList: React.FC<QuestionsListProps> = (props) => {
  const {
    questions,
    selectedAnswers,
    results,
    isShownResults,
    changeSelectedAnswers,
    changeResults,
  } = props;
 
  const checkAnswer = (question: QuestionType) => {
    const answer = selectedAnswers[question.documentId];
    const isCorrect = question.answers.find((answerItem) => answerItem.text === answer)?.isCorrect;

    return isCorrect;
  };

  const onAnswerSelect = ({ value, questionId, isCorrect }: OnAnswerSelectParams) => {
    changeSelectedAnswers({
      ...selectedAnswers,
      [questionId]: value,
    });
    changeResults({ ...results, [questionId]: isCorrect });
  };

  return (
    <div>
      <h3 className={styles.cardTitle}>Практические вопросы</h3>
      <div className={styles.questionsList}>
        {questions.map((questionItem) => (
          <div key={questionItem.id} className={styles.question}>
            <h4 className={styles.questionText}>{questionItem.name}</h4>
            <p className={styles.questionText}>{questionItem.text}</p>
            <div className={styles.optionsList}>
              {questionItem.answers.map((option) => (
                <Question
                  key={option.id}
                  text={option.text}
                  isCorrect={option.isCorrect}
                  isChecked={option.text === selectedAnswers[questionItem.documentId]}
                  isShownResults={isShownResults}
                  questionId={questionItem.documentId}
                  onAnswerSelect={onAnswerSelect}
                />
              ))}
            </div>
            {isShownResults && (
              <p
                className={`${styles.result} ${
                  checkAnswer(questionItem) ? styles.correct : styles.incorrect
                }`}
              >
                {checkAnswer(questionItem) ? "Правильно!" : "Неправильно"}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
