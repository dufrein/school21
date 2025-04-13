import { Complexity } from "@constants";

export interface Course {
  id: string;
  name: string;
  description: string;
  tariffId: string;
  topics: Topic[];
  lessonsIds: string[];
  complexity: Complexity;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
}


