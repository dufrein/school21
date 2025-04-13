import { AccountSettings } from "../../features/AccountSettings";
import { CoursesList } from "../../features/CoursesList";
import styles from "./page.module.scss";
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Личный кабинет</h1>
      <AccountSettings />
      <CoursesList />
    </div>
  );
}
