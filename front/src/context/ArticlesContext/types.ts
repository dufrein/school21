import { Article } from "@types";
import { PropsWithChildren } from "react";

export type ArticlesContextProps = PropsWithChildren<{
  articles: Article[];
}>;

export interface ArticlesContextType {
  articles: Article[];
}
