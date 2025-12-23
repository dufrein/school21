import { Lesson, Topic } from "@types";
import { GetNextElementParams } from "./types";

export const getNextElement = <T extends Lesson | Topic>({
  list,
  currentElementId,
}: GetNextElementParams<T>) => {
  if (!list || !list.length || !currentElementId) {
    return null;
  }
  const topicIndex = list.findIndex((item) => item.documentId === currentElementId);

  const nextTopicIndex = ~topicIndex && topicIndex === list?.length - 1 ? null : topicIndex + 1;

  if (!nextTopicIndex) {
    return null;
  }

  return list[nextTopicIndex];
};
