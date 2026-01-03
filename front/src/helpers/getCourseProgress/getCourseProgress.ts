import { Course, StudentType } from "@types";

export const getCourseProgress = (course?: Course | null, user?: StudentType | null) => {
  if (!user || !course) {
    return 0;
  }

  let userFinishedCourseLessonsCount = 0;
  course.courseLessonsIds.forEach((lessonId) => {
    if (user.finishedLessonsIds.includes(lessonId)) {
      userFinishedCourseLessonsCount = userFinishedCourseLessonsCount + 1;
    }
  });
  return Math.ceil((100 * userFinishedCourseLessonsCount) / course.courseLessonsIds.length);
};
