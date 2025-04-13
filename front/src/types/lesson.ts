import { Complexity } from "@constants";

export interface Lesson {
  id: string;
  title: string;
  theory: string;
  courseId: string;
  questions: Question[];
  complexity: Complexity;
}

export interface Question {
  id: string;
  text: string;
  lessonId: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}
