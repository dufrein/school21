import { beforeWordDataAttrName } from "@features/PhraseBuilder/constants";

/**
 * Хелпер для проверки что переданный элемент является первым элементом для вставки слов в drop зону
 */
export const checkBeforeElement = (element: Element) => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  return element.dataset[beforeWordDataAttrName];
};
