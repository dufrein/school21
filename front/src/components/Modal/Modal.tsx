"use client"

import React, { useEffect } from "react";
import { ModalProps } from "./types";
import styles from "./styles.module.scss";

import { Popup } from "@components/Popup";
import { Backdrop } from "@components/Backdrop";
import { getClassList } from "@utils/getClassList";

/**
 * Компонент для отображения модального окна
 */
export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpened, onClose, children, className, hideCloseButton } = props;

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpened]);

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
