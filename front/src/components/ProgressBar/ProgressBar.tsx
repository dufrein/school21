import React from "react";
import { ProgressBarProps } from "./types";
import styles from "./styles.module.scss";

/**
 * Компонент полоска прогрессбара
 */
export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { progress, ready, remaining } = props;

  return (
    <div>
      <div
        className={styles.progressText}
      >{`Прогресс: ${progress}% (сделано ${ready}, осталось ${remaining})`}</div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
