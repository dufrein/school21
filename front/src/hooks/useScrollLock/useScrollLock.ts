"use client"; 

import { useEffect } from "react";

/**
 * Хук для блокировки прокрутки страницы при открытии модального окна
 * @param isOpened - флаг для отображения модального окна
 */
export const useScrollLock = (isOpened: boolean) => {
  console.log("isOpened", isOpened);
  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [isOpened]);
}