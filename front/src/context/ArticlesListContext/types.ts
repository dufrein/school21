import { PaginationFeatureProps } from "@features/PaginationFeature/types";
import { FetchMeta, Article } from "@types";
import { PropsWithChildren } from "react";

export type ArticlesListContextProps = PropsWithChildren<{
  articlesData: { data: Article[] | null; meta: FetchMeta | null };
}>;

export type ArticlesListContextType = PaginationFeatureProps & {
  articles: Article[];
};
