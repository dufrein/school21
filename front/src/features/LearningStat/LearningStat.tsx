"use client";

import React, { useContext, useEffect, useState } from "react";
import { LearningStatProps, StatisticType } from "./types";
import { Complexity, COMPLEXITY_LEVEL } from "@constants";
import styles from "./styles.module.scss";
import { getCourseProgress } from "@helpers/getCourseProgress";
import { countProgress } from "@utils/countProgress";
import { UserContext } from "@context/UserContext";
import { ProgressBar } from "@components/ProgressBar";

/**
 * Блок (карточка) статистики по пройденным уроком в разбивке на уровни сложности курсов
 */
export const LearningStat: React.FC<LearningStatProps> = (props) => {
  const { courses } = props;
  const { user } = useContext(UserContext);
  const [coursesStat, setCoursesStat] = useState<StatisticType>({
    [Complexity.BASIC]: null,
    [Complexity.MEDIUM]: null,
    [Complexity.ADVANCED]: null,
  });

  useEffect(() => {
    const newCouresStat = { ...coursesStat };

    courses.forEach((courseItem) => {
      const currentComplexityStat = { ...newCouresStat[courseItem.complexity] };
      const currentCourseStat = getCourseProgress(courseItem, user);
      const newCourseStatReady =
        (currentComplexityStat?.ready || 0) + (currentCourseStat.ready || 0);
      const newCourseStatRemaining =
        (currentComplexityStat?.remaining || 0) + (currentCourseStat.remaining || 0);
      const newCourseStatAllLessonsCount =
        (currentComplexityStat?.allLessonsCount || 0) + (currentCourseStat.allLessonsCount || 0);

      const newComplexityStat = {
        progress: countProgress(newCourseStatReady, newCourseStatAllLessonsCount),
        remaining: newCourseStatRemaining,
        ready: newCourseStatReady,
        allLessonsCount: newCourseStatAllLessonsCount,
      };

      newCouresStat[courseItem.complexity] = newComplexityStat;
    });

    setCoursesStat(newCouresStat);
  }, [courses]);

  const coursesStatList = Object.values(Complexity);

  return (
    <div className={"accountCard"}>
      <h4>Статистика по прохождению уроков по курсам сложности :</h4>
      {coursesStatList.map((complexityLevel) => {
        if (!complexityLevel) {
          return null;
        }

        const { progress, remaining, ready } = coursesStat[complexityLevel] || {
          progress: 0,
          ready: 0,
          remaining: 0,
        };

        return (
          <div className={styles.statPart} key={complexityLevel}>
            <div className={styles.statCourseName}>{COMPLEXITY_LEVEL[complexityLevel]}:</div>
            <ProgressBar progress={progress} remaining={remaining} ready={ready} />
            <div>Готовность: {progress}%</div>
            <div>Уроков осталось: {remaining}</div>
            <div>Уроков пройдено: {ready}</div>
          </div>
        );
      })}
    </div>
  );
};
