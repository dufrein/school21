import { CommonComponentProps } from "@types";

export interface PopupProps extends CommonComponentProps {
  isOpened: boolean;
  onClose?: () => void;
  hideCloseButton?: boolean;
}
