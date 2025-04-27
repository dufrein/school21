"use client";

import { useEffect, useState } from "react";
import { ScreenSize } from "./types";

interface ScreenFlags {
  isMobile: boolean;
  isTabletPortrait: boolean;
  isTabletLandscape: boolean;
  isDesktop: boolean;
}

const initialState: ScreenFlags = {
  isMobile: false,
  isTabletPortrait: false,
  isTabletLandscape: false,
  isDesktop: false,
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize | null>(null);
  const [flags, setFlags] = useState<ScreenFlags>({
    ...initialState,
    isDesktop: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenSize("mobile");
        setFlags({
          ...initialState,
          isMobile: true,
        });
      } else if (width >= 768 && width < 1024) {
        setScreenSize("tabletPortrait");
        setFlags({
          ...initialState,
          isTabletPortrait: true,
        });
      } else if (width >= 1024 && width < 1280) {
        setScreenSize("tabletLandscape");
        setFlags({
          ...initialState,
          isTabletLandscape: true,
        });
      } else {
        setScreenSize("desktop");
        setFlags({
          ...initialState,
          isDesktop: true,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    screenSize,
    ...flags,
  };
};
