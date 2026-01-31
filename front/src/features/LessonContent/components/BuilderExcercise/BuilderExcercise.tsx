import React, { useState } from "react";
import { BuilderExcerciseProps } from "./types";
import { PhraseBuilder } from "@features/PhraseBuilder";
import { WordInfo } from "@types";
import { getClassList } from "@utils";
import styles from "./builderExcercise.module.scss";
import { QuestionResult } from "../QuestionResult";

export const BuilderExcercise: React.FC<BuilderExcerciseProps> = (props) => {
  const { builderExcercise, onCheckResult } = props;

  const wordsArray = builderExcercise.answer
    .trim()
    .split(" ")
    .map((item) => item.toLowerCase())
    .filter((item) => item);

  const mixedWordsArray = wordsArray.toSorted(() => Math.random() - 0.5);

  // Массив отсортированных входных слов
  const [inputWordsArray, setInputWordsArray] = useState(mixedWordsArray);
  const [resultWordsArray, setResultWordsArray] = useState<WordInfo[]>([]);
  const [isShownResults, setIsShownResults] = useState(false);

  const [isCorrect, setIsCorrect] = useState(false);

  const handleSetInputWordsArray = (words: string[]) => {
    setInputWordsArray(words);
  };

  const handleSetResultWordsArray = (words: WordInfo[]) => {
    setResultWordsArray(words);
  };

  // Очистить результирующее поле
  const clearWorkField = () => {
    setResultWordsArray([]);
    handleSetInputWordsArray(mixedWordsArray);
    setIsCorrect(false);
    setIsShownResults(false);
    onCheckResult(false);
  };

  const checkResult = () => {
    const resultString = resultWordsArray.map((wordInfo) => wordInfo.text).join();
    const answerString = wordsArray.join();

    setIsShownResults(true);
    onCheckResult(answerString === resultString);
    setIsCorrect(answerString === resultString);
  };

  const isResultEmpty = !resultWordsArray.length;

  const btnCheckClassList = getClassList(["button btnPrimary", isResultEmpty && "btnDisabled"]);
  const btnClearClassList = getClassList(["button btnSecondary", isResultEmpty && "btnDisabled"]);

  return (
    <div>
      <div className={"question"}>
        <h4 className={"questionText"}>{builderExcercise.question}</h4>
        <PhraseBuilder
          inputWordsArray={inputWordsArray}
          resultWordsArray={resultWordsArray}
          handleSetInputWordsArray={handleSetInputWordsArray}
          handleSetResultWordsArray={handleSetResultWordsArray}
        />
        <QuestionResult isShownResults={isShownResults} isCorrect={isCorrect} />
        <div className={styles.buttons}>
          <button onClick={clearWorkField} className={btnClearClassList}>
            Очистить поле
          </button>
          <button
            onClick={checkResult}
            className={btnCheckClassList}
            disabled={!resultWordsArray.length}
          >
            Проверить
          </button>
        </div>
      </div>
    </div>
  );
};
