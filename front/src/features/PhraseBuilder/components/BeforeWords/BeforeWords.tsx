import React from "react";
import { getClassList } from "@utils";
import styles from "../../builder.module.scss";
import { beforeWordDataAttrName } from "@features/PhraseBuilder/constants";
import { BeforeWordsProps } from "./types";

/**
 * Элемент указывающий пространство для вставки перед первым словом
 */
export const BeforeWords: React.FC<BeforeWordsProps> = (props) => {
const {beforeWordsElementRef, beforeWordsElementRemoveDragOverClass} = props;

  const beforeWordsElementClassList = getClassList([styles.wordItem, styles.beforeWordsPlace]);

  // Обработчик dragEner когда курсор с переносимым элементом попаадает на элемент вставки перед первым словом из рабочей области
  const handleBeforeWordsDragEnter = () => {
    beforeWordsElementRef.current?.classList.add(styles.beforeWordsPlace_dragOver);
  };
 

  return (
    <div
      ref={beforeWordsElementRef}
      className={beforeWordsElementClassList}
      onDragEnter={handleBeforeWordsDragEnter}
      onDragLeave={beforeWordsElementRemoveDragOverClass}
      {...{ ["data-" + beforeWordDataAttrName]: true }}
    >
      {"."}
    </div>
  );
};
