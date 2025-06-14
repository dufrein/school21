import { FetchError, IS_SSR } from "@constants";
import { FetchOptions, FetchResponse } from "@types";
import { serverFetchAction } from "src/actions/serverFetchAction";
import chalk from "chalk";
import { frontErrorApi } from "@api/frontErrorApi";

/**
 * Функция для выполнения запросов к API
 */
export const fetchApi = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<FetchResponse<T>> => {
  try {
    const { params, ...fetchOptions } = options;

    let fullUrl = `${
      IS_SSR
        ? process.env.SERVER_SIDE_API_URL + url
        : process.env.NEXT_PUBLIC_API_URL + url
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

    if (!response.ok) {
      const data = await response.json();

      await frontErrorApi({
        error: new Error(data.err || "Произошла ошибка при выполнении запроса"),
      });
      throw new FetchError(data.err || "Произошла ошибка при выполнении запроса");
    }

    const data = await response.json();

    return {
      data: data as T,
      status: response.status,
      ok: response.ok,
    };
  } catch (error) {
    console.error(chalk.redBright("error="));
    console.error(error);

    throw new FetchError(error as string);
  }
};
