import type { Metadata } from "next";
import "./globals.scss";
import styles from "./layout.module.scss";
import { AppContextProvider } from "@context/AppContext/AppContext";
import { UserContextProvider } from "@context/UserContext";
import { verifySession } from "@actions/session";
import { getStudent } from "@api/student";
import { PageBody } from "@features/PageBody";
import { LearningContextProvider } from "@context/LearningContext";

export const metadata: Metadata = {
  title: "Языковая школа",
  description: "Изучайте языки с нашими профессиональными курсами",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();
  const user = session?.userId && (await getStudent(session?.userId as string));
  const userInfo = user
    ? {
        ...user,
        password: "",
      }
    : null;

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Zen+Maru+Gothic&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={styles.body}>
        <AppContextProvider>
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
