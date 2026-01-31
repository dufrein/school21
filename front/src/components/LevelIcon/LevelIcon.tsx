import React from "react";
import { LevelIconProps } from "./types";
import styles from "./styles.module.scss";
import { COMPLEXITY_LEVEL } from "@constants";

export const LevelIcon: React.FC<LevelIconProps> = ({ complexity, withText }) => {
  if (!complexity) {
    return null;
  }

  return (
    <span className={styles.level}>
      <img
        src={`/icon_complexity_${complexity}.png`}
        alt="уровень сложности"
        width="20"
        height="20"
        title={`Уровень сложности ${COMPLEXITY_LEVEL[complexity]}`}
      />
      {withText && (
        <span className={styles["level-text"]}>
          Уровень сложности: <i>{COMPLEXITY_LEVEL[complexity]}</i>
        </span>
      )}
    </span>
  );
};
