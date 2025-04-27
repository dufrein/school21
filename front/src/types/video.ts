import { StrapiImage } from "./common";
import { Lesson } from "./lesson";

export interface VideoLesson {
  name: string;
  description: string;
  showOnVideoPage: boolean;
  lessons: Lesson[];
  url: string;
  id: string;
  documentId: string;
  preview: StrapiImage;
}
