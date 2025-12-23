import { Complexity } from "@constants";
import { Topic } from "./topic";

export interface Course {
  id: string;
  name: string;
  topics: Topic[];
  documentId: string;
  description: string;
  complexity: Complexity;
  createdAt?: string;
  updatedAt?: string;
}
