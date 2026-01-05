import { Course, StudentType } from "@types";

export const getCourseProgress = (course?: Course | null, user?: StudentType | null) => {
  if (!user || !course) {
    return {
      progress: 0,
      remaining: 0,
      ready: 0,
    };
  }

  let userFinishedCourseLessonsCount = 0;
  course.courseLessonsIds.forEach((lessonId) => {
    if (user.finishedLessonsIds.includes(lessonId)) {
      userFinishedCourseLessonsCount = userFinishedCourseLessonsCount + 1;
    }
  });

  const allLessonsCount = course.courseLessonsIds.length;
  const remainingLessonsCount = allLessonsCount - userFinishedCourseLessonsCount;

  return {
    progress: Math.ceil((100 * userFinishedCourseLessonsCount) / course.courseLessonsIds.length),
    remaining: remainingLessonsCount,
    ready: userFinishedCourseLessonsCount,
  };
};
