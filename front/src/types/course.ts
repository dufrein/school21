import { Complexity } from "@constants";
import { Topic } from "./topic";

export interface Course {
  id: string;
  name: string;
  documentId: string;
  description: string;
  complexity: Complexity;
  topics?: Topic[];
  createdAt?: string;
  updatedAt?: string;
}

export type CourseFull = Course & {
  /**
   * Это искусственное поле, его нет в типах страпи контента и в админке соответственно, создается в контроллере
   */
  courseLessonsIds: string[];
};
