import { CommonComponentProps } from "@types";

export interface OrderModalProps extends CommonComponentProps {
  isOpened: boolean;
  onClose: () => void;
} 