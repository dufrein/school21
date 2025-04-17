import React from "react";
import { AccordeonProps } from "./types";
import { getClassList } from "@utils";
import stylesModule from './styles.module.scss'

/**
 * Компонент Аккордеон
 * @param title: string;
 * @param content: string | ReactNode;
 * @returns React.FC<AccordeonProps>
 */
export const Accordeon: React.FC<AccordeonProps> = (props) => {
  const { title, content, className, styles } = props;
  const classList = getClassList([className, stylesModule.accordeon]);

  return (
    <details className={classList} style={styles}>
      <summary>{title}</summary>
      <div>{content}</div>
    </details>
  );
};
