import { getArticles } from "@api/articles";
import styles from "./page.module.scss";
import { ArticlesContextProvider } from "@context/ArticlesContext";
import { Articles } from "@features/Articles";

export const Page = async () => {
  const articles = (await getArticles({})) || [];
  //доделать ленту новостей
  return (
    <div className="container">
      <h2>Статьи:</h2>
      <div className={styles.articles}>
        <ArticlesContextProvider articles={articles}>
          <Articles />
        </ArticlesContextProvider>
      </div>
    </div>
  );
};
