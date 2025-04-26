import React from "react";
import { Modal } from "@components/Modal";
import { OrderModalProps } from "./types";
import styles from "./styles.module.scss";

/**
 * Компонент модального окна для заказа тарифа
 * @param isOpened - флаг для отображения модального окна
 * @param onClose - функция для закрытия модального окна
 * @returns React.FC<OrderModalProps>
 */
export const OrderModal: React.FC<OrderModalProps> = ({ isOpened, onClose }) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>Для покупки тарифа</h3>
        <p className={styles.modalText}>
          Пожалуйста, позвоните по номеру: <br /> <strong>8 800 000 00 00</strong>
        </p>
      </div>
    </Modal>
  );
}; 