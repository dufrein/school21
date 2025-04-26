import { CommonComponent } from "@types";

export interface PopupProps extends CommonComponent {
  isOpened: boolean;
  onClose?: () => void;
  hideCloseButton?: boolean;
}
