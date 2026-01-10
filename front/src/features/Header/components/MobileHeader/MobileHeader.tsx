"use client";

import { deleteSession } from "@actions/session";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { ROUTES, SCHOOL_NAME } from "@constants";
import { MobileHeaderProps } from "./types";
import { Modal } from "@components/Modal";
import { useState, useContext } from "react";
import { UserContext } from "@context/UserContext";
import { Avatar } from "@components/Avatar/Avatar";
import { TableContent } from "@features/TableContent";

/**
 * Мобильное меню
 */
export const MobileHeader: React.FC<MobileHeaderProps> = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpened, setIsCoursesOpened] = useState(false);
  const { user, userCourses } = useContext(UserContext);
  const onToggle = () => setIsOpen(!isOpen);
  const onLinkClick = () => setIsOpen(false);
  const onDeleteHandler = () => {
    deleteSession();
    setIsOpen(false);
  };

  const openCoursesModal = () => {
    setIsCoursesOpened(true);
  };

  const closeCoursesModal = () => {
    setIsCoursesOpened(false);
    setIsOpen(false);
  };

  return (
    <nav className={styles.mobileNav}>
      <div className={styles.mobileNavContent}>
        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavLeft}>
            <NavLink href="/" className={styles.logo}>
              &quot;{SCHOOL_NAME}&quot;
            </NavLink>
          </div>
          <button className={`${styles.burgerButton}`} onClick={onToggle} aria-label="Открыть меню">
            <span className={styles.burgerButtonLine}></span>
            <span className={styles.burgerButtonLine}></span>
            <span className={styles.burgerButtonLine}></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal isOpened={isOpen} onClose={onToggle} className={styles.menu}>
          <div className={styles.mobileMenu}>
            {userId && (
              <NavLink
                href={ROUTES.DASHBOARD}
                className={styles.mobileMenuItem}
                onClick={onLinkClick}
              >
                <div className={styles.mobileMenuItemContent}>
                  <Avatar avatarId={user?.avatarId} sex={user?.sex} email={user?.email} />
                </div>
              </NavLink>
            )}
            <NavLink href={ROUTES.LEARNING} className={styles.mobileMenuItem} onClick={onLinkClick}>
              Учиться
            </NavLink>
            <NavLink href={ROUTES.VIDEO} className={styles.mobileMenuItem} onClick={onLinkClick}>
              Видеолекции
            </NavLink>
            <NavLink href={ROUTES.ARTICLES} className={styles.mobileMenuItem} onClick={onLinkClick}>
              Статьи
            </NavLink>
            <NavLink href={ROUTES.TEACHERS} className={styles.mobileMenuItem} onClick={onLinkClick}>
              Учителя
            </NavLink>

            {userId ? (
              <>
                <div className={styles.mobileMenuButton} onClick={openCoursesModal}>
                  Навигация по курсам
                </div>
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

      <Modal isOpened={isCoursesOpened} className={styles.tableModal} onClose={closeCoursesModal}>
        <TableContent userCourses={userCourses} />
      </Modal>
    </nav>
  );
};
