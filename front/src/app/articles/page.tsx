import { ArticlesContextProvider } from "@context/ArticlesContext";
import { getArticlesHelper } from "@context/ArticlesContext/helpers";
import { Articles } from "@features/Articles";

export default async function Page() {
  const startArticlesNumber = 0;

  const articlesData = await getArticlesHelper({ start: startArticlesNumber });

  return (
    <div className="container">
      <ArticlesContextProvider
        articlesData={articlesData}
      >
        <Articles />
      </ArticlesContextProvider>
    </div>
  );
}
