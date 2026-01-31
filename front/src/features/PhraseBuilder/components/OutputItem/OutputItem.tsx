import React from "react";
import { OutputItemProps } from "./types";
import styles from "../../builder.module.scss";
import { getClassList } from "@utils";
import {
  beetweenWordsDataAttrName,
  outputResultItemDataAttrName,
  outputWordDataAttrName,
} from "../../constants";
import IconCross from "public/icon_cross.svg";

/**
 * Обёртка вокруг слова из области результата
 */
export const OutputItem: React.FC<OutputItemProps> = (props) => {
  const {
    item,
    index,
    dropId,
    handleWordDragEnd,
    inputWordsArray,
    resultWordsArray,
    handleSetResultWordsArray,
    handleSetInputWordsArray,
  } = props;

  // Обработчик входа drag элемента в области над словом
  const handleWordDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      e.target.classList.add(styles["wordItem_aim"]);
    }
  };

  // Обработчик dragStart для слов из рабочей области
  const handleOutputWordDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer?.setData("dragWord", JSON.stringify({ index, type: "output", dropId })); // Сохраняем ID элемента
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    e.target.classList.add(styles.wordItem_drugging);
  };

  // Обработчик ухода draggable элемента из области над словом
  const handleWordDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      e.target.classList.remove(styles["wordItem_aim"]);
    }
  };

  // Обработчик входа drag элемента в область между словами
  const handleBetweenWordsEnter = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      e.target.classList.add(styles["betweenWordsPlace_dragOver"]);
    }
  };

  // Обработчик ухода drag элемента из области между словами
  const handleBetweenWordsLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      e.target.classList.remove(styles["betweenWordsPlace_dragOver"]);
    }
  };

  // Клик по крестику удаления слова
  const onWordCloseClick = (wordIndex: number) => {
    const newResultWordsArray = [...resultWordsArray];
    const newInputWordsArray = [...inputWordsArray];
    const removedWord = newResultWordsArray.splice(wordIndex, 1);

    handleSetResultWordsArray(newResultWordsArray);
    newInputWordsArray.push(removedWord[0].text);
    handleSetInputWordsArray(newInputWordsArray);
  };

  const betweenWordsPlaceClassList = getClassList([
    styles.wordItem_empty,
    styles.betweenWordsPlace,
  ]);

  const outputWordClassList = getClassList([styles.wordItem, styles.wordItem_result]);

  return (
    <div
      {...{ ["data-" + outputResultItemDataAttrName]: true }}
      data-output_index={index}
      className={styles.resultItem}
    >
      <div
        className={outputWordClassList}
        draggable
        onDragStart={(e) => handleOutputWordDragStart(e, index)}
        onDragEnd={handleWordDragEnd}
        onDragEnter={handleWordDragEnter}
        onDragLeave={handleWordDragLeave}
        {...{ ["data-" + outputWordDataAttrName]: true }}
        // индекс = порядковый номер слова из фразы-ответа
        data-output_index={index}
      >
        {item.text}
        <img
          src={IconCross.src}
          className={`${styles["wordItem-cross"] + " icon"}`}
          alt="удалить слово"
          onClick={() => onWordCloseClick(index)}
        />
      </div>
      {index !== resultWordsArray.length - 1 && (
        <div
          className={betweenWordsPlaceClassList}
          {...{ ["data-" + beetweenWordsDataAttrName]: true }}
          onDragEnter={handleBetweenWordsEnter}
          onDragLeave={handleBetweenWordsLeave}
        >
          +
        </div>
      )}
    </div>
  );
};
