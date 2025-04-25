import { HeaderProps } from "../../types";

export interface MobileHeaderProps extends HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
} 