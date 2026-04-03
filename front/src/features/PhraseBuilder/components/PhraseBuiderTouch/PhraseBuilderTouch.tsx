import React from "react";
import { PhraseBuilderProps } from "../../types";
import styles from "./builder.module.scss";
import { WordInfo } from "@types";

/**
 * Построитель слов в фразу для упражнений (вариант для тач-устройств).
 * Вместо перетаскивания слова добавляются в ответ по тапу.
 */
export const PhraseBuilderTouch: React.FC<PhraseBuilderProps> = (props) => {
  const { inputWordsArray, resultWordsArray, handleSetInputWordsArray, handleSetResultWordsArray } =
    props;

  const handleInputWordPress = (index: number) => {
    const newInputWordsArray = [...inputWordsArray];
    const [word] = newInputWordsArray.splice(index, 1);

    const newResultWordsArray: WordInfo[] = [
      ...resultWordsArray,
      {
        text: word,
        index: resultWordsArray.length,
        isOutputWord: true,
      },
    ];

    handleSetInputWordsArray(newInputWordsArray);
    handleSetResultWordsArray(newResultWordsArray);
  };

  const handleResultWordRemove = (wordIndex: number) => {
    const newResultWordsArray = [...resultWordsArray];
    const [removedWord] = newResultWordsArray.splice(wordIndex, 1);
    const newInputWordsArray = [...inputWordsArray, removedWord.text];

    handleSetResultWordsArray(newResultWordsArray);
    handleSetInputWordsArray(newInputWordsArray);
  };

  return (
    <div className={styles.container}>
      <div className={styles.words}>
        {inputWordsArray.map((item, index) => (
          <button
            type="button"
            key={item + index}
            className={styles.wordItem}
            onClick={() => handleInputWordPress(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.workField}>
        {resultWordsArray.map((item, index) => (
          <div key={item.text + index} className={styles.resultItem}>
            <button
              type="button"
              className={`${styles.wordItem} ${styles.wordItem_result}`}
              onClick={() => handleResultWordRemove(index)}
            >
              {item.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

