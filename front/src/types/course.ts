import { Complexity } from "@constants";
import { Topic } from "./topic";

export interface Course {
  id: string;
  name: string;
  topics: Topic[];
  documentId: string;
  description: string;
  complexity: Complexity;
  /**
   * Это искусственное поле, его нет в типах страпи контента и в админке соответственно, создается в контроллере 
   */
  courseLessonsIds: string[]; 
  createdAt?: string;
  updatedAt?: string;
}
