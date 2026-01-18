import React from "react";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { ROUTES } from "@constants";
import { getClassList } from "@utils";

export const StepsSection: React.FC = () => {
  const sectionClassList = getClassList(["main-section", styles.section]);

  return (
    <section className={sectionClassList}>
      <div className={"main-section-content"}>
        <h1 className={"main-section-title"}>С чего начать?</h1>
        <div className={styles.steps}>
          <div className={styles.step}>
            <NavLink href={ROUTES.LOGIN}>
              <div className={styles.icon}>1</div>
            </NavLink>
            <div className={styles.stepName}>
              <NavLink href={ROUTES.LOGIN}>Зарегистрируйтесь</NavLink> на сайте
            </div>
          </div>
          <div className={styles.step}>
            <NavLink href={ROUTES.DASHBOARD}>
              <div className={styles.icon}>2</div>
            </NavLink>
            <div className={styles.stepName}>
              Укажите в <NavLink href={ROUTES.DASHBOARD}>личном кабинете</NavLink> свой уровень
              знаний
            </div>
          </div>
          <div className={styles.step}>
            <NavLink href={ROUTES.LEARNING}>
              <div className={styles.icon}>3</div>
            </NavLink>
            <div className={styles.stepName}>
              Переходите в раздел <NavLink href={ROUTES.LEARNING}>учиться</NavLink>
            </div>
          </div>
          <div className={styles.step}>
            <NavLink href={ROUTES.TEACHERS}>
              <div className={styles.icon}>4</div>
            </NavLink>
            <div className={styles.stepName}>
              Обращайтесь к нашим <NavLink href={ROUTES.TEACHERS}>учителям</NavLink> за доп.
              занятиями
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
