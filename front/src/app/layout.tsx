import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { NavLink } from "../components/NavLink/NavLink";
import styles from "./layout.module.scss";
import { AppContextProvider } from "@context/AppContext/AppContext";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} ${poppins.variable} ${styles.body}`}>
        <AppContextProvider>
          <nav className={styles.nav}>
            <div className={styles.navContent}>
              <div className={styles.navContainer}>
                <div className={styles.navLeft}>
                  <NavLink href="/" className={styles.logo}>
                    Чувашская языковая школа &quot;Хавал&quot;
                  </NavLink>
                </div>
                <div className={styles.navRight}>
                  <NavLink href="/pricing">Тарифы</NavLink>
                  <NavLink href="/dashboard">Личный кабинет</NavLink>
                </div>
              </div>
            </div>
          </nav>

          <main className={styles.main}>{children}</main>

          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <p className={styles.footerText}>
                © {new Date().getFullYear()} Чувашская языковая школа &quot;Хавал&quot;. Все права
                защищены.
              </p>
            </div>
          </footer>
        </AppContextProvider>
      </body>
    </html>
  );
}
