import type { Metadata } from "next";
import styles from "./layout.module.scss";
import { CoursesStructure } from "@features/CoursesStructure";
import { getUser, verifySession } from "@actions/session/session";
import { redirect } from "next/navigation";
import { ROUTES } from "@constants";
import { getClassList } from "@utils";

export const metadata: Metadata = {
  title: "Обучение чувашскому языку в школе Шкул",
  description: "Изучайте чувашский язык, единственный живой язык булгарской ветви тюрских языков на наших профессиональных курсах",
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

  const classList = getClassList(['rightColumn',styles.rightColumn]);

  return (
    <div className={styles.twoColumn}>
      <CoursesStructure />
      {children}
      <div className={classList}>Правая колонка</div>
    </div>
  );
}
