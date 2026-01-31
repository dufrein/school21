import { RefObject } from "react";

export type BeforeWordsProps = {
  beforeWordsElementRef: RefObject<HTMLDivElement | null>;
  beforeWordsElementRemoveDragOverClass: () => void;
};
