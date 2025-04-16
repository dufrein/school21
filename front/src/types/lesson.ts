import { Complexity } from "@constants";
import { Question } from "@types";
import { RootNode } from "node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer";

export interface Lesson {
  id: string;
  title: string;
  theory: RootNode[];
  documentId: string;
  questions: Question[];
  complexity: Complexity;
}
