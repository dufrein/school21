import { QuestionResults, SelectedAnswers } from "@features/LessonContent/types";
import { Question } from "@types";

export interface QuestionsProps {
  questions: Question[];
  selectedAnswers: SelectedAnswers;
  results: QuestionResults;
  isShownResults: boolean;
  changeSelectedAnswers: (ansers: SelectedAnswers) => void;
  changeResults: (result: QuestionResults) => void;
}
