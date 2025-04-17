import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";
import { AppContextProvider } from "@context/AppContext/AppContext";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";

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
          <Header />

          <main className={styles.main}>{children}</main>

          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
