import { UserContext } from "@context/UserContext";
import { Course } from "@types";
import { useContext } from "react";

export const useGetCheckCourseFinished = () => {
  const { user } = useContext(UserContext);
  return (course: Course) => {
    const courseLessonsIds = course.topics.reduce((allLessonIds: string[], currentTopic) => {
      return [...allLessonIds, ...currentTopic.lessons.map((lessonItem) => lessonItem.documentId)];
    }, []);
    return courseLessonsIds.every((lessonId) => user?.finishedLessonsIds.includes(lessonId));
  };
};
