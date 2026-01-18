import { Complexity } from "@constants";
import { QuestionType, StrapiImage, VideoLesson } from "@types";
import { RootNode } from "node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer";
import { BuilderExcerciseType } from "./builder";
import { WritingExcerciseType } from "./writing";

export interface Lesson {
  id: string;
  title: string;
  theory: RootNode[];
  documentId: string;
  questions: QuestionType[];
  complexity: Complexity;
  video?: VideoLesson | null;
  image?: StrapiImage | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  builders?: BuilderExcerciseType[] | null;
  writings?: WritingExcerciseType[] | null;
}
