import { FetchMeta, Article } from "@types";
import { PropsWithChildren } from "react";

export type ArticlesContextProps = PropsWithChildren<{
  articlesData: { data: Article[] | null; meta: FetchMeta | null };
}>;

export interface ArticlesContextType {
  articles: Article[];
  meta: FetchMeta | null;
  activePageNumber: number | null;
  activePageNumberHandler: (pageNumber: number) => void;
}
