export interface QuestionAnswerProps {
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
  isShownResults: boolean;
  questionId: string;
  onAnswerSelect: (params: OnAnswerSelectParams) => void;
}

export type OnAnswerSelectParams = {
  value: string;
  questionId: string;
  isCorrect: boolean;
};
