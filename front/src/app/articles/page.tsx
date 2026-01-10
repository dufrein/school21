import { ArticlesListContextProvider } from "@context/ArticlesListContext";
import { getArticlesHelper } from "@context/ArticlesListContext/helpers";
import { ArticlesList } from "@features/ArticlesList";

export default async function Page() {
  const articlesData = await getArticlesHelper({ start: 0 });

  return (
    <div className="pageContainer">
      <ArticlesListContextProvider
        articlesData={articlesData}
      >
        <ArticlesList />
      </ArticlesListContextProvider>
    </div>
  );
}
