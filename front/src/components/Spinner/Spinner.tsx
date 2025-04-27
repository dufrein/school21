import React from "react";
import styles from "./styles.module.scss";
import { getClassList } from "@utils/getClassList";
import { SpinnerProps } from "./types";

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { className } = props;
  const classList = getClassList([styles.spinner, className]);
  return (
    <div className={classList}>
      <div className={styles.spinnerInner}></div>
    </div>
  );
};
