import React from "react";
import { CongrateModalProps } from "./types";
import { Modal, NavLink } from "@components";
import { ROUTES } from "@constants";
import styles from "./congrats.module.scss";

/**
 * Модалка с поздравлениями о прохождении курса
 */
export const CongrateModal: React.FC<CongrateModalProps> = (props) => {
  const { isOpened, onClose } = props;
  return (
    <Modal isOpened={isOpened} onClose={onClose} className={styles.modal}>
      <h4 style={{color:'#fff'}}>Саламлатпӑр! Вы прошли этот курс!</h4>
      Переходите к следующему, а если вы прошли все курсы на вашем
      уровне знаний, переключите в настройках свой уровень знаний на более высокий! Если же вы
      прошли самый сложный курс, то можете обратиться к репетиторам из раздела{" "}
      <NavLink href={ROUTES.TEACHERS} onClick={onClose}>Учителя</NavLink>
    </Modal>
  );
};
