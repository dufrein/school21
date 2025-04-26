import React from "react";
import { BackdropProps } from "./types";
import styles from "./styles.module.scss";
import { getClassList } from "@utils";

/**
 * Компонент для отображения заднего фона
 * @param onClick - функция для обработки клика
 * @param children - компонент для отображения
 * @param className - класс для отображения
 */
export const Backdrop: React.FC<BackdropProps> = (props) => {
  const { onClick, children, className } = props;

  const classlist = getClassList([styles.back, className]);

  return (
    <div className={classlist} onClick={onClick}>
      {children}
    </div>
  );
};
