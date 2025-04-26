import { Lesson } from "@types";

export interface LessonProps {
  lesson: Lesson;
  completedLessonsIds: string[];
  courseId: string;
  topicId: string;
}
