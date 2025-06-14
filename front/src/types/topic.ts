import { RootNode } from "node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer";
import { Lesson } from "./lesson";

export interface Topic {
  id: string;
  name: string;
  lessons: Lesson[];
  description: RootNode[];
  documentId: string;
  createdAt?: string;
  updatedAt?: string;
}
