import { Lesson } from "@types";

export interface LessonProps {
  lesson: Lesson;
  completedLessonsIds: string[];
}
