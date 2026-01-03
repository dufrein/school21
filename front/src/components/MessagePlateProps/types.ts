import { PropsWithChildren } from "react";

export type MessagePlateProps = PropsWithChildren<{
  /**
   * Флаг что плашка сообщения будет всплывашкой (абсолютно спозиционирована поверх экрана. внизу напр.)
   */
  isPopup?: boolean;
  /**
   * Флаг, что плашку можно закрыть
   */
  isClosing?: boolean;
  onClose?: () => void;
  bgColor?: string;
}>;
