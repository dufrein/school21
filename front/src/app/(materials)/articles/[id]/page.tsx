import { getArticleById } from "@api/articles";

import { ArticlePageFeature } from "@features/ArticlePageFeature";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const article = await getArticleById(id);

  return <ArticlePageFeature article={article} />;
}
