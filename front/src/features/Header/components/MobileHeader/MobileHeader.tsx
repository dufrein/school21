"use client";

import { deleteSession } from "@actions/session";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { ROUTES } from "@constants";
import { MobileHeaderProps } from "./types";

export const MobileHeader: React.FC<MobileHeaderProps> = ({ userId, isOpen, onToggle }) => {
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
            className={`${styles.burgerButton} ${isOpen ? styles.active : ''}`} 
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
        <div className={styles.mobileMenu} onClick={onToggle}>
          <NavLink href={ROUTES.LEARNING}>Учиться</NavLink>
          <NavLink href={ROUTES.PRICING}>Тарифы</NavLink>
          {userId ? (
            <>
              <NavLink href={ROUTES.DASHBOARD}>Личный кабинет</NavLink>
              <div className={styles.mobileMenuButton} onClick={deleteSession}>Выйти</div>
            </>
          ) : (
            <NavLink href={ROUTES.LOGIN}>Войти</NavLink>
          )}
        </div>
      )}
    </nav>
  );
}; 