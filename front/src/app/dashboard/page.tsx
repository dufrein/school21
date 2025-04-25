import { AccountSettings } from "@features/AccountSettings";
import styles from "./page.module.scss";
import { verifySession } from "@actions/session/session";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await verifySession();

  if (!session?.isAuth) {
    redirect("/login");
  }
  return (
    <div className={styles.container}>
      <h1>Личный кабинет</h1>
      <AccountSettings />
    </div>
  );
}
