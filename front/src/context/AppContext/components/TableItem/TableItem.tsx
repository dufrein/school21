import React from "react";
import { TableItemProps } from "./types";
import { NavLink } from "@components";
import linkIcon from "public/icon_link.svg";
import styles from "./styles.module.scss";

export const TableItem: React.FC<TableItemProps> = (props) => {
  const { title, url } = props;

  return (
    <div className={styles.summary}>
      <NavLink href={url} className={styles.summary}>
        {title}
        <img src={linkIcon.src} alt="icon link" />
      </NavLink>
    </div>
  );
};
