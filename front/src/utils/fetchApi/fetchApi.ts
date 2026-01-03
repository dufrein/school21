import { IS_SSR } from "@constants";
import { FetchOptions, StrapiError } from "@types";
import { serverFetchAction } from "src/actions/serverFetchAction";
import chalk from "chalk";

export const doFetch = async (url: string, options: FetchOptions = {}) => {
  try {
    const { params, ...fetchOptions } = options;

    let fullUrl = `${
      IS_SSR ? process.env.SERVER_SIDE_API_URL + url : process.env.NEXT_PUBLIC_API_URL + url
    }`;

    if (params) {
      const searchParams = new URLSearchParams();

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          searchParams.append(key, String(value));
        }
      });
      fullUrl = `${fullUrl}?${searchParams.toString()}`;
    }

    const fetcher = IS_SSR ? serverFetchAction : fetch;
    const response = await fetcher(fullUrl, {
      ...fetchOptions,
      credentials: "include",
      headers: {
        ...fetchOptions.headers,
      },
    });
    return response;
  } catch (error) {
    console.error(chalk.redBright("error="));
    console.error(error);
    throw error;
  }
};

/**
 * Функция для выполнения запросов к API, возвращает null в случае ошибки
 */
export const fetchApi = async <T>(url: string, options: FetchOptions = {}): Promise<T | null> => {
  try {
    const response = await doFetch(url, options);
    const data = await response.json();
    return data.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
};

/**
 * Функция для выполнения запросов к API, выбрасывает исключение в случае ошибки,
 * используется там, где нужна инфа о ошибке
 */
export const fetchApiWithError = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<{ data: T | null; error: StrapiError["error"] | null }> => {
  try {
    const response = await doFetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    const strapiError = error as StrapiError["error"];
    const errorWithMessage = error as { message: string };

    return {
      data: null,
      error:
        "status" in strapiError && "name" in strapiError && "message" in strapiError
          ? strapiError
          : {
              status: 400,
              message:
                typeof error === "string"
                  ? error
                  : "message" in (error as { message: "string" })
                  ? errorWithMessage.message
                  : "UnknownError",
              name: "UnknownError",
              details: { errors: [] },
            },
    };
  }
};
