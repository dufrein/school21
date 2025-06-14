import React from "react";
import { PopupProps } from "./types";
import IconBurger from "public/icon_cross.svg";
import styles from "./styles.module.scss";
import { getClassList } from "@utils";
import { useScrollLock } from "@hooks/useScrollLock/useScrollLock";

/**
 * Компонент для отображения модального окна
 * @param isOpened: boolean;
 * @param children: React.ReactNode;
 * @param className: string;
 * @param onClose?: () => void;
 * @param hideCloseButton?: boolean;
 * @returns React.FC<PopupProps>
 */
export const Popup: React.FC<PopupProps> = (props) => {
  const { isOpened, children, className, onClose, hideCloseButton } = props;

  useScrollLock(isOpened);

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const withoutDialogClassList = getClassList([className, styles["popup-nodialog"]]);
  const content = (
    <>
      {children}
      {onClose && !hideCloseButton && (
        <img
          src={IconBurger.src}
          className={`${styles["popup-cross"] + " icon"}`}
          onClick={onClose}
          alt="cross"
        />
      )}
    </>
  );

  if (typeof HTMLDialogElement === "function") {
    return (
      <dialog open={isOpened} className={className} onClick={onClickHandler}>
        {content}
      </dialog>
    );
  } else {
    return (
      <div className={withoutDialogClassList} onClick={onClickHandler}>
        {content}
      </div>
    );
  }
};
