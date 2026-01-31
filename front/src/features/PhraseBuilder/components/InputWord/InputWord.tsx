import React from "react";
import { InputWordProps } from "./types";
import { inputWordDataAttrName } from "@features/PhraseBuilder/constants";
import styles from "../../builder.module.scss";

export const InputWord: React.FC<InputWordProps> = (props) => {
  const { item, index, dropId, handleWordDragEnd } = props;
  // Обработчик dragStart для данных по условию слов
  const handleInputWordDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer?.setData("dragWord", JSON.stringify({ index, type: "input", dropId })); // Сохраняем ID элемента
  };

  return (
    <div
      className={styles.wordItem}
      draggable
      onDragStart={(e) => handleInputWordDragStart(e, index)}
      onDragEnd={handleWordDragEnd}
      data-is_input={true}
      {...{ ["data-" + inputWordDataAttrName]: true }}
    >
      {item}
    </div>
  );
};
