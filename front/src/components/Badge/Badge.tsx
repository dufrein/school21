import React, { CSSProperties } from "react";
import { BadgeProps } from "./types";
import styles from "./styles.module.scss";

// Описываем ваши переменные
interface CustomStyles extends CSSProperties {
  "--bgColor"?: string;
  "--color"?: string;
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { bgColor, color, children } = props;

  const colorsStyle: CustomStyles = {
    "--bgColor": bgColor || "#6eb4f660",
    "--color": color || "#172b80ff",
  };

  return (
    <div className={styles.badge} style={colorsStyle}>
      {children}
    </div>
  );
};
