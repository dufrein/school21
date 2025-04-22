import styles from "./page.module.scss";
import { LoginForm } from "@features/LoginForm";

export default function Login() {
  return (
    <div className={styles.container}>
      <h2>Вход</h2>
      <LoginForm />
    </div>
  );
}
