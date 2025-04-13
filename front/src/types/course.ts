import { Complexity } from "@constants";

export interface Course {
  id: string;
  name: string;
  description: string;
  tariffsIds: string[];
  topics: Topic[];
  lessonsIds: string[];
  complexity: Complexity;
}

export interface Topic {
  title: string;
  description: string;
}


