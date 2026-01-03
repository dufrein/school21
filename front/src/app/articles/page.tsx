import { getArticles } from "@api/articles";
import { ArticlesContextProvider } from "@context/ArticlesContext";
import { Articles } from "@features/Articles";

export default async function Page() {
  const articles = await getArticles({ populate: "*" });

  return (
    <div className="container">
      <h2>Статьи:</h2>
      <ArticlesContextProvider articles={articles || []}>
        <Articles />
      </ArticlesContextProvider>
    </div>
  );
}
