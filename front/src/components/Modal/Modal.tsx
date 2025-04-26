import React from "react";
import { ModalProps } from "./types";
import styles from "./styles.module.scss";

import { Popup } from "@components/Popup";
import { Backdrop } from "@components/Backdrop";
import { getClassList } from "@utils/getClassList";

/**
 * Компонент для отображения модального окна
 * @props isOpened - флаг для отображения модального окна
 * @props onClose - функция для закрытия модального окна
 * @props children - компонент для отображения в модальном окне
 * @returns React.FC<ModalProps>
 */
export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpened, onClose, children, className, hideCloseButton } = props;

  if (!isOpened) {
    return null;
  }

  const classList = getClassList([styles.popup, className]);

  return (
    <Backdrop className={styles.modal} onClick={onClose}>
      <Popup isOpened={true} className={classList} onClose={onClose} hideCloseButton={hideCloseButton}>
        {children}
      </Popup>
    </Backdrop>
  );
};
