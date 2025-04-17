/**
 * Тип параметров функции-утилиты debounce
 */
export interface DebounceParams<T> {
  handler: HandlerType<T>;
  timeout: number;
}

type HandlerType<T> = {
  (args: T): void;
};

export type Debounce<T> = (handler: (arg: T) => void, timeout: number) => (arg:T) => void;
