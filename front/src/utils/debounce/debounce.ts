import type { DebounceParams } from "./types";

/**
 * Утилита, создающая debounce эффект для хендлера события
 * @param handler
 * @param timeout
 * @return () => void
 */
export const debounce = <T>({ handler, timeout }: DebounceParams<T>) => {
  let timer: ReturnType<typeof setTimeout>;

  return (args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => handler(args), timeout);
  };
};
