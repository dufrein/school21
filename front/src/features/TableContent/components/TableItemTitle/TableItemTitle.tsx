import React from "react";
import { TableItemTitleProps } from "./types";
import { getClassList } from "@utils";
import styles from "./styles.module.scss";
import { CheckIcon } from "@components/CheckIcon";

export const TableItemTitle: React.FC<TableItemTitleProps> = ({ title, isCheckShown, isActive }) => {
  const classList = getClassList([isActive && styles["active-item"]]);

  return (
    <span className={classList}>
      {isCheckShown && <CheckIcon />}
      {title}
    </span>
  );
};
