import styles from "./page.module.scss";
import { getTariffs } from "@api";
import { getStudent, updateStudent } from "@api/student";
import { NavLink } from "@components";
import { ROUTES } from "@constants";

const Buttons = (
  <div className={styles.buttons}>
    <NavLink href={ROUTES.SIGNUP} style={{ color: "blue" }}>
      Регистрация
    </NavLink>
    <NavLink href={ROUTES.LOGIN} style={{ color: "blue" }}>
      Войти
    </NavLink>
  </div>
);

export default async function Verify({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const query = await searchParams;
  const student = await getStudent(query.id);

  if (!student) {
    return (
      <div className={styles.container}>
        <h2>Пользователь не найден</h2>
        {Buttons}
      </div>
    );
  }

  const freeTariff = (await getTariffs()).find((traiifItem) => traiifItem.price === 0);

  if (student.verifyTimestamp && Date.now() - student.verifyTimestamp > 10 * 60 * 60 * 1000) {
    return (
      <div className={styles.container}>
        <h2>Время для подтверждения верификации истекло</h2>
        {Buttons}
      </div>
    );
  }

  const verifiedUser = await updateStudent(query.id, {
    ...student,
    isActive: true,
    tariff: student.tariff || freeTariff || null,
  });
  console.log("verifiedUser", verifiedUser);
  return (
    <div className={styles.container}>
      <h2>Подтверждение верификации</h2>
      <div className={styles.verified}>{verifiedUser ? "Верификация пройдена" : "..."}</div>
      <NavLink href={ROUTES.LOGIN} style={{ color: "blue", paddingTop: 20 }}>
        Войти
      </NavLink>
    </div>
  );
}
