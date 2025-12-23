"use client";

import React, { createContext, useContext } from "react";
import { AppContextProps, AppContextType } from "./types";
import { TableContent } from "../../features/TableContent";
import { useGetCourses } from "./hooks/useGetCourses";
import { UserContext } from "@context/UserContext";
import { Complexity } from "@constants";

export const AppContext = createContext<AppContextType>({
  userCourses: null,
  tableContent: null,
});

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
  const { user } = useContext(UserContext);
  const userCourses = useGetCourses(user?.level || Complexity.BASIC);

  return (
    <AppContext.Provider
      value={{
        userCourses,
        tableContent: <TableContent userCourses={userCourses} />,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
