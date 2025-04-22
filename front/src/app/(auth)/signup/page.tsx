import { SignupForm } from "@features/SignupForm";
import styles from "./page.module.scss";

export default function Signup() {
  return (
    <div className={styles.container}>
      <h2>Регистрация</h2>
      <SignupForm />
    </div>
  );
}
