"use client";

import React, { createContext, useEffect, useState } from "react";
import { UserContextProps, UserContextType } from "./types";
import { StudentType } from "@types";

export const UserContext = createContext<UserContextType>({
  user: null,
});

export const UserContextProvider: React.FC<UserContextProps> = (props) => {
  const { user: initialUser } = props;
  const [user, setUser] = useState<StudentType | null>(initialUser);

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser]);

  return <UserContext.Provider value={{ user }}>{props.children}</UserContext.Provider>;
};
