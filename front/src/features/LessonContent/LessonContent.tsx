"use client";

import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import { Lesson } from "@types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { QuestionResults, SelectedAnswers } from "./types";
import { Questions } from "./components";
import { BreadCrumbs } from "@components/BreadCrumbs";
import { UserContext } from "@context/UserContext";
import { COMPLEXITY_LEVEL } from "@constants";

export function LessonContent({ lesson }: { lesson: Lesson }) {
  const { user, saveStudent } = useContext(UserContext);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [results, setResults] = useState<QuestionResults>({});
  const [isShownResults, setIsShownResults] = useState(false);

  if (!lesson || !user) {
    return null;
  }

  const handleSubmit = async () => {
    setIsShownResults(true);
    if (!user.finishedLessonsIds.includes(lesson.documentId)) {
      await saveStudent({
        ...user,
        finishedLessonsIds: [...user.finishedLessonsIds, lesson.documentId],
      });
    }
  };

  const changeResults = (results: QuestionResults) => {
    setResults(results);
  };

  const changeSelectedAnswers = (answers: SelectedAnswers) => {
    setSelectedAnswers(answers);
  };

  const calculateScore = () => {
    const resultArray = Object.values(results).filter((resultItem) => resultItem === true);

    return Math.round((resultArray.length / lesson.questions.length) * 100);
  };

  const date = lesson.updatedAt || lesson.createdAt;
  const updatedDate = date ? `Дата обновления: ${new Date(date).toLocaleDateString()}` : "";

  return (
    <div className={styles.content}>
      <BreadCrumbs />

      <h2 className={styles.title}>
        {lesson.title}
        {user.finishedLessonsIds.includes(lesson.documentId) && (
          <img
            src="/icon_ready.svg"
            alt="урок пройден"
            width="20"
            height="20"
            title="Вы успешно прошли этот урок"
          />
        )}
      </h2>

      {lesson.complexity && (
        <div className={styles.level}>
          <img
            src={`/icon_complexity_${lesson.complexity}.png`}
            alt="уровень сложности"
            width="20"
            height="20"
          />
          <span>
            Уровень сложности: <i>{COMPLEXITY_LEVEL[lesson.complexity]}</i>
          </span>
        </div>
      )}
      <div>{updatedDate}</div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Теория</h3>
        {lesson.image && (
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${lesson.image?.formats.small?.url}`}
            alt={"изображение урока"}
          />
        )}
        <div className={styles.theoryContent}>
          <BlocksRenderer content={lesson.theory} />
        </div>
      </div>

      {/* Questions Section */}
      <div className={styles.card}>
        <Questions
          questions={lesson.questions}
          selectedAnswers={selectedAnswers}
          results={results}
          isShownResults={isShownResults}
          changeResults={changeResults}
          changeSelectedAnswers={changeSelectedAnswers}
        />
        <div className={styles.actions}>
          {!isShownResults ? (
            <button
              onClick={handleSubmit}
              className={styles.btnPrimary}
              disabled={Object.keys(selectedAnswers).length !== lesson.questions.length}
            >
              Отправить ответы
            </button>
          ) : (
            <div className={styles.results}>
              <p className={styles.score}>Ваш результат: {calculateScore()}%</p>
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setResults({});
                  setIsShownResults(false);
                }}
                className={`${styles.btnSecondary} ${styles.tryAgain}`}
              >
                Попробовать снова
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
