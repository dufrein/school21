import React from "react";
import { TableItemTitleProps } from "./types";
import { getClassList } from "@utils";
import styles from "./styles.module.scss";

export const TableItemTitle: React.FC<TableItemTitleProps> = ({ name, isCheckShown, isActive }) => {
  const classList = getClassList([isActive && styles["active-item"]]);
  return (
    <span className={classList}>
      {isCheckShown && (
        <span style={{ color: "green", fontWeight: "bold", marginRight: "5px" }}>&#10004;</span>
      )}
      {name}
    </span>
  );
};
