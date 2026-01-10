import { AccountSettings } from "@features/AccountSettings";
import { verifySession } from "@actions/session/session";
import { redirect } from "next/navigation";
import { getAvatars } from "@api/avatars";
import { LearningStat } from "@features/LearningStat";
import styles from "./page.module.scss";
import { getCoursesFull } from "@api/courses";

export default async function Dashboard() {
  const session = await verifySession();

  if (!session?.isAuth) {
    redirect("/login");
  }

  const avatars = await getAvatars();
  const { data: allCourses } = await getCoursesFull({});
  const courses = allCourses || [];

  return (
    <div className={"pageContainer"}>
      <h2>Личный кабинет</h2>
      <div className={styles.container}>
        <AccountSettings avatarsWoman={avatars?.avatarsWoman} avatarsMan={avatars?.avatarsMan} />
        <LearningStat courses={courses} />
      </div>
    </div>
  );
}
