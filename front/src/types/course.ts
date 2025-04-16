import { Complexity } from "@constants";
import { Lesson } from "./lesson";
import { Tariff } from "./tariff";

export interface Course {
  id: string;
  name: string;
  topics: Topic[];
  tariffs: Tariff[];
  lessons: Lesson[];
  documentId: string;
  description: string;
  complexity: Complexity;
}

export interface Topic {
  name: string;
  description: string;
}


