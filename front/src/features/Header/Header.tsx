import React from "react";
import styles from "./styles.module.scss";
import { NavLink } from "@components";

export const Header: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <NavLink href="/" className={styles.logo}>
              Чувашская языковая школа &quot;Хавал&quot;
            </NavLink>
          </div>
          <div className={styles.navRight}>
            <NavLink href="/learning">Учиться</NavLink>
            <NavLink href="/pricing">Тарифы</NavLink>
            <NavLink href="/dashboard">Личный кабинет</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
