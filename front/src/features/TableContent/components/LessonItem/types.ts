import { Lesson } from "@types";
import { ReactElement } from "react";

export interface LessonItemProps {
  title: string | ReactElement;
  url: string;
  lessonItem: Lesson;
}
