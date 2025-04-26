export type ScreenSize = 'mobile' | 'tabletPortrait' | 'tabletLandscape' | 'desktop';

export interface UseScreenSizeResult {
  screenSize: ScreenSize;
  isMobile: boolean;
  isTabletPortrait: boolean;
  isTabletLandscape: boolean;
  isDesktop: boolean;
} 