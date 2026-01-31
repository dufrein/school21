export type BuilderExcerciseType = {
  id: string;
  documentId: string;
  question: string;
  answer: string;
};

/**
 * Тип элемента слова из упражнения на формирование фраз
 */
export type WordInfo = {
  text: string;
  /** индекс - порядковый номер слова как он должен идти в ответе */
  index: number;
  /** Флаг что слово взято из рабочей области, а не из входных */
  isOutputWord: boolean;
};
