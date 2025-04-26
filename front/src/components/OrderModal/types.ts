import { CommonComponent } from "@types";

export interface OrderModalProps extends CommonComponent {
  isOpened: boolean;
  onClose: () => void;
} 