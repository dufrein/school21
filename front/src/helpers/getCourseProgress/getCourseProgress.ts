import { CourseFull, StudentType } from "@types";
import { LearningStat } from "@types";
import { countProgress } from "@utils/countProgress";

export const getCourseProgress = (
  course: CourseFull | null,
  user: StudentType | null
): LearningStat => {
  if (!user || !course) {
    return {
      progress: 0,
      remaining: 0,
      ready: 0,
      allLessonsCount: 0,
      courseId: course?.documentId,
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
  const statistic: LearningStat = {
    progress: countProgress(userFinishedCourseLessonsCount, allLessonsCount),
    remaining: remainingLessonsCount,
    ready: userFinishedCourseLessonsCount,
    allLessonsCount,
    courseId: course?.documentId,
  };

  return statistic;
};
