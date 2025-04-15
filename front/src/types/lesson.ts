import { Complexity } from "@constants";
import { Question } from "@types";

export interface Lesson {
  id: string;
  title: string;
  theory: string;
  documentId: string;
  questions: Question[];
  complexity: Complexity;
}
