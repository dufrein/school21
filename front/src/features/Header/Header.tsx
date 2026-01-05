"use client";

import { deleteSession } from "@actions/session";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { ROUTES, SCHOOL_NAME } from "@constants";
import { HeaderProps } from "./types";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import { useScreenSize } from "@hooks/useScreenSize/useScreenSize";
import { UserContext } from "@context/UserContext";
import { useContext } from "react";
import { Avatar } from "@components/Avatar/Avatar";

export const Header: React.FC<HeaderProps> = ({ userId }) => {
  const { isMobile, isTabletPortrait} = useScreenSize();
  const { user } = useContext(UserContext);

  if (isMobile || isTabletPortrait) {
    return <MobileHeader userId={userId} />;
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <NavLink href="/" className={styles.logo}>
              &quot;{SCHOOL_NAME}&quot;
            </NavLink>
          </div>
          <div className={styles.navRight}>
            {user && <NavLink href={ROUTES.LEARNING}>Учиться</NavLink>}
            <NavLink href={ROUTES.VIDEO}>Видеолекции</NavLink>
            <NavLink href={ROUTES.ARTICLES}>Статьи</NavLink>
            <NavLink href={ROUTES.TEACHERS}>Учителя</NavLink>
            {userId ? (
              <>
                <NavLink href={ROUTES.DASHBOARD}>
                  <Avatar avatarId={user?.avatarId} sex={user?.sex} email={user?.email} />
                </NavLink>
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
  );
};
