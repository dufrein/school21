import styles from "./page.module.scss";
import { ResetPassForm } from "@features/ResetPassForm";

export default function ResetPass() {
  return (
    <div className={styles.container}>
      <h2>Установить новый пароль</h2>
      <ResetPassForm />
    </div>
  );
}
