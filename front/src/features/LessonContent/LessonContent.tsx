"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { fetcher } from "@helpers/fetcher";
import { Lesson } from "@types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { QuestionResults, SelectedAnswers } from "./types";
import { Questions } from "./components";

export function LessonContent() {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

  const [results, setResults] = useState<QuestionResults>({});
  const [isShownResults, setIsShownResults] = useState(false);
  const { id } = useParams();

  const { data: lesson } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/lessons/${id}?populate=*`,
    fetcher<Lesson>
  );

  if (!lesson) {
    return null;
  }

  const handleSubmit = () => {
    setIsShownResults(true);
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

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{lesson.title}</h2>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Теория</h3>
        {lesson.image && (
          // eslint-disable-next-line @next/next/no-img-element
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
