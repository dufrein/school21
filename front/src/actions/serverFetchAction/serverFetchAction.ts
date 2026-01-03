"use server";

import { cookies } from "next/headers";

/**
 * Серверный экшен для запросов с серверасайда с добавлением сессионных кук
 */
export const serverFetchAction = async (url: string, options: RequestInit)=> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Cookie: cookieHeader,
    },
  });
};
