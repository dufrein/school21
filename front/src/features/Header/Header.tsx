"use client";

import { deleteSession } from "@actions/session";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { ROUTES } from "@constants";
import { HeaderProps } from "./types";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import { useState } from "react";

export const Header: React.FC<HeaderProps> = ({ userId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.navContainer}>
            <div className={styles.navLeft}>
              <NavLink href="/" className={styles.logo}>
                &quot;School&quot;
              </NavLink>
            </div>
            <div className={styles.navRight}>
              <NavLink href={ROUTES.LEARNING}>Учиться</NavLink>
              <NavLink href={ROUTES.PRICING}>Тарифы</NavLink>
              {userId ? (
                <>
                  <NavLink href={ROUTES.DASHBOARD}>Личный кабинет</NavLink>
                  <button onClick={deleteSession} className="button btnTetriary">
                    Выйти
                  </button>
                </>
              ) : (
                <NavLink href={ROUTES.LOGIN}>Войти</NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
      <MobileHeader
        userId={userId}
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </>
  );
};
