/**
 * Утилита для высчета процента прогресса по прохождению уроков
 */
export const countProgress = (finishedLessonsCount: number, allLessonsCount: number) => {
  if (!allLessonsCount) {
    return 0;
  }

  return Math.floor((100 * finishedLessonsCount) / allLessonsCount);
};
