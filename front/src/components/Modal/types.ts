import { CommonComponentProps } from "@types";

export interface ModalProps extends CommonComponentProps {
  isOpened: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  hideCloseButton?: boolean;
}
