import { Course, Lesson, Topic } from "@types";
import { PropsWithChildren } from "react";

export interface LearningContextType {
  openedCourse: Course | null;
  openedTopic: Topic | null;
  openedLesson: Lesson | null;
  nextLesson: Lesson | null;
  nextTopic: Topic | null;
}

export type LearningContextProps = PropsWithChildren;
