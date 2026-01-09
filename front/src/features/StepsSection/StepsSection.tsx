import React from "react";
import styles from "./styles.module.scss";
import { NavLink } from "@components";
import { ROUTES } from "@constants";
import { getClassList } from "@utils";

export const StepsSection: React.FC = () => {
  const sectionClassList = getClassList(["main-section", styles.section]);

  return (
    <section className={sectionClassList}>
      <div  className={"main-section-content"}>
        <h1 className={"main-section-title"}>С чего начать?</h1>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.icon}>1</div>
            <div className={styles.stepName}>
              <NavLink href={ROUTES.LOGIN}>Зарегистрируйтесь</NavLink> на сайте
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>2</div>
            <div className={styles.stepName}>
              Укажите в <NavLink href={ROUTES.DASHBOARD}>личном кабинете</NavLink> свой уровень
              знаний
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>3</div>
            <div className={styles.stepName}>
              Переходите в раздел <NavLink href={ROUTES.LEARNING}>учиться</NavLink>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>4</div>
            <div className={styles.stepName}>
              Проходите курсы своего уровня и переходите на уровни выше
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
