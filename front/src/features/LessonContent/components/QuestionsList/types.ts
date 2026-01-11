import { QuestionResults, SelectedAnswers } from "@features/LessonContent/types";
import { QuestionType } from "@types";

export interface QuestionsListProps {
  questions: QuestionType[];
  selectedAnswers: SelectedAnswers;
  results: QuestionResults;
  isShownResults: boolean;
  changeSelectedAnswers: (ansers: SelectedAnswers) => void;
  changeResults: (result: QuestionResults) => void;
}
