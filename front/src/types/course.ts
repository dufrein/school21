import { Complexity } from "@constants";
import { Tariff } from "./tariff";
import { Topic } from "./topic";

export interface Course {
  id: string;
  name: string;
  topics: Topic[];
  tariffs: Tariff[];
  documentId: string;
  description: string;
  complexity: Complexity;
}

