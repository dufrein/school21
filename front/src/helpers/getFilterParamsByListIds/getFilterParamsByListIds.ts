import { FetchOptions } from "@types";

/**
 * Хелпер для формирования фильтр параметров get запроса документов по списку их documentId
 */
export const getFilterParamsByListIds = (documentIds: string[]) => {
  const params: FetchOptions["params"] = {};

  documentIds.forEach((id, index) => (params[`filters[documentId][$in][${index}]`] = id));

  return params;
};
