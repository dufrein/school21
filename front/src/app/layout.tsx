import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";
import { AppContextProvider } from "@context/AppContext/AppContext";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";
import { UserContextProvider } from "@context/UserContext";
import { verifySession } from "@actions/session";
import { getStudent } from "@api/student";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Языковая школа",
  description: "Изучайте языки с нашими профессиональными курсами",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();
  const user = session?.userId && (await getStudent(session?.userId as string));
  const userInfo = user ? {
    ...user,
    password: '',
  } : null;

  return (
    <html lang="ru">
      <body className={`${inter.className} ${poppins.variable} ${styles.body}`}>
        <AppContextProvider>
          <UserContextProvider user={userInfo}>
            <Header userId={session?.userId as string | null} />

            <main className={styles.main}>{children}</main>

            <Footer />
          </UserContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
