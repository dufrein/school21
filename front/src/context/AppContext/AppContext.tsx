"use client";

import React, { createContext } from "react";
import { AppContextProps, AppContextType } from "./types";
import { TableContent } from "./components/TableContent";
import { useGetTariffs } from "./hooks/useGetTariffs";
import { useGetCourses } from "./hooks/useGetCourses";


export const AppContext = createContext<AppContextType>({
  tariffs: [],
  activeTariff: null,
  userCourses: null,
  tableContent: null,
});

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
  const { tariffs, activeTariff } = useGetTariffs();
  const userCourses = useGetCourses(activeTariff);

  return (
    <AppContext.Provider
      value={{
        tariffs,
        activeTariff,
        userCourses,
        tableContent: <TableContent userCourses={userCourses} />,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
