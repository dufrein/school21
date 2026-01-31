import { QuestionType } from "@types";
import { OnAnswerSelectParams } from "../QuestionAnswer/types";
import { SelectedAnswers } from "@features/LessonContent/types";

export type QuestionProps = {
  questionItem: QuestionType;
  isShownResult: boolean;
  onAnswerSelect: (params: OnAnswerSelectParams) => void;
  selectedAnswers: SelectedAnswers;
  checkAnswer: (questions: QuestionType) => boolean;
};
