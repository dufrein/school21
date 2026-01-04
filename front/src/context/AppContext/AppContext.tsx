"use client";

import React, { createContext } from "react";
import { AppContextProps, AppContextType } from "./types";

export const AppContext = createContext<AppContextType>({
  userCourses: null,
  userCoursesMeta: null,
});

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
  const { userCourses, userCoursesMeta } = props;

  return (
    <AppContext.Provider
      value={{
        userCourses,
        userCoursesMeta,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
