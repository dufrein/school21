import { StudentType } from "@types";

export const checkLessonFinished = (user?: StudentType | null, lessonId?: string | null) => {
  if (!user || !lessonId) {
    return false;
  }

  return !!user?.finishedLessonsIds.includes(lessonId);
};
