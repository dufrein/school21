import { QuestionType } from "@types";

export interface QuestionsListProps {
  questions: QuestionType[];
  setFinished: (isFInished: boolean) => void;
}
