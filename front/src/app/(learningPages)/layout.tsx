import type { Metadata } from "next";
import styles from "./layout.module.scss";
import { CoursesStructure } from "@features/CoursesStructure";
import { getUser, verifySession } from "@actions/session/session";
import { redirect } from "next/navigation";
import { ROUTES } from "@constants";

export const metadata: Metadata = {
  title: "Языковая школа",
  description: "Изучайте языки с нашими профессиональными курсами",
};

export default async function LearningPagesLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();

  if (!session?.isAuth) {
    redirect(ROUTES.LOGIN);
  }

  const user = await getUser();

  if (!user) {
    return <div className={styles.twoColumn}>{children}</div>;
  }

  if (!user.level) {
    redirect(ROUTES.DASHBOARD);
  }

  return (
    <div className={styles.twoColumn}>
      <CoursesStructure />
      {children}
    </div>
  );
}
