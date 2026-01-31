import { WordInfo } from "@types";

export type PhraseBuilderProps = {
  inputWordsArray: string[];
  resultWordsArray: WordInfo[];
  handleSetInputWordsArray: (textWords: string[]) => void;
  handleSetResultWordsArray: (words: WordInfo[]) => void;
};
