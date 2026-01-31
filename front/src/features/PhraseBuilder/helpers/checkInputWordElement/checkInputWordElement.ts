import { inputWordDataAttrName } from "@features/PhraseBuilder/constants";

/**
 * Хелпер для проверки что переданный элемент является 'Элементом-слово' из зоны входных слов
 */
export const checkInputWordElement = (element: Element) => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  return element.dataset[inputWordDataAttrName];
};
