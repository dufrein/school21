import type { Metadata } from "next";
import "./globals.scss";
import styles from "./layout.module.scss";
import { UserContextProvider } from "@context/UserContext";
import { verifySession } from "@actions/session";
import { getStudent } from "@api/student";
import { PageBody } from "@features/PageBody";
import { LearningContextProvider } from "@context/LearningContext";
import { Inter } from "next/font/google";
import { getCoursesForUserContext } from "@context/UserContext/getCoursesForUserContext";
import heroBack from 'public/heroBack.jpg';

const metaTitle = "Шкул - сайт-школа изучения чувашского языка";
const metaDescription =
  "Бесплатная интерактивная школа для изучения чувашского языка. Медиа материалы, остлеживание прогресса, дополнительные занятия с учителями";

export const metaData: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    images: heroBack.src,
    type: "website",
    siteName: "Шкул",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
  metadataBase: new URL(process.env.METADATA_BASE_URL || "https://shcul.ru"),
  alternates: {
    canonical: "/",
  },
  other: {
    "yandex-verification": "",
  },
};

const inter = Inter({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();
  const user = session?.userId ? await getStudent(session?.userId as string) : null;
  const { data: userCourses, meta } = await getCoursesForUserContext(user);
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
        <UserContextProvider user={userInfo} userCourses={userCourses} userCoursesMeta={meta}>
          <LearningContextProvider>
            <PageBody userId={session?.userId as string | null}>{children}</PageBody>
          </LearningContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
