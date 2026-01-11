"use client";

import React from "react";
import styles from "./styles.module.scss";
import { ROUTES, SCHOOL_NAME } from "@constants";
import { NavLink } from "@components";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <div className={styles.icon}>
            <img src="/book.svg" width="20" height="20" alt="иконка книга" />
          </div>
          © {year} Чувашская языковая школа &quot;{SCHOOL_NAME}&quot;.
          <br />
          Все права защищены.
        </div>
        <div className={styles.column}>
          <h4>О проекте:</h4>
          <div className={styles.links}>
            <NavLink href={ROUTES.ABOUT}>О нас</NavLink>
            <NavLink href={ROUTES.TEACHERS}>Учителя</NavLink>
            <NavLink href={ROUTES.ALL_COURSES}>Все курсы</NavLink>
            <NavLink href={ROUTES.KEYBOARD}>Чувашская клавиатура</NavLink>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Связаться с нами:</h4>
          <div className={styles.socLinks}>
            <NavLink href={"https://t.me/shcul21"} className={styles.socIcon} target="_blank">
              <img src="/tg.svg" alt="иконка телеграмм" width={30} height={30} />
            </NavLink>
            <NavLink href={"https://vk.com/shcul21"} className={styles.socIcon} target="_blank">
              <img src="/vk.svg" alt="иконка вконтакте" width={30} height={30} />
            </NavLink>
            <NavLink href="mailto:ed.dufrein@yandex.ru" className={styles.socIcon} target="_blank">
              <img src="/email.svg" alt="иконка емейл" width={30} height={30} />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
