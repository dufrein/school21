import React, { useState } from "react";
import { QuestionsListProps } from "./types";
import styles from "./styles.module.scss";
import type { QuestionType } from "@types";
import { OnAnswerSelectParams } from "../QuestionAnswer/types";
import { QuestionResults, SelectedAnswers } from "@features/LessonContent/types";
import { getClassList } from "@utils";
import { Question } from "../Question";

export const QuestionsList: React.FC<QuestionsListProps> = (props) => {
  const { questions, setFinished } = props;

  const [isShownResult, setIsShownResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [results, setResults] = useState<QuestionResults>({});

  const checkQuestionsResult = () => {
    setIsShownResult(true);
    const isAllQuestionsAnsweredCorrectly = questions
      .map((questionItem) => checkAnswer(questionItem))
      .every((isCorrect) => !!isCorrect);

    setFinished(isAllQuestionsAnsweredCorrectly);
  };

  const onRetryClick = () => {
    setSelectedAnswers({});
    setResults({});
    setIsShownResult(false);
    setFinished(false);
  };

  const checkAnswer = (question: QuestionType) => {
    const answer = selectedAnswers[question.documentId];
    const isCorrect = question.answers.find((answerItem) => answerItem.text === answer)?.isCorrect;

    return isCorrect || false;
  };

  const onAnswerSelect = ({ value, questionId, isCorrect }: OnAnswerSelectParams) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: value,
    });
    setResults({ ...results, [questionId]: isCorrect });
  };

  const isCheckButtonDisabled = Object.keys(selectedAnswers).length !== questions.length;
  const btnCheckClassList = getClassList([
    "button btnPrimary",
    isCheckButtonDisabled && "btnDisabled",
  ]);

  return (
    <div className={"lessonCard"}>
      <h3 className={styles.cardTitle}>Тестирование</h3>
      <div className={"questionsList"}>
        {questions.map((questionItem) => (
          <Question
            key={questionItem.id}
            questionItem={questionItem}
            isShownResult={isShownResult}
            onAnswerSelect={onAnswerSelect}
            selectedAnswers={selectedAnswers}
            checkAnswer={checkAnswer}
          />
        ))}
      </div>
      <div className={styles.actions}>
        {isShownResult ? (
          <button onClick={onRetryClick} className="button btnSecondary">
            Попробовать снова
          </button>
        ) : (
          <button
            onClick={checkQuestionsResult}
            className={btnCheckClassList}
            disabled={isCheckButtonDisabled}
          >
            Проверить
          </button>
        )}
      </div>
    </div>
  );
};
