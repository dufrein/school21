/**
 * Хелпер для получения валидного атрибута data-index
 */
export const getValidWordDataIndex = (wordDataIndex: string | undefined) => {
  if (!wordDataIndex) {
    return { isValid: false, wordIndex: 0 };
  }

  const wordIndex = parseInt(wordDataIndex);

  if (isNaN(wordIndex)) {
    return { iValid: false, wordIndex: 0 };
  }

  return { isValid: true, wordIndex };
};
