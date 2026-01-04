/**
 * Интерфейс для опций запроса
 */
export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

export type StrapiError = {
  error: {
    status: number;
    name: string;
    message: string;
    details?: { errors: StrapiDetailError[] };
  };
};

export type StrapiDetailError = {
  path: string[];
  message: string;
  name: string;
  value: string;
};

/**
 * Параметры пагинации
 * @param limit?: number - количество элементов на странице
 * @param start?: number - номер первого элемента
 * @param withCount?: boolean - флаг для включения подсчета общего количества элементов в ответе
 */
export interface StrapiPagination {
  limit?: number;
  start?: number;
  withCount?: boolean;
}

export type FetchFullResponse<T> = {
  data: T[] | null;
  meta: FetchMeta | null;
};

export type FetchMeta = {
  pagination: FetchMetaPaginationDefined | FetchMetaPagination;
};

/**
 * Когда в запросе пагинация не задана ответ получается вот таким
 */
export type FetchMetaPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

/**
 * Когда в запросе пагинация ЗАДАНА ответ получается вот таким
 */
export type FetchMetaPaginationDefined = {
  start: number;
  limit: number;
  total: number;
};
