"use client";

import { deleteSession } from "@actions/session";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { ROUTES } from "@constants";
import { MobileHeaderProps } from "./types";
import { Modal } from "@components/Modal";
import { useState } from "react";

export const MobileHeader: React.FC<MobileHeaderProps> = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  const onLinkClick = () => setIsOpen(false);
  const onDeleteHandler = () => {
    deleteSession();
    setIsOpen(false);
  };
  return (
    <nav className={styles.mobileNav}>
      <div className={styles.mobileNavContent}>
        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavLeft}>
            <NavLink href="/" className={styles.logo}>
              &quot;School&quot;
            </NavLink>
          </div>
          <button
            className={`${styles.burgerButton} ${isOpen ? styles.active : ""}`}
            onClick={onToggle}
            aria-label="Открыть меню"
          >
            <span className={styles.burgerButtonLine}></span>
            <span className={styles.burgerButtonLine}></span>
            <span className={styles.burgerButtonLine}></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal isOpened={isOpen} onClose={onToggle} className={styles.menu} hideCloseButton={true}>
          <div className={styles.mobileMenu}>
            <NavLink href={ROUTES.LEARNING} className={styles.mobileMenuItem} onClick={onLinkClick}>
              Учиться
            </NavLink>
            <NavLink href={ROUTES.PRICING} className={styles.mobileMenuItem} onClick={onLinkClick}>
              Тарифы
            </NavLink>
            {userId ? (
              <>
                <NavLink href={ROUTES.DASHBOARD} className={styles.mobileMenuItem} onClick={onLinkClick}>
                  Личный кабинет
                </NavLink>
                <div className={styles.mobileMenuButton} onClick={onDeleteHandler}>
                  Выйти
                </div>
              </>
            ) : (
              <NavLink href={ROUTES.LOGIN} className={styles.mobileMenuItem} onClick={onLinkClick}>
                Войти
              </NavLink>
            )}
          </div>
        </Modal>
      )}
    </nav>
  );
};
