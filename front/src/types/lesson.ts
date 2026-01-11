import { Complexity } from "@constants";
import { QuestionType, StrapiImage, VideoLesson } from "@types";
import { RootNode } from "node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer";

export interface Lesson {
  id: string;
  title: string;
  theory: RootNode[];
  documentId: string;
  questions: QuestionType[];
  complexity: Complexity;
  video?: VideoLesson;
  image?: StrapiImage;
  createdAt?: string;
  updatedAt?: string;
}
