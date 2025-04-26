import { CommonComponent } from "@types";

export interface ModalProps extends CommonComponent {
  isOpened: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  hideCloseButton?: boolean;
}
