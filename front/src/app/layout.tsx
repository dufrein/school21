import type { Metadata } from "next";
import "./globals.scss";
import styles from "./layout.module.scss";
import { AppContextProvider } from "@context/AppContext/AppContext";
import { UserContextProvider } from "@context/UserContext";
import { verifySession } from "@actions/session";
import { getStudent } from "@api/student";
import { PageBody } from "@features/PageBody";
import { LearningContextProvider } from "@context/LearningContext";
import { getCourses } from "@api";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Языковая школа",
  description: "Изучайте языки с нашими профессиональными курсами",
};

const inter = Inter({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();
  const user = session?.userId ? await getStudent(session?.userId as string) : null;
  const { data: userCourses, meta } = await getCourses({
    populate: "topics",
    searchParams: { "filters[complexity][$eq]": `${user?.level as string}` },
  });

  const userInfo = user
    ? {
        ...user,
        password: "",
      }
    : null;

  return (
    <html lang="ru" className={inter.className}>
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </head>
      <body className={styles.body}>
        <AppContextProvider userCourses={userCourses} userCoursesMeta={meta}>
          <LearningContextProvider>
            <UserContextProvider user={userInfo}>
              <PageBody userId={session?.userId as string | null}>{children}</PageBody>
            </UserContextProvider>
          </LearningContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
