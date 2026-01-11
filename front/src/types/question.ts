export interface QuestionType {
  id: string;
  name: string;
  text: string;
  answers: AnswerType[];
  documentId: string;
}

export interface AnswerType {
  text: string;
  isCorrect: boolean;
  id: string;
}
