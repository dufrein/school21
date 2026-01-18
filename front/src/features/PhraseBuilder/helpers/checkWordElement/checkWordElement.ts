import { outputWordDataAttrName } from "@features/PhraseBuilder/constants";

/**
 * Хелпер для проверки что элемент является 'Элементов-слово из drop зоны
 */
export const checkWordElement = (element: Element) => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  return element.dataset[outputWordDataAttrName];
};
