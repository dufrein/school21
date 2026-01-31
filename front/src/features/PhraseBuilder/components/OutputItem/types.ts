import { WordInfo } from "@types";

export interface OutputItemProps {
  item: WordInfo;
  index: number;
  dropId: string;
  handleWordDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  inputWordsArray: string[];
  resultWordsArray: WordInfo[];
  handleSetResultWordsArray: (words: WordInfo[]) => void;
  handleSetInputWordsArray: (textWords: string[]) => void;
}
