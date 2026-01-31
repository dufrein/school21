import React from "react";
import { WorkFieldProps } from "./types";
import styles from "../../builder.module.scss";
import {
  checkOutputWordElement,
  getValidWordDataIndex,
  checkBeforeElement,
  checkResultItemElement,
} from "../../helpers";
import { WordInfo } from "@types";

/**
 * Поля куда перетаскивают слова - рабочее поле
 */
export const WorkField: React.FC<WorkFieldProps> = (props) => {
  const {
    dropId,
    children,
    workFieldRef,
    inputWordsArray,
    resultWordsArray,
    handleSetInputWordsArray,
    handleSetResultWordsArray,
    workFieldRemoveDropActiveClass,
    beforeWordsElementRemoveDragOverClass,
  } = props;

  // Обработчик drop кейса,когда перетащили слово между других слов
  const moveWordBetweenWords = (draggableWordInfo: WordInfo, elementLeftFromPoint: HTMLElement) => {
    const newResultWordsArray = [...resultWordsArray];
    const newInputWordsArray = [...inputWordsArray];

    const outputWordDataIndex = elementLeftFromPoint.dataset["output_index"];

    const { isValid, wordIndex: outputWordIndex } = getValidWordDataIndex(outputWordDataIndex);

    if (!isValid) {
      return;
    }

    if (draggableWordInfo.isOutputWord) {
      // Если пробовали перетащить элемент на пространство ровно перед или после него, т.е. на то же самое место, то отмена
      if (
        draggableWordInfo.index - outputWordIndex === 1 ||
        draggableWordInfo.index - outputWordIndex === 0
      ) {
        return;
      }

      const [removed] = newResultWordsArray.splice(outputWordIndex, 1, draggableWordInfo);

      newResultWordsArray.splice(draggableWordInfo.index, 1, removed);
    } else {
      newInputWordsArray.splice(draggableWordInfo.index, 1);
      handleSetInputWordsArray(newInputWordsArray);

      newResultWordsArray.splice(outputWordIndex, 0, draggableWordInfo);
    }

    handleSetResultWordsArray(newResultWordsArray);
  };

  // Обработчик dragOver над рабочим полем
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Обязательно для разрешения drop

    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    // Если перетаскиваем над пространством из рабочей области
    if (workFieldRef.current?.contains(e.target)) {
      workFieldAddDropActiveClass();
    }
  };

  // Обработчик drop события на области перетаскивания (т.е. когда отпустили слово в этой области)
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    workFieldRemoveDropActiveClass();
    beforeWordsElementRemoveDragOverClass();

    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    const dragWord = JSON.parse(e.dataTransfer.getData("dragWord"));

    // если перетащили элемент на дропзону в другом компоненте то запретим переноc
    if (dragWord.dropId !== dropId) {
      return;
    }

    const newInputWordsArray = [...inputWordsArray];
    const newResultWordsArray = [...resultWordsArray];
    const dragWordIndex = parseInt(dragWord.index);

    if (isNaN(dragWordIndex)) {
      return;
    }

    const isOutputWord = dragWord.type === "output";

    // Перетаскиваемое слово
    const draggableWordInfo = {
      text: isOutputWord ? resultWordsArray[dragWordIndex].text : inputWordsArray[dragWordIndex],
      index: dragWordIndex,
      // Флаг что перетаскиваем слово уже из рабочей области
      isOutputWord,
    };

    const isCursorOnBeforeWords = checkBeforeElement(e.target);

    // Если перетаскиваем на область перед первым словом
    if (isCursorOnBeforeWords) {
      moveWordBeforeWords(draggableWordInfo);

      return;
    }

    const isCursorOnWord = checkOutputWordElement(e.target);

    // если перетащили на ранее перенесённое слово
    if (isCursorOnWord) {
      moveWordOnWord(draggableWordInfo, e.target);

      return;
    }

    const elementsLeftFromPoint = document.elementsFromPoint(e.clientX, e.clientY);
    const elementLeftFromPoint = elementsLeftFromPoint[0];

    if (!(elementLeftFromPoint instanceof HTMLElement)) {
      return;
    }

    const isBetweenWords = checkResultItemElement(elementLeftFromPoint) && !isCursorOnWord;

    // если вставляем между слов
    if (isBetweenWords) {
      moveWordBetweenWords(draggableWordInfo, elementLeftFromPoint);

      return;
    }

    // если слово из рабочей области вставили в свободное пространство рабочей области
    if (draggableWordInfo.isOutputWord) {
      newResultWordsArray.splice(draggableWordInfo.index, 1);
    } else {
      newInputWordsArray.splice(draggableWordInfo.index, 1);
      handleSetInputWordsArray(newInputWordsArray);
    }

    newResultWordsArray.push(draggableWordInfo);
    handleSetResultWordsArray(newResultWordsArray);
  };

  const workFieldAddDropActiveClass = () => {
    workFieldRef.current?.classList.add(styles.workField_dropActive);
  };

  // Обработчик drop кейса,когда перетащили слово в область перед первым словом
  const moveWordBeforeWords = (draggableWordInfo: WordInfo) => {
    const newInputWordsArray = [...inputWordsArray];
    const newResultWordsArray = [...resultWordsArray];

    if (draggableWordInfo.isOutputWord) {
      newResultWordsArray.splice(draggableWordInfo.index, 1);
    } else {
      newInputWordsArray.splice(draggableWordInfo.index, 1);
      handleSetInputWordsArray(newInputWordsArray);
    }

    newResultWordsArray.unshift(draggableWordInfo);
    handleSetResultWordsArray(newResultWordsArray);

    return;
  };

  // Обработчик drop кейса,когда перетащили слово на другое слово
  const moveWordOnWord = (draggableWordInfo: WordInfo, targetWordElement: HTMLElement) => {
    const newResultWordsArray = [...resultWordsArray];
    const newInputWordsArray = [...inputWordsArray];

    targetWordElement.classList.remove(styles["wordItem_aim"]);

    const wordDataIndex = targetWordElement.dataset["output_index"];

    const { isValid, wordIndex } = getValidWordDataIndex(wordDataIndex);

    if (!isValid) {
      return;
    }

    if (draggableWordInfo.isOutputWord) {
      const [removed] = newResultWordsArray.splice(wordIndex, 1, draggableWordInfo);

      newResultWordsArray.splice(draggableWordInfo.index, 1, removed);
    } else {
      newInputWordsArray.splice(draggableWordInfo.index, 1, newResultWordsArray[wordIndex].text);
      handleSetInputWordsArray(newInputWordsArray);
      newResultWordsArray[wordIndex] = draggableWordInfo;
    }

    handleSetResultWordsArray(newResultWordsArray);
  };

  return (
    <div
      className={styles.workField}
      ref={workFieldRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-dropid={dropId}
    >
      {children}
    </div>
  );
};
