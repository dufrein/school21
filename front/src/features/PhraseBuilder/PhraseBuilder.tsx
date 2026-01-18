import React, { useId, useState } from "react";
import { PhraseBuilderProps, WordInfo } from "./types";
import styles from "./builder.module.scss";
import { getClassList } from "@utils";
import { checkWordElement, getValidWordDataIndex } from "./helpers";
import { outputWordDataAttrNameFull } from "./constants";

/**
 * Построитель слов в фразу для упражнений
 */
export const PhraseBuilder: React.FC<PhraseBuilderProps> = (props) => {
  const { answer } = props;
  const dropId = useId();
  const wordsArray = answer
    .trim()
    .split(" ")
    .filter((item) => item);

  const [isPasteBeforeActive, setIsPasteBeforeActive] = useState(false);

  const [mixedWordsArray] = useState(wordsArray.toSorted(() => Math.random() - 0.5));
  const [resultWordsArray, setResultWordsArray] = useState<WordInfo[]>([]);

  const handleInputWordDragStart = (e: React.DragEvent<HTMLDivElement>, index: string) => {
    e.dataTransfer?.setData("dragWord", JSON.stringify({ index, type: "input", dropId })); // Сохраняем ID элемента
  };

  const handleOutputWordDragStart = (e: React.DragEvent<HTMLDivElement>, index: string) => {
    e.dataTransfer?.setData("dragWord", JSON.stringify({ index, type: "output", dropId })); // Сохраняем ID элемента
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Обязательно для разрешения drop
    // const wordBoundingRects = e.currentTarget.getBoundingClientRect();
    if (e.target instanceof HTMLElement) {
      const isCursorOnWord = checkWordElement(e.target);
      const isCursorClassAlreadyHasAimClass = e.target.classList.contains(styles["wordItem_aim"]);

      if (isCursorOnWord && !isCursorClassAlreadyHasAimClass) {
        e.target.classList.add(styles["wordItem_aim"]);

        return;
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setIsPasteBeforeActive(false);
    e.preventDefault();

    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    e.target.classList.remove(styles["wordItem_aim"]);

    const dragWord = JSON.parse(e.dataTransfer.getData("dragWord"));

    // если перетащили элемент на дропзону в другом компоненте то запретим переноc
    if (dragWord.dropId !== dropId) {
      return;
    }

    const isCursorOnWord = checkWordElement(e.target);
    const newResultWordsArray = [...resultWordsArray];
    const dragWordIndex = parseInt(dragWord.index);

    if (isNaN(dragWordIndex)) {
      return;
    }

    const draggerWordInfo = {
      text: mixedWordsArray[dragWordIndex],
      index: dragWordIndex,
    };

    // если перетащили на ранее перенесенное слово
    if (isCursorOnWord) {
      const wordDataIndex = e.target.dataset["output_index"];

      const { isValid, wordIndex } = getValidWordDataIndex(wordDataIndex);

      if (!isValid) {
        return;
      }

      newResultWordsArray[wordIndex] = draggerWordInfo;
      setResultWordsArray(newResultWordsArray);
    } else {
      // берем элемент на gap пикселей правее, чтобы вставить элемент перед ним
      const elementsRightFromPoint = document.elementsFromPoint(
        e.clientX + outputGapSize,
        e.clientY,
      );

      const elementRightFromPoint = elementsRightFromPoint[0];

      if (!(elementRightFromPoint instanceof HTMLElement)) {
        return;
      }

      const isWordOnCursorRight = checkWordElement(elementRightFromPoint);

      // если справа от курсора есть слово
      if (isWordOnCursorRight) {
        const outputWordDataIndex = elementRightFromPoint.dataset["output_index"];

        const { isValid, wordIndex: outputWordIndex } = getValidWordDataIndex(outputWordDataIndex);

        if (!isValid) {
          return;
        }

        newResultWordsArray.splice(outputWordIndex, 0, draggerWordInfo);
        setResultWordsArray(newResultWordsArray);
      } else {
        newResultWordsArray.push(draggerWordInfo);
        setResultWordsArray(newResultWordsArray);
      }
    }
  };

  const handleWordDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      e.target.classList.remove(styles["wordItem_aim"]);
    }
  };

  const outputWordClassList = getClassList([styles.wordItem, styles.wordItem_result]);
  const pasteBeforeClassList = getClassList([
    styles.beforeWordsPlace,
    isPasteBeforeActive && styles.beforeWordsPlace_active,
  ]);

  const outputGapSize = 20;

  return (
    <div className={styles.container}>
      <div className={styles.words}>
        {mixedWordsArray.map((item, index) => (
          <div
            className={styles.wordItem}
            key={item + index}
            draggable
            onDragStart={(e) => handleInputWordDragStart(e, `${index}`)}
            data-is_input={true}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ position: "relative" }}>
        <div
          className={styles.result}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dropid={dropId}
          style={{ gap: outputGapSize }}
        >
          <div className={pasteBeforeClassList}>{"<"}</div>
          {resultWordsArray?.map((item, index) => (
            <div
              className={outputWordClassList}
              key={item.text + index}
              draggable
              onDragStart={(e) => handleOutputWordDragStart(e, `${item.index}`)}
              onDragLeave={handleWordDragLeave}
              {...{ [outputWordDataAttrNameFull]: true }}
              // индекс = порядковый номер слова из фразы-ответа
              data-output_index={index}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
