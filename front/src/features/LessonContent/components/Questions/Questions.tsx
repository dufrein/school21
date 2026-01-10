import React from "react";
import { QuestionsProps } from "./types";
import styles from "./styles.module.scss";
import { Question } from "@types";

export const Questions: React.FC<QuestionsProps> = (props) => {
  const { questions, selectedAnswers, results, isShownResults, changeSelectedAnswers, changeResults } =
    props;

  const checkAnswer = (question: Question) => {
    const answer = selectedAnswers[question.id];
    const isCorrect = question.answers.find((answerItem) => answerItem.text === answer)?.isCorrect;

    return isCorrect;
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
                <label key={option.text} className={styles.option}>
                  <input
                    type="radio"
                    name={`question-${questionItem.id}`}
                    disabled={isShownResults}
                    value={option.text}
                    checked={selectedAnswers[questionItem.id] === option.text}
                    onChange={(e) => {
                      changeSelectedAnswers({
                        ...selectedAnswers,
                        [questionItem.id]: e.target.value,
                      });
                      changeResults({ ...results, [questionItem.id]: option.isCorrect });
                    }}
                    className={styles.radio}
                  />
                  <span className={styles.optionText}>{option.text}</span>
                </label>
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
