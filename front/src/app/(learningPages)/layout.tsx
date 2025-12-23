import type { Metadata } from "next";
import styles from "./layout.module.scss";
import { CoursesStructure } from "@features/CoursesStructure";
import { getUser, verifySession } from "@actions/session/session";
import { redirect } from "next/navigation";
import { getCourses } from "@api";

export const metadata: Metadata = {
  title: "Языковая школа",
  description: "Изучайте языки с нашими профессиональными курсами",
};

export default async function LearningPagesLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();

  if (!session?.isAuth) {
    redirect("/login");
  }
  const user = await getUser();
  const courses = await getCourses(true);

  if (!user) {
    return (
      <div className={styles.twoColumn}>
        {children}
      </div>
    );
  }

  // получим список курсов, которые доступны пользователю
  const coursesToShow = courses.filter(
    (courseItem) =>courseItem.complexity===user.level
   );

  return (
    <div className={styles.twoColumn}>
      <CoursesStructure courses={coursesToShow} />
      {children}
    </div>
  );
}
