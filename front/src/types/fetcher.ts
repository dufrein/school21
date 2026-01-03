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
