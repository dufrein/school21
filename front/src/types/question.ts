export interface Question {
  id: string;
  name: string;
  text: string;
  answers: Answer[];
  documentId: string;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}
