import { outputWordDataAttrName } from "@features/PhraseBuilder/constants";

/**
 * Хелпер для проверки что переданный элемент является 'Элементом-слово' из drop зоны
 */
export const checkOutputWordElement = (element: Element) => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  return element.dataset[outputWordDataAttrName];
};
