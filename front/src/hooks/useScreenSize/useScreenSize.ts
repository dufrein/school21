"use client"; 

import { useEffect, useState } from 'react';
import { ScreenSize, UseScreenSizeResult } from './types';

const BREAKPOINTS = {
  mobile: 767,
  tabletPortrait: 1023,
  tabletLandscape: 1279,
} as const;

export const useScreenSize = (): UseScreenSizeResult => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= BREAKPOINTS.mobile) {
        setScreenSize('mobile');
      } else if (width <= BREAKPOINTS.tabletPortrait) {
        setScreenSize('tabletPortrait');
      } else if (width <= BREAKPOINTS.tabletLandscape) {
        setScreenSize('tabletLandscape');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    screenSize,
    isMobile: screenSize === 'mobile',
    isTabletPortrait: screenSize === 'tabletPortrait',
    isTabletLandscape: screenSize === 'tabletLandscape',
    isDesktop: screenSize === 'desktop',
  };
}; 