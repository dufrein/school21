import React from "react";
import { AccordeonProps } from "./types";
import { getClassList } from "@utils";
import stylesModule from './styles.module.scss'
import { NavLink } from "@components";
import linkIcon from "public/icon_link.svg";

/**
 * Компонент Аккордеон
 */
export const Accordeon: React.FC<AccordeonProps> = (props) => {
  const { title, content, url, className, styles } = props;
  const classList = getClassList([className, stylesModule.accordeon]);

  return (
    <details className={classList} style={styles}>
      <summary>
        {title}
        {url && (
          <NavLink href={url} className={stylesModule.summary}>
            <img src={linkIcon.src} alt="icon link" />
          </NavLink>
        )}
      </summary>
      <div>{content}</div>
    </details>
  );
};
