import type { Metadata } from "next";
import styles from "./layout.module.scss";
import { redirect } from "next/navigation";
import { verifySession } from "@actions";
import { ROUTES } from "@constants";

export const metadata: Metadata = {
  title: "Языковая школа",
  description: "Изучайте языки с нашими профессиональными курсами",
};

export default async function LearningPagesLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();

  if (session?.isAuth) {
    redirect(ROUTES.LEARNING);
  }

  return <div className={styles.container}>{children}</div>;
}
