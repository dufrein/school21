import { WordInfo } from "@types";
import { PropsWithChildren } from "react";

export type WorkFieldProps = PropsWithChildren<{
  dropId: string;
  workFieldRef: React.RefObject<HTMLDivElement | null>;
  inputWordsArray: string[];
  resultWordsArray: WordInfo[];
  handleSetInputWordsArray: (words: string[]) => void;
  handleSetResultWordsArray: (words: WordInfo[]) => void;
  workFieldRemoveDropActiveClass: () => void;
  beforeWordsElementRemoveDragOverClass: () => void;
}>;
