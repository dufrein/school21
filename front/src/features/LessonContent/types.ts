import { Lesson } from "@types";

export type SelectedAnswers = Record<string, string>;
export type QuestionResults = Record<string, boolean>;

export type LessonProps = {
  lesson: Lesson | null;
};
