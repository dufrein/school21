"use client";

import React, { createContext} from "react";
import { UserContextProps, UserContextType } from "./types";

export const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserContextProvider: React.FC<UserContextProps> = (props) => {
  const { user } = props;

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
