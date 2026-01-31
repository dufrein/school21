import { outputResultItemDataAttrName } from "@features/PhraseBuilder/constants";

/**
 * Хелпер для проверки что переданный элемент является элементом оберткой вокруг слова и пробела справа из зоны входных слов
 */
export const checkResultItemElement = (element: Element) => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  return element.dataset[outputResultItemDataAttrName];
};
