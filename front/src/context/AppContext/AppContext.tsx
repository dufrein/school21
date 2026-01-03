"use client";

import React, { createContext } from "react";
import { AppContextProps, AppContextType } from "./types";

export const AppContext = createContext<AppContextType>({
  userCourses: null,
});

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
  const {userCourses} = props;

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
