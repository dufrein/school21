/**
 * Интерфейс для опций запроса
 */
export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

/**
 * Интерфейс для ответа запроса
 */
export interface FetchResponse<T> {
  data: T;
  status: number;
  ok: boolean;
}
