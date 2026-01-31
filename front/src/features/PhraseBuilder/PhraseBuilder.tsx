import React, { useId, useRef } from "react";
import { PhraseBuilderProps } from "./types";
import styles from "./builder.module.scss";
import { checkOutputWordElement } from "./helpers";
import { InputWord } from "./components/InputWord";
import { OutputItem } from "./components/OutputItem";
import { BeforeWords } from "./components/BeforeWords";
import { WorkField } from "./components/WorkField";

/**
 * Построитель слов в фразу для упражнений
 */
export const PhraseBuilder: React.FC<PhraseBuilderProps> = (props) => {
  const { inputWordsArray, resultWordsArray, handleSetInputWordsArray, handleSetResultWordsArray } =
    props;
  const dropId = useId();

  const beforeWordsElementRef = useRef<HTMLDivElement | null>(null);
  const workFieldRef = useRef<HTMLDivElement | null>(null);

  // Обработчик dragEnd кейса, когда вынесли слово из рабочей области = выкинули
  const moveWordOutWorkField = (draggableElement: HTMLElement) => {
    const outputWordDataIndexString = draggableElement.dataset["output_index"];

    if (!outputWordDataIndexString) {
      return;
    }

    const outputWordDataIndex = parseInt(outputWordDataIndexString);

    if (isNaN(outputWordDataIndex)) {
      return;
    }

    const newResultWordsArray = [...resultWordsArray];
    const newInputWordsArray = [...inputWordsArray];
    const [removed] = newResultWordsArray.splice(outputWordDataIndex, 1);

    newInputWordsArray.push(removed.text);
    handleSetInputWordsArray(newInputWordsArray);
    handleSetResultWordsArray(newResultWordsArray);
  };

  // Обработчик окончания перетаскивания слова, что входного, что из рабочей области
  const handleWordDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    e.target.classList.remove(styles.wordItem_drugging);

    beforeWordsElementRemoveDragOverClass();
    workFieldRemoveDropActiveClass();

    const isOutputWord = checkOutputWordElement(e.target);

    if (!isOutputWord) {
      return null;
    }

    const dropTarget = document.elementFromPoint(e.clientX, e.clientY);

    // Проверяем что отпустили не над рабочим полем, т.е. слово выкинули
    const isDropedOutOfWorkField = !workFieldRef.current?.contains(dropTarget);

    if (isDropedOutOfWorkField) {
      moveWordOutWorkField(e.target);

      return;
    }
  };

  const workFieldRemoveDropActiveClass = () => {
    workFieldRef.current?.classList.remove(styles.workField_dropActive);
  };

  const beforeWordsElementRemoveDragOverClass = () => {
    beforeWordsElementRef.current?.classList.remove(styles.beforeWordsPlace_dragOver);
  };

  return (
    <div className={styles.container}>
      <div className={styles.words}>
        {inputWordsArray.map((item, index) => (
          <InputWord
            key={item + index}
            item={item}
            index={index}
            dropId={dropId}
            handleWordDragEnd={handleWordDragEnd}
          />
        ))}
      </div>
      <div>
        {/* Поля куда перетаскивают слова - рабочее поле */}
        <WorkField
          dropId={dropId}
          workFieldRef={workFieldRef}
          inputWordsArray={inputWordsArray}
          resultWordsArray={resultWordsArray}
          handleSetInputWordsArray={handleSetInputWordsArray}
          handleSetResultWordsArray={handleSetResultWordsArray}
          workFieldRemoveDropActiveClass={workFieldRemoveDropActiveClass}
          beforeWordsElementRemoveDragOverClass={beforeWordsElementRemoveDragOverClass}
        >
          {/* Элемент указывающий на возможность вставки перед первым словом */}
          {!!resultWordsArray.length && (
            <BeforeWords
              beforeWordsElementRef={beforeWordsElementRef}
              beforeWordsElementRemoveDragOverClass={beforeWordsElementRemoveDragOverClass}
            />
          )}
          {resultWordsArray?.map((item, index) => (
            <OutputItem
              key={item.text + index}
              item={item}
              index={index}
              dropId={dropId}
              handleWordDragEnd={handleWordDragEnd}
              inputWordsArray={inputWordsArray}
              resultWordsArray={resultWordsArray}
              handleSetResultWordsArray={handleSetResultWordsArray}
              handleSetInputWordsArray={handleSetInputWordsArray}
            />
          ))}
        </WorkField>
      </div>
    </div>
  );
};
