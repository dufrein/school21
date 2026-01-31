"use client";

import { useState, useContext, useRef } from "react";
import styles from "./styles.module.scss";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { LessonProps } from "./types";
import { QuestionsList } from "./components";
import { BreadCrumbs } from "@components/BreadCrumbs";
import { UserContext } from "@context/UserContext";
import { NextLessonButton } from "./components/NextLessonButton";
import { LevelIcon } from "@components/LevelIcon";
import { useAddTargetBlank } from "@hooks/useAddTargetBlank/useAddTargetBlank";
import { VideoComponent } from "@components/VideoComponent";
import { BuilderExcercisesList } from "./components/BuilderExcercisesList";

export const LessonContent: React.FC<LessonProps> = (props) => {
  const { lesson } = props;
  const { user, saveStudent } = useContext(UserContext);
  const [isQuestionsFinished, setQuestionsFinished] = useState(
    lesson?.questions.length ? false : true,
  );
  const [isExcercisesFinished, setExcercisesFinished] = useState(
    lesson?.builders?.length ? false : true,
  );

  const contentBlockRef = useRef<HTMLDivElement>(null);

  useAddTargetBlank(contentBlockRef);

  if (!lesson || !user) {
    return null;
  }

  const handleSubmit = async () => {
    console.log('handleSubmit');
    if (!user.finishedLessonsIds.includes(lesson.documentId)) {
      await saveStudent({
        ...user,
        finishedLessonsIds: [...user.finishedLessonsIds, lesson.documentId],
      });
    }
  };

  const handleSetQuestionsFinished = (isFinished: boolean) => {
    setQuestionsFinished(isFinished);
  };

  const handleSetExcercisesFinished = (isFinished: boolean) => {
    setExcercisesFinished(isFinished);
  };

  const date = lesson.updatedAt || lesson.createdAt;

  const updatedDate = date ? `Дата обновления: ${new Date(date).toLocaleDateString()}` : "";

  const isLessonComplete = isQuestionsFinished && isExcercisesFinished;

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

      <LevelIcon complexity={lesson.complexity} withText />

      <div>{updatedDate}</div>
      <div className={"lessonCard"}>
        <h3 className={"lessonCardTitle"}>Теория</h3>
        {lesson.image && (
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${lesson.image?.formats.small?.url}`}
            alt={"изображение урока"}
          />
        )}
        <div className={styles.theoryContent} ref={contentBlockRef}>
          <BlocksRenderer content={lesson.theory} />
        </div>

        {lesson.video && (
          <div>
            <p>Посмотрите видеоурок:</p>
            <VideoComponent video={lesson.video} className={styles.video} />
          </div>
        )}
      </div>

      <QuestionsList questions={lesson.questions} setFinished={handleSetQuestionsFinished} />
      <BuilderExcercisesList
        builders={lesson.builders || []}
        setFinished={handleSetExcercisesFinished}
      />

      <NextLessonButton isDisabled={!isLessonComplete} onClickHandler={handleSubmit} />
    </div>
  );
};
