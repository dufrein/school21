import { Lesson, Topic } from "@types";

export type GetNextElementParams<ListElementType extends Lesson | Topic> = {
  list?: Array<ListElementType> | null;
  currentElementId?: string;
};
