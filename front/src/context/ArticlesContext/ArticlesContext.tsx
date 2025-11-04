'use client'

import { createContext } from "react";
import { ArticlesContextProps, ArticlesContextType } from "./types";

export const ArticlesContext = createContext<ArticlesContextType>({
  articles: [],
});

export const ArticlesContextProvider: React.FC<ArticlesContextProps> = (props) => {
  const { children, articles } = props;

  return (
    <ArticlesContext.Provider value={{ articles }}>{children}</ArticlesContext.Provider>
  );
};