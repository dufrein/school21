import styles from "./page.module.scss";
import { getTariffs } from "@api";
import { getStudent, updateStudent } from "@api/student";
import { NavLink } from "@components";

const Buttons = (
  <>
    <NavLink href={"/signup"} style={{ color: "blue" }}>
      Регистрация
    </NavLink>
    <NavLink href={"/login"} style={{ color: "blue" }}>
      Войти
    </NavLink>
  </>
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

  if (student.verifyTimestamp && Date.now() - student.verifyTimestamp > 1 * 60 * 1000) {
    return (
      <div className={styles.container}>
        <h2>Время для подтверждения верификации истекло</h2>
        {Buttons}
      </div>
    );
  }
  console.log("!!!!!!!!! student=", student);

  const verifiedUser = await updateStudent(query.id, {
    ...student,
    isActive: true,
    tariff: student.tariff || freeTariff || null,
  });

  return (
    <div className={styles.container}>
      <h2>Подтверждение верификации</h2>
      <div>{verifiedUser ? "Верификация пройдена" : "..."}</div>
      <NavLink href={"/login"} style={{ color: "blue", paddingTop: 20 }}>
        Войти
      </NavLink>
    </div>
  );
}
