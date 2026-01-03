import { StudentType, Topic } from "@types";

export const checkTopicFinished = (topicItem?: Topic | null, user?: StudentType | null) => {
  if (!topicItem || !user) {
    return false;
  }
  const topicLessonIds = topicItem.lessons.map((lessonItem) => lessonItem.documentId);

  const isTopicFinished =
    !!user?.finishedLessonsIds.length &&
    topicLessonIds.every((lessonId) => user?.finishedLessonsIds.includes(lessonId));

  return isTopicFinished;
};
