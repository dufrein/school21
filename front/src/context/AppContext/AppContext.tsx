"use client";

import React, { createContext, useContext } from "react";
import { AppContextProps, AppContextType } from "./types";
import { useGetCourses } from "./hooks/useGetCourses";
import { UserContext } from "@context/UserContext";
import { Complexity } from "@constants";

export const AppContext = createContext<AppContextType>({
  userCourses: null,
});

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
  const { user } = useContext(UserContext);
  const userCourses = useGetCourses(user?.level || Complexity.BASIC);
console.log('!!!!userCourses',userCourses);
  return (
    <AppContext.Provider
      value={{
        userCourses,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
