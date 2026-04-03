"use client";

import { useEffect, useState } from "react";
import { UseIsTouchScreenResult } from "./types";

/**
 * Хук для проверки является ли устройство тач-устройством
 */
export const useIsTouchScreen = (): UseIsTouchScreenResult => {
  const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkIsTouchScreen = () => {
      if (typeof window === "undefined" || typeof navigator === "undefined") {
        return setIsTouchScreen(false);
      }

      const hasTouchPoints =
        "maxTouchPoints" in navigator && typeof navigator.maxTouchPoints === "number"
          ? navigator.maxTouchPoints > 0
          : false;

      const matchMediaTouch =
        typeof window.matchMedia === "function"
          ? window.matchMedia("(pointer: coarse)").matches
          : false;

      setIsTouchScreen(hasTouchPoints || matchMediaTouch);
    };

    checkIsTouchScreen();
  }, []);

  return { isTouchScreen };
};

