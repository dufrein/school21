"use client";

import React, { useState } from "react";
import { MessagePlateProps } from "./types";
import styles from "./styles.module.scss";
import { getClassList } from "@utils";

/**
 * Плашка с сообщением и фоном
 */
export const MessagePlate: React.FC<MessagePlateProps> = (props) => {
  const [isOpened, setisOpened] = useState(true);

  const { bgColor, isPopup, onClose, isClosing, children } = props;

  const onCloseClick = () => {
    setisOpened(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isOpened) {
    return null;
  }

  return (
    <div
      className={getClassList([styles.plate, isPopup && styles["plate_popup"]])}
      style={{
        backgroundColor: bgColor || "transparent",
      }}
    >
      <div>{children}</div>
      {isClosing && (
        <span onClick={onCloseClick} className={styles["plate-cross"]}>
          &#128937;
        </span>
      )}
    </div>
  );
};
